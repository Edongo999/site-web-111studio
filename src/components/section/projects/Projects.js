import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import MediaViewer from "@/components/section/projects/MediaViewer";
import ProjectCard from "@/components/ui/ProjectCard";
import useReveal from "@/components/hooks/useReveal";
import ModalPortal from "@/components/section/projects/ModalPortal";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useProjectsData } from "./ProjectsData";
import CinematicTitle from "@/components/section/projects/CinematicTitle";
import ProjectsHero from "./ProjectsHero"; // ✅ import du nouveau composant
const mainTitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
    },
};
const Projects = () => {
    const { t } = useTranslation();
    const projects = useProjectsData();
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const revealRef = useReveal({ stagger: 120, mode: "smooth" });
    // Filtrage par catégories
    const validProjects = projects.filter((p) => p && typeof p === "object");
    const mariages = validProjects.filter((p) => p.category === "Mariage");
    const anniversaires = validProjects.filter((p) => p.category === "Anniversaire");
    const portraits = validProjects.filter((p) => p.category === "Portrait");
    const evenements = validProjects.filter((p) => p.category === "Événement");
    const artistiques = validProjects.filter((p) => p.category === "Artistique");
    const openProject = (project, startIndex = 0) => {
        setSelectedProject(project);
        setCurrentIndex(startIndex);
    };
    const closeModal = () => {
        setSelectedProject(null);
        setCurrentIndex(0);
    };
    // KEYBOARD NAVIGATION
    useEffect(() => {
        const handler = (e) => {
            if (!selectedProject)
                return;
            if (e.key === "ArrowLeft") {
                setCurrentIndex((i) => (i - 1 + selectedProject.medias.length) %
                    selectedProject.medias.length);
            }
            if (e.key === "ArrowRight") {
                setCurrentIndex((i) => (i + 1) % selectedProject.medias.length);
            }
            if (e.key === "Escape")
                closeModal();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selectedProject]);
    return (_jsxs(_Fragment, { children: [_jsx(ProjectsHero, {}), _jsxs("section", { className: "relative min-h-screen bg-gray-900 text-white px-6 sm:px-8 pt-12 pb-16", children: [_jsxs("div", { className: "max-w-6xl mx-auto space-y-12", ref: revealRef, children: [_jsx("div", { className: "text-center", children: _jsx(motion.h2, { variants: mainTitleVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.6 }, className: "text-2xl sm:text-4xl font-bold px-6 py-2 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-white animate-gradient-x", children: t("projects.title1") }) }), _jsx(motion.p, { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.4 }, className: "text-gray-100 text-lg md:text-xl leading-relaxed text-left md:text-justify", children: t("projects.intro1") }), mariages.length > 0 && (_jsxs("div", { children: [_jsx(CinematicTitle, { textKey: "projects.categories.mariage" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: mariages.map((project, idx) => (_jsx("div", { id: `mariage-${idx}`, className: "relative reveal", "data-reveal-index": idx, children: _jsx(ProjectCard, { project: project, isVertical: true, onSelectMedia: (media) => {
                                                    const start = project.medias.findIndex((m) => m.src === media.src);
                                                    openProject(project, start >= 0 ? start : 0);
                                                } }) }, `mariage-${idx}`))) })] })), anniversaires.length > 0 && (_jsxs("div", { children: [_jsx(CinematicTitle, { textKey: "projects.categories.anniversaire" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: anniversaires.map((project, idx) => (_jsx("div", { id: project.cardId, className: "relative reveal", "data-reveal-index": idx, children: _jsx(ProjectCard, { project: project, isVertical: true, onSelectMedia: (media) => {
                                                    const start = project.medias.findIndex((m) => m.src === media.src);
                                                    openProject(project, start >= 0 ? start : 0);
                                                } }) }, project.cardId))) })] })), portraits.length > 0 && (_jsxs("div", { children: [_jsx(CinematicTitle, { textKey: "projects.categories.portrait" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: portraits.map((project, idx) => (_jsx("div", { id: `portrait-${idx}`, className: "relative reveal", "data-reveal-index": idx, children: _jsx(ProjectCard, { project: project, isVertical: true, onSelectMedia: (media) => {
                                                    const start = project.medias.findIndex((m) => m.src === media.src);
                                                    openProject(project, start >= 0 ? start : 0);
                                                } }) }, `portrait-${idx}`))) })] })), evenements.length > 0 && (_jsxs("div", { children: [_jsx(CinematicTitle, { textKey: "projects.categories.\u00E9v\u00E9nement" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: evenements.map((project, idx) => (_jsx("div", { id: `evenement-${idx}`, className: "relative reveal", "data-reveal-index": idx, children: _jsx(ProjectCard, { project: project, isVertical: true, onSelectMedia: (media) => {
                                                    const start = project.medias.findIndex((m) => m.src === media.src);
                                                    openProject(project, start >= 0 ? start : 0);
                                                } }) }, `evenement-${idx}`))) })] })), artistiques.length > 0 && (_jsxs("div", { children: [_jsx(CinematicTitle, { textKey: "projects.categories.artistique" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: artistiques.map((project, idx) => (_jsx("div", { id: `art-${idx}`, className: "relative reveal", "data-reveal-index": idx, children: _jsx(ProjectCard, { project: project, isVertical: true, onSelectMedia: (media) => {
                                                    const start = project.medias.findIndex((m) => m.src === media.src);
                                                    openProject(project, start >= 0 ? start : 0);
                                                } }) }, `art-${idx}`))) })] }))] }), selectedProject &&
                        selectedProject.medias &&
                        selectedProject.medias.length > 0 && (_jsx(ModalPortal, { onClose: closeModal, children: _jsx("div", { className: "relative z-10 w-full max-w-5xl mx-auto", children: _jsx(MediaViewer, { project: selectedProject, index: currentIndex, startMuted: true }) }) }))] })] }));
};
export default Projects;
