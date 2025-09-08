import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const news = [
  {
    title: "Ivoprest ouvre un nouveau centre de formation à Abidjan",
    date: "Juillet 2025",
    excerpt:
      "Un nouveau centre ultra-moderne pour renforcer les compétences en cybersécurité et systèmes d'information.",
    imageUrl: "/images/news 1.jpg",
  },
  {
    title: "Partenariat stratégique avec Microsoft Afrique",
    date: "Juin 2025",
    excerpt:
      "Ivoprest devient partenaire Gold pour la sécurité cloud et les solutions Microsoft 365.",
    imageUrl: "/images/news 2.jpg",
  },
  {
    title: "Lancement de l’offre SSM",
    date: "Mai 2025",
    excerpt:
      "Découvrez notre offre de Sécurité Managée (SSM) pour les entreprises de toutes tailles.",
    imageUrl: "/images/news 3.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

// Fonction pour détecter si c'est un article "NEW" (mois actuel)
const isNewArticle = (dateString: string) => {
  const currentMonth = new Date().toLocaleString("fr-FR", { month: "long", year: "numeric" });
  return dateString.toLowerCase() === currentMonth.toLowerCase();
};

const ActualitesSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-défilement horizontal (comme un fil d'actualité)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Ajuste la vitesse ici

    const interval = setInterval(() => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollSpeed;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Actualités
        </motion.h2>

        {/* Carousel horizontal */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200"
        >
          {news.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden text-left 
                         hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {isNewArticle(item.date) && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <button className="text-orange-600 font-semibold text-sm hover:underline">
                  Lire la suite →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton Voir toutes les actualités */}
        <div className="mt-10">
          <Link
            to="/blog"
            className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 transition"
          >
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActualitesSection;
