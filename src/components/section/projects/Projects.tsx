import React, { useEffect, useState } from "react";
import MediaViewer from "@/components/section/projects/MediaViewer";
import ProjectCard, { Project } from "@/components/ui/ProjectCard";
import useReveal from "@/components/hooks/useReveal";
import ModalPortal from "@/components/section/projects/ModalPortal";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useProjectsData } from "./ProjectsData";
import CinematicTitle from "@/components/section/projects/CinematicTitle";
import ProjectsHero from "./ProjectsHero";

const mainTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
// ✅ Correction : définir correctement les variants pour les paragraphes
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = useProjectsData();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const revealRef = useReveal({
    stagger: 120,
    mode: "smooth",
  });

  /* =========================================
     PROJETS VALIDES
  ========================================= */

  const validProjects = projects.filter((p) => p && typeof p === "object");

  /* =========================================
     FILTRAGE DES CATÉGORIES
     
     IMPORTANT :
     Les valeurs correspondent maintenant
     aux catégories de ProjectCard.
  ========================================= */

  const mariages = validProjects.filter((p) => p.category === "wedding");

  const anniversaires = validProjects.filter((p) => p.category === "birthday");

  const portraits = validProjects.filter((p) => p.category === "portrait");

  const evenements = validProjects.filter((p) => p.category === "event");

  const artistiques = validProjects.filter((p) => p.category === "artistic");

  const shootings = validProjects.filter((p) => p.category === "shooting");

  const brandings = validProjects.filter((p) => p.category === "branding");

  /* =========================================
     OUVRIR UN PROJET
  ========================================= */

  const openProject = (project: Project, startIndex = 0) => {
    setSelectedProject(project);
    setCurrentIndex(startIndex);
  };

  /* =========================================
     FERMER LE MODAL
  ========================================= */

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  /* =========================================
     NAVIGATION CLAVIER
  ========================================= */

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === "ArrowLeft") {
        setCurrentIndex(
          (i) =>
            (i - 1 + selectedProject.medias.length) %
            selectedProject.medias.length,
        );
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((i) => (i + 1) % selectedProject.medias.length);
      }

      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [selectedProject]);

  return (
    <>
      {/* =========================================
          HERO
      ========================================= */}

      <ProjectsHero />

      {/* =========================================
          CONTENU PRINCIPAL
      ========================================= */}

      <section className="relative min-h-screen bg-gray-900 text-white px-6 sm:px-8 pt-12 pb-16">
        <div
          className="max-w-6xl mx-auto space-y-12"
          ref={revealRef as React.RefObject<HTMLDivElement>}
        >
          {/* =========================================
              TITRE PRINCIPAL
          ========================================= */}

          <div className="text-center">
            <motion.h2
              variants={mainTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.6,
              }}
              className="
                text-2xl
                sm:text-3xl
                font-bold
                px-6
                py-2
                rounded-lg
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-green-600
                via-green-400
                to-white
                animate-gradient-x
              "
            >
              {t("projects.title1")}
            </motion.h2>
          </div>

          {/* =========================================
              INTRODUCTION
          ========================================= */}
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="
                        text-gray-100
                        text-lg
                        md:text-xl
                        leading-relaxed
                        text-justify
                        hyphens-auto
                        break-normal
                        [overflow-wrap:break-word]
                      "
          >
            {t("projects.intro1")}
          </motion.p>
          {/* =========================================
              MARIAGE
          ========================================= */}

          {mariages.length > 0 && (
            <div>
              <CinematicTitle textKey="projects.categories.wedding" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {mariages.map((project, idx) => (
                  <div
                    id={`mariage-${idx}`}
                    key={`mariage-${idx}`}
                    className="relative reveal"
                    data-reveal-index={idx}
                  >
                    <ProjectCard
                      project={project}
                      isVertical={true}
                      onSelectMedia={(media) => {
                        const start = project.medias.findIndex(
                          (m) => m.src === media.src,
                        );

                        openProject(project, start >= 0 ? start : 0);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================
              ANNIVERSAIRE
          ========================================= */}

          {anniversaires.length > 0 && (
            <div>
              <CinematicTitle textKey="projects.categories.birthday" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {anniversaires.map((project, idx) => (
                  <div
                    id={project.cardId}
                    key={project.cardId}
                    className="relative reveal"
                    data-reveal-index={idx}
                  >
                    <ProjectCard
                      project={project}
                      isVertical={true}
                      onSelectMedia={(media) => {
                        const start = project.medias.findIndex(
                          (m) => m.src === media.src,
                        );

                        openProject(project, start >= 0 ? start : 0);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================
              PORTRAIT
          ========================================= */}

          {portraits.length > 0 && (
            <div>
              <CinematicTitle textKey="projects.categories.portrait" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {portraits.map((project, idx) => (
                  <div
                    id={`portrait-${idx}`}
                    key={`portrait-${idx}`}
                    className="relative reveal"
                    data-reveal-index={idx}
                  >
                    <ProjectCard
                      project={project}
                      isVertical={true}
                      onSelectMedia={(media) => {
                        const start = project.medias.findIndex(
                          (m) => m.src === media.src,
                        );

                        openProject(project, start >= 0 ? start : 0);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================
              ÉVÉNEMENT
          ========================================= */}

          {evenements.length > 0 && (
            <div>
              <CinematicTitle textKey="projects.categories.event" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {evenements.map((project, idx) => (
                  <div
                    id={`evenement-${idx}`}
                    key={`evenement-${idx}`}
                    className="relative reveal"
                    data-reveal-index={idx}
                  >
                    <ProjectCard
                      project={project}
                      isVertical={true}
                      onSelectMedia={(media) => {
                        const start = project.medias.findIndex(
                          (m) => m.src === media.src,
                        );

                        openProject(project, start >= 0 ? start : 0);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================
              ARTISTIQUE
          ========================================= */}

          {artistiques.length > 0 && (
            <div>
              <CinematicTitle textKey="projects.categories.artistic" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {artistiques.map((project, idx) => (
                  <div
                    id={`art-${idx}`}
                    key={`art-${idx}`}
                    className="relative reveal"
                    data-reveal-index={idx}
                  >
                    <ProjectCard
                      project={project}
                      isVertical={true}
                      onSelectMedia={(media) => {
                        const start = project.medias.findIndex(
                          (m) => m.src === media.src,
                        );

                        openProject(project, start >= 0 ? start : 0);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================
              SHOOTING
          ========================================= */}

          {shootings.length > 0 && (
            <div>
              <CinematicTitle textKey="projects.categories.shooting" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {shootings.map((project, idx) => (
                  <div
                    id={`shooting-${idx}`}
                    key={`shooting-${idx}`}
                    className="relative reveal"
                    data-reveal-index={idx}
                  >
                    <ProjectCard
                      project={project}
                      isVertical={true}
                      onSelectMedia={(media) => {
                        const start = project.medias.findIndex(
                          (m) => m.src === media.src,
                        );

                        openProject(project, start >= 0 ? start : 0);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================
              BRANDING
          ========================================= */}

          {brandings.length > 0 && (
            <div>
              <CinematicTitle textKey="projects.categories.branding" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {brandings.map((project, idx) => (
                  <div
                    id={`branding-${idx}`}
                    key={`branding-${idx}`}
                    className="relative reveal"
                    data-reveal-index={idx}
                  >
                    <ProjectCard
                      project={project}
                      isVertical={true}
                      onSelectMedia={(media) => {
                        const start = project.medias.findIndex(
                          (m) => m.src === media.src,
                        );

                        openProject(project, start >= 0 ? start : 0);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* =========================================
            MODAL
        ========================================= */}

        {selectedProject &&
          selectedProject.medias &&
          selectedProject.medias.length > 0 && (
            <ModalPortal onClose={closeModal}>
              <div className="relative z-10 w-full max-w-5xl mx-auto">
                <MediaViewer
                  project={selectedProject}
                  index={currentIndex}
                  startMuted={true}
                />
              </div>
            </ModalPortal>
          )}
      </section>
    </>
  );
};

export default Projects;
