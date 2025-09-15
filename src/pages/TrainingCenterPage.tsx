import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  BookOpen,
  Users,
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react";

const TrainingCenterPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
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

      {/* Statistiques */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">
        {[
          { icon: <Users size={36} />, label: "Apprenants formés", value: "1500+" },
          { icon: <ShieldCheck size={36} />, label: "Formations certifiées", value: "30+" },
          { icon: <Award size={36} />, label: "Partenaires internationaux", value: "5+" },
          { icon: <BookOpen size={36} />, label: "Heures de cours", value: "20 000+" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-600 mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Nos Prestations */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Nos Prestations
          </h2>
          <p className="text-lg text-gray-600">
            Des formations adaptées aux besoins des entreprises et particuliers,
            avec des experts certifiés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Formations Certifiantes",
              desc: "Préparez vos certifications internationales en cybersécurité et IT.",
              img: "/images/formation-slide3.jpg",
            },
            {
              title: "Ateliers Pratiques",
              desc: "Mettez en pratique vos compétences dans nos labs spécialisés.",
              img: "/images/workshop.jpg",
            },
            {
              title: "Formations en Entreprise",
              desc: "Programmes personnalisés pour renforcer les compétences de vos équipes.",
              img: "/images/team-training.jpg",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Témoignages 
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Ils nous font confiance
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Aminata K.",
              role: "Ingénieure Réseau",
              text: "Grâce à Ivoprest, j’ai obtenu ma certification CEH. Une équipe professionnelle et passionnée !",
              img: "/images/training/student1.jpg",
            },
            {
              name: "Jean-Marc T.",
              role: "Responsable IT",
              text: "Les ateliers pratiques m’ont permis de renforcer mes compétences en sécurité des systèmes.",
              img: "/images/training/student2.jpg",
            },
            {
              name: "Sophie B.",
              role: "Consultante Sécurité",
              text: "Une expérience unique, des formateurs disponibles et des contenus de qualité.",
              img: "/images/training/student3.jpg",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-blue-600 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Bloc 3 : Section Formations & Cursus */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Nos Formations Disponibles
          </h2>
          <p className="text-gray-600 text-lg">
            Parcourez nos formations certifiantes et voyez immédiatement celles disponibles.
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 max-w-6xl mx-auto justify-center items-center">
          {[
            { logo: "/logos/ec-council.png", available: true },
            { logo: "/logos/cisco-logo.png", available: false },
            { logo: "/logos/microsoft.png", available: true },
            { logo: "/logos/Certified Ethical Hacker (CEH) V12.png", available: true },
            { logo: "/logos/pecb.jpg", available: false },
            { logo: "/logos/compTIA.png", available: true },
            { logo: "/logos/Certified Network Defender (CND) V2.png", available: true },
            { logo: "/logos/Certified Secure Computer User (CSCU).png", available: true },
            { logo: "/logos/Cisco Certified Network Associate (CCNA).png", available: true },
            { logo: "/logos/ISO 27001 Lead Auditor.jpeg", available: true },
            { logo: "/logos/ISO 27001 Lead Implementer.jpeg", available: true },
            { logo: "/logos/iso 27001.jpeg", available: true },
            { logo: "/logos/iso 27002 Foundation.jpeg", available: true },
            { logo: "/logos/iso 27002 Manager.jpeg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
            { logo: "/logos/aws-logo.jpg", available: true },
          ].map((course, i) => (
            <div key={i} className="relative group">
              <img
                src={course.logo}
                alt="Formation Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              {/* Badge disponibilité */}
              <span
                className={`absolute top-1 right-1 w-4 h-4 rounded-full border border-white ${course.available ? "bg-primary-500" : "bg-gray-400"
                  }`}
                title={course.available ? "Disponible" : "Non disponible"}
              ></span>
            </div>
          ))}
        </div>
      </section>


      {/* Bloc 5 : Section Statistiques animées 
 <section className="py-20 px-6 max-w-7xl mx-auto text-center">
  <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
    Nos Chiffres Clés
  </h2>

  <div className="grid md:grid-cols-4 gap-10">
    {[
      { label: "Apprenants Formés", value: 1500 },
      { label: "Formations Certifiantes", value: 30 },
      { label: "Heures de Cours", value: 20000 },
      { label: "Partenaires Internationaux", value: 5 },
    ].map((stat, i) => (
      <motion.div
        key={i}
        className="bg-blue-50 rounded-2xl p-8 shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <div className="text-3xl font-bold text-blue-600 mb-2">
          {stat.value.toLocaleString()}
        </div>
        <p className="text-gray-700">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</section> */}

{/* Catalogue Formation */}
<section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center overflow-hidden">
  <div className="max-w-3xl mx-auto relative z-10">
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      📘 Découvrez notre <span className="text-secondary-500">Catalogue de Formation</span>
    </motion.h2>
    <motion.p
      className="text-lg text-gray-200 mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Explorez l’ensemble de nos programmes certifiés, conçus avec nos partenaires 
      <span className="font-semibold text-white"> internationaux </span>. 
      Un guide complet pour choisir la formation adaptée à vos ambitions.
    </motion.p>
    <motion.a
      href="/docs/catalogue-formation.pdf" // ⚡️ Mets ton vrai fichier ici
      download
      className="inline-flex items-center bg-orange-500 text-white-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition text-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Télécharger le catalogue</span>
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
  </div>

  {/* Fond décoratif animé */}
  <div className="absolute inset-0 opacity-10 z-0">
    <img
      src="/images/bg-cyber-map.png" // image décorative (ajoute une cyber-map ou un pattern)
      alt="background"
      className="w-full h-full object-cover"
    />
  </div>
</section>


      {/* Bloc 7 : Section FAQ interactive */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              question: "Quels prérequis pour suivre vos formations ?",
              answer: "Aucun prérequis strict, mais des bases en informatique sont recommandées.",
            },
            {
              question: "Les formations sont-elles certifiantes ?",
              answer: "Oui, toutes nos formations certifiantes sont reconnues internationalement.",
            },
            {
              question: "Peut-on suivre les formations à distance ?",
              answer: "Oui, nous proposons des modules en ligne avec support live et exercices pratiques.",
            },
          ].map((faq, i) => (
            <details key={i} className="bg-gray-50 rounded-xl p-4 shadow hover:bg-gray-100 transition">
              <summary className="cursor-pointer font-semibold">{faq.question}</summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bloc 8 : Certifications & Badges animés */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-extrabold mb-12">Certifications & Partenaires</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            "/logos/ec-council.png",
            "/logos/cisco-logo.png",
            "/logos/cisco-seeklogo.png",
            "/logos/pearson.png",
            "/logos/pecb.png",
            "/logos/comptia.png",
            "/logos/aws.png",
          ].map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="Certification Logo"
              className="w-32 h-20 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>
      </section>

      



      {/* CTA */}
      <section className="py-20 px-6 bg-primary-500 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Lancez vous dès aujourd’hui
        </h2>
        <p className="text-lg mb-8">
          Rejoignez nos programmes et obtenez des certifications reconnues à
          l’international.
        </p>
        <button className="px-8 py-4 bg-white text-gray-600 font-semibold rounded-2xl shadow hover:bg-gray-100 transition">
          S’inscrire maintenant
        </button>
      </section>
    </div>
  );
};

export default TrainingCenterPage;
