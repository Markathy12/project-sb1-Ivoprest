import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300); // délai pour que le DOM ait le temps de charger
      }
    }
  }, [location]);

  return null;
};

export default ScrollToAnchor;
