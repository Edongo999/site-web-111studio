import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import ModalPortal from "@components/section/projects/ModalPortal";
import { NavLink } from "react-router-dom";

const About: React.FC = () => {
  const { t } = useTranslation();

  // 🔹 Gestion de l'ouverture de la vidéo
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const cascadeVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gray-900 px-8 py-16 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl space-y-12">
        {/* 🔹 Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4 text-center"
        >
          <h2
            className="
              bg-gradient-to-r from-green-600 via-green-400 to-white
              bg-clip-text text-4xl font-extrabold text-transparent
            "
          >
            {t("about.title")}
          </h2>

          {/* 🔹 Sous-titre */}
          <div className="flex justify-center px-2 sm:px-4">
            <p
              className="
                inline-flex max-w-3xl items-start justify-center
                text-center text-lg italic leading-relaxed text-gray-300
                sm:text-xl
              "
            >
              {/* Citation gauche */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
                  -mr-2 h-5 w-5 flex-shrink-0 -translate-y-1
                  animate-quoteColor sm:mr-2 sm:h-6 sm:w-6
                "
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 17h3l2-7V5H6v5h3l-2 7zm7 0h3l2-7V5h-6v5h3l-2 7z" />
              </svg>

              <span>{t("about.subtitle")}</span>

              {/* Citation droite */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
                  -ml-3 h-5 w-5 flex-shrink-0 translate-y-1 rotate-180
                  animate-quoteColor sm:ml-2 sm:h-6 sm:w-6
                "
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 17h3l2-7V5H6v5h3l-2 7zm7 0h3l2-7V5h-6v5h3l-2 7z" />
              </svg>
            </p>
          </div>
        </motion.div>

        {/* 🔹 Contenu : images + texte */}
        <div className="mb-6 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* ================================================= */}
          {/* 🔹 BLOC IMAGES */}
          {/* ================================================= */}

          <div className="relative w-full h-[390px] sm:h-[450px] md:min-h-[500px]">
            {/* Image principale */}
            <motion.img
              src="/images/hero/about.webp"
              alt={t("about.mainImageAlt")}
              className="
                relative top-2 -left-5
                mt-6 h-80 w-65
                rounded-xl object-cover shadow-lg
                sm:mt-10 sm:h-80 sm:w-[320px]
                md:top-0 md:-left-12 md:mt-15 md:h-110 md:w-110
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Image secondaire */}
            <motion.img
              src="/images/hero/hero8.webp"
              alt={t("about.secondaryPhotoAlt")}
              className="
                relative -top-90 -right-55
                h-25 w-25 rounded-lg object-cover
                shadow-xl ring-4 ring-white
                sm:h-30 sm:w-32.5
                md:absolute md:top-4 md:right-4
                md:h-35 md:w-40
              "
              initial={{ opacity: 0, x: 50, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            />

            {/* ================================================= */}
            {/* 🔹 VIDÉO SECONDAIRE */}
            {/* =========================== ====================== */}

            <div
              onClick={() => setIsVideoOpen(true)}
              title={t("about.videoOpen")}
              className="
                group relative
                -top-43 left-53
                h-[120px] w-[120px] cursor-pointer
                sm:h-[200px] sm:w-[160px]
                md:absolute md:top-80 md:right-4 md:bottom-4 md:left-93
                md:h-[240px] md:w-[200px]
              "
            >
              <motion.video
                src="/videos/about1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="
                  h-full w-full rounded-lg object-cover
                  shadow-xl ring-4 ring-white
                  transition duration-300
                  group-hover:scale-[1.03]
                "
                initial={{ opacity: 0, x: 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              />

              {/* 🔹 Indication au survol */}
              <div
                className="
                  pointer-events-none absolute inset-0 flex items-center
                  justify-center rounded-lg bg-black/40 opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    flex items-center gap-2 rounded-lg bg-black/75
                    px-3 py-2 text-xs font-medium text-white
                    shadow-lg backdrop-blur-sm sm:text-sm
                  "
                >
                  {/* Icône Play */}
                  <span
                    className="
                      flex h-7 w-7 items-center justify-center rounded-full
                      border border-white/30 bg-white/20
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5 h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l9.64-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
                    </svg>
                  </span>

                  <span>{t("about.videoOpen")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* 🔹 TEXTE CORPORATE */}
          {/* ================================================= */}

          <motion.div
            variants={cascadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-6 text-justify"
          >
            <p className="leading-relaxed text-gray-300">
              {t("about.paragraph1")}
            </p>

            <p className="leading-relaxed text-gray-300">
              {t("about.paragraph2")}
            </p>

            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>{t("about.list.item1")}</li>
              <li>{t("about.list.item2")}</li>
              <li>{t("about.list.item3")}</li>
              <li>{t("about.list.item4")}</li>
            </ul>

            {/* Boutons */}
            <div className="mt-6 flex gap-4">
              <NavLink
                to="/projects"
                className="
    inline-block min-w-[160px] min-h-[48px]
    rounded-lg bg-orange-600 px-6 py-3 font-bold text-white
    shadow-lg transition hover:bg-orange-700 text-center
  "
              >
                {t("about.buttonPortfolio")}
              </NavLink>
              <a
                href={t("about.buttonBookingLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="
    inline-block
    min-w-[160px]
    min-h-[48px]   /* même hauteur minimale */
    leading-[1.5]  /* même hauteur de ligne */
    rounded-lg bg-green-600 px-6 py-3 font-bold text-white
    shadow-lg transition hover:bg-green-700 text-center
  "
              >
                {t("about.buttonBooking")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* 🔹 MODAL DE LA VIDÉO */}
      {/* ================================================= */}

      {isVideoOpen && (
        <ModalPortal onClose={() => setIsVideoOpen(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="flex w-full items-center justify-center"
          >
            <video
              src="/videos/about1.mp4"
              controls
              autoPlay
              playsInline
              className="
                max-h-[85vh] w-full
                rounded-xl object-contain shadow-2xl
              "
            />
          </motion.div>
        </ModalPortal>
      )}
    </motion.section>
  );
};

export default About;
