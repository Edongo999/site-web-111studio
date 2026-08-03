import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "./usePageTransition";

const PageTransitionLoader: React.FC = () => {
  const { isLoading, progress } = usePageTransition();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            flex-col
            items-center
            justify-center
            bg-gray-900
            px-6
          "
        >
          {/* LOGO */}
          <div className="relative flex items-center justify-center">
            {/* Cercle extérieur */}
            <motion.div
              className="
                absolute
                w-40
                h-40
                rounded-full
                border-2
                border-white/10
                border-t-orange-500
                border-r-green-500
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Cercle intérieur */}
            <motion.div
              className="
                absolute
                w-32
                h-32
                rounded-full
                border
                border-white/10
              "
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />

            {/* Halo */}
            <motion.div
              className="
                absolute
                w-28
                h-28
                rounded-full
                bg-green-500/10
                blur-xl
              "
              animate={{
                scale: [0.9, 1.25, 0.9],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* LOGO QUI SE DESSINE */}
            <div className="relative z-10 w-32 h-32 overflow-hidden">
              <motion.img
                src="/images/hero/logo.webp"
                alt="Logo"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-contain
                "
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  clipPath: "inset(100% 0 0 0)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  clipPath: "inset(0% 0 0 0)",
                }}
                transition={{
                  duration: 1.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />

              {/* Ligne qui accompagne le dessin */}
              <motion.div
                className="
                  absolute
                  left-0
                  right-0
                  h-[3px]
                  bg-white
                  shadow-[0_0_12px_rgba(255,255,255,0.9)]
                "
                initial={{
                  top: "100%",
                  opacity: 0,
                }}
                animate={{
                  top: "0%",
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.15,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.8, 1],
                }}
              />
            </div>
          </div>

          {/* MESSAGE */}
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="
              mt-8
              text-sm
              tracking-[0.25em]
              uppercase
              text-gray-300
              text-center
            "
          >
            Création de votre expérience...
          </motion.p>

          {/* BARRE */}
          <div className="mt-5 w-64 max-w-full">
            <div
              className="
                h-[2px]
                w-full
                bg-white/10
                overflow-hidden
                rounded-full
              "
            >
              <motion.div
                className="
                  h-full
                  bg-gradient-to-r
                  from-green-500
                  via-green-400
                  to-orange-500
                "
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.08,
                  ease: "linear",
                }}
              />
            </div>

            <div
              className="
                mt-2
                flex
                justify-between
                text-[10px]
                tracking-widest
                text-gray-500
              "
            >
              <span>LOADING</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionLoader;
