import React from "react";
import {
  Mail,
  Phone,
  Twitter,
  Facebook,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* ✅ Effet lumineux subtil */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-pink-500 to-primary-500 animate-[pulse_4s_infinite]" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Bloc 1 - Logo + Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/LOGO-ESAY.png" alt="Ivoprest" className="h-12 mb-4" />
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Solutions de sécurité et de sauvegarde des données pour entreprises
              modernes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={16} className="text-primary-400 mr-2" />
                <span>contact@esay.ci</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-primary-400 mr-2" />
                <span>+33 (0)1 23 45 67 89</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-3 mt-4">
              {[Twitter, Facebook, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-gray-700 hover:bg-primary-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bloc 2 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">NOS SERVICES</h3>
            <ul className="space-y-2">
              {[
                "Protection des Données",
                "Sauvegarde & Récupération",
                "Sécurité des Données",
                "Solutions Cloud",
                "Conformité & Gouvernance",
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    to="/#services"
                    className="hover:text-primary-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bloc 3 - Formation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">FORMATION</h3>
            <ul className="space-y-2">
              {[
                "Formations Certifiantes",
                "Cybersécurité",
                "Protection des Données",
                "Centre Pearson Vue",
                "Calendrier des Formations",
              ].map((formation, i) => (
                <li key={i}>
                  <Link
                    to="/formation"
                    className="hover:text-primary-400 transition-colors"
                  >
                    {formation}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bloc 4 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">
              RESTEZ INFORMÉ
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Abonnez-vous à notre newsletter pour recevoir nos actualités.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-lg text-white text-sm">
                OK
              </button>
            </form>
          </motion.div>
        </div>

        {/* ✅ Bas du footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>&copy; {new Date().getFullYear()} Esay-Corporation. Tous droits réservés.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400">
              Politique de Confidentialité
            </a>
            <a href="#" className="hover:text-primary-400">
              Conditions d’utilisation
            </a>
            <a href="#" className="hover:text-primary-400 flex items-center">
              <ExternalLink size={14} className="mr-1" /> Plan du site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
