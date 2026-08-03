import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const images = [
  "/images/hero/hero7.webp",
  "/images/hero/hero9.webp",
  "/images/hero/hero10.webp",
];

const ProjectsHero: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [sloganIndex, setSloganIndex] = useState(0);

  // ✅ Récupération du tableau de slogans depuis i18next
  const slogans: string[] = t("projects.slogans", {
    returnObjects: true,
  }) as string[];

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
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slogans]);

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
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Texte animé */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold text-white mb-4"
        >
          {t("projects.title")}
        </motion.h1>

        {/* ✅ Slogan cyclique animé depuis i18next */}
        <AnimatePresence mode="wait">
          <motion.p
            key={sloganIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-green-400 font-medium"
          >
            {slogans[sloganIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Barre orange animée */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-orange-600"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </section>
  );
};

export default ProjectsHero;
