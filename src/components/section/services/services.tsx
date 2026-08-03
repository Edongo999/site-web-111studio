import React from "react";
import { motion, Variants } from "framer-motion";
import { Camera, Image, Aperture, Film, Video, Tv, Users } from "lucide-react";
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
  hidden: { opacity: 0, y: isMobile ? 60 : 40, scale: 0.98 },
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

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Camera,
      title: t("servicesPage.photography.title"),
      items: [
        t("servicesPage.photography.item1"),
        t("servicesPage.photography.item2"),
        t("servicesPage.photography.item3"),
      ],
    },
    {
      icon: Film,
      title: t("servicesPage.videography.title"),
      items: [
        t("servicesPage.videography.item1"),
        t("servicesPage.videography.item2"),
        t("servicesPage.videography.item3"),
      ],
    },
    {
      icon: Image,
      title: t("servicesPage.editing.title"),
      items: [
        t("servicesPage.editing.item1"),
        t("servicesPage.editing.item2"),
        t("servicesPage.editing.item3"),
      ],
    },
    {
      icon: Aperture,
      title: t("servicesPage.branding.title"),
      items: [
        t("servicesPage.branding.item1"),
        t("servicesPage.branding.item2"),
        t("servicesPage.branding.item3"),
      ],
    },
    {
      icon: Video, // icône pour la création de contenu
      title: t("servicesPage.contentCreation.title"),
      items: [
        t("servicesPage.contentCreation.item1"),
        t("servicesPage.contentCreation.item2"),
        t("servicesPage.contentCreation.item3"),
      ],
    },
    {
      icon: Tv, // icône pour studio cinéma & télévision
      title: t("servicesPage.studio.title"),
      items: [
        t("servicesPage.studio.item1"),
        t("servicesPage.studio.item2"),
        t("servicesPage.studio.item3"),
      ],
    },
    {
      icon: Users, // icône pour événementiel
      title: t("servicesPage.events.title"),
      items: [
        t("servicesPage.events.item1"),
        t("servicesPage.events.item2"),
        t("servicesPage.events.item3"),
      ],
    },
  ];

  const cardClassBase =
    "group rounded-xl p-8 min-h-[280px] flex flex-col items-center justify-start text-center bg-black/40 backdrop-blur-md border border-white/10 shadow-lg transition duration-300 relative";
  const cardHoverClasses =
    "cursor-pointer hover:scale-[1.05] hover:shadow-xl hover:bg-black/60";

  return (
    <section
      id="services"
      className="min-h-screen bg-gray-800 text-white px-6 sm:px-8 pt-12 pb-16"
    >
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* TITLE */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="flex justify-center"
        >
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-center text-transparent bg-clip-text 
             bg-gradient-to-r from-orange-100 via-green-200 to-white"
          >
            {t("servicesPage.title")}
          </h2>
        </motion.div>

        {/* INTRO */}
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
          {t("servicesPage.intro")}
        </motion.p>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`${cardClassBase} ${cardHoverClasses}`}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 shadow-md mb-4">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  {block.title}
                </h3>
                <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-3 text-left">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 h-2 bg-green-500 w-0 group-hover:w-full transition-[width] duration-500 ease-out rounded-b-xl"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
