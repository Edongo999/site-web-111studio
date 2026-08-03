import React from "react";
import { motion, Variants } from "framer-motion";
import { Heart, Briefcase, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0.5 : 0.25,
      delayChildren: isMobile ? 0.3 : 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: isMobile ? 60 : 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: isMobile ? 1 : 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Packs = () => {
  const { t } = useTranslation();

  const packs = [
    {
      icon: Heart,
      title: t("packs.wedding.title"),
      slogan: t("packs.wedding.slogan"),
      items: [
        t("packs.wedding.item1"),
        t("packs.wedding.item2"),
        t("packs.wedding.item3"),
      ],
    },
    {
      icon: Briefcase,
      title: t("packs.corporate.title"),
      slogan: t("packs.corporate.slogan"),
      items: [
        t("packs.corporate.item1"),
        t("packs.corporate.item2"),
        t("packs.corporate.item3"),
      ],
    },
    {
      icon: Palette,
      title: t("packs.branding.title"),
      slogan: t("packs.branding.slogan"),
      items: [
        t("packs.branding.item1"),
        t("packs.branding.item2"),
        t("packs.branding.item3"),
      ],
    },
  ];

  return (
    <section
      id="packs"
      className="py-20 bg-gradient-to-b from-gray-900 text-white px-6 sm:px-8"
    >
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* TITLE */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h2
            className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text 
             bg-gradient-to-r from-gray-100 to-orange-400 text-center"
          >
            {t("packs.title")}
          </h2>
          <p
            className=" text-gray-100
    text-lg
    md:text-xl
    leading-relaxed
    text-justify
    hyphens-auto
    break-normal
    [overflow-wrap:break-word]
         "
          >
            {t("packs.intro")}
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {packs.map((pack, idx) => {
            const Icon = pack.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative rounded-xl p-8 bg-black/50 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.05] transition group w-full"
              >
                {/* Cercle orange centré */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-600 shadow-md mb-6 mx-auto">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Titre centré sur mobile, aligné à gauche sur desktop */}
                <h3 className="text-xl font-bold mb-2 text-orange-500 text-center md:text-center">
                  {pack.title}
                </h3>

                {/* Slogan centré sur mobile, aligné à gauche sur desktop */}
                <p className="text-green-400 font-medium mb-4 text-center md:text-center">
                  {pack.slogan}
                </p>

                {/* Liste centrée sur mobile, alignée à gauche sur desktop */}
                <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-3 text-left">
                  {pack.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Barre animée orange */}
                <div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-0 group-hover:w-full transition-[width] duration-500 ease-out rounded-b-xl"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Packs;
