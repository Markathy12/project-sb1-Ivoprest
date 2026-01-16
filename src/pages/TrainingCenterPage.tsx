import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Assure-toi d'importer cette icône
import {
  BookOpen,
  Users,
  ShieldCheck,
  Award,
  CheckCircle2,
  Settings, // Ajouté pour les icônes de certification
  Briefcase, // Ajouté pour les icônes de certification
} from "lucide-react";
// ⚡️ N'oublie pas d'installer react-slick et slick-carousel :
// import Slider from 'react-slick'; 
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// ⚡️ Assure-toi que ce chemin est correct
import AnimatedStat from "../components/AnimatedStat"; 

const TrainingCenterPage: React.FC = () => {
  
  // DONNÉES 1 : STATISTIQUES (pour AnimatedStat)
  const statsData = [
    { icon: <Users size={36} />, label: "Apprenants formés", value: 1500, suffix: "+" },
    { icon: <ShieldCheck size={36} />, label: "Formations certifiées", value: 30, suffix: "+" },
    { icon: <Award size={36} />, label: "Partenaires internationaux", value: 5, suffix: "+" },
    { icon: <BookOpen size={36} />, label: "Heures de cours", value: 20000, suffix: "+" },
  ];

  // DONNÉES 2 : CERTIFICATIONS DÉTAILLÉES (pour les fiches)
  const certifications = [
    { 
      title: "Certified Ethical Hacker (CEH) V12", 
      desc: "Maîtrisez les techniques de hacking éthique pour tester la sécurité des systèmes et réseaux.", 
      icon: <ShieldCheck size={24} />, 
      available: true, 
      level: "Expert" 
    },
    { 
      title: "ISO 27001 Lead Auditor", 
      desc: "Auditez et maintenez les Systèmes de Management de la Sécurité de l'Information (SMSI).", 
      icon: <Briefcase size={24} />, 
      available: true, 
      level: "Management" 
    },
    { 
      title: "Cisco Certified Network Associate (CCNA)", 
      desc: "Fondamentaux du réseau, configuration des switchs, routeurs et protocoles IP.", 
      icon: <Settings size={24} />, 
      available: true, 
      level: "Fondation" 
    },
    { 
      title: "Certified Network Defender (CND) V2", 
      desc: "Défendez les réseaux d'entreprise contre les cyberattaques modernes et sophistiquées.", 
      icon: <ShieldCheck size={24} />, 
      available: false, 
      level: "Avancé" 
    },
    // Ajoutez d'autres certifications ici...
  ];

  // DONNÉES 3 : PARTENAIRES (pour le carrousel ou la simple liste)
  const partners = [
    "/logos/ec-council.png",
    "/logos/cisco-logo.png",
    "/logos/microsoft.png",
    "/logos/pecb.png",
    "/logos/compTIA.png",
    "/logos/pearson.png",
    // Remplissez avec les logos de vos partenaires majeurs
  ];

  /* // Configuration pour le Slider (si vous l'installez)
  const sliderSettings = {
      dots: false, infinite: true, slidesToShow: 6, slidesToScroll: 1, autoplay: true,
      speed: 3000, autoplaySpeed: 0, cssEase: 'linear', arrows: false, pauseOnHover: true,
      responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 4 } },
          { breakpoint: 600, settings: { slidesToShow: 3 } },
          { breakpoint: 480, settings: { slidesToShow: 2 } },
      ],
  };
  */


  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section (INCHANGÉ) */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img
          src="/images/formation-slide1.jpg"
          alt="Centre de formation cybersécurité"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Centre de Formation
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Formations certifiantes avec nos partenaires internationaux
            (EC-Council, PECB, Pearson Vue, FDFP). Développez vos compétences
            pour un avenir numérique sécurisé.
          </p>
          <button className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-2xl shadow hover:bg-primary-600 transition">
            Découvrir nos formations
          </button>
        </motion.div>
      </section>

      {/* ⚡️ STATISTIQUES ANIMÉES (Utilise AnimatedStat) */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">
        {statsData.map((stat, i) => (
          <AnimatedStat
            key={i}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            delay={i * 0.15} 
          />
        ))}
      </section>

      {/* Nos Prestations - NOUVELLE VERSION IMPACTANTE */}
<section className="py-20 px-6 bg-white"> {/* Changement de couleur de fond pour la mettre en valeur */}
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      L'Excellence à votre Service
    </h2>
    <p className="text-xl text-gray-600 font-light">
      Trois axes de formation pour garantir votre succès et celui de vos équipes.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        title: "Formations Certifiantes",
        desc: "Préparez vos certifications internationales en cybersécurité et IT. Des cours intensifs menant à l'obtention de titres reconnus mondialement.",
        link: "/services/formations-certifiantes",
        img: "/images/formation-slide3.jpg",
        icon: <CheckCircle2 className="w-8 h-8" />,
        color: "text-blue-500", // Utiliser la couleur primaire
      },
      {
        title: "Ateliers Pratiques (Labs)",
        link: "/services/ateliers-pratiques",
        desc: "Mettez en pratique vos compétences dans nos labs spécialisés. Apprentissage par l'action sur des scénarios réels et des plateformes dédiées.",
        img: "/images/workshop.jpg",
        icon: <Users className="w-8 h-8" />,
        color: "text-green-500", // Utiliser la couleur secondaire (ou une autre couleur d'accent)
      },
      {
        title: "Formations en Entreprise (Sur Mesure)",
        link: "/services/formations-sur-mesure",
        desc: "Programmes personnalisés pour renforcer les compétences de vos équipes. Contenu adapté, délivré sur site ou à distance.",
        img: "/images/team-training.jpg",
        icon: <Briefcase className="w-8 h-8" />,
        color: "text-yellow-500", // Une couleur différente pour le troisième accent
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: i * 0.15 }}
      >
        {/* Image en arrière-plan avec un effet de grisaille */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-80 object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40"
        />

        {/* Overlay pour l'effet de survol (couleur subtile) */}
        <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-primary-900/70"></div>

        {/* Contenu de la carte */}
        <div className="absolute inset-0 flex flex-col justify-end text-white p-8">
          <div className="transition-transform duration-500 group-hover:-translate-y-4">

            {/* Icone et Titre (toujours visible) */}
            <div className={`mb-3 ${item.color}`}>
              {item.icon}
            </div>
            
            <h3 className="text-3xl font-extrabold mb-3">
              {item.title}
            </h3>

            {/* Description (apparaît ou se révèle mieux au survol) */}
            <p className="text-gray-200 opacity-90 transition-opacity duration-500 group-hover:opacity-100">
              {item.desc}
            </p>
          </div>
        </div>
        
        {/* Lien de la carte */}
        <a href={item.link} className="absolute inset-0 z-10" title={item.title}>
      <span className="sr-only">Découvrir {item.title}</span>
    </a>
      </motion.div>
    ))}
  </div>
