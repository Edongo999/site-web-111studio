import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

export interface Media {
  type: "video" | "image";
  src: string;
}

export interface Project {
  title: string;
  description: string;
  results?: string;
  link?: string;
  medias: Media[];
  category?:
    | "wedding"
    | "birthday"
    | "portrait"
    | "event"
    | "artistic"
    | "shooting"
    | "branding";
  cardId: string;
}

type Props = {
  project: Project;
  onSelectMedia: (media: Media) => void;
  isVertical?: boolean;
  registerVideo?: (el: HTMLVideoElement | null) => void;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ProjectCard: React.FC<Props> = ({
  project,
  onSelectMedia,
  isVertical = false,
  registerVideo,
}) => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  /* ================================
     🔹 SLIDER DES MÉDIAS
  ================================= */

  useEffect(() => {
    if (isPaused || project.medias.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (previousIndex) => (previousIndex + 1) % project.medias.length,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, project.medias.length]);

  /* ================================
     🔹 ENREGISTREMENT VIDÉO
  ================================= */

  useEffect(() => {
    if (registerVideo) {
      registerVideo(videoRef.current);
    }

    return () => {
      if (registerVideo) {
        registerVideo(null);
      }
    };
  }, [registerVideo, currentIndex]);

  const currentMedia = project.medias[currentIndex];

  /* ================================
     🔹 HAUTEUR DU MEDIA
  ================================= */

  const previewHeight = isVertical
    ? "h-64 sm:h-72 md:h-70"
    : "h-80 sm:h-80 md:h-96";

  /* ================================
     🔹 COULEURS DES CATÉGORIES
  ================================= */

  const categoryColors: Record<string, string> = {
    wedding: "bg-pink-500 text-white",
    birthday: "bg-green-500 text-white",
    portrait: "bg-blue-500 text-white",
    event: "bg-purple-500 text-white",
    artistic: "bg-orange-500 text-white",

    // 🔹 Nouvelles catégories
    shooting: "bg-red-500 text-white",
    branding: "bg-indigo-500 text-white",
  };

  return (
    <motion.article
      data-card-id={project.cardId}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.6,
      }}
      className={`
        relative
        rounded-lg
        overflow-hidden
        bg-gray-800
        border
        border-gray-800
        shadow-md
        transition-transform
        duration-300
        ease-in-out
        hover:scale-[1.01]

        ${
          isVertical
            ? "flex flex-col h-[29rem] sm:h-[34rem] md:h-[32rem]"
            : "flex flex-col sm:flex-row items-stretch min-h-[26rem] sm:min-h-[22rem]"
        }
      `}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* ================================
          🔹 BADGE CATÉGORIE
      ================================= */}

      {project.category && (
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`
              inline-block
              px-3
              py-1
              text-xs
              font-semibold
              rounded-full
              shadow-sm
              ${categoryColors[project.category] || "bg-gray-500 text-white"}
            `}
          >
            {t(`projects.categories.${project.category}`)}
          </span>
        </div>
      )}

      {/* ================================
          🔹 MEDIA
      ================================= */}

      <div
        className={`
          relative
          group
          w-full
          ${isVertical ? "" : "sm:w-2/5"}
          ${previewHeight}
          flex-shrink-0
        `}
        onTouchStart={() => setShowOverlay(true)}
        onTouchEnd={() => setShowOverlay(false)}
      >
        {currentMedia.type === "video" ? (
          <video
            ref={videoRef}
            src={currentMedia.src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        ) : (
          <img
            src={currentMedia.src}
            alt={project.title}
            className={`
              w-full
              h-full
              ${isVertical ? "object-cover" : "object-contain bg-black"}
            `}
          />
        )}

        {/* ================================
            🔹 OVERLAY
        ================================= */}

        <div
          className={`
            absolute
            inset-0
            bg-black/40
            transition-opacity
            duration-300
            flex
            items-center
            justify-center
            ${showOverlay ? "opacity-100" : "opacity-0"}
            sm:opacity-0
            sm:group-hover:opacity-100
          `}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectMedia(currentMedia);
            }}
            className="
              px-5
              py-1
              rounded-lg
              font-semibold
              bg-white
              text-black
              transition-all
              duration-200
              hover:bg-yellow-400
              hover:text-white
              active:bg-purple-800
              active:text-yellow-200
            "
          >
            {t("projects.view")}
          </button>
        </div>
      </div>

      {/* ================================
          🔹 TEXTE
      ================================= */}

      <motion.div
        variants={textContainer}
        className={`
          flex
          flex-col
          justify-start
          flex-grow

          ${
            isVertical
              ? "p-5 space-y-3 sm:p-6 sm:space-y-4 md:p-7 md:space-y-5"
              : "p-4 space-y-3 sm:p-6 sm:space-y-4 md:p-10 md:space-y-5 sm:w-3/5 sm:pl-10"
          }
        `}
      >
        {/* Titre */}

        <motion.h3
          variants={textItem}
          className={`
            font-bold
            text-yellow-300

            ${
              isVertical
                ? "text-lg md:text-lg mb-1"
                : "text-base sm:text-lg mb-2"
            }
          `}
        >
          {project.title}
        </motion.h3>

        {/* Description */}

        <motion.p
          variants={textItem}
          className="
            text-gray-300
            text-sm
            md:text-base
            leading-relaxed
            text-justify
            hyphens-auto
            break-normal
            [overflow-wrap:break-word]
            mb-2
          "
        >
          {project.description}
        </motion.p>

        {/* Résultats */}

        {project.results && (
          <motion.p
            variants={textItem}
            className="
              text-sm
              md:text-base
              text-green-400
            "
          >
            {t("projects.results")}: {project.results}
          </motion.p>
        )}
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
