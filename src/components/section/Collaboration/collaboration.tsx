import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const textVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Collaborations: React.FC = () => {
  const { t } = useTranslation();

  const approach = [
    {
      number: "01",
      title: t("approach.steps.understand.title"),
      description: t("approach.steps.understand.description"),
    },
    {
      number: "02",
      title: t("approach.steps.design.title"),
      description: t("approach.steps.design.description"),
    },
    {
      number: "03",
      title: t("approach.steps.produce.title"),
      description: t("approach.steps.produce.description"),
    },
    {
      number: "04",
      title: t("approach.steps.enhance.title"),
      description: t("approach.steps.enhance.description"),
    },
  ];

  return (
    <section
      id="approche"
      className="relative bg-gray-900 text-white py-20 px-6 sm:px-8 overflow-hidden"
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/service.webp')",
        }}
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Effet orange / violet */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-violet-600/20" />

      {/* Léger flou */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Contenu */}
      <div className="relative max-w-6xl mx-auto">
        {/* Titre + description */}
        <div className="text-center space-y-6 mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl sm:text-4xl font-extrabold text-transparent bg-clip-text 
       bg-gradient-to-r from-gray-200 via-gray-100 to-white"
          >
            {t("approach.title")}
          </motion.h2>

          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="
            text-lg sm:text-xl text-gray-300 italic relative flex items-center justify-center
             
            "
          >
            {t("approach.description")}
          </motion.p>
        </div>

        {/* Les 4 étapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {approach.map((item, index) => (
            <motion.div
              key={item.number}
              custom={index}
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
                rounded-2xl
                border
                border-white/10
                bg-black/40
                backdrop-blur-md
                p-7
                transition-all
                duration-300
                hover:border-orange-500/50
                hover:bg-black/55
              "
            >
              {/* Numéro */}
              <div
                className="
                  text-5xl
                  font-black
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-orange-500
                  to-pink-400
                  mb-6
                "
              >
                {item.number}
              </div>

              {/* Titre */}
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  mb-4
                  group-hover:text-orange-400
                  transition-colors
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-gray-300
                  leading-relaxed
                  text-sm
                  md:text-base
                "
              >
                {item.description}
              </p>

              {/* Ligne décorative */}
              <div
                className="
                  absolute
                  bottom-0
                  left-7
                  right-7
                  h-[2px]
                  bg-gradient-to-r
                  from-orange-500
                  via-pink-400
                  to-violet-600
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform
                  duration-500
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
