import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, } from "react-icons/fa";
import { PhoneIcon, MapPinIcon, CheckCircleIcon, XCircleIcon, } from "@heroicons/react/24/solid";
import Confetti from "react-confetti";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactHero from "@/components/section/contact/ContactHero";
import ContactMap from "./ContactMap";
const Contact = () => {
    const { t } = useTranslation();
    const form = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("idle");
    const [showConfetti, setShowConfetti] = useState(false);
    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");
        if (form.current) {
            try {
                const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
                    method: "POST",
                    body: new FormData(form.current),
                    headers: { Accept: "application/json" },
                });
                if (response.ok) {
                    setLoading(false);
                    setStatus("success");
                    setShowConfetti(true);
                    form.current.reset();
                    setTimeout(() => setShowConfetti(false), 5000);
                    setTimeout(() => setStatus("idle"), 4000);
                }
                else {
                    throw new Error("Form submission failed");
                }
            }
            catch (error) {
                console.error("Formspree error:", error);
                setLoading(false);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        }
    };
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };
    return (_jsxs("div", { children: [_jsx(ContactHero, {}), _jsxs("section", { id: "contact", className: "min-h-screen bg-gray-900 text-white px-6 sm:px-8 pt-12 pb-16 relative", children: [showConfetti && (_jsx(Confetti, { recycle: false, numberOfPieces: 600, gravity: 0.2, wind: 0.01 })), _jsxs("div", { className: "w-full max-w-6xl mx-auto space-y-12", children: [_jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [_jsxs(motion.h3, { initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 1.2, ease: "easeOut" }, viewport: { once: true }, className: "text-2xl sm:text-3xl font-semibold text-green-400", children: [t("contact.shootingTitle"), " ", _jsx(motion.span, { initial: { opacity: 0 }, animate: { opacity: [0.3, 1, 0.3] }, transition: { duration: 2, repeat: Infinity }, className: "inline-block", children: t("contact.shootingWord") }), " ", "?"] }), _jsx(motion.p, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 1.2, ease: "easeOut" }, viewport: { once: true }, className: "text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed \r\n             max-w-md sm:max-w-4xl md:max-w-6xl mx-auto px-4 sm:px-6 text-center", children: t("contact.description") })] }) }), _jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.4 }, className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [_jsxs(motion.div, { variants: itemVariants, className: "bg-gray-800 rounded-lg shadow-lg p-8 space-y-6 relative mt-10 sm:mt-12", children: [_jsx("div", { className: "absolute -top-12 left-1/2 transform -translate-x-1/2", children: _jsx(motion.img, { src: "/images/hero.jpg", alt: t("contact.teamAlt"), className: "w-34 h-34 rounded-full border-4 border-green-500 shadow-lg object-cover", initial: { scale: 1 }, animate: { scale: [1, 1.05, 1], y: [0, -5, 0] }, transition: {
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    } }) }), _jsx("p", { className: "text-gray-300 text-lg sm:text-xl leading-relaxed mt-16", children: t("contact.intro") }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(FaEnvelope, { className: "w-7 h-7 text-green-400" }), _jsx("a", { href: "mailto:contact@111studio.com", className: "text-gray-200 text-xl hover:text-green-300 transition-colors", children: t("contact.email") })] }), _jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:gap-8 mt-4 space-y-4 md:space-y-0", children: [_jsxs("a", { href: "https://www.facebook.com/111studio", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 text-gray-200 hover:text-green-400 transition-colors", children: [_jsx(FaFacebook, { className: "w-7 h-7" }), _jsx("span", { className: "text-xl", children: t("contact.facebook") })] }), _jsxs("a", { href: "https://www.instagram.com/111studio", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 text-gray-200 hover:text-pink-400 transition-colors", children: [_jsx(FaInstagram, { className: "w-7 h-7" }), _jsx("span", { className: "text-xl", children: t("contact.instagram") })] }), _jsxs("a", { href: "https://www.tiktok.com/@111studio", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 text-gray-200 hover:text-gray-100 transition-colors", children: [_jsx(FaTiktok, { className: "w-7 h-7" }), _jsx("span", { className: "text-xl", children: t("contact.tiktok") })] })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(FaWhatsapp, { className: "w-7 h-7 text-green-400" }), _jsx("a", { href: "https://wa.me/237652491246", target: "_blank", rel: "noopener noreferrer", className: "text-gray-200 text-xl hover:text-green-400 transition-colors", children: t("contact.whatsapp") })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(PhoneIcon, { className: "w-7 h-7 text-green-400" }), _jsx("a", { href: "tel:+237689363034", className: "text-gray-200 text-xl hover:text-green-300 transition-colors", children: t("contact.phone") })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(MapPinIcon, { className: "w-7 h-7 text-green-400" }), _jsx("span", { className: "text-gray-200 text-xl", children: t("contact.location") })] })] })] }), _jsxs(motion.form, { ref: form, onSubmit: sendEmail, variants: itemVariants, className: "bg-gray-800 rounded-lg shadow-lg p-8 space-y-6", children: [_jsx("input", { type: "text", name: "name", placeholder: t("contact.form.name"), required: true, className: "w-full px-4 py-3 rounded-md bg-gray-700 text-white text-lg" }), _jsx("input", { type: "text", name: "phone", placeholder: t("contact.form.phone"), className: "w-full px-4 py-3 rounded-md bg-gray-700 text-white text-lg" }), _jsx("input", { type: "text", name: "service", placeholder: t("contact.form.service"), required: true, className: "w-full px-4 py-3 rounded-md bg-gray-700 text-white text-lg" }), _jsx("textarea", { name: "details", rows: 5, placeholder: t("contact.form.details"), required: true, className: "w-full px-4 py-3 rounded-md bg-gray-700 text-white text-lg" }), _jsxs("button", { type: "submit", disabled: loading, className: `w-full py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-all duration-500 ease-in-out text-lg
                  ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} 
                  ${status === "success" ? "bg-blue-500" : ""} 
                  ${status === "error" ? "bg-red-500" : ""}`, children: [loading && (_jsx("span", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" })), status === "idle" && _jsx("span", { children: t("contact.form.send") }), status === "success" && (_jsxs("span", { className: "flex items-center gap-2", children: [_jsx(CheckCircleIcon, { className: "w-6 h-6 text-white" }), t("contact.form.success")] })), status === "error" && (_jsxs("span", { className: "flex items-center gap-2", children: [_jsx(XCircleIcon, { className: "w-6 h-6 text-white" }), t("contact.form.error")] }))] })] })] })] }), _jsx(ContactMap, {})] })] }));
};
export default Contact;
