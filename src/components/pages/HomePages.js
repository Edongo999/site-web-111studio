import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Skills from "@/components/section/services/ServicesPreview";
import Projects from "@/components/section/projects/ProjectsPreview";
import Experience from "@/components/section/Collaboration/collaboration";
import Temoignages from "../section/temoignages/temoignages";
const Home = () => {
    return (_jsxs("div", { children: [_jsx("section", { id: "hero", children: _jsx(Hero, {}) }), _jsx("section", { id: "about", children: _jsx(About, {}) }), _jsx("section", { id: "skills", children: _jsx(Skills, {}) }), _jsx("section", { id: "projects", children: _jsx(Projects, {}) }), _jsx("section", { id: "experience", children: _jsx(Experience, {}) }), _jsx(Temoignages, {})] }));
};
export default Home;
