import React from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Lock,
  Users,
  Cloud,
  ShieldCheck,
  Activity,
  FileText,
  Server,
  Clock,
  Headset,
  Database,
} from "lucide-react";

const solutions = [
  {
    icon: <AlertCircle size={40} className="text-orange-600" />,
    title: "Audit & Analyse des Risques",
    description:
      "Évaluation complète de la sécurité, cartographie des données sensibles, analyse des vulnérabilités techniques, humaines et organisationnelles.",
    image: "/images/audit-risques.jpg",
  },
  {
    icon: <Lock size={40} className="text-orange-600" />,
    title: "Protection des Données",
    description:
      "Chiffrement AES-256, stockage sécurisé, protection des données au repos et en transit.",
    image: "/images/protection-donnees.jpg",
  },
  {
    icon: <Users size={40} className="text-orange-600" />,
    title: "Contrôle des Accès & Identité",
    description:
      "IAM, MFA, SSO, gestion des rôles (RBAC/ABAC) pour une sécurité maximale et gestion fluide des utilisateurs.",
    image: "/images/controle-acces.jpg",
  },
  {
    icon: <Cloud size={40} className="text-orange-600" />,
    title: "Sauvegarde & Reprise",
    description:
      "Solutions de sauvegarde locales, cloud et distantes avec PRA/PCA, basées sur Veeam, Acronis, etc.",
    image: "/images/sauvegarde-pra.jpg",
  },
  {
    icon: <ShieldCheck size={40} className="text-orange-600" />,
    title: "Protection contre les menaces",
    description:
      "Pare-feux NGFW, EDR/XDR, antivirus centralisé pour bloquer les cyberattaques en temps réel.",
    image: "/images/defense-menaces.jpg",
  },
  {
    icon: <Activity size={40} className="text-orange-600" />,
    title: "Supervision & Alertes",
    description:
      "SIEM (Microsoft Sentinel, Splunk), monitoring en temps réel, alertes et reporting automatisés.",
    image: "/images/supervision.jpg",
  },
  {
    icon: <FileText size={40} className="text-orange-600" />,
    title: "Sensibilisation & Conformité",
    description:
      "Formations, politiques de sécurité (PSSI), conformité RGPD, ISO 27001, etc.",
    image: "/images/conformite.jpg",
  },
  {
    icon: <Server size={40} className="text-orange-600" />,
    title: "Support & Accompagnement",
    description:
      "Support proactif, évolutivité des solutions, tableau de bord de pilotage de la sécurité.",
    image: "/images/support.jpg",
  },
];

const DataSecurityPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/images/hero-data-security.jpg"
          alt="Sécurité des données"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 max-w-5xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
            tabIndex={0}
          >
            Protégez vos données critiques avec Ivoprest
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl drop-shadow-md">
            Audit, protection, supervision, conformité et support — une approche
            globale et experte pour la sécurité de votre système d’information.
          </p>
        </div>
      </section>

      {/* Section Kaspersky, Wallix avec deux logos */}
      <section className="py-20 px-6 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-16">
                {/* Conteneur des logos en flex */}
                <div className="flex items-center space-x-8 mb-8">
                  <img
                    src="/images/kaspersky-logo-large.png"
                    alt="Kaspersky"
                    className="h-12"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  Protection avancée des données
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Grâce aux solutions reconnues de <strong>Kaspersky</strong>,
                  sécurisez efficacement vos données sensibles, bénéficiez de
                  technologies de chiffrement avancées et d’une gestion
                  rigoureuse des accès.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">
                      AES-256
                    </div>
                    <div className="text-sm text-slate-600">
                      Chiffrement militaire
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">
                      MFA & IAM
                    </div>
                    <div className="text-sm text-slate-600">
                      Contrôle d’accès renforcé
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/protection-data-dashboard.jpg" // Image illustrative à remplacer
                  alt="Interface Protection des données"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Les Défis – Sécurité des données */}
      <section className="w-full bg-gray-50 py-28 px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
              Les Défis
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mt-4">
              Sécurité des données : enjeux majeurs pour les entreprises
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Les entreprises font face à des menaces croissantes et à des
              risques techniques constants. La protection des données sensibles
              est essentielle pour garantir la continuité de l’activité et la
              confiance des clients.
            </p>
          </div>

          {/* Contenu principal */}
          <div className="flex lg:gap-16 items-stretch flex-col lg:flex-row">
            {/* Image illustrative à gauche */}
            <div className="flex-1 h-auto mb-10 lg:mb-0">
              <img
                src="/images/data-security-challenges.jpg"
                alt="Défis de la sécurité des données"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
                style={{ minHeight: 0 }}
              />
            </div>

            {/* Cartes Défis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1">
              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Menaces ciblées
                </h3>
                <p className="text-gray-600">
                  Les attaques sophistiquées, comme le phishing ou le
                  ransomware, visent directement les données sensibles.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <Server size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Erreurs techniques
                </h3>
                <p className="text-gray-600">
                  Mauvaises configurations, bugs ou erreurs humaines peuvent
                  provoquer des fuites ou pertes de données.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <Database size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Failles invisibles
                </h3>
                <p className="text-gray-600">
                  Les vulnérabilités inconnues dans les systèmes ou logiciels
                  exposent les données sans qu’on s’en rende compte.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <Clock size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Réactivité limitée
                </h3>
                <p className="text-gray-600">
                  Une détection et une réaction tardives aux incidents peuvent
                  amplifier les dommages sur les données.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solutions – Sécurité des données */}
      <section className="w-full bg-gray-50 py-28 px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
              Nos Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mt-4">
              Sécurisez vos données et renforcez votre résilience
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ivoprest propose des solutions complètes pour protéger vos données
              contre les menaces, garantir leur intégrité et assurer la
              continuité de vos activités.
            </p>
          </div>

          {/* Contenu principal */}
          <div className="flex lg:gap-16 items-stretch flex-col lg:flex-row">
            {/* Cartes Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1 mb-10 lg:mb-0">
              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Protection avancée contre les cyberattaques
                </h3>
                <p className="text-gray-600">
                  Déploiement de solutions de détection et de prévention pour
                  bloquer ransomware, phishing et intrusions.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <Server size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sécurisation des accès et chiffrement
                </h3>
                <p className="text-gray-600">
                  Gestion fine des accès et chiffrement des données pour
                  prévenir toute fuite ou altération.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <Database size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Surveillance continue et alertes en temps réel
                </h3>
                <p className="text-gray-600">
                  Monitoring permanent des systèmes pour détecter et répondre
                  rapidement aux incidents de sécurité.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <Clock size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Conformité et résilience
                </h3>
                <p className="text-gray-600">
                  Respect des réglementations (RGPD, ISO) et mise en place de
                  plans de continuité pour limiter l’impact des incidents.
                </p>
              </div>
            </div>

            {/* Image illustrative à droite */}
            <div className="flex-1 h-auto">
              <img
                src="/images/data-security-solutions.jpg"
                alt="Solutions de sécurité des données"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
                style={{ minHeight: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Clés – Sécurité des données */}
      <section className="py-24 px-6 bg-gradient-to-tr from-[#E3E9F7] to-[#F9FAFB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] mb-16 tracking-tight">
            Chiffres clés sur la sécurité des données
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
                  65%
                </motion.span>
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Entreprises victimes de pertes de données
              </p>
              <p className="text-gray-600 leading-relaxed">
                Plus de 6 entreprises sur 10 subissent des pertes de données
                critiques chaque année.
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
                32
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Jours pour restaurer des données perdues
              </p>
              <p className="text-gray-600 leading-relaxed">
                En moyenne, il faut plus d’un mois pour récupérer complètement
                des données critiques après un incident.
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
                120M
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Coût moyen d’une fuite de données
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les pertes financières liées aux violations de données peuvent
                atteindre des dizaines voire centaines de millions de CFA.
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
            Nos partenaires
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
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          Prêt à sécuriser vos données ?
        </h2>
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
          aria-label="Demander un devis de sécurité des données"
        >
          Demander un devis
        </button>
      </section>
    </main>
  );
};

export default DataSecurityPage;
