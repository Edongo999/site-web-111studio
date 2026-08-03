/* eslint-disable react-hooks/static-components */
import React from "react";
import ServicesHero from "@/components/section/services/ServicesHero";
import Services from "@/components/section/services/services";
import Packs from "@/components/section/services/Packs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const ServicesPage = () => {
  const { t } = useTranslation();
  const MotionNavLink = motion(NavLink);
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* HERO SERVICES */}
      <ServicesHero />

      {/* SECTION SERVICES */}
      <Services />

      {/* SECTION PACKS */}
      <Packs />

      {/* CTA CONTACT */}
      <section
        id="contact-cta"
        className="relative py-16 text-center bg-cover bg-center mb-8"
        style={{ backgroundImage: "url('/images/service1.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 via-orange-500/70 to-green-400/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-3xl font-bold mb-6 text-white"
          >
            {t("contactCTA.title")}
          </motion.h2>

          <MotionNavLink
            to="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="
    inline-block px-8 py-4
    bg-white text-orange-600 font-semibold
    rounded-lg shadow-lg
    hover:bg-green-500 hover:text-white
    transition
  "
          >
            {t("contactCTA.cta")}
          </MotionNavLink>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
