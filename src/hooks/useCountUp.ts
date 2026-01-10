// src/hooks/useCountUp.ts

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour animer un nombre de 0 à la valeur cible.
 * @param end La valeur cible (ex: 1500).
 * @param duration La durée de l'animation en millisecondes (ex: 2000).
 */
export const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0); // Le nombre affiché

  useEffect(() => {
    if (end === 0) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      // Calcul du progrès de l'animation (de 0 à 1)
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Mise à jour de l'état du compteur
      setCount(Math.floor(progress * end));

      // Continuer l'animation tant que le progrès n'est pas à 1 (100%)
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    // Démarrer l'animation
    window.requestAnimationFrame(step);

  }, [end, duration]); // Se relance si end ou duration change

  return count;
};