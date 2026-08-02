import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { temoignages } from "@/components/section/temoignages/temoignagesData";
import { useTranslation } from "react-i18next";
const Temoignages = () => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);
    const [showHint, setShowHint] = useState(true);
    const intervalRef = useRef(null); // ✅ correction
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
    const prev = () => setIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);
    return (_jsx("section", { className: "py-12 bg-gray-900", id: "temoignages", children: _jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center relative", children: [_jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-10 px-3 py-1 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-violet-500 animate-gradient-x", children: t("temoignages.title") }), _jsxs("div", { className: "relative flex items-center justify-center", onTouchStart: () => {
                        stopAutoPlay();
                        setShowArrows(true);
                        setShowHint(false);
                    }, onTouchEnd: () => {
                        setTimeout(() => setShowArrows(false), 3000);
                        startAutoPlay();
                    }, onMouseEnter: () => {
                        stopAutoPlay();
                        setShowArrows(true);
                    }, onMouseLeave: () => {
                        setTimeout(() => setShowArrows(false), 3000);
                        startAutoPlay();
                    }, children: [_jsx(AnimatePresence, { children: (showArrows || window.innerWidth >= 768) && (_jsx(motion.button, { onClick: prev, initial: { opacity: 0, x: -20, scale: 0.9 }, animate: { opacity: 1, x: 0, scale: 1 }, exit: { opacity: 0, x: -20, scale: 0.9 }, transition: { duration: 0.4, ease: "easeOut" }, className: "absolute left-2 sm:left-[-70px] z-10 p-3 rounded-full text-white shadow-lg \r\n                           bg-gradient-to-r from-orange-500 to-red-500 \r\n                           hover:from-orange-600 hover:to-red-600 \r\n                           focus:ring-2 focus:ring-orange-400 transition", children: _jsx(ArrowLeft, { size: 28 }) })) }), _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { duration: 0.8, ease: "easeInOut" }, className: "bg-gray-800 backdrop-blur-md shadow-2xl rounded-xl p-8 flex flex-col items-center border border-gray-700 max-w-lg", children: [_jsxs("div", { className: "relative mb-6", children: [_jsx("div", { className: "absolute inset-0 w-42 h-42 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 blur-xl animate-pulse" }), _jsx("div", { className: "relative w-42 h-42 rounded-full border-4 border-orange-500 overflow-hidden shadow-lg", children: _jsx("img", { src: temoignages[index].image, alt: t(`temoignages.items.${temoignages[index].id}.nom`), className: "w-full h-full object-cover" }) })] }), _jsxs("p", { className: "italic text-gray-200 mb-6 text-lg leading-relaxed", children: ["\u201C", t(`temoignages.items.${temoignages[index].id}.texte`), "\u201D"] }), _jsx("h3", { className: "font-semibold text-xl text-white", children: t(`temoignages.items.${temoignages[index].id}.nom`) }), _jsx("span", { className: "text-sm text-gray-400", children: t(`temoignages.items.${temoignages[index].id}.type`) })] }, temoignages[index].id) }), _jsx(AnimatePresence, { children: (showArrows || window.innerWidth >= 768) && (_jsx(motion.button, { onClick: next, initial: { opacity: 0, x: 20, scale: 0.9 }, animate: { opacity: 1, x: 0, scale: 1 }, exit: { opacity: 0, x: 20, scale: 0.9 }, transition: { duration: 0.4, ease: "easeOut" }, className: "absolute right-2 sm:right-[-70px] z-10 p-3 rounded-full text-white shadow-lg \r\n                           bg-gradient-to-r from-orange-500 to-red-500 \r\n                           hover:from-orange-600 hover:to-red-600 \r\n                           focus:ring-2 focus:ring-orange-400 transition", children: _jsx(ArrowRight, { size: 28 }) })) })] }), _jsxs("div", { className: "flex flex-col items-center mt-6 space-y-2", children: [_jsx("div", { className: "flex justify-center space-x-3", children: temoignages.map((_, i) => (_jsx("button", { onClick: () => setIndex(i), className: `w-3 h-3 rounded-full transition ${i === index
                                    ? "bg-orange-500 scale-110"
                                    : "bg-gray-500 hover:bg-orange-400"}` }, i))) }), showHint && window.innerWidth < 768 && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, className: "text-sm text-gray-400 italic mt-2", children: t("temoignages.hint") }))] })] }) }));
};
export default Temoignages;
