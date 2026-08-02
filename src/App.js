import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/components/pages/HomePages";
import Projects from "@/components/section/projects/Projects";
import Contact from "@/components/section/contact/Contact";
import ServicesPage from "@/components/pages/ServicesPage";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import AlertModal from "@/components/ui/AlertModal";
import PageTransitionLoader from "@/components/ui/PageTransitionLoader";
import { PageTransitionProvider } from "@/components/ui/PageTransitionContext";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./components/layout/ScrollToTop";
function App() {
    const showLock = false;
    return (_jsx(Router, { children: _jsx(PageTransitionProvider, { children: _jsxs(Layout, { children: [_jsx(ScrollToTop, {}), _jsx(PageTransitionLoader, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServicesPage, {}) })] }), _jsx(WhatsAppFloatingButton, {}), _jsx(AlertModal, { show: showLock }), _jsx(Analytics, {})] }) }) }));
}
export default App;
