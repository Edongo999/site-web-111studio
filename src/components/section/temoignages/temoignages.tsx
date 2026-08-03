import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { temoignages } from "@/components/section/temoignages/temoignagesData";
import { useTranslation } from "react-i18next";

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // ✅ plus long et fluide
      ease: "easeInOut",
      staggerChildren: 0.3, // ✅ décalage doux
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // ✅ animation plus douce
      ease: "easeOut",
    },
  },
};

const Temoignages: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % temoignages.length);
      }, 6000);
    }
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % temoignages.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);

  return (
    <motion.section
      id="temoignages"
      className="py-12 bg-gray-900"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={container}
        className="max-w-4xl mx-auto px-6 text-center relative"
      >
        {/* Titre */}
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl font-bold mb-10 px-3 py-1 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-violet-500 animate-gradient-x"
        >
          {t("temoignages.title")}
        </motion.h2>

        {/* Bloc principal */}
        <motion.div
          variants={container}
          className="relative flex items-center justify-center"
          onTouchStart={() => {
            stopAutoPlay();
            setShowArrows(true);
            setShowHint(false);
          }}
          onTouchEnd={() => {
            setTimeout(() => setShowArrows(false), 3000);
            startAutoPlay();
          }}
          onMouseEnter={() => {
            stopAutoPlay();
            setShowArrows(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => setShowArrows(false), 3000);
            startAutoPlay();
          }}
        >
          {/* Flèche gauche */}
          <AnimatePresence>
            {(showArrows || window.innerWidth >= 768) && (
              <motion.button
                variants={item}
                onClick={prev}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="absolute left-2 sm:left-[-70px] z-10 p-3 rounded-full text-white shadow-lg 
                           bg-gradient-to-r from-orange-500 to-red-500 
                           hover:from-orange-600 hover:to-red-600 
                           focus:ring-2 focus:ring-orange-400 transition"
              >
                <ArrowLeft size={28} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Carte témoignage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={temoignages[index].id}
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-gray-800 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center border border-gray-700 max-w-lg"
            >
              <motion.div variants={item} className="relative mb-6">
                <div className="absolute inset-0 w-42 h-42 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 blur-xl animate-pulse"></div>
                <div className="relative w-42 h-42 rounded-full border-4 border-orange-500 overflow-hidden shadow-lg">
                  <img
                    src={temoignages[index].image}
                    alt={t(`temoignages.items.${temoignages[index].id}.nom`)}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.p
                variants={item}
                className="italic text-gray-200 mb-6 text-lg leading-relaxed"
              >
                “{t(`temoignages.items.${temoignages[index].id}.texte`)}”
              </motion.p>
              <motion.h3
                variants={item}
                className="font-semibold text-xl text-white"
              >
                {t(`temoignages.items.${temoignages[index].id}.nom`)}
              </motion.h3>
              <motion.span variants={item} className="text-sm text-gray-400">
                {t(`temoignages.items.${temoignages[index].id}.type`)}
              </motion.span>
            </motion.div>
          </AnimatePresence>

          {/* Flèche droite */}
          <AnimatePresence>
            {(showArrows || window.innerWidth >= 768) && (
              <motion.button
                variants={item}
                onClick={next}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="absolute right-2 sm:right-[-70px] z-10 p-3 rounded-full text-white shadow-lg 
                           bg-gradient-to-r from-orange-500 to-red-500 
                           hover:from-orange-600 hover:to-red-600 
                           focus:ring-2 focus:ring-orange-400 transition"
              >
                <ArrowRight size={28} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Indicateurs + Hint */}
        <motion.div
          variants={container}
          className="flex flex-col items-center mt-6 space-y-2"
        >
          <motion.div variants={item} className="flex justify-center space-x-3">
            {temoignages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index
                    ? "bg-orange-500 scale-110"
                    : "bg-gray-500 hover:bg-orange-400"
                }`}
              />
            ))}
          </motion.div>

          {showHint && window.innerWidth < 768 && (
            <motion.div
              variants={item}
              className="text-sm text-gray-400 italic mt-2"
            >
              {t("temoignages.hint")}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Temoignages;
