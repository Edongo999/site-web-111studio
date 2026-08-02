import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Film, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const containerVariants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: isMobile ? 0.5 : 0.25,
            delayChildren: isMobile ? 0.3 : 0.1,
        },
    },
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: isMobile ? 60 : 40,
        scale: 0.98,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: isMobile ? 1 : 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};
const titleVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};
const ServicesPreview = () => {
    const { t } = useTranslation();
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
    const cardClassBase = "group rounded-xl p-8 min-h-[230px] flex flex-col items-center justify-center text-center bg-black/40 backdrop-blur-md border border-white/10 shadow-lg transition duration-300 relative";
    const cardHoverClasses = "cursor-pointer hover:scale-[1.05] hover:shadow-xl hover:bg-black/60";
    return (_jsx("section", { className: "bg-gray-800 text-white px-6 sm:px-8 py-12", children: _jsxs("div", { className: "w-full max-w-6xl mx-auto space-y-10", children: [_jsx(motion.div, { variants: titleVariants, initial: "hidden", whileInView: "visible", viewport: {
                        once: true,
                        amount: 0.6,
                    }, className: "flex justify-center", children: _jsx("h2", { className: "\r\n              text-4xl\r\n              font-extrabold\r\n              text-transparent\r\n              bg-clip-text\r\n              text-center\r\n              bg-gradient-to-r\r\n              from-green-600\r\n              via-green-400\r\n              to-white\r\n            ", children: t("servicesHero.title") }) }), _jsx(motion.p, { lang: "fr", variants: itemVariants, initial: "hidden", whileInView: "show", viewport: {
                        once: true,
                        amount: 0.4,
                    }, className: "\r\n    text-gray-100\r\n    text-lg\r\n    md:text-xl\r\n    leading-relaxed\r\n    text-justify\r\n    hyphens-auto\r\n    break-normal\r\n    [overflow-wrap:break-word]\r\n  ", children: t("servicesHero.intro") }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
                        once: true,
                        amount: 0.2,
                    }, className: "grid grid-cols-1 sm:grid-cols-3 gap-8", children: services.map((block, idx) => {
                        const Icon = block.icon;
                        return (_jsxs(motion.div, { variants: itemVariants, className: `${cardClassBase} ${cardHoverClasses}`, children: [_jsx("div", { className: "\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                    w-14\r\n                    h-14\r\n                    rounded-full\r\n                    bg-green-600\r\n                    shadow-md\r\n                    mb-4\r\n                    transition-all\r\n                    duration-300\r\n                    group-hover:bg-orange-500\r\n                  ", children: _jsx(Icon, { size: 26, className: "text-white" }) }), _jsx("h3", { className: "\r\n                    text-lg\r\n                    font-semibold\r\n                    text-green-400\r\n                    mb-3\r\n                    transition-colors\r\n                    duration-300\r\n                    group-hover:text-orange-400\r\n                  ", children: block.title }), _jsx("p", { className: "\r\n                    text-gray-300\r\n                    text-sm\r\n                    md:text-base\r\n                    leading-relaxed\r\n                  ", children: block.description }), _jsx("div", { className: "\r\n                    absolute\r\n                    bottom-0\r\n                    left-0\r\n                    h-1\r\n                    bg-gradient-to-r\r\n                    from-green-600\r\n                    via-orange-500\r\n                    to-white\r\n                    w-0\r\n                    group-hover:w-full\r\n                    transition-[width]\r\n                    duration-500\r\n                    ease-out\r\n                    rounded-b-xl\r\n                  " })] }, idx));
                    }) }), _jsx("div", { className: "flex justify-center mt-10", children: _jsxs("a", { href: "/services", className: "\r\n      group\r\n      inline-flex\r\n      items-center\r\n      gap-3\r\n      px-8\r\n      py-4\r\n      bg-green-600\r\n      hover:bg-orange-500\r\n      text-white\r\n      rounded-lg\r\n      shadow-lg\r\n      transition-all\r\n      duration-300\r\n      hover:-translate-y-0.5\r\n    ", children: [_jsx("span", { children: t("servicesHero.cta") }), _jsx(ArrowRight, { size: 20, strokeWidth: 2, className: "\r\n        transition-transform\r\n        duration-300\r\n        group-hover:translate-x-1\r\n      " })] }) })] }) }));
};
export default ServicesPreview;
