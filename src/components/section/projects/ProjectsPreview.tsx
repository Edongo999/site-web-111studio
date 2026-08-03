import React, { useEffect, useState } from "react";
import ProjectCard, { Project } from "@/components/ui/ProjectCard";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useProjectsData } from "./ProjectsData";
import CinematicTitle from "@/components/section/projects/CinematicTitle";
import ModalPortal from "@/components/section/projects/ModalPortal";
import MediaViewer from "@/components/section/projects/MediaViewer";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

// =====================================================
// ANIMATIONS
// =====================================================

const mainTitleVariants: Variants = {
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

// ✅ Correction : définir correctement les variants pour les paragraphes
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ProjectsPreview: React.FC = () => {
  const { t } = useTranslation();
  const projects = useProjectsData();

  // =====================================================
  // ÉTAT DU MODAL
  // =====================================================

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // =====================================================
  // PROJETS À AFFICHER DANS L'APERÇU
  // =====================================================

  const mariages = projects.filter((p) => p.category === "wedding").slice(0, 2);
  const anniversaires = projects
    .filter((p) => p.category === "birthday")
    .slice(0, 2);
  const artistiques = projects
    .filter((p) => p.category === "artistic")
    .slice(0, 1);
  const evenements = projects.filter((p) => p.category === "event").slice(0, 1);

  const previewProjects = [
    ...mariages,
    ...anniversaires,
    ...artistiques,
    ...evenements,
  ];

  // =====================================================
  // OUVRIR / FERMER UN PROJET
  // =====================================================

  const openProject = (project: Project, startIndex = 0) => {
    setSelectedProject(project);
    setCurrentIndex(startIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  // =====================================================
  // NAVIGATION CLAVIER
  // =====================================================

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === "ArrowLeft") {
        setCurrentIndex(
          (i) =>
            (i - 1 + selectedProject.medias.length) %
            selectedProject.medias.length,
        );
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((i) => (i + 1) % selectedProject.medias.length);
      }

      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedProject]);

  return (
    <>
      <section className="relative bg-gray-900 text-white px-6 sm:px-8 pt-12 pb-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* =====================================================
              TITRE PRINCIPAL
          ===================================================== */}
          <div className="text-center">
            <motion.h2
              variants={mainTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="
                text-4xl
                sm:text-4xl
                font-extrabold
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-green-600
                via-green-400
                to-white
              "
            >
              {t("projects.title")}
            </motion.h2>
          </div>

          {/* =====================================================
              INTRODUCTION
          ===================================================== */}
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="
              text-gray-100
              text-lg
              md:text-xl
              leading-relaxed
              text-justify
              hyphens-auto
              break-normal
              [overflow-wrap:break-word]
            "
          >
            {t("projects.intro")}
          </motion.p>

          {/* =====================================================
              SOUS-TITRE
          ===================================================== */}
          <CinematicTitle textKey="projects.categories.preview" />

          {/* =====================================================
              APERÇU DES 6 PROJETS
          ===================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {previewProjects.map((project, idx) => (
              <div
                key={`preview-${project.cardId}-${idx}`}
                className="relative"
              >
                <ProjectCard
                  project={project}
                  isVertical={true}
                  onSelectMedia={(media) => {
                    const start = project.medias.findIndex(
                      (m) => m.src === media.src,
                    );
                    openProject(project, start >= 0 ? start : 0);
                  }}
                />
              </div>
            ))}
          </div>

          {/* =====================================================
              BOUTON VOIR PLUS
          ===================================================== */}
          <div className="flex justify-center mt-8">
            <NavLink
              to="/projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                bg-orange-600
                text-white
                rounded-lg
                shadow-md
                hover:bg-orange-700
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              <span>{t("projects.viewAll")}</span>
              <ArrowRight
                size={20}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL MEDIA
      ===================================================== */}
      {selectedProject &&
        selectedProject.medias &&
        selectedProject.medias.length > 0 && (
          <ModalPortal onClose={closeModal}>
            <div className="relative z-10 w-full max-w-5xl mx-auto">
              <MediaViewer
                project={selectedProject}
                index={currentIndex}
                startMuted={true}
              />
            </div>
          </ModalPortal>
        )}
    </>
  );
};

export default ProjectsPreview;
