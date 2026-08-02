import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function CinematicTitle({ textKey, imageUrl, className, }) {
    const { t } = useTranslation();
    const bg = imageUrl ?? "/images/service.webp";
    return (_jsxs("div", { className: `relative w-screen h-25 bg-black overflow-hidden mb-8 -mx-[calc((100vw-100%)/2)] flex items-center justify-center ${className ?? ""}`, children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: {
                    opacity: [0.55, 0.65, 0.55],
                    scale: [1, 1.05, 1],
                    filter: [
                        "blur(3px) brightness(95%) contrast(95%)",
                        "blur(5px) brightness(105%) contrast(105%)",
                        "blur(3px) brightness(95%) contrast(95%)",
                    ],
                }, transition: {
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                }, className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url(${bg})` }, "aria-hidden": true }), _jsx(motion.h3, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { delay: 1.2, duration: 1.1, ease: "easeOut" }, viewport: { once: true }, className: "text-3xl md:text-4xl font-bold text-white z-10 text-center", children: t(textKey) })] }));
}
