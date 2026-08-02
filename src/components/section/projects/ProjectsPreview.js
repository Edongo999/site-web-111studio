import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useProjectsData } from "./ProjectsData";
import CinematicTitle from "@/components/section/projects/CinematicTitle";
import ModalPortal from "@/components/section/projects/ModalPortal";
import MediaViewer from "@/components/section/projects/MediaViewer";
import { ArrowRight } from "lucide-react";
const mainTitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};
const ProjectsPreview = () => {
    const { t } = useTranslation();
    const projects = useProjectsData();
    /*
     * ============================================
     * ÉTAT DU MODAL
     * ============================================
     */
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    /*
     * ============================================
     * PROJETS À AFFICHER DANS L'APERÇU
     * ============================================
     */
    const mariages = projects.filter((p) => p.category === "Mariage").slice(0, 2);
    const anniversaires = projects
        .filter((p) => p.category === "Anniversaire")
        .slice(0, 2);
    const artistiques = projects
        .filter((p) => p.category === "Artistique")
        .slice(0, 1);
    const evenements = projects
        .filter((p) => p.category === "Événement")
        .slice(0, 1);
    const previewProjects = [
        ...mariages,
        ...anniversaires,
        ...artistiques,
        ...evenements,
    ];
    /*
     * ============================================
     * OUVRIR UN PROJET
     * ============================================
     */
    const openProject = (project, startIndex = 0) => {
        setSelectedProject(project);
        setCurrentIndex(startIndex);
    };
    /*
     * ============================================
     * FERMER LE MODAL
     * ============================================
     */
    const closeModal = () => {
        setSelectedProject(null);
        setCurrentIndex(0);
    };
    /*
     * ============================================
     * NAVIGATION CLAVIER
     * ============================================
     */
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
            if (e.key === "Escape") {
                closeModal();
            }
        };
        window.addEventListener("keydown", handler);
        return () => {
            window.removeEventListener("keydown", handler);
        };
    }, [selectedProject]);
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "relative bg-gray-900 text-white px-6 sm:px-8 pt-12 pb-16", children: _jsxs("div", { className: "max-w-6xl mx-auto space-y-12", children: [_jsx("div", { className: "text-center", children: _jsx(motion.h2, { variants: mainTitleVariants, initial: "hidden", whileInView: "visible", viewport: {
                                    once: true,
                                    amount: 0.6,
                                }, className: "\r\n                text-4xl\r\n                sm:text-4xl\r\n                font-extrabold\r\n                text-transparent\r\n                bg-clip-text\r\n                bg-gradient-to-r\r\n                from-green-600\r\n                via-green-400\r\n                to-white\r\n              ", children: t("projects.title") }) }), _jsx(motion.p, { initial: "hidden", whileInView: "visible", viewport: {
                                once: true,
                                amount: 0.4,
                            }, className: "\r\n              text-gray-100\r\n              text-lg\r\n              md:text-xl\r\n              leading-relaxed\r\n              text-justify\r\n              hyphens-auto\r\n              break-normal\r\n              [overflow-wrap:break-word]\r\n            ", children: t("projects.intro") }), _jsx(CinematicTitle, { textKey: "projects.categories.preview" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: previewProjects.map((project, idx) => (_jsx("div", { className: "relative", children: _jsx(ProjectCard, { project: project, isVertical: true, onSelectMedia: (media) => {
                                        const start = project.medias.findIndex((m) => m.src === media.src);
                                        openProject(project, start >= 0 ? start : 0);
                                    } }) }, `preview-${idx}`))) }), _jsx("div", { className: "flex justify-center mt-8", children: _jsxs("a", { href: "/projects", className: "\r\n                group\r\n                inline-flex\r\n                items-center\r\n                gap-3\r\n                px-6\r\n                py-3\r\n                bg-orange-600\r\n                text-white\r\n                rounded-lg\r\n                shadow-md\r\n                hover:bg-orange-700\r\n                transition-all\r\n                duration-300\r\n                hover:-translate-y-0.5\r\n              ", children: [_jsx("span", { children: t("projects.viewAll") }), _jsx(ArrowRight, { size: 20, strokeWidth: 2, className: "\r\n                  transition-transform\r\n                  duration-300\r\n                  group-hover:translate-x-1\r\n                " })] }) })] }) }), selectedProject &&
                selectedProject.medias &&
                selectedProject.medias.length > 0 && (_jsx(ModalPortal, { onClose: closeModal, children: _jsx("div", { className: "relative z-10 w-full max-w-5xl mx-auto", children: _jsx(MediaViewer, { project: selectedProject, index: currentIndex, startMuted: true }) }) }))] }));
};
export default ProjectsPreview;
