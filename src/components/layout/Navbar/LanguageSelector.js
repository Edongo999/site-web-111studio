import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
const languages = [
    { code: "fr", label: "FR", flag: "FR" },
    { code: "en", label: "EN", flag: "GB" },
];
export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const ref = useRef(null);
    const changeLanguage = (lang) => {
        setCurrentLang(lang);
        i18n.changeLanguage(lang.code);
        setLangOpen(false);
    };
    // Fermer le menu si clic en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (_jsxs("div", { className: "relative", ref: ref, children: [_jsx("button", { onClick: () => setLangOpen(!langOpen), className: "flex items-center space-x-2 font-semibold", children: _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 }, transition: { duration: 0.4, ease: "easeOut" }, className: "flex items-center space-x-2", children: [_jsx("span", { children: currentLang.label }), _jsx(ReactCountryFlag, { countryCode: currentLang.flag, svg: true, style: { width: "1.5em", height: "1.5em" } }), _jsx(ChevronDown, { size: 18, className: "text-white" })] }, currentLang.code) }) }), _jsx(AnimatePresence, { children: langOpen && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.95, y: -10 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: -10 }, transition: { duration: 0.3, ease: "easeOut" }, className: "absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg", children: languages.map((lang) => (_jsxs("button", { className: "flex items-center w-full px-4 py-2 text-left hover:bg-gray-100", onClick: () => changeLanguage(lang), children: [_jsx("span", { children: lang.label }), _jsx(ReactCountryFlag, { countryCode: lang.flag, svg: true, style: {
                                    width: "1.5em",
                                    height: "1.5em",
                                    marginLeft: "0.5em",
                                } })] }, lang.code))) })) })] }));
}
