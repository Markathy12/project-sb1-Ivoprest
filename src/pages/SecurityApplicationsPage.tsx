import React from "react";
import {
  ShieldCheck,
  AlertCircle,
  Activity,
  Server,
  Headset,
  Clock,
  Database,
} from "lucide-react";

const endpointSolutions = [
  {
    icon: <ShieldCheck size={40} className="text-orange-600" />,
    title: "Antivirus & EDR",
    description:
      "Détection et réponse aux menaces avec des outils EDR/NGAV de nouvelle génération.",
    image: "/images/endpoint-edr.webp",
  },
  {
    icon: <AlertCircle size={40} className="text-orange-600" />,
    title: "Contrôle des périphériques",
    description:
      "Gestion des ports USB, stockage amovible, et restriction d’exécution d’applications.",
    image: "/images/endpoint-usb.jpg",
  },
  {
    icon: <Activity size={40} className="text-orange-600" />,
    title: "Surveillance en temps réel",
    description:
      "Supervision continue des postes avec alertes sur comportements suspects.",
    image: "/images/endpoint-monitoring.jpg",
  },
  {
    icon: <Server size={40} className="text-orange-600" />,
    title: "Gestion centralisée",
    description:
      "Déploiement, configuration, et gestion des politiques de sécurité depuis une console unique.",
    image: "/images/endpoint-console.jpg",
  },
  {
    icon: <Clock size={40} className="text-orange-600" />,
    title: "Mises à jour & correctifs",
    description:
      "Automatisation des patchs de sécurité pour réduire la surface d’attaque.",
    image: "/images/endpoint-patch.jpeg",
  },
  {
    icon: <Headset size={40} className="text-orange-600" />,
    title: "Support & Assistance",
    description:
      "Intervention rapide en cas d’incident, assistance à distance sur les endpoints.",
    image: "/images/endpoint-support.jpg",
  },
];

const SecurityApplicationsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/images/hero-endpoint.jpeg"
          alt="Sécurité des Endpoints"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Sécurisez vos endpoints
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl drop-shadow-md">
            Antivirus nouvelle génération, surveillance, correctifs automatiques
            et assistance continue — une approche complète pour protéger vos
            postes de travail.
          </p>
        </div>
      </section>

      {/* Section Sécurité des Endpoints */}
      <section className="py-20 px-6 -mt-20 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Bloc gauche - texte */}
              <div className="p-16">
                {/* Logos au-dessus du titre */}
                <div className="flex flex-wrap items-center justify-start gap-8 mb-8 md:gap-12">
                  <img
                    src="/logos/fortinet1.png"
                    alt="Fortinet"
                    className="h-10 w-auto object-contain"
                  />
                  <img
                    src="/logos/sophos.png"
                    alt="Sophos"
                    className="h-10 w-auto object-contain"
                  />
                  <img
                    src="/logos/kaspersky.png"
                    alt="Kaspersky"
                    className="h-10 w-auto object-contain"
                  />
                </div>

                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  Protégez vos postes de travail et serveurs
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Des solutions EDR, antivirus nouvelle génération et détection
                  comportementale pour sécuriser tous vos endpoints.
                </p>

                {/* Statistiques */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1E3A8A]">
                      100%
                    </div>
                    <div className="text-sm text-slate-600">
                      Couverture des équipements
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1E3A8A]">0</div>
                    <div className="text-sm text-slate-600">
                      Compromission signalée
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloc droit - image dashboard */}
              <div className="relative">
                <img
                  src="/images/endpoint-dashboard.jpg"
                  alt="Interface de sécurité des Endpoints"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-28 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image à gauche */}
            <div className="flex justify-center">
              <img
                src="/images/endpoint-security.png"
                alt="Sécurité des Endpoints"
                className="rounded-2xl shadow-lg max-w-full"
              />
            </div>

            {/* Texte à droite */}
            <div>
              <h2 className="text-5xl font-extrabold text-[#1E3A8A] mb-6">
                Défis en matière de Sécurité des Endpoints
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Les endpoints représentent l’une des principales portes d’entrée
                des cyberattaques. La diversité des appareils et la mobilité des
                collaborateurs multiplient les risques et compliquent la
                sécurisation.
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#1E3A8A] text-white rounded-full text-sm font-bold mr-3">
                    1
                  </span>
                  Multiplication des appareils (ordinateurs, smartphones,
                  tablettes) difficiles à gérer.
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#1E3A8A] text-white rounded-full text-sm font-bold mr-3">
                    2
                  </span>
                  Failles dues aux mises à jour et correctifs non appliqués.
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#1E3A8A] text-white rounded-full text-sm font-bold mr-3">
                    3
                  </span>
                  Ransomwares, malwares et attaques ciblant directement les
                  postes utilisateurs.
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#1E3A8A] text-white rounded-full text-sm font-bold mr-3">
                    4
                  </span>
                  Risques liés à la perte ou au vol d’appareils contenant des
                  données sensibles.
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#1E3A8A] text-white rounded-full text-sm font-bold mr-3">
                    5
                  </span>
                  Sensibilisation insuffisante des utilisateurs face au phishing
                  et autres attaques.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-28 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte à gauche */}
            <div>
              <h2 className="text-5xl font-extrabold text-[#1E3A8A] mb-6">
                Nos Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pour répondre efficacement aux défis de sécurité des endpoints,
                nous mettons en place des solutions robustes, évolutives et
                adaptées aux environnements professionnels modernes. Nos
                approches garantissent la protection proactive des postes de
                travail, serveurs et appareils mobiles.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center mr-4">
                    ✓
                  </span>
                  <p className="text-gray-700 text-lg">
                    Déploiement d’antivirus et d’EDR (Endpoint Detection &
                    Response) avancés.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center mr-4">
                    ✓
                  </span>
                  <p className="text-gray-700 text-lg">
                    Gestion centralisée des mises à jour et correctifs de
                    sécurité.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center mr-4">
                    ✓
                  </span>
                  <p className="text-gray-700 text-lg">
                    Authentification multi-facteurs pour renforcer la protection
                    des accès.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center mr-4">
                    ✓
                  </span>
                  <p className="text-gray-700 text-lg">
                    Surveillance continue et réponse aux incidents en temps
                    réel.
                  </p>
                </li>
              </ul>
            </div>

            {/* Image à droite */}
            <div className="flex justify-center">
              <img
                src="/images/solutions-endpoint-security.jpg"
                alt="Solutions de sécurité des endpoints"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-slate-800 mb-4">
            Nos solutions pour la sécurité des endpoints
          </h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            Protégez efficacement vos postes utilisateurs, serveurs et
            équipements mobiles contre toutes les menaces.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {endpointSolutions.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus en images - Sécurité des Endpoints */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            Sécurité des Endpoints : notre approche en 4 étapes
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse des Risques",
                image: "/images/endpoint-risk-analysis.jpg",
                desc: "Évaluation des vulnérabilités sur les postes, serveurs et mobiles",
              },
              {
                step: "02",
                title: "Déploiement EDR/XDR",
                image: "/images/endpoint-deployment.jpeg",
                desc: "Installation de solutions avancées de protection et détection",
              },
              {
                step: "03",
                title: "Monitoring Continu",
                image: "/images/endpoint-monitoring.jpg",
                desc: "Surveillance des terminaux avec alertes et réponse automatisée",
              },
              {
                step: "04",
                title: "Mises à jour & Renforcement",
                image: "/images/endpoint-hardening.jpg",
                desc: "Gestion des correctifs, durcissement des systèmes et audits réguliers",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {process.title}
                </h3>
                <p className="text-slate-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            {
              icon: (
                <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-white opacity-90" />
              ),
              number: "100%",
              label: "Postes couverts",
            },
            {
              icon: (
                <Database className="mx-auto mb-3 h-8 w-8 text-white opacity-90" />
              ),
              number: "15K+",
              label: "Endpoints supervisés",
            },
            {
              icon: (
                <Clock className="mx-auto mb-3 h-8 w-8 text-white opacity-90" />
              ),
              number: "90 sec",
              label: "Temps moyen de réaction",
            },
            {
              icon: (
                <Headset className="mx-auto mb-3 h-8 w-8 text-white opacity-90" />
              ),
              number: "24/7",
              label: "Support dédié",
            },
          ].map(({ icon, number, label }, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {icon}
              <div className="text-4xl font-extrabold leading-none">
                {number}
              </div>
              <div className="mt-1 text-lg font-semibold tracking-wide">
                {label}
              </div>
            </div>
          ))}
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


      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary-600 mb-8">
          Prêt à sécuriser vos endpoints ?
        </h2>
        <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-400">
          Demander un audit
        </button>
      </section>
    </main>
  );
};

export default SecurityApplicationsPage;
