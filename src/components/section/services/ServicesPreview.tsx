import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Camera, Film, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

// =====================================================
// 🔹 ANIMATIONS
// =====================================================

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// =====================================================
// 🔹 COMPOSANT
// =====================================================

const ServicesPreview: React.FC = () => {
  const { t } = useTranslation();

  // =====================================================
  // 🔹 SERVICES
  // =====================================================

  const services = [
    {
      icon: Camera,
      title: t("servicesPreview.photography.title"),
      description: t("servicesPreview.photography.description"),
    },
    {
      icon: Film,
      title: t("servicesPreview.videography.title"),
      description: t("servicesPreview.videography.description"),
    },
    {
      icon: Palette,
      title: t("servicesPreview.branding.title"),
      description: t("servicesPreview.branding.description"),
    },
  ];

  // =====================================================
  // 🔹 STYLE DES CARTES
  // =====================================================

  const cardClassBase =
    "group rounded-xl p-8 min-h-[230px] flex flex-col items-center justify-center text-center bg-black/40 backdrop-blur-md border border-white/10 shadow-lg transition duration-300 relative";

  const cardHoverClasses =
    "cursor-pointer hover:scale-[1.05] hover:shadow-xl hover:bg-black/60";

  // =====================================================
  // 🔹 RENDER
  // =====================================================

  return (
    <section className="bg-gray-800 text-white px-6 sm:px-8 py-12">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* ================================================= */}
        {/* 🔹 TITRE */}
        {/* ================================================= */}

        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="flex justify-center"
        >
          <h2
            className="
              text-4xl
              font-extrabold
              text-transparent
              bg-clip-text
              text-center
              bg-gradient-to-r
              from-green-600
              via-green-400
              to-white
            "
          >
            {t("servicesHero.title")}
          </h2>
        </motion.div>

        {/* ================================================= */}
        {/* 🔹 INTRODUCTION */}
        {/* ================================================= */}

        <motion.p
          lang="fr"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
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
          {t("servicesHero.intro")}
        </motion.p>

        {/* ================================================= */}
        {/* 🔹 3 CARTES */}
        {/* ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {services.map((block, idx) => {
            const Icon = block.icon;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`${cardClassBase} ${cardHoverClasses}`}
              >
                {/* ================================================= */}
                {/* 🔹 ICÔNE */}
                {/* ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-full
                    bg-green-600
                    shadow-md
                    mb-4
                    transition-all
                    duration-300
                    group-hover:bg-orange-500
                  "
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* ================================================= */}
                {/* 🔹 TITRE */}
                {/* ================================================= */}

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-green-400
                    mb-3
                    transition-colors
                    duration-300
                    group-hover:text-orange-400
                  "
                >
                  {block.title}
                </h3>

                {/* ================================================= */}
                {/* 🔹 DESCRIPTION */}
                {/* ================================================= */}

                <p
                  className="
                    text-gray-300
                    text-sm
                    md:text-base
                    leading-relaxed
                  "
                >
                  {block.description}
                </p>

                {/* ================================================= */}
                {/* 🔹 BARRE ANIMÉE */}
                {/* ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    bg-gradient-to-r
                    from-green-600
                    via-orange-500
                    to-white
                    w-0
                    group-hover:w-full
                    transition-[width]
                    duration-500
                    ease-out
                    rounded-b-xl
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================================================= */}
        {/* 🔹 CTA */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex justify-center mt-10"
        >
          <NavLink
            to="/services"
            className="
    group
    inline-flex
    items-center
    gap-3
    px-8
    py-4
    bg-green-600
    hover:bg-orange-500
    text-white
    rounded-lg
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-0.5
  "
          >
            <span>{t("servicesHero.cta")}</span>

            <ArrowRight
              size={20}
              strokeWidth={2}
              className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
            />
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
