import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const WhatsAppFloatingButton = () => {
  const { t } = useTranslation();

  // Messages traduits via i18n
  const messages = [
    t("whatsapp.messages.shooting"),
    t("whatsapp.messages.contact"),
    t("whatsapp.messages.booking"),
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);

      // après 2.5s, revenir à l’icône et passer au message suivant
      setTimeout(() => {
        setShowMessage(false);
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 2500);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-30"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {!showMessage ? (
          // État icône
          <motion.a
            key="icon"
            href="https://wa.me/237672894669"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 flex items-center justify-center 
                       rounded-full bg-green-600 text-white shadow-lg"
          >
            <FaWhatsapp className="text-3xl" />
          </motion.a>
        ) : (
          // État message
          <motion.div
            key="message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-auto max-w-[200px] px-3 py-1 rounded-full 
                       bg-green-600 text-white shadow-lg 
                       text-xs sm:text-sm font-medium text-center"
          >
            {messages[currentMessage]}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WhatsAppFloatingButton;
