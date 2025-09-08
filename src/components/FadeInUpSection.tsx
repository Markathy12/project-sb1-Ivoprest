// src/components/FadeInUpSection.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface FadeInUpSectionProps {
  children: ReactNode;
  className?: string;
}

const FadeInUpSection: React.FC<FadeInUpSectionProps> = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpSection;
