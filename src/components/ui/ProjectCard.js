import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};
const textContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
};
const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const ProjectCard = ({ project, onSelectMedia, isVertical = false, registerVideo, }) => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const videoRef = useRef(null);
    useEffect(() => {
        if (isPaused || project.medias.length <= 1)
            return;
        const interval = setInterval(() => setCurrentIndex((p) => (p + 1) % project.medias.length), 6000);
        return () => clearInterval(interval);
    }, [isPaused, project.medias.length]);
    useEffect(() => {
        if (registerVideo)
            registerVideo(videoRef.current);
        return () => {
            if (registerVideo)
                registerVideo(null);
        };
    }, [registerVideo, currentIndex]);
    const currentMedia = project.medias[currentIndex];
    const previewHeight = isVertical ? "h-50 md:h-60" : "h-72 sm:h-70 md:h-89";
    const categoryColors = {
        Mariage: "bg-pink-500 text-white",
        Anniversaire: "bg-green-500 text-white",
        Portrait: "bg-blue-500 text-white",
        Événement: "bg-purple-500 text-white",
        Artistique: "bg-orange-500 text-white",
    };
    return (_jsxs(motion.article, { "data-card-id": project.cardId, variants: cardVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.6 }, className: `relative rounded-lg overflow-hidden bg-gray-800 border border-gray-800 shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.01] 
        ${isVertical ? "flex flex-col h-[23rem] sm:h-[29rem]" : "flex flex-col sm:flex-row items-stretch min-h-[22rem]"}`, onMouseEnter: () => setIsPaused(true), onMouseLeave: () => setIsPaused(false), onTouchStart: () => setIsPaused(true), onTouchEnd: () => setIsPaused(false), children: [project.category && (_jsx("div", { className: "absolute top-3 left-3 z-20", children: _jsx("span", { className: `inline-block px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${categoryColors[project.category] || "bg-gray-500 text-white"}`, children: t(`projects.categories.${project.category.toLowerCase()}`) }) })), _jsxs("div", { className: `relative group w-full ${isVertical ? "" : "sm:w-2/5"} ${previewHeight} flex-shrink-0`, onTouchStart: () => setShowOverlay(true), onTouchEnd: () => setShowOverlay(false), children: [currentMedia.type === "video" ? (_jsx("video", { ref: videoRef, src: currentMedia.src, className: "w-full h-full object-cover", autoPlay: true, muted: true, loop: true, playsInline: true, controls: false })) : (_jsx("img", { src: currentMedia.src, alt: project.title, className: `w-full h-full ${isVertical ? "object-cover" : "object-contain bg-black"}` })), _jsx("div", { className: `absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center 
            ${showOverlay ? "opacity-100" : "opacity-0"} sm:opacity-0 sm:group-hover:opacity-100`, children: _jsx("button", { onClick: (e) => {
                                e.stopPropagation();
                                onSelectMedia(currentMedia);
                            }, className: "px-5 py-1 rounded-lg font-semibold bg-white text-black transition-all duration-200 hover:bg-yellow-400 hover:text-white active:bg-purple-800 active:text-yellow-200", children: t("projects.view") }) })] }), _jsxs(motion.div, { variants: textContainer, className: `flex flex-col justify-start flex-grow 
          ${isVertical
                    ? "p-3 space-y-1 sm:p-5 sm:space-y-3 md:p-7 md:space-y-5"
                    : "p-3 space-y-2 sm:p-6 sm:space-y-4 md:p-10 md:space-y-5 sm:w-3/5 sm:pl-10"}`, children: [_jsx(motion.h3, { variants: textItem, className: `font-bold text-yellow-300 
            ${isVertical ? "text-base md:text-lg mb-1" : "text-sm sm:text-lg mb-2"}`, children: project.title }), _jsx(motion.p, { variants: textItem, className: "text-gray-300 text-sm md:text-base  leading-relaxed\r\n    text-justify\r\n    hyphens-auto\r\n    break-normal\r\n    [overflow-wrap:break-word]mb-2", children: project.description }), project.results && (_jsxs(motion.p, { variants: textItem, className: "text-sm md:text-base text-green-400", children: ["R\u00E9sultats : ", project.results] }))] })] }));
};
export default ProjectCard;
