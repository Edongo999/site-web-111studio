import React, { useState, useEffect } from "react";
import Button from "@components/ui/Button";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  // 🔹 Médias pour les côtés
  const sideMedia = [
    { type: "image", src: "/images/hero/hero2.webp" },
    { type: "image", src: "/images/hero/hero3.webp" },
    { type: "video", src: "/videos/about1.mp4" },
    { type: "image", src: "/images/hero/hero4.webp" },
  ];

  const centerImage = "/images/hero5.jpg";

  // 🔹 États indépendants pour gauche et droite
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [isLeftPlayingVideo, setIsLeftPlayingVideo] = useState(false);
  const [isRightPlayingVideo, setIsRightPlayingVideo] = useState(false);

  const slogans: string[] = t("hero.slogans", {
    returnObjects: true,
  }) as string[];

  const [sloganIndex, setSloganIndex] = useState(0);

  // 🔹 Cycle gauche
  useEffect(() => {
    if (isLeftPlayingVideo) return;

    const interval = setInterval(() => {
      let nextIndex = (leftIndex + 1) % sideMedia.length;

      if (isRightPlayingVideo) {
        while (sideMedia[nextIndex].type === "video") {
          nextIndex = (nextIndex + 1) % sideMedia.length;
        }
      }

      setLeftIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLeftPlayingVideo, isRightPlayingVideo, leftIndex]);

  // 🔹 Cycle droit
  useEffect(() => {
    if (isRightPlayingVideo) return;

    const interval = setInterval(() => {
      let nextIndex = (rightIndex + 1) % sideMedia.length;

      if (isLeftPlayingVideo) {
        while (sideMedia[nextIndex].type === "video") {
          nextIndex = (nextIndex + 1) % sideMedia.length;
        }
      }

      setRightIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [isRightPlayingVideo, isLeftPlayingVideo, rightIndex]);

  // 🔹 Cycle slogans
  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slogans.length]);

  // 🔹 Cycle mobile
  useEffect(() => {
    if (isLeftPlayingVideo) return;

    const interval = setInterval(() => {
      const nextIndex = (leftIndex + 1) % sideMedia.length;

      if (sideMedia[nextIndex].type === "video") {
        return;
      }

      setLeftIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLeftPlayingVideo, leftIndex]);

  const cascadeVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative h-[110vh] md:h-screen bg-black text-white overflow-hidden flex items-center justify-center"
    >
      {/* 🔹 Version mobile : slider plein écran */}
      <div className="absolute inset-0 h-full block md:hidden">
        {sideMedia[leftIndex].type === "image" ? (
          <img
            src={sideMedia[leftIndex].src}
            alt="mobile-slider"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={sideMedia[leftIndex].src}
            autoPlay
            muted
            playsInline
            loop={false}
            preload="auto"
            className="w-full h-full object-cover"
            onPlay={() => setIsLeftPlayingVideo(true)}
            onEnded={() => {
              setIsLeftPlayingVideo(false);
              setLeftIndex((prev) => (prev + 1) % sideMedia.length);
            }}
          />
        )}

        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 🔹 Version desktop */}
      <div className="absolute inset-0 h-full hidden md:flex">
        {/* Colonne gauche */}
        <div className="w-1/4 h-full relative">
          {sideMedia[leftIndex].type === "image" ? (
            <img
              src={sideMedia[leftIndex].src}
              alt="img-left"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={sideMedia[leftIndex].src}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsLeftPlayingVideo(true)}
              onEnded={() => {
                setIsLeftPlayingVideo(false);
                setLeftIndex((prev) => (prev + 1) % sideMedia.length);
              }}
            />
          )}

          <div className="w-full h-full flex items-center justify-center bg-black/10 md:bg-black/50 px-6 md:px-12"></div>
        </div>

        {/* Colonne centrale */}
        <div className="w-3/5 h-full relative">
          <img
            src={centerImage}
            alt={t("hero.imageAlt")}
            className="w-full h-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Colonne droite */}
        <div className="w-1/4 h-full relative">
          {sideMedia[rightIndex].type === "image" ? (
            <img
              src={sideMedia[rightIndex].src}
              alt="img-right"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={sideMedia[rightIndex].src}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsRightPlayingVideo(true)}
              onEnded={() => {
                setIsRightPlayingVideo(false);
                setRightIndex((prev) => (prev + 1) % sideMedia.length);
              }}
            />
          )}

          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

      {/* 🔹 Texte par-dessus */}
      <div className="absolute inset-0 flex items-center justify-center z-10 ">
        <div className="w-full h-full flex items-center justify-center bg-black/50 px-6 md:px-12">
          <div
            className="
    max-w-2xl
    space-y-3
    rounded-lg
    p-6
    text-center
    translate-y-12
    sm:translate-y-8
    md:translate-y-0
    md:-mb-25
  "
          >
            {/* 🔹 Titre */}
            {/* 🔹 Titre */}
            <motion.h1
              className="
    font-extrabold
    text-[clamp(2.5rem,6vw,3.5rem)]
    leading-tight
    translate-y-3
    sm:translate-y-4
    md:translate-y-0
  "
              variants={cascadeVariant}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="text-white">{t("hero.title")}</span>
            </motion.h1>

            {/* 🔹 Slogan */}
            <div className="h-12 flex items-center justify-center overflow-hidden">
              <motion.h2
                className="text-green-500 text-xl leading-tight font-bold"
                key={sloganIndex}
                variants={cascadeVariant}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                {slogans[sloganIndex]}
              </motion.h2>
            </div>

            {/* 🔹 Description */}
            <motion.p
              className="text-gray-200 text-lg leading-relaxed text-justify"
              variants={cascadeVariant}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {t("hero.description")}
            </motion.p>

            {/* 🔹 Boutons */}
            <motion.div
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-center
                md:space-x-4
                space-y-2
                md:space-y-0
              "
              variants={cascadeVariant}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <a href="#projects" className="w-full md:w-auto">
                <Button
                  text={t("hero.btnPhotos")}
                  variant="primary"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                />
              </a>

              <NavLink to="/contact" className="w-full md:w-auto">
                <Button
                  text={t("hero.btnContact")}
                  variant="secondary"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                />
              </NavLink>
            </motion.div>

            {/* 🔹 Icônes réseaux sociaux */}
            <div className="flex justify-center items-center gap-6 mt-4 text-2xl text-gray-200">
              {/* LinkedIn */}
              <a
                href={t("hero.linkedinUrl")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.socialTooltips.linkedin")}
                className="relative group"
              >
                <FaLinkedin className="hover:text-orange-500 transition-colors duration-300" />

                <span
                  className="
                    absolute
                    bottom-full
                    left-1/2
                    -translate-x-1/2
                    mb-3
                    px-3
                    py-1.5
                    rounded-md
                    bg-black/90
                    border border-white/10
                    text-white
                    text-xs
                    whitespace-nowrap
                    opacity-0
                    invisible
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all
                    duration-200
                    pointer-events-none
                    shadow-lg
                  "
                >
                  {t("hero.socialTooltips.linkedin")}
                </span>
              </a>

              {/* Facebook */}
              <a
                href={t("hero.facebookUrl")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.socialTooltips.facebook")}
                className="relative group"
              >
                <FaFacebook className="hover:text-orange-500 transition-colors duration-300" />

                <span
                  className="
                    absolute
                    bottom-full
                    left-1/2
                    -translate-x-1/2
                    mb-3
                    px-3
                    py-1.5
                    rounded-md
                    bg-black/90
                    border border-white/10
                    text-white
                    text-xs
                    whitespace-nowrap
                    opacity-0
                    invisible
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all
                    duration-200
                    pointer-events-none
                    shadow-lg
                  "
                >
                  {t("hero.socialTooltips.facebook")}
                </span>
              </a>

              {/* Instagram */}
              <a
                href={t("hero.instagramUrl")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.socialTooltips.instagram")}
                className="relative group"
              >
                <FaInstagram className="hover:text-orange-500 transition-colors duration-300" />

                <span
                  className="
                    absolute
                    bottom-full
                    left-1/2
                    -translate-x-1/2
                    mb-3
                    px-3
                    py-1.5
                    rounded-md
                    bg-black/90
                    border border-white/10
                    text-white
                    text-xs
                    whitespace-nowrap
                    opacity-0
                    invisible
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all
                    duration-200
                    pointer-events-none
                    shadow-lg
                  "
                >
                  {t("hero.socialTooltips.instagram")}
                </span>
              </a>

              {/* TikTok */}
              <a
                href={t("hero.tiktokUrl")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.socialTooltips.tiktok")}
                className="relative group"
              >
                <FaTiktok className="hover:text-orange-500 transition-colors duration-300" />

                <span
                  className="
                    absolute
                    bottom-full
                    left-1/2
                    -translate-x-1/2
                    mb-3
                    px-3
                    py-1.5
                    rounded-md
                    bg-black/90
                    border border-white/10
                    text-white
                    text-xs
                    whitespace-nowrap
                    opacity-0
                    invisible
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all
                    duration-200
                    pointer-events-none
                    shadow-lg
                  "
                >
                  {t("hero.socialTooltips.tiktok")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
