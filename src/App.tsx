import React from "react";
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

  return (
    <Router>
      <PageTransitionProvider>
        <Layout>
          <ScrollToTop />

          {/* Loader de transition */}
          <PageTransitionLoader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>

          <WhatsAppFloatingButton />

          <AlertModal show={showLock} />

          <Analytics />
        </Layout>
      </PageTransitionProvider>
    </Router>
  );
}

export default App;
