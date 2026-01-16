import React, { useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";

// IMPORTS CLASSIQUES (Statiques)
// On garde le Hero et le ScrollToTop ici pour éviter les alertes de build et assurer la visibilité immédiate
import HeroSection from "../components/HeroSection";
import ScrollToTop from "../components/ScrollToTop";

// IMPORTS DYNAMIQUES (Lazy Loading)
const ActualitesSection = lazy(() => import("../components/ActualitesSection"));
const Prestations = lazy(() => import("../components/Prestations"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Clients = lazy(() => import("../components/Clients"));
const PartenairesTech = lazy(() => import("../components/PartenairesTech"));
const Contact = lazy(() => import("../components/Contact"));

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Esay-corporation | Protection & Sauvegarde de Données";
  }, []);

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <HeroSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Prestations />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <PartenairesTech />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <ActualitesSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Testimonials />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Clients />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Contact />
      </motion.div>

      {/* Le ScrollToTop est rendu normalement sans Suspense spécifique car il est importé statiquement */}
      <ScrollToTop />
    </Suspense>
  );
};

export default HomePage;