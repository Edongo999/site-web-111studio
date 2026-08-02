import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const images = [
  "/images/fume1.jpg",
  "/images/fume2.jpg",
  "/images/service.webp",
  "/images/hero9.jpg",
];

const ServicesHero: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [sloganIndex, setSloganIndex] = useState(0);

  // Changement d'image toutes les 7 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Changement de slogan toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % 3); // 3 slogans
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
      {/* Diaporama animé */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Texte animé */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-4xl font-bold text-white mb-4"
        >
          {t("servicesHero.title")}
        </motion.h1>

        {/* ✅ Slogan cyclique animé */}
        <AnimatePresence mode="wait">
          <motion.p
            key={sloganIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-green-400 font-medium"
          >
            {t(`servicesHero.slogans.${sloganIndex}`)}
          </motion.p>
        </AnimatePresence>

        {/* Bouton CTA */}
        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
        >
          {t("servicesHero.cta")}
        </motion.a>
      </div>

      {/* 🔹 Barre verte animée en bas */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </section>
  );
};

export default ServicesHero;
