// src/components/Navbar.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuVariants } from "@/components/animations/menuAnimations";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-600 text-white px-4 md:px-8 h-17 shadow-md z-50 flex items-center">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        {/* Logo texte temporaire */}
        <div className="text-2xl font-bold tracking-wide">111 STUDIO</div>

        {/* Menus déplacés vers la gauche, juste après le logo */}
        <div className="hidden md:flex items-center ml-12 space-x-4">
          <NavLinks />
        </div>

        {/* Sélecteur de langue à droite */}
        <div className="flex items-center">
          <LanguageSelector />
        </div>

        {/* Hamburger mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            style={{ zIndex: 30 }}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Full-screen menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-purple-700/70 backdrop-blur-sm md:hidden z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div
              className="absolute inset-0"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="relative flex flex-col justify-center items-center text-2xl h-full space-y-6 px-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <NavLinks vertical onClick={() => setMenuOpen(false)} />
              <LanguageSelector />
              <button
                onClick={() => setMenuOpen(false)}
                className="mt-8 px-6 py-2 bg-white text-purple-700 rounded-lg shadow hover:bg-purple-100 transition"
              >
                {t("nav.close")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
