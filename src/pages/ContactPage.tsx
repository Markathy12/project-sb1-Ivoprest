import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact - ESAY corporation | Contactez-Nous';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="min-h-screen"
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
