import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../animations/menuAnimations";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { usePageTransition } from "@/components/ui/usePageTransition";

type NavLink = {
  key: string;
  label: string;
  path: string;
  section?: string;
};

const navLinks: NavLink[] = [
  {
    key: "hero",
    label: "nav.hero",
    path: "/#hero",
    section: "hero",
  },
  {
    key: "about",
    label: "nav.about",
    path: "/#about",
    section: "about",
  },
  {
    key: "services",
    label: "nav.services",
    path: "/services",
  },
  {
    key: "projects",
    label: "nav.projects",
    path: "/projects",
  },
  {
    key: "temoignages",
    label: "nav.testimonials",
    path: "/#temoignages",
    section: "temoignages",
  },
  {
    key: "contact",
    label: "nav.contact",
    path: "/contact",
  },
];

type NavLinksProps = {
  vertical?: boolean;
  onClick?: () => void;
};

export default function NavLinks({ vertical = false, onClick }: NavLinksProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const { startTransition } = usePageTransition();

  const [activeSection, setActiveSection] = useState<string>("hero");

  /*
   * =====================================================
   * PAGE ACTIVE
   * =====================================================
   */

  const activePage =
    location.pathname === "/services"
      ? "services"
      : location.pathname === "/projects"
        ? "projects"
        : location.pathname === "/contact"
          ? "contact"
          : null;

  /*
   * =====================================================
   * DÉTECTION DES SECTIONS DE L'ACCUEIL
   * =====================================================
   */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sectionIds = ["hero", "about", "temoignages"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const sectionId = visibleSections[0].target.id;

          /*
           * On laisse l'observer gérer la section active.
           * Le changement arrive uniquement en réponse
           * à l'événement IntersectionObserver.
           */
          setActiveSection(sectionId);
        }
      },
      {
        rootMargin: "-80px 0px -20% 0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  /*
   * =====================================================
   * SCROLL VERS UNE SECTION
   * =====================================================
   */

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const yOffset = -80;

    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActiveSection(sectionId);
  };

  /*
   * =====================================================
   * NAVIGATION VERS UNE VRAIE PAGE
   * =====================================================
   */

  const navigateToPage = (path: string) => {
    /*
     * 1. Démarre immédiatement le loader.
     */
    startTransition();

    /*
     * 2. Ferme le menu hamburger.
     */
    onClick?.();

    /*
     * 3. Change de page.
     */
    navigate(path);
  };

  /*
   * =====================================================
   * GESTION DU CLIC
   * =====================================================
   */

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink,
  ) => {
    /*
     * On empêche le comportement automatique de Link.
     * Nous contrôlons nous-mêmes la navigation.
     */
    e.preventDefault();

    /*
     * ---------------------------------------------
     * SECTIONS DE L'ACCUEIL
     * ---------------------------------------------
     */

    if (link.section) {
      /*
       * Si nous sommes déjà sur l'accueil :
       * pas besoin de loader.
       */
      if (location.pathname === "/") {
        scrollToSection(link.section);
        onClick?.();

        return;
      }

      /*
       * Nous venons d'une autre page.
       *
       * On mémorise la section demandée.
       */
      sessionStorage.setItem("scrollToSection", link.section);

      /*
       * Démarrer le loader AVANT la navigation.
       */
      startTransition();

      /*
       * Fermer le menu.
       */
      onClick?.();

      /*
       * Retour vers l'accueil.
       */
      navigate("/");

      return;
    }

    /*
     * ---------------------------------------------
     * VRAIES PAGES
     * ---------------------------------------------
     *
     * Services
     * Projects
     * Contact
     */

    navigateToPage(link.path);
  };

  /*
   * =====================================================
   * APRÈS RETOUR SUR L'ACCUEIL
   * =====================================================
   */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sectionToScroll = sessionStorage.getItem("scrollToSection");

    if (!sectionToScroll) {
      return;
    }

    /*
     * On attend que la page soit réellement montée.
     */
    const timer = window.setTimeout(() => {
      const section = document.getElementById(sectionToScroll);

      if (!section) {
        return;
      }

      const yOffset = -80;

      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActiveSection(sectionToScroll);

      sessionStorage.removeItem("scrollToSection");
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.pathname]);

  /*
   * =====================================================
   * AFFICHAGE
   * =====================================================
   */

  return (
    <ul
      className={`flex ${
        vertical
          ? "flex-col space-y-6 w-full text-center"
          : "space-x-8 items-center"
      } font-medium text-lg`}
    >
      {navLinks.map((link) => {
        const isActive =
          location.pathname === "/"
            ? activeSection === link.key
            : activePage === link.key;

        return (
          <motion.li
            key={link.key}
            variants={itemVariants}
            className="w-full md:w-auto"
          >
            <Link
              to={link.path}
              onClick={(e) => handleClick(e, link)}
              className={`
                relative
                block
                cursor-pointer
                px-2
                py-1

                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:bg-white
                after:w-0
                after:transition-[width]
                after:duration-300
                after:ease-out

                hover:after:w-full

                md:inline-block
                md:w-auto

                touch-manipulation

                ${isActive ? "text-white font-semibold after:w-full" : ""}
              `}
            >
              {t(link.label)}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