</section>

      {/* ⚡️ NOUVEAU BLOC : PARTENAIRES OFFICIELS (Liste simple pour l'instant) */}
      <section className="py-16 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Nos Partenariats <span className="text-primary-500">Officiels</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Nous sommes centres d'examen agréés par les leaders du secteur.
          </p>
        </div>

        <div className="logos-slider max-w-7xl mx-auto py-4">
          {/* Si vous installez react-slick, remplacez par <Slider {...sliderSettings}> */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80"> 
          {partners.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="Logo Partenaire"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          ))}
          </div>
          {/* Si vous installez react-slick, ajoutez </Slider> */}
        </div>
      </section>


      {/* ⚡️ NOUVEAU BLOC : CERTIFICATIONS DÉTAILLÉES (Remplace l'ancien Bloc 3) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Parcourez toutes nos Certifications
          </h2>
          <p className="text-lg text-gray-600">
            Choisissez votre parcours parmi les certifications les plus demandées sur le marché.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl shadow-lg border-t-4 ${cert.available ? 'border-primary-500 bg-white' : 'border-gray-400 bg-gray-200'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-full mr-3 ${cert.available ? 'bg-primary-100 text-primary-500' : 'bg-gray-300 text-gray-500'}`}>
                  {cert.icon}
                </div>
                <span className={`font-semibold text-sm px-3 py-1 rounded-full ${cert.available ? 'bg-secondary-100 text-secondary-700' : 'bg-gray-300 text-gray-700'}`}>
                  {cert.level}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">{cert.desc}</p>
              
              {cert.available ? (
                <a
                  href={`/inscription/${cert.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="inline-block text-primary-500 font-semibold hover:text-primary-700 transition"
                >
                  Voir les sessions &rarr;
                </a>
              ) : (
                <span className="text-gray-500 italic text-sm">Bientôt disponible</span>
              )}
            </motion.div>
          ))}
        </div>
      </section>


      {/* ⚡️ CATALOGUE FORMATION - NOUVELLE VERSION ASYMÉTRIQUE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100">
          <div className="grid lg:grid-cols-2 items-center">

            {/* Colonne Gauche : Aperçu Visuel (Maquette) */}
            <div className="relative h-96 bg-primary-800 flex items-center justify-center p-12 lg:p-16">
              <div className="absolute inset-0 opacity-20 z-0">
                <img
                  src="/images/bg-cyber-map.png"
                  alt="background pattern"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="relative z-10 p-6 rounded-xl bg-white shadow-xl transform rotate-3"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                <div className="w-48 h-64 border-4 border-primary-500 flex items-center justify-center bg-gray-100 rounded-lg">
                  <BookOpen className="w-12 h-12 text-primary-500" />
                </div>
              </motion.div>
            </div>

            {/* Colonne Droite : Texte et CTA */}
            <motion.div
              className="p-10 lg:p-16 text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Accédez à la source : Téléchargez notre <span className="text-primary-500">Catalogue 2026</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Obtenez le guide complet de nos formations certifiantes. Détails des modules, prérequis, tarifs, et dates de sessions, le tout résumé dans un document pratique.
              </p>

              <motion.a
                href="/docs/catalogue-formation.pdf"
                download
                className="inline-flex items-center bg-secondary-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-secondary-600 transition-colors text-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Télécharger gratuitement (PDF)</span>
                <svg
                  className="ml-3 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc 7 : Section FAQ interactive - AMÉLIORÉE */}
