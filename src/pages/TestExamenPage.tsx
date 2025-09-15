import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const certifications = [
  {
    title: "Pearson VUE",
    description:
      "Passez vos certifications officielles avec des conditions conformes aux standards internationaux.",
    logo: "/logos/pearsonvue.jpg",
  },
  {
    title: "Certifications EC-Council",
    description:
      "Obtenez vos certifications en cybersécurité (CEH, ECSA...) dans notre centre agréé.",
    logo: "/logos/ec-council.png",
  },
  {
    title: "Certifications PECB",
    description:
      "Passez vos certifications en gouvernance IT, sécurité et conformité ISO.",
    logo: "/logos/pecb.jpg",
  },
];

const TestExamenPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    exam: "",
  });

  useEffect(() => {
    document.title =
      "Centre de Test et d’Examen - Esay Corporation | Certifications internationales";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/inscription-examen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ Demande envoyée avec succès !');
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', exam: '' });
    } else {
      // Erreurs retournées par le backend (ex: validation)
      alert('❌ Erreur: ' + (data.error || JSON.stringify(data.errors)));
    }
  } catch (error) {
    alert('❌ Erreur réseau ou serveur, merci de réessayer plus tard.');
    console.error(error);
  }
};

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ HERO SECTION améliorée */}
      <header
        className="relative w-full h-[420px] md:h-[500px] bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: "url('/images/test.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Centre de Test & d’Examen
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Passez vos examens officiels dans un environnement sécurisé et
            professionnel.
          </motion.p>
        </div>
      </header>

      {/* ✅ PRESENTATION */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-primary-600 mb-6 text-center">
          Un centre d’examen agréé et sécurisé
        </h2>
        <p className="text-gray-800 text-lg max-w-4xl mx-auto leading-relaxed">
          <strong>Esay Corporation</strong> est un centre homologué pour accueillir des
          examens officiels et certifiants. Profitez d’un environnement
          sécurisé, conforme aux standards internationaux, avec des équipements
          haut de gamme pour des conditions optimales.
        </p>
      </motion.section>

      {/* ✅ CERTIFICATIONS DISPONIBLES */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-12">
          Certifications disponibles dans notre centre
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center
                         transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* ✅ Halo lumineux au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-primary-400/10 to-primary-500/0 
                              opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <img
                src={cert.logo}
                alt={cert.title}
                className="h-20 object-contain mb-4 relative z-10"
                loading="lazy"
              />
              <h3 className="text-primary-600 text-lg font-bold mb-2 relative z-10">
                {cert.title}
              </h3>
              <p className="text-gray-700 relative z-10">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ CALL TO ACTION */}
      <section className="py-16 px-6 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prêt à passer votre examen ?
        </motion.h2>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold
                     shadow-lg hover:bg-primary-700 transition-all relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">S’inscrire maintenant</span>
          <span className="absolute inset-0 bg-primary-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
        </motion.button>
      </section>

      {/* ✅ MODAL INSCRIPTION AMÉLIORÉE */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold text-primary-600 mb-6 text-center">
                Formulaire d’inscription
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-600"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-600"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre téléphone"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-600"
                />
                <select
                  name="exam"
                  value={formData.exam}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-600"
                >
                  <option value="">Sélectionnez un examen</option>
                  <option value="Pearson VUE">Pearson VUE</option>
                  <option value="EC-Council">EC-Council</option>
                  <option value="PECB">PECB</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollToTop />
    </div>
  );
};

export default TestExamenPage;
