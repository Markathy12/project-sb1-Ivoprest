import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  RefreshCcw,
  ShieldCheck,
  HardDrive,
  Lock,
  Server,
  CheckCircle,
  Clock,
  Shield,
  Play,
  ArrowRight,
  Users,
  Activity,
  Headset,
  AlertTriangle,
} from "lucide-react";

const BackupReplicationPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* HERO avec image de fond */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-datacenter-servers.jpg"
            alt="Centre de données moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-8 leading-tight">
              Sauvegarde & <span className="text-secondary-500">Réplication</span>
            </h1>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Des solutions fiables pour protéger vos données et assurer la
              continuité de votre activité.
            </p>
          </div>
        </div>
      </section>

      {/* Section Veeam avec vraie interface */}
      <section className="py-20 px-6 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-16">
                <img
                  src="/images/veeam-logo-large.png"
                  alt="Veeam"
                  className="h-12 mb-8"
                />
                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  La référence mondiale en sauvegarde
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Plus de <strong>450,000 entreprises</strong> font confiance à
                  Veeam pour protéger leurs données critiques.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">
                      99.9%
                    </div>
                    <div className="text-sm text-slate-600">Disponibilité</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">
                      15min
                    </div>
                    <div className="text-sm text-slate-600">
                      Temps de récupération
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/veeam-dashboard-screenshot.jpg"
                  alt="Interface Veeam Backup & Replication"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Les Défis – Sauvegarde & Protection */}
      <section className="w-full bg-gray-50 py-28 px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
              Les Défis
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mt-4">
              Sauvegarde des données : un enjeu critique
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Les entreprises font face à des risques majeurs en matière de
              sauvegarde. Les données critiques doivent être protégées contre
              les pertes, les attaques et les sinistres afin d’assurer la
              continuité des activités.
            </p>
          </div>

          {/* Contenu principal */}
          <div className="flex lg:gap-16 items-stretch flex-col lg:flex-row">
            {/* Image illustrative à gauche */}
            <div className="flex-1 h-auto mb-10 lg:mb-0">
              <img
                src="/images/backup-challenges.jpg"
                alt="Défis de la sauvegarde des données"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
                style={{ minHeight: 0 }}
              />
            </div>

            {/* Cartes Défis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1">
              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <Server size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Perte de données critiques
                </h3>
                <p className="text-gray-600">
                  Défaillance matérielle, erreurs humaines ou suppressions
                  accidentelles peuvent entraîner la disparition d’informations
                  vitales.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cyberattaques et ransomwares
                </h3>
                <p className="text-gray-600">
                  Les sauvegardes locales peuvent aussi être chiffrées ou
                  détruites si elles ne sont pas isolées et sécurisées.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <Database size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sinistres et continuité d’activité
                </h3>
                <p className="text-gray-600">
                  Incendies, inondations ou pannes électriques rendent les
                  sauvegardes physiques inutilisables sans réplication Cloud.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <Clock size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Volume et conformité
                </h3>
                <p className="text-gray-600">
                  La croissance exponentielle des données et les réglementations
                  (comme le RGPD) exigent des sauvegardes fiables et évolutives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Solutions – Sauvegarde & Réplication */}
      <section className="w-full bg-gray-50 py-28 px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
              Nos Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mt-4">
              Sauvegarde et réplication fiables
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              <strong>Esay Corporation</strong> fournit des solutions complètes pour protéger vos
              données, assurer leur continuité et garantir la résilience de vos
              activités.
            </p>
          </div>

          {/* Contenu principal */}
          <div className="flex lg:gap-16 items-stretch flex-col lg:flex-row">
            {/* Cartes solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1">
              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <Database size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sauvegarde automatisée et centralisée
                </h3>
                <p className="text-gray-600">
                  Planifiez et centralisez vos sauvegardes pour réduire les
                  risques liés aux erreurs humaines et garantir l’intégrité de
                  vos données.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <RefreshCcw size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Réplication temps réel
                </h3>
                <p className="text-gray-600">
                  Assurez une copie instantanée de vos données critiques entre
                  plusieurs sites pour une continuité d’activité maximale.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sécurité et chiffrement avancés
                </h3>
                <p className="text-gray-600">
                  Protégez vos sauvegardes avec des protocoles de chiffrement et
                  un contrôle strict des accès pour éviter toute fuite ou
                  corruption.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <Clock size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Restauration rapide et flexible
                </h3>
                <p className="text-gray-600">
                  Restaurations partielles ou complètes en un temps record pour
                  minimiser l’interruption de vos services.
                </p>
              </div>
            </div>

            {/* Image illustrative à droite */}
            <div className="flex-1 h-auto mb-10 lg:mb-0">
              <img
                src="/images/backup-solutions.jpg"
                alt="Solutions de sauvegarde et réplication"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
                style={{ minHeight: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Clés – Sauvegarde des Données */}
      <section className="py-24 px-6 bg-gradient-to-tr from-[#E3E9F7] to-[#F9FAFB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] mb-16 tracking-tight">
            Chiffres clés sur la sauvegarde des données
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Stat 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#1E3A8A]/20 hover:shadow-xl transition-shadow duration-300">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold text-[#1E3A8A] mb-4"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  60%
                </motion.span>
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Entreprises sans plan de sauvegarde
              </p>
              <p className="text-gray-600 leading-relaxed">
                Plus de la moitié des PME n’ont pas de stratégie de sauvegarde
                formalisée.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#1E3A8A]/20 hover:shadow-xl transition-shadow duration-300">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-5xl font-extrabold text-[#1E3A8A] mb-4"
              >
                93%
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Défaillances causées par des erreurs humaines
              </p>
              <p className="text-gray-600 leading-relaxed">
                La majorité des pertes de données proviennent d’erreurs
                techniques ou de mauvaises manipulations.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#1E3A8A]/20 hover:shadow-xl transition-shadow duration-300">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-5xl font-extrabold text-[#1E3A8A] mb-4"
              >
                70%
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Entreprises ferment après une perte massive
              </p>
              <p className="text-gray-600 leading-relaxed">
                Une grande partie des entreprises victimes d’une perte critique
                cessent leurs activités dans les mois qui suivent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Engagement */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
            Notre engagement, votre tranquillité
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1E3A8A] text-white px-5 py-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-1">Disponibilité 24/7</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Assistance continue pour toute urgence.
              </p>
            </div>

            <div className="bg-slate-700 text-white px-5 py-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-1">SLA personnalisés</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Des garanties adaptées à votre environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partenaires & Clients */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Partenaires */}
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">
            Nos partenaires technologiques
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Nous collaborons avec des leaders technologiques pour vous offrir
            les meilleures solutions.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center justify-center mb-20">
            {[
              { src: "/partenaires/partenaire2.png", alt: "Partenaire 1" },
              { src: "/logos/wallix.png", alt: "Partenaire 2" },
              { src: "/logos/tenable.png", alt: "Partenaire 3" },
              { src: "/logos/fortinet.png", alt: "Partenaire 4" },
              { src: "/logos/veeam.png", alt: "Partenaire 5" },
              { src: "/logos/sophos.png", alt: "Partenaire 6" },
            ].map(({ src, alt }, idx) => (
              <img
                key={idx}
                src={src}
                alt={alt}
                className="max-h-16 mx-auto filter grayscale opacity-70 hover:filter-none hover:opacity-100 transition duration-300"
                loading="lazy"
              />
            ))}
          </div>
          {/* Clients */}
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">
            Nos clients
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Des entreprises de toutes tailles nous font confiance pour sécuriser
            leurs données.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center justify-center">
            {[
              { src: "/images/client1.png", alt: "Client 1" },
              { src: "/images/client2.png", alt: "Client 2" },
              { src: "/images/client3.png", alt: "Client 3" },
              { src: "/images/client4.png", alt: "Client 4" },
              { src: "/images/client5.png", alt: "Client 5" },
              { src: "/images/client6.png", alt: "Client 6" },
            ].map(({ src, alt }, idx) => (
              <img
                key={idx}
                src={src}
                alt={alt}
                className="max-h-16 mx-auto filter grayscale opacity-70 hover:filter-none hover:opacity-100 transition duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary-600 mb-8">
          Prêt à sécuriser vos données ?
        </h2>
        <button
          className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-400"
          aria-label="Demander un devis de sécurité des données"
        >
          Demander un devis
        </button>
      </section>
    </main>
  );
};

export default BackupReplicationPage;
