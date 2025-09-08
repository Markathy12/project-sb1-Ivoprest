import React from "react";
import {
  Wifi,
  ShieldCheck,
  Server,
  Lock,
  CheckCircle2,
  Users,
  Activity,
  Database,
  Headset,
  Clock,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const expertises = [
  "Pare-feux NGFW et IDS/IPS pour bloquer les attaques.",
  "Segmentation réseau pour un contrôle d’accès strict.",
  "VPN chiffré pour sécuriser les communications.",
  "Surveillance continue avec alertes en temps réel.",
  "Audit et gestion proactive des menaces.",
];

const services = [
  {
    icon: <Wifi size={32} className="text-orange-600" />,
    image: "/images/firewall.jpg",
    title: "Firewall & IDS/IPS",
    description:
      "Blocage des attaques en temps réel et détection avancée des intrusions.",
  },
  {
    icon: <ShieldCheck size={32} className="text-orange-600" />,
    image: "/images/segmentation.jpg",
    title: "Segmentation réseau",
    description:
      "Isolation des segments critiques pour réduire la propagation des menaces.",
  },
  {
    icon: <Server size={32} className="text-orange-600" />,
    image: "/images/vpn.jpg",
    title: "VPN & Chiffrement",
    description: "Communications chiffrées et accès distants sécurisés.",
  },
  {
    icon: <Lock size={32} className="text-orange-600" />,
    image: "/images/monitoring.jpg",
    title: "Surveillance & Audit",
    description:
      "Monitoring continu et audits réguliers pour détecter les anomalies.",
  },
];

const partners = [
  { name: "Cisco", logo: "/logos/sophos.png" },
  { name: "Fortinet", logo: "/logos/fortinet.png" },
  { name: "Palo Alto", logo: "/logos/wallix.png" },
];

const caseStudies = [
  {
    image: "/images/case-network.jpg",
    title: "Banque : Zéro incident en 6 mois",
    result: "Pare-feux NGFW et IDS : incidents critiques réduits à 0.",
  },
  {
    image: "/images/case-vpn.jpg",
    title: "PME : Télétravail sécurisé",
    result: "VPN chiffré : connexions distantes sécurisées à 100%.",
  },
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const SecurityNetworksPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900">
      {/* HERO */}
      <motion.section
        className="relative h-[500px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeInUpVariant}
      >
        <div className="absolute inset-0">
          <img
            src="/images/security-network-hero.jpg"
            alt="Sécurité réseau"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-white px-6 text-center max-w-6xl mx-auto">
          <div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Sécurisez votre infrastructure réseau
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Protégez vos données, vos utilisateurs et votre continuité métier.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section Sécurité des Réseaux */}
      <motion.section
        className="py-16 px-6 -mt-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeInUpVariant}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Texte + logos */}
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-6 mb-6">
                  <img
                    src="/logos/fortinet1.png"
                    alt="Fortinet"
                    className="h-10"
                  />
                  <img src="/logos/wallix.png" alt="Wallix" className="h-8" />
                  <img src="/logos/sophos.png" alt="Sophos" className="h-8" />
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Sécurisez vos réseaux avec les leaders du marché
                </h2>

                <p className="text-base lg:text-lg text-slate-600 mb-6">
                  Ivoprest déploie des solutions de sécurité réseau robustes
                  grâce à ses partenaires stratégiques :{" "}
                  <strong className="text-orange-600"> Fortinet</strong> pour le
                  pare-feu nouvelle génération,{" "}
                  <strong className="text-orange-600"> Wallix</strong> pour la
                  gestion des accès à privilèges, et{" "}
                  <strong className="text-orange-600">Sophos</strong> pour la
                  détection intelligente des menaces.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      24/7
                    </div>
                    <div className="text-sm text-slate-600">
                      Surveillance active
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      99.9%
                    </div>
                    <div className="text-sm text-slate-600">
                      Réseaux sécurisés
                    </div>
                  </div>
                </div>
              </div>

              {/* Image interface */}
              <div className="relative">
                <img
                  src="/images/network-firewall-dashboard.jpg"
                  alt="Dashboard Sécurité Réseau"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section Les Défis – Sécurité des Réseaux */}
      <section className="w-full bg-gray-50 py-28 px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
              Les Défis
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mt-4">
              Sécurité des réseaux : un enjeu stratégique
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Les entreprises doivent protéger leurs infrastructures réseau
              contre les menaces croissantes. Les failles, les erreurs
              techniques et la réactivité limitée peuvent compromettre la
              sécurité et la continuité des services.
            </p>
          </div>

          {/* Contenu principal */}
          <div className="flex lg:gap-16 items-stretch flex-col lg:flex-row">
            {/* Image illustrative à gauche */}
            <div className="flex-1 h-auto mb-10 lg:mb-0">
              <video
                src="/videos/network-challenges.mp4"
                autoPlay
                loop
                muted
                playsInline
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
                  Menaces ciblées
                </h3>
                <p className="text-gray-600">
                  Les attaques sophistiquées ciblent directement les systèmes
                  critiques, compromettant la confidentialité et l’intégrité des
                  données.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-red-600">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Erreurs techniques
                </h3>
                <p className="text-gray-600">
                  Les mauvaises configurations, bugs ou erreurs humaines peuvent
                  créer des vulnérabilités exploitables par des attaquants.
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
                  Certaines vulnérabilités restent indétectées jusqu’à ce
                  qu’elles soient exploitées, mettant en péril l’ensemble du
                  réseau.
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
                  Un temps de réaction lent face aux incidents réseau peut
                  amplifier les dommages et compromettre la continuité des
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Solutions – Sécurité des Réseaux */}
      <section className="w-full bg-gray-50 py-28 px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
              Nos Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mt-4">
              Sécurisez vos réseaux
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ivoprest propose des solutions de sécurité réseau complètes pour
              protéger vos infrastructures contre les cyberattaques, réduire les
              risques et assurer la continuité de vos services.
            </p>
          </div>

          {/* Contenu principal */}
          <div className="flex lg:gap-16 items-stretch flex-col lg:flex-row">
            {/* Cartes solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1 mb-10 lg:mb-0">
              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Pare-feu et prévention d’intrusions
                </h3>
                <p className="text-gray-600">
                  Déployez des pare-feux avancés et des systèmes IDS/IPS pour
                  bloquer les attaques avant qu’elles n’affectent votre réseau.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <Server size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Segmentation et contrôle d’accès
                </h3>
                <p className="text-gray-600">
                  Séparez les segments réseau et appliquez des politiques
                  strictes pour limiter la propagation des menaces.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <Lock size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Chiffrement et VPN
                </h3>
                <p className="text-gray-600">
                  Assurez la confidentialité et l’intégrité des données en
                  transit grâce à des VPN sécurisés et un chiffrement robuste.
                </p>
              </div>

              <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-green-600">
                  <Activity size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Monitoring et alertes en temps réel
                </h3>
                <p className="text-gray-600">
                  Surveillez l’activité réseau et recevez des alertes immédiates
                  pour intervenir rapidement en cas d’incident.
                </p>
              </div>
            </div>

            {/* Image illustrative à droite */}
            <div className="flex-1 h-auto">
              <img
                src="/images/network-solutions.jpg"
                alt="Solutions de sécurité des réseaux"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
                style={{ minHeight: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Clés – Version Premium avec Animation */}
      <section className="py-24 px-6 bg-gradient-to-tr from-[#E3E9F7] to-[#F9FAFB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] mb-16 tracking-tight">
            Chiffres clés sur la cybersécurité réseau
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
                  80%
                </motion.span>
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Cyberattaques exploitant des failles réseau
              </p>
              <p className="text-gray-600 leading-relaxed">
                Une majorité des attaques ciblent directement les vulnérabilités
                réseaux.
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
                270
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Jours pour détecter une intrusion
              </p>
              <p className="text-gray-600 leading-relaxed">
                En moyenne, il faut 270 jours pour identifier une intrusion non
                détectée.
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
                50M
              </motion.div>
              <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                Coût moyen d’une cyberattaque
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les conséquences financières peuvent atteindre plusieurs
                millions de CFA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Engagement */}
      <motion.section
        className="py-16 bg-white px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        variants={fadeInUpVariant}
      >
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
      </motion.section>

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
      <motion.section
        className="py-20 px-6 text-center max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={8}
        variants={fadeInUpVariant}
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          Prêt à sécuriser vos données ?
        </h2>
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
          aria-label="Demander un devis de sécurité des données"
        >
          Demander un devis
        </button>
      </motion.section>
    </main>
  );
};

export default SecurityNetworksPage;
