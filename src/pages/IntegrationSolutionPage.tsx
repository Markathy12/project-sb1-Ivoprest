import React from "react";
import { CheckCircle, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface FadeInUpSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FadeInUpSection: React.FC<FadeInUpSectionProps> = ({ children, className, style }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

const expertises = [
  "Infrastructure réseau sécurisée",
  "Solutions Cloud hybrides",
  "Systèmes de sauvegarde & PRA",
  "Protection des accès & identités",
  "Sécurisation des endpoints",
];

const partenaires = [
  { name: "Fortinet", logo: "/logos/fortinet.png" },
  { name: "Microsoft", logo: "/logos/veeam.png" },
  { name: "Dell", logo: "/logos/kaspersky.png" },
  { name: "Cisco", logo: "/logos/sophos.png" },
  { name: "HPE", logo: "/logos/wallix.png" },
];

const IntegrationSolutionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* HEADER AVEC IMAGE */}
      <FadeInUpSection
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/integration-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Intégrez des solutions sécurisées, robustes et durables
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            IVOPREST vous accompagne dans l’évolution de vos infrastructures grâce à son expertise technique et certifiée.
          </p>
        </div>
      </FadeInUpSection>
      <FadeInUpSection className="py-24 px-6 max-w-7xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 tracking-tight">
            Nos axes d’accompagnement
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des solutions éprouvées pour renforcer votre sécurité, protéger vos données et assurer la continuité de vos activités.
          </p>
        </div>

        <div className="space-y-32">
          {/* Bloc 1 - Sécurité des réseaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Texte */}
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                   Sécurité des réseaux
                </h3>

                <div className="p-4 rounded-xl bg-red-50 border-l-4 border-red-500 flex items-start gap-3 mt-4">
                  <span className="text-red-500 text-2xl">⚠️</span>
                  <p className="text-gray-700 dark:text-gray-200 font-semibold leading-relaxed">
                    Défi : Les cyberattaques exploitent la moindre faille réseau, causant arrêts de service et pertes financières.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border-l-4 border-green-600 flex items-start gap-3 mt-4">
                  <span className="text-green-600 text-2xl">✅</span>
                  <p className="text-gray-800 dark:text-gray-100 font-semibold leading-relaxed">
                    Solution Ivoprest : Pare-feux nouvelle génération, segmentation intelligente et supervision proactive <span className="font-bold">24/7</span>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ Réseau résilient et disponible</div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ Réduction des surfaces d’attaque</div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ Conformité internationale</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Partenaires :</span>
                <img src="/logos/fortinet.png" alt="Fortinet" className="h-8 grayscale hover:grayscale-0 transition" />
                <img src="/logos/sophos.png" alt="Sophos" className="h-8 grayscale hover:grayscale-0 transition" />
              </div>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 h-full">
              <img
                src="/images/securite-reseaux.jpg"
                alt="Sécurité des réseaux"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          </div>

          {/* Bloc 2 - Backup & réplication */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Image gauche */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 h-full order-last md:order-first">
              <img
                src="/images/backup.jpg"
                alt="Backup & réplication"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            {/* Texte */}
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  Backup & réplication
                </h3>

                <div className="p-4 rounded-xl bg-red-50 border-l-4 border-red-500 flex items-start gap-3 mt-4">
                  <span className="text-red-500 text-2xl">⚠️</span>
                  <p className="text-gray-700 dark:text-gray-200 font-semibold leading-relaxed">
                    Défi : Une panne ou un ransomware peut effacer vos données vitales.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border-l-4 border-green-600 flex items-start gap-3 mt-4">
                  <span className="text-green-600 text-2xl">✅</span>
                  <p className="text-gray-800 dark:text-gray-100 font-semibold leading-relaxed">
                    Solution Ivoprest : Sauvegardes automatisées, réplication en temps réel et PRA testé régulièrement pour garantir continuité d’activité.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ Zéro perte de données</div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ Reprise rapide</div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ PRA validé</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Partenaires :</span>
                <img src="/logos/veeam.png" alt="Veeam" className="h-8 grayscale hover:grayscale-0 transition" />
              </div>
            </div>
          </div>

          {/* Bloc 3 - Protection des données */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Texte */}
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  Protection des données
                </h3>

                <div className="p-4 rounded-xl bg-red-50 border-l-4 border-red-500 flex items-start gap-3 mt-4">
                  <span className="text-red-500 text-2xl">⚠️</span>
                  <p className="text-gray-700 dark:text-gray-200 font-semibold leading-relaxed">
                    Défi : Les fuites de données sensibles entraînent sanctions et perte de confiance client.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border-l-4 border-green-600 flex items-start gap-3 mt-4">
                  <span className="text-green-600 text-2xl">✅</span>
                  <p className="text-gray-800 dark:text-gray-100 font-semibold leading-relaxed">
                    Solution Ivoprest : Chiffrement avancé, contrôle d’accès strict et supervision continue garantissent confidentialité et conformité.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ Données protégées 24/7</div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ Conformité RGPD</div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">✔️ Réputation préservée</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Partenaires :</span>
                <img src="/logos/kaspersky.png" alt="Kaspersky" className="h-8 grayscale hover:grayscale-0 transition" />
              </div>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 h-full">
              <img
                src="/images/protection-donnees.jpg"
                alt="Protection des données"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          </div>
        </div>
      </FadeInUpSection>
      
      {/* NOS EXPERTISES */}
      <FadeInUpSection className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-16 tracking-wide">
            Notre Expertise Inégalée
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300 text-lg font-semibold leading-relaxed">
            Avec des années d’expérience et des certifications reconnues, nous transformons la sécurité IT de nos clients en un avantage compétitif clair.
            <br />
            Voici comment nous faisons la différence.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {expertises.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                className="flex items-start space-x-5 bg-orange-50 dark:bg-orange-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                role="listitem"
                aria-label={item}
                tabIndex={0}
              >
                <CheckCircle
                  size={32}
                  className="flex-shrink-0 text-orange-600 group-hover:text-orange-700 transition-colors duration-300"
                  aria-hidden="true"
                />
                <span className="text-gray-900 dark:text-gray-100 font-semibold text-lg leading-snug group-hover:text-orange-700 transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </FadeInUpSection>

      {/* PARTENAIRES */}
      <FadeInUpSection className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-orange-600">
            Nos partenaires technologiques
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            Nous collaborons avec les leaders du secteur pour vous offrir les meilleures solutions IT, fiables et innovantes.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partenaires.map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg w-44 h-28 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
                title={`Partenaire : ${partner.name}`}
                aria-label={`Logo de ${partner.name}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </FadeInUpSection>

      {/* BROCHURE PDF */}
      <FadeInUpSection className="py-12 text-center">
        <Link
          to="/docs/catalogue-ivoprest.pdf"
          target="_blank"
          className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition"
        >
          <Download size={20} />
          Télécharger la brochure
        </Link>
      </FadeInUpSection>
    </main>
  );
};

export default IntegrationSolutionPage;
