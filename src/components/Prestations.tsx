import React from "react";
import {
  ServerCog,
  GraduationCap,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  imageUrl: string;
};

const prestations: ServiceItem[] = [
  {
    icon: <ServerCog size={28} className="text-white" />,
    title: "Intégration de solutions",
    description:
      "Déploiement de solutions IT adaptées à vos besoins spécifiques.",
    features: [
      "Mise en œuvre de solutions de sécurité",
      "Configuration sur mesure",
      "Intégration aux systèmes existants",
      "Support post-installation",
    ],
    link: "/services/integration-solution",
    imageUrl: "/images/integration.jpg",
  },
  {
    icon: <ClipboardCheck size={28} className="text-white" />,
    title: "Audit Informatique",
    description: "Évaluation complète de votre infrastructure informatique.",
    features: [
      "Analyse de sécurité",
      "Évaluation des vulnérabilités",
      "Recommandations stratégiques",
      "Plan d’action personnalisé",
    ],
    link: "/prestations/audit-si",
    imageUrl: "/images/audit.jpg",
  },
  {
    icon: <GraduationCap size={28} className="text-white" />,
    title: "Cabinet de formation",
    description:
      "Formations certifiantes en cybersécurité, réseau et cloud.",
    features: [
      "Formations en présentiel ou en ligne",
      "Formateurs certifiés",
      "Préparation aux certifications",
      "Matériel pédagogique fourni",
    ],
    link: "/centre-formation",
    imageUrl: "/images/formation.jpg",
  },
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    title: "Centre d'examen",
    description: "Tests Pearson VUE et autres examens certifiants sur place.",
    features: [
      "Certification officielle",
      "Centre homologué",
      "Encadrement sécurisé",
      "Support aux candidats",
    ],
    link: "/prestations/test-examen",
    imageUrl: "/images/test.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Prestations: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-primary-600 mb-12 text-center">
          Nos Prestations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 justify-center">
          {prestations.map((prestation, index) => (
            <motion.article
              key={index}
              className="w-80 rounded-xl shadow-lg bg-white overflow-hidden cursor-pointer hover:shadow-primary-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <Link to={prestation.link} className="block">
                <div className="relative h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={prestation.imageUrl}
                    alt={prestation.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 rounded-full p-4 shadow-lg">
                    {prestation.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {prestation.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {prestation.description}
                  </p>
                  <span className="inline-block mt-4 text-primary-600 font-semibold relative group">
                    En savoir plus →
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prestations;
