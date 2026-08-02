import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/section/projects/MediaViewer.tsx
import { useEffect, useRef, useState } from "react";
import NavArrow from "./NavArrow";
import { useTranslation } from "react-i18next";
export default function MediaViewer({ project, index, startMuted = true, }) {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(index);
    const [isMuted, setIsMuted] = useState(startMuted);
    const [isZoomed, setIsZoomed] = useState(false);
    const [slideshow, setSlideshow] = useState(false);
    const videoRef = useRef(null);
    const media = project.medias[currentIndex];
    // Gestion vidéo
    useEffect(() => {
        const v = videoRef.current;
        if (!v)
            return;
        v.muted = isMuted;
        v.currentTime = 0;
        v.play().catch(() => { });
    }, [currentIndex, isMuted]);
    // Diaporama automatique
    useEffect(() => {
        if (!slideshow)
            return;
        const timer = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % project.medias.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slideshow, project.medias.length]);
    const toggleMute = () => setIsMuted((m) => !m);
    const toggleZoom = () => setIsZoomed((z) => !z);
    const toggleSlideshow = () => setSlideshow((s) => !s);
    return (_jsxs("div", { className: "relative w-full max-w-[1200px] flex flex-col items-center justify-between p-4 space-y-4", children: [project.medias.length > 1 && (_jsxs(_Fragment, { children: [_jsx(NavArrow, { side: "left", onClick: () => setCurrentIndex((i) => (i - 1 + project.medias.length) % project.medias.length), ariaLabel: t("media.prev") }), _jsx(NavArrow, { side: "right", onClick: () => setCurrentIndex((i) => (i + 1) % project.medias.length), ariaLabel: t("media.next") })] })), _jsx("div", { className: "relative w-full flex justify-center items-center max-h-[60vh] overflow-hidden rounded-lg", children: media.type === "video" ? (_jsxs(_Fragment, { children: [_jsx("video", { ref: videoRef, src: media.src, controls: true, playsInline: true, className: "w-auto max-w-[90%] max-h-[60vh] rounded-lg object-contain" }), _jsx("button", { onClick: toggleMute, className: "absolute right-4 top-4 bg-black/60 text-white px-3 py-2 rounded-full", children: isMuted ? t("media.unmute") : t("media.mute") })] })) : (_jsxs(_Fragment, { children: [_jsx("img", { src: media.src, alt: project.title, onClick: toggleZoom, className: `w-auto max-w-[90%] max-h-[60vh] rounded-lg object-contain transition-transform duration-500 cursor-zoom-in
    ${isZoomed ? "scale-150 z-50 absolute" : "scale-100 relative"}
    brightness-110 contrast-110` }), isZoomed && (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70", onClick: toggleZoom, children: _jsx("img", { src: media.src, alt: project.title, className: "max-w-[90%] max-h-[90%] rounded-lg object-contain cursor-zoom-out transition-transform duration-300\r\n                 brightness-110 contrast-110" }) }))] })) }), _jsx("div", { className: "w-full flex gap-3 overflow-x-auto justify-center bg-black/30 p-3 rounded-lg relative z-10", children: project.medias.map((m, idx) => (_jsx("img", { src: m.src, alt: `${project.title} ${idx + 1}`, onClick: () => setCurrentIndex(idx), className: `w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded cursor-pointer border transition 
              ${idx === currentIndex ? "border-yellow-400" : "border-transparent"}` }, idx))) }), project.medias.length > 1 && (_jsx("div", { className: "mt-4 flex justify-center", children: _jsx("button", { onClick: toggleSlideshow, className: "px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition", children: slideshow ? t("media.pause") : t("media.play") }) }))] }));
}
