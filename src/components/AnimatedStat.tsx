// src/components/AnimatedStat.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp'; // ⚡️ Assure-toi que le chemin est correct

interface AnimatedStatProps {
  icon: React.ReactNode;
  label: string;
  value: number; // Maintenant, 'value' est un nombre
  suffix?: string; // (ex: "+", "k")
  delay: number;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ icon, label, value, suffix = '', delay }) => {
  // 💡 L'élément affiché
  const ref = React.useRef(null);
  
  // Utilisation de framer-motion pour détecter quand l'élément est visible
  // et seulement alors, nous allons déclencher le CountUp (via un état ou des props)

  // Pour la simplicité, utilisons le `whileInView` de motion pour l'apparition, 
  // mais le Hook useCountUp se lance à chaque rendu pour l'instant (voir optimisation plus tard)

  const count = useCountUp(value, 1800); // 1.8 secondes d'animation

  return (
    <motion.div
      ref={ref}
      className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // L'animation se déclenche quand il est visible
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-primary-500 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-4xl font-extrabold text-gray-900">
        {/* AFFICHAGE DU NOMBRE ANIMÉ */}
        {count.toLocaleString('fr-FR')} {/* Ajoute le séparateur de milliers */}
        {suffix}
      </h3>
      <p className="text-gray-600 mt-1">{label}</p>
    </motion.div>
  );
};

export default AnimatedStat;