import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import {
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import Confetti from "react-confetti";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactHero from "@/components/section/contact/ContactHero";
import ContactMap from "./ContactMap";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showConfetti, setShowConfetti] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
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
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
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
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <div>
      <ContactHero />

      <section
        id="contact"
        className="min-h-screen bg-gray-900 text-white px-6 sm:px-8 pt-12 pb-16 relative"
      >
        {showConfetti && (
          <Confetti
            recycle={false}
            numberOfPieces={600}
            gravity={0.2}
            wind={0.01}
          />
        )}
        <div className="w-full max-w-6xl mx-auto space-y-12">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* 🔹 Accroche */}
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-semibold text-green-400"
              >
                {t("contact.shootingTitle")}{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  {t("contact.shootingWord")}
                </motion.span>{" "}
                ?
              </motion.h3>

              {/* 🔹 Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed 
             max-w-md sm:max-w-4xl md:max-w-6xl mx-auto px-4 sm:px-6 text-center"
              >
                {t("contact.description")}
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* 🔹 Infos de contact */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6 relative mt-10 sm:mt-12"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <motion.img
                  src="/images/hero.jpg"
                  alt={t("contact.teamAlt")}
                  className="w-34 h-34 rounded-full border-4 border-green-500 shadow-lg object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mt-16">
                {t("contact.intro")}
              </p>

              <div className="space-y-6">
                {/* Email entreprise */}
                <div className="flex items-center gap-4">
                  <FaEnvelope className="w-7 h-7 text-green-400" />
                  <a
                    href="mailto:contact@111studio.com"
                    className="text-gray-200 text-xl hover:text-green-300 transition-colors"
                  >
                    {t("contact.email")}
                  </a>
                </div>

                {/* Réseaux sociaux entreprise */}
                <div className="flex flex-col md:flex-row md:items-center md:gap-8 mt-4 space-y-4 md:space-y-0">
                  <a
                    href="https://www.facebook.com/111studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-200 hover:text-green-400 transition-colors"
                  >
                    <FaFacebook className="w-7 h-7" />
                    <span className="text-xl">{t("contact.facebook")}</span>
                  </a>
                  <a
                    href="https://www.instagram.com/111studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-200 hover:text-pink-400 transition-colors"
                  >
                    <FaInstagram className="w-7 h-7" />
                    <span className="text-xl">{t("contact.instagram")}</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@111studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-200 hover:text-gray-100 transition-colors"
                  >
                    <FaTiktok className="w-7 h-7" />
                    <span className="text-xl">{t("contact.tiktok")}</span>
                  </a>
                </div>

                {/* Téléphones entreprise */}
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="w-7 h-7 text-green-400" />
                  <a
                    href="https://wa.me/237652491246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 text-xl hover:text-green-400 transition-colors"
                  >
                    {t("contact.whatsapp")}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-7 h-7 text-green-400" />
                  <a
                    href="tel:+237689363034"
                    className="text-gray-200 text-xl hover:text-green-300 transition-colors"
                  >
                    {t("contact.phone")}
                  </a>
                </div>

                {/* Localisation entreprise */}
                <div className="flex items-center gap-4">
                  <MapPinIcon className="w-7 h-7 text-green-400" />
                  <span className="text-gray-200 text-xl">
                    {t("contact.location")}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 🔹 Formulaire entreprise */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder={t("contact.form.name")}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white text-lg"
              />
              <input
                type="text"
                name="phone"
                placeholder={t("contact.form.phone")}
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white text-lg"
              />
              <input
                type="text"
                name="service"
                placeholder={t("contact.form.service")}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white text-lg"
              />
              <textarea
                name="details"
                rows={5}
                placeholder={t("contact.form.details")}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white text-lg"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-all duration-500 ease-in-out text-lg
                  ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} 
                  ${status === "success" ? "bg-blue-500" : ""} 
                  ${status === "error" ? "bg-red-500" : ""}`}
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {status === "idle" && <span>{t("contact.form.send")}</span>}
                {status === "success" && (
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                    {t("contact.form.success")}
                  </span>
                )}
                {status === "error" && (
                  <span className="flex items-center gap-2">
                    <XCircleIcon className="w-6 h-6 text-white" />
                    {t("contact.form.error")}
                  </span>
                )}
              </button>
            </motion.form>
          </motion.div>
        </div>
        {/* 🔹 Carte Google Map */}
        <ContactMap />
      </section>
    </div>
  );
};

export default Contact;
