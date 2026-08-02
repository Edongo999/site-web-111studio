import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  // 🔹 Médias pour les côtés
  const sideMedia = [
    { type: "image", src: "/images/hero2.jpg" },
    { type: "image", src: "/images/hero3.jpg" },
    { type: "video", src: "/videos/about1.mp4" }, // ✅ Une seule vidéo
    { type: "image", src: "/images/hero4.jpg" },
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
      // 🔹 Si une vidéo joue à droite, le côté gauche ignore les vidéos
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
      // 🔹 Si une vidéo joue à gauche, le côté droit ignore les vidéos
      if (isLeftPlayingVideo) {
        while (sideMedia[nextIndex].type === "video") {
          nextIndex = (nextIndex + 1) % sideMedia.length;
        }
      }
      setRightIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [isRightPlayingVideo, isLeftPlayingVideo, rightIndex]);

  // 🔹 Cycle slogans (toujours actif, jamais bloqué)
  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slogans.length]);
  // 🔹 Cycle mobile (slider plein écran derrière le texte)
  useEffect(() => {
    if (isLeftPlayingVideo) return; // 🔹 Bloque si une vidéo joue
    const interval = setInterval(() => {
      // eslint-disable-next-line prefer-const
      let nextIndex = (leftIndex + 1) % sideMedia.length;
      // 🔹 Sur mobile, si la prochaine est une vidéo, on attend qu’elle se termine
      if (sideMedia[nextIndex].type === "video") {
        return; // on ne change pas tant que la vidéo n’est pas finie
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
      transition: { delay: i * 0.3, duration: 1.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="hero"
      className="relative h-screen bg-black text-white overflow-hidden flex items-center justify-center"
    >
      {/* 🔹 Version mobile : slider plein écran */}
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
            loop={false} // 🔹 pas obligatoire, mais utile si tu veux que ça rejoue
            preload="auto" // 🔹 aide à charger la vidéo avant lecture
            className="w-full h-full object-cover"
            onPlay={() => setIsLeftPlayingVideo(true)}
            onEnded={() => {
              setIsLeftPlayingVideo(false);
              setLeftIndex((prev) => (prev + 1) % sideMedia.length);
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/70"></div>
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
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Colonne centrale (fixe) */}
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
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full h-full flex items-center justify-center bg-black/50 px-6 md:px-12">
          <div className="max-w-2xl space-y-5 rounded-lg p-6 text-center -mb-25">
            <motion.h1
              className="font-extrabold text-[clamp(2.5rem,6vw,3.5rem)] leading-tight"
              variants={cascadeVariant}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="text-white">{t("hero.title")}</span>
            </motion.h1>

            <motion.h2
              className="text-green-600 text-xl leading-tight font-bold"
              key={sloganIndex}
              variants={cascadeVariant}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {slogans[sloganIndex]}
            </motion.h2>

            <motion.p
              className="text-gray-200 text-lg leading-relaxed text-justify"
              variants={cascadeVariant}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-4 space-y-4 md:space-y-0"
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
              <a href="#contact" className="w-full md:w-auto">
                <Button
                  text={t("hero.btnContact")}
                  variant="secondary"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                />
              </a>
            </motion.div>

            {/* Icônes réseaux sociaux */}
            <div className="flex justify-center space-x-6 mt-6 text-2xl text-gray-200">
              <a
                href={t("hero.linkedinUrl")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-orange-500 transition-colors" />
              </a>
              <a
                href={t("hero.facebookUrl")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-orange-500 transition-colors" />
              </a>
              <a
                href={t("hero.instagramUrl")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-orange-500 transition-colors" />
              </a>
              <a
                href={t("hero.tiktokUrl")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="hover:text-orange-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