<section className="py-20 px-6 max-w-4xl mx-auto">
  <h2 className="text-4xl font-extrabold text-center mb-12">
    Foire Aux Questions (FAQ)
  </h2>
  <div className="space-y-4">
    {[
      // Tes données FAQ existantes
      {
        question: "Quels prérequis pour suivre vos formations ?",
        answer: "Aucun prérequis strict, mais des bases en informatique sont recommandées. Chaque formation a sa page de prérequis détaillée.",
      },
      {
        question: "Les formations sont-elles certifiantes ?",
        answer: "Oui, toutes nos formations certifiantes sont reconnues internationalement et donnent lieu à des examens officiels.",
      },
      {
        question: "Peut-on suivre les formations à distance ?",
        answer: "Oui, nous proposons des modules en ligne (e-learning et classes virtuelles) avec support live et exercices pratiques.",
      },
    ].map((faq, i) => (
      <details 
        key={i} 
        className="group bg-white rounded-xl p-4 shadow-md transition-all duration-300 open:shadow-lg open:bg-blue-50 border-t-2 border-transparent open:border-primary-500"
      >
        <summary className="cursor-pointer font-semibold flex justify-between items-center text-lg text-gray-800 hover:text-primary-600 transition">
          {faq.question}
          <ChevronDown className="w-6 h-6 transform transition-transform duration-300 group-open:rotate-180 text-primary-500" />
        </summary>
        <p className="mt-4 pt-3 border-t border-gray-200 text-gray-700 leading-relaxed">
          {faq.answer}
        </p>
      </details>
    ))}
  </div>
</section>

      {/* CTA Final - AMÉLIORÉ (Double Action) */}
<section className="py-24 px-6 bg-primary-800 text-center text-white relative overflow-hidden">
  
  {/* Optionnel : Ajout d'un fond décoratif pour l'énergie */}
  <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
  <div className="absolute inset-0 bg-dots-pattern opacity-10"></div> 
  
  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-5xl font-extrabold mb-6">
      Prêt à <span className="text-secondary-500">Transformer</span> Votre Carrière ?
    </h2>
    <p className="text-xl text-gray-200 mb-10">
      Commencez directement votre inscription pour sécuriser votre place.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <motion.a 
        href="/contact"
        className="px-8 py-4 bg-secondary-500 text-white font-extrabold rounded-full shadow-xl hover:bg-secondary-600 transition text-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contacter un Conseiller &rarr;
      </motion.a>

      <motion.a 
        href="/inscription" 
        className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition text-lg border border-transparent hover:border-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Voir les Prochaines Sessions
      </motion.a>
    </div>
  </div>
</section>
    </div>
  );
};

export default TrainingCenterPage;