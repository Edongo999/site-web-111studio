import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "./usePageTransition";
const PageTransitionLoader = () => {
    const { isLoading, progress } = usePageTransition();
    return (_jsx(AnimatePresence, { children: isLoading && (_jsxs(motion.div, { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.35 }, className: "\r\n            fixed\r\n            inset-0\r\n            z-[99999]\r\n            flex\r\n            flex-col\r\n            items-center\r\n            justify-center\r\n            bg-gray-900\r\n            px-6\r\n          ", children: [_jsxs("div", { className: "relative flex items-center justify-center", children: [_jsx(motion.div, { className: "\r\n                absolute\r\n                w-40\r\n                h-40\r\n                rounded-full\r\n                border-2\r\n                border-white/10\r\n                border-t-orange-500\r\n                border-r-green-500\r\n              ", animate: {
                                rotate: 360,
                            }, transition: {
                                duration: 1.4,
                                repeat: Infinity,
                                ease: "linear",
                            } }), _jsx(motion.div, { className: "\r\n                absolute\r\n                w-32\r\n                h-32\r\n                rounded-full\r\n                border\r\n                border-white/10\r\n              ", initial: {
                                scale: 0.8,
                                opacity: 0,
                            }, animate: {
                                scale: 1,
                                opacity: 1,
                            }, transition: {
                                duration: 0.8,
                                ease: "easeOut",
                            } }), _jsx(motion.div, { className: "\r\n                absolute\r\n                w-28\r\n                h-28\r\n                rounded-full\r\n                bg-green-500/10\r\n                blur-xl\r\n              ", animate: {
                                scale: [0.9, 1.25, 0.9],
                                opacity: [0.3, 0.7, 0.3],
                            }, transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            } }), _jsxs("div", { className: "relative z-10 w-32 h-32 overflow-hidden", children: [_jsx(motion.img, { src: "/images/logo.png", alt: "Logo", className: "\r\n                  absolute\r\n                  inset-0\r\n                  w-full\r\n                  h-full\r\n                  object-contain\r\n                ", initial: {
                                        opacity: 0,
                                        scale: 0.9,
                                        clipPath: "inset(100% 0 0 0)",
                                    }, animate: {
                                        opacity: 1,
                                        scale: 1,
                                        clipPath: "inset(0% 0 0 0)",
                                    }, transition: {
                                        duration: 1.15,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    } }), _jsx(motion.div, { className: "\r\n                  absolute\r\n                  left-0\r\n                  right-0\r\n                  h-[3px]\r\n                  bg-white\r\n                  shadow-[0_0_12px_rgba(255,255,255,0.9)]\r\n                ", initial: {
                                        top: "100%",
                                        opacity: 0,
                                    }, animate: {
                                        top: "0%",
                                        opacity: [0, 1, 1, 0],
                                    }, transition: {
                                        duration: 1.15,
                                        ease: "easeInOut",
                                        times: [0, 0.1, 0.8, 1],
                                    } })] })] }), _jsx(motion.p, { initial: {
                        opacity: 0,
                        y: 10,
                    }, animate: {
                        opacity: 1,
                        y: 0,
                    }, transition: {
                        delay: 0.2,
                        duration: 0.5,
                    }, className: "\r\n              mt-8\r\n              text-sm\r\n              tracking-[0.25em]\r\n              uppercase\r\n              text-gray-300\r\n              text-center\r\n            ", children: "Cr\u00E9ation de votre exp\u00E9rience..." }), _jsxs("div", { className: "mt-5 w-64 max-w-full", children: [_jsx("div", { className: "\r\n                h-[2px]\r\n                w-full\r\n                bg-white/10\r\n                overflow-hidden\r\n                rounded-full\r\n              ", children: _jsx(motion.div, { className: "\r\n                  h-full\r\n                  bg-gradient-to-r\r\n                  from-green-500\r\n                  via-green-400\r\n                  to-orange-500\r\n                ", animate: {
                                    width: `${progress}%`,
                                }, transition: {
                                    duration: 0.08,
                                    ease: "linear",
                                } }) }), _jsxs("div", { className: "\r\n                mt-2\r\n                flex\r\n                justify-between\r\n                text-[10px]\r\n                tracking-widest\r\n                text-gray-500\r\n              ", children: [_jsx("span", { children: "LOADING" }), _jsxs("span", { children: [progress, "%"] })] })] })] })) }));
};
export default PageTransitionLoader;
