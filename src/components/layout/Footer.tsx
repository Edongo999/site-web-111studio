import React from "react";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut", // ✅ chaîne reconnue
      staggerChildren: 0.2, // ✅ décalage entre les blocs
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut", // ✅ compatible TS
    },
  },
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gray-800 text-gray-300 border-t border-gray-700">
      {/* Ligne subtile animée */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 animate-gradient-x" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="
          w-full max-w-6xl mx-auto
          px-5 sm:px-8
          py-12
          grid grid-cols-2 md:grid-cols-4
          gap-x-6 gap-y-10
          md:gap-8
        "
      >
        {/* BLOC 1 — LOGO + DESCRIPTION + RÉSEAUX */}
        <motion.div variants={item} className="space-y-4">
          <h3 className="text-xl font-bold text-white">{t("footer.logo")}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {t("footer.description")}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={t("footer.social.facebook")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={t("footer.social.instagram")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={t("footer.social.linkedin")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* BLOC 2 — NAVIGATION */}
        <motion.div
          variants={item}
          className="border-l border-gray-700 pl-4 sm:pl-6"
        >
          <h4 className="font-semibold text-white mb-4 border-b-2 border-gray-200 inline-block">
            {t("footer.navigation.title")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#hero"
                className="hover:text-green-400 transition-colors"
              >
                {t("footer.navigation.home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-green-400 transition-colors"
              >
                {t("footer.navigation.about")}
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-green-400 transition-colors"
              >
                {t("footer.navigation.services")}
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-green-400 transition-colors"
              >
                {t("footer.navigation.portfolio")}
              </a>
            </li>
          </ul>
        </motion.div>

        {/* BLOC 3 — CONTACTS */}
        <motion.div
          variants={item}
          className="border-l border-gray-700 pl-4 sm:pl-6"
        >
          <h4 className="font-semibold text-white mb-4 border-b-2 border-gray-200 inline-block">
            {t("footer.contact.title")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <a
                href={`mailto:${t("footer.contact.email")}`}
                className="hover:text-green-400 transition-colors break-all"
              >
                {t("footer.contact.email")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a
                href={`https://wa.me/${t("footer.contact.phone1")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                {t("footer.contact.phone1_display")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a
                href={`https://wa.me/${t("footer.contact.phone2")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                {t("footer.contact.phone2_display")}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{t("footer.contact.location")}</span>
            </li>
          </ul>
        </motion.div>

        {/* BLOC 4 — SERVICES */}
        <motion.div
          variants={item}
          className="border-l border-gray-700 pl-4 sm:pl-6"
        >
          <h4 className="font-semibold text-white mb-4 border-b-2 border-gray-200 inline-block">
            {t("footer.services.title")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 transition-colors">
              {t("footer.services.photography")}
            </li>
            <li className="hover:text-green-400 transition-colors">
              {t("footer.services.videography")}
            </li>
            <li className="hover:text-green-400 transition-colors">
              {t("footer.services.branding")}
            </li>
            <li className="hover:text-green-400 transition-colors">
              {t("footer.services.content")}
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* COPYRIGHT */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="border-t border-gray-700 py-4 px-4 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} {t("footer.company")} —{" "}
        {t("footer.rights")}
      </motion.div>
    </footer>
  );
};

export default Footer;
