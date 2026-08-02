import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const textVariant = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};
const Collaborations = () => {
    const { t } = useTranslation();
    const approach = [
        {
            number: "01",
            title: t("approach.steps.understand.title"),
            description: t("approach.steps.understand.description"),
        },
        {
            number: "02",
            title: t("approach.steps.design.title"),
            description: t("approach.steps.design.description"),
        },
        {
            number: "03",
            title: t("approach.steps.produce.title"),
            description: t("approach.steps.produce.description"),
        },
        {
            number: "04",
            title: t("approach.steps.enhance.title"),
            description: t("approach.steps.enhance.description"),
        },
    ];
    return (_jsxs("section", { id: "approche", className: "relative bg-gray-900 text-white py-20 px-6 sm:px-8 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-no-repeat", style: {
                    backgroundImage: "url('/images/service.webp')",
                } }), _jsx("div", { className: "absolute inset-0 bg-black/75" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-violet-600/20" }), _jsx("div", { className: "absolute inset-0 backdrop-blur-[2px]" }), _jsxs("div", { className: "relative max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center space-y-6 mb-16", children: [_jsx(motion.h2, { initial: {
                                    opacity: 0,
                                    y: -20,
                                }, whileInView: {
                                    opacity: 1,
                                    y: 0,
                                }, transition: {
                                    duration: 1,
                                }, viewport: {
                                    once: true,
                                }, className: "text-4xl sm:text-4xl font-extrabold text-transparent bg-clip-text \r\n       bg-gradient-to-r from-gray-200 via-gray-100 to-white", children: t("approach.title") }), _jsx(motion.p, { variants: textVariant, initial: "hidden", whileInView: "visible", viewport: {
                                    once: true,
                                    amount: 0.4,
                                }, className: "\r\n            text-lg sm:text-xl text-gray-300 italic relative flex items-center justify-center\r\n             \r\n            ", children: t("approach.description") })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: approach.map((item, index) => (_jsxs(motion.div, { custom: index, variants: textVariant, initial: "hidden", whileInView: "visible", viewport: {
                                once: true,
                                amount: 0.2,
                            }, whileHover: {
                                y: -8,
                            }, transition: {
                                duration: 0.3,
                            }, className: "\r\n                group\r\n                relative\r\n                rounded-2xl\r\n                border\r\n                border-white/10\r\n                bg-black/40\r\n                backdrop-blur-md\r\n                p-7\r\n                transition-all\r\n                duration-300\r\n                hover:border-orange-500/50\r\n                hover:bg-black/55\r\n              ", children: [_jsx("div", { className: "\r\n                  text-5xl\r\n                  font-black\r\n                  text-transparent\r\n                  bg-clip-text\r\n                  bg-gradient-to-r\r\n                  from-orange-500\r\n                  to-pink-400\r\n                  mb-6\r\n                ", children: item.number }), _jsx("h3", { className: "\r\n                  text-2xl\r\n                  font-bold\r\n                  text-white\r\n                  mb-4\r\n                  group-hover:text-orange-400\r\n                  transition-colors\r\n                ", children: item.title }), _jsx("p", { className: "\r\n                  text-gray-300\r\n                  leading-relaxed\r\n                  text-sm\r\n                  md:text-base\r\n                ", children: item.description }), _jsx("div", { className: "\r\n                  absolute\r\n                  bottom-0\r\n                  left-7\r\n                  right-7\r\n                  h-[2px]\r\n                  bg-gradient-to-r\r\n                  from-orange-500\r\n                  via-pink-400\r\n                  to-violet-600\r\n                  scale-x-0\r\n                  group-hover:scale-x-100\r\n                  origin-left\r\n                  transition-transform\r\n                  duration-500\r\n                " })] }, item.number))) })] })] }));
};
export default Collaborations;
