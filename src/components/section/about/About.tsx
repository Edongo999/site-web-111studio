import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  const cascadeVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white px-8 py-16"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 🔹 Titre principal de la section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-4"
        >
          <h2
            className="text-4xl sm:text-4xl font-extrabold text-transparent bg-clip-text 
       bg-gradient-to-r from-green-600 via-green-400 to-white"
          >
            {t("about.title")}
          </h2>

          {/* 🔹 Sous-titre (subtitle) */}
          {/* 🔹 Sous-titre avec icônes de citation */}
          {/* 🔹 Sous-titre avec icônes de citation */}
          <div className="flex justify-center px-2 sm:px-4">
            <p
              className="
      text-lg
      sm:text-xl
      text-gray-300
      italic
      leading-relaxed
      text-center
      inline-flex
      items-start
      justify-center
      max-w-3xl
    "
            >
              {/* Citation gauche */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
        flex-shrink-0
        w-5
        h-5
        sm:w-6
        sm:h-6
       -mr-2
        sm:mr-2
        -translate-y-1
        animate-quoteColor
      "
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 17h3l2-7V5H6v5h3l-2 7zm7 0h3l2-7V5h-6v5h3l-2 7z" />
              </svg>

              {/* Texte */}
              <span>{t("about.subtitle")}</span>

              {/* Citation droite */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="
        flex-shrink-0
        w-5
        h-5
        sm:w-6
        sm:h-6
        -ml-3
        sm:ml-2
        translate-y-1
        rotate-180
        animate-quoteColor
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-6">
          {/* Bloc images corporate */}

          {/* Bloc images corporate */}
          <div className="relative w-full h-auto">
            {/* Image principale */}
            <motion.img
              src="/images/about.jpg"
              alt={t("about.mainImageAlt")}
              className="
      w-68 h-80 sm:w-80 sm:h-80 md:w-110 md:h-110
      object-cover rounded-xl shadow-lg 
      mt-6 sm:mt-10 md:mt-15 
      translate-x-0 sm:translate-x-0 md:-translate-x-12
    "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(255,165,0,0.8)",
                  "0 0 25px rgba(255,255,255,0.6)",
                  "0 0 15px rgba(255,165,0,0.8)",
                ],
              }}
            />

            {/* Image secondaire 1 */}
            <motion.img
              src="/images/hero8.jpg"
              alt={t("about.secondaryPhotoAlt")}
              className="
      absolute top-4 right-4 
      w-24 h-25 sm:w-32 sm:h-28 md:w-40 md:h-35
      object-cover rounded-lg shadow-xl ring-4 ring-white
      -translate-x-3 sm:translate-x-4 md:translate-x-0
      translate-y-0 sm:translate-y-2 md:translate-y-0
    "
              initial={{ opacity: 0, x: 50, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Vidéo secondaire 2 */}
            <motion.video
              src="/videos/about1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="
    absolute bottom-4 right-4 
    w-28 h-30 sm:w-40 sm:h-50 md:w-50 md:h-60
    object-cover rounded-lg shadow-xl ring-4 ring-white 
    translate-y-0 sm:translate-y-6 md:translate-y-15 
    translate-x-0 sm:translate-x-4 md:translate-x-5
  "
              initial={{ opacity: 0, x: 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
          {/* Texte corporate */}
          <motion.div
            variants={cascadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6 text-justify"
          >
            <p className="text-gray-300 leading-relaxed">
              {t("about.paragraph1")}
            </p>

            <p className="text-gray-300 leading-relaxed">
              {t("about.paragraph2")}
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>{t("about.list.item1")}</li>
              <li>{t("about.list.item2")}</li>
              <li>{t("about.list.item3")}</li>
              <li>{t("about.list.item4")}</li>
            </ul>

            {/* Boutons */}
            <div className="flex gap-4 mt-6">
              <a
                href="/projects"
                className="px-6 py-3 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition"
              >
                {t("about.buttonPortfolio")}
              </a>
              <a
                href={t("about.buttonBookingLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition"
              >
                {t("about.buttonBooking")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
