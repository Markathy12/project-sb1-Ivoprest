import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import { 
  CheckCircle, // Pour les atouts
  Clock,       // Pour les atouts
  Monitor,     // Pour les atouts
  Loader2,     // Pour le bouton de chargement
  AlertTriangle, // Pour les erreurs
} from "lucide-react";

// Données des certifications
const certifications = [
  {
    title: "Pearson VUE",
    description:
      "Passez vos certifications officielles (Microsoft, Cisco, CompTIA, etc.) avec des conditions conformes aux standards internationaux. Nous sommes un centre agréé Pearson VUE.",
    logo: "/logos/pearsonvue.jpg",
  },
  {
    title: "Certifications EC-Council",
    description:
      "Obtenez vos certifications de renommée mondiale en cybersécurité (CEH, ECSA, CND...) dans notre centre ATC (Accredited Training Center) agréé.",
    logo: "/logos/ec-council.png",
  },
  {
    title: "Certifications PECB",
    description:
      "Passez vos certifications en gouvernance IT, sécurité de l'information et conformité ISO (ISO 27001, ISO 22301...).",
    logo: "/logos/pecb.jpg",
  },
];

// Nouveaux Atouts
const atouts = [
  { icon: <CheckCircle className="w-6 h-6 text-primary-500" />, text: "Environnement sécurisé et surveillé." },
  { icon: <Monitor className="w-6 h-6 text-primary-500" />, text: "Équipement moderne et performant." },
  { icon: <Clock className="w-6 h-6 text-primary-500" />, text: "Horaires flexibles pour votre convenance." },
];

// Nouvelles Étapes
const etapes = [
  { num: "01", title: "Inscription en ligne", desc: "Remplissez le formulaire avec vos informations et l'examen souhaité." },
  { num: "02", title: "Planification", desc: "Notre équipe vous contacte pour confirmer votre identité et fixer la date." },
  { num: "03", title: "Jour de l'Examen", desc: "Présentez-vous à notre centre avec vos pièces d'identité valides." },
  { num: "04", title: "Résultats", desc: "Recevez vos résultats officiels selon les modalités de l'organisme." },
];

const TestExamenPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    exam: "",
  });

  // ⚡️ NOUVEAUX ÉTATS POUR LE FORMULAIRE
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

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
    setIsLoading(true);
    setFormMessage(null); // Réinitialiser le message

    try {
      const response = await fetch('http://localhost:5000/api/inscription-examen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormMessage({ type: 'success', text: '✅ Demande envoyée avec succès ! Nous vous recontacterons.' });
        setFormData({ name: '', email: '', phone: '', exam: '' });
        // Optionnel : fermer le modal après 3 secondes
        // setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        const errorMsg = data.error || (data.errors ? data.errors.map((e: any) => e.msg).join(', ') : 'Une erreur est survenue.');
        setFormMessage({ type: 'error', text: `❌ Erreur: ${errorMsg}` });
      }
    } catch (error) {
      setFormMessage({ type: 'error', text: '❌ Erreur réseau ou serveur, merci de réessayer plus tard.' });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ HERO SECTION (Inchangé) */}
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

      {/* ⚡️ NOUVEAU BLOC : NOS ATOUTS (Remplace l'ancienne "Présentation") */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne Gauche : Texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-extrabold text-primary-600 mb-6">
              Un centre d’examen agréé et sécurisé
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              <strong>Esay Corporation</strong> est un centre homologué pour accueillir des
              examens officiels et certifiants. Nous comprenons l'importance de
              chaque certification pour votre carrière.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              C'est pourquoi nous offrons un environnement
              sécurisé, conforme aux standards internationaux, avec des équipements
              haut de gamme pour garantir des conditions de test optimales.
            </p>
          </motion.div>
          {/* Colonne Droite : Liste des atouts */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Engagements :</h3>
            <ul className="space-y-4">
              {atouts.map((atout, i) => (
                <li key={i} className="flex items-center text-lg">
                  <span className="flex-shrink-0 mr-3">{atout.icon}</span>
                  {atout.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ⚡️ NOUVEAU BLOC : PROCESSUS D'EXAMEN */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-extrabold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comment ça marche ?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {etapes.map((etape, i) => (
              <motion.div
                key={i}
                className="p-6 border-t-4 border-primary-500 bg-gray-50 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <span className="text-3xl font-bold text-primary-500 opacity-50 block mb-2">{etape.num}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{etape.title}</h3>
                <p className="text-gray-700">{etape.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚡️ SECTION AMÉLIORÉE : NOS PARTENAIRES DE CERTIFICATION */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-16">
          Certifications disponibles dans notre centre
        </h2>
        <div className="max-w-6xl mx-auto space-y-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <div className={`relative rounded-xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="w-full h-64 object-contain bg-white p-10"
                  loading="lazy"
                />
              </div>
              {/* Texte */}
              <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                <h3 className="text-primary-600 text-2xl font-bold mb-4">
                  {cert.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ CALL TO ACTION (Inchangé) */}
      <section className="py-20 px-6 text-center bg-white">
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prêt à passer votre examen ?
        </motion.h2>
        <motion.button
          onClick={() => {
            setIsModalOpen(true);
            setFormMessage(null); // Vider les messages en ouvrant
          }}
          className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold
                     shadow-lg hover:bg-primary-700 transition-all relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">S’inscrire maintenant</span>
        </motion.button>
      </section>

      {/* ✅ MODAL INSCRIPTION AMÉLIORÉ (SANS `alert()`) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
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
                
                {/* ⚡️ NOUVEAU BLOC DE MESSAGE (SUCCÈS/ERREUR) */}
                {formMessage && (
                  <div
                    className={`p-3 rounded-lg text-center text-sm ${
                      formMessage.type === 'success'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {formMessage.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors
                           flex justify-center items-center disabled:bg-gray-400"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Envoyer'
                  )}
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