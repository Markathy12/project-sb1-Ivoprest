import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ActualitesSection from "../components/ActualitesSection";
import Prestations from "../components/Prestations";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import PartenairesTech from "../components/PartenairesTech";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Ivoprest | Protection & Sauvegarde de Données";
  }, []);

  return (
    <>
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

      <ScrollToTop />
    </>
  );
};

export default HomePage;
