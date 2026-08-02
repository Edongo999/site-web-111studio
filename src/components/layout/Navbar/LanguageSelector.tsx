import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

type Language = {
  code: string;
  label: string;
  flag: string;
};

const languages: Language[] = [
  { code: "fr", label: "FR", flag: "FR" },
  { code: "en", label: "EN", flag: "GB" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang.code);
    setLangOpen(false);
  };

  // Fermer le menu si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center space-x-2 font-semibold"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLang.code}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center space-x-2"
          >
            <span>{currentLang.label}</span>
            <ReactCountryFlag
              countryCode={currentLang.flag}
              svg
              style={{ width: "1.5em", height: "1.5em" }}
            />
            <ChevronDown size={18} className="text-white" />
          </motion.div>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {langOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => changeLanguage(lang)}
              >
                <span>{lang.label}</span>
                <ReactCountryFlag
                  countryCode={lang.flag}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    marginLeft: "0.5em",
                  }}
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
