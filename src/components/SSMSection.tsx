import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, AlertTriangle, CheckCircle, Send } from "lucide-react";

const SSMSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/demande-ssm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Votre demande a été envoyée !");
        setIsModalOpen(false);
        setFormData({ name: "", email: "", phone: "", company: "", date: "" });
      } else {
        alert("❌ Erreur: " + (data.error || JSON.stringify(data.errors)));
      }
    } catch (error) {
      alert("❌ Erreur réseau ou serveur, merci de réessayer plus tard.");
      console.error(error);
    }
  };



  return (
    <section id="ssm-section" className="py-24 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* ✅ Texte avec Animation */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Service de Sécurité Managée (SSM)
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Protégez vos infrastructures critiques avec une surveillance <strong>24/7</strong>,
            une gestion proactive des risques et des interventions rapides.
            Notre solution SSM allie expertise humaine et technologie avancée.
          </p>

          {/* ✅ Avantages sous forme de cartes */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {[
              { icon: ShieldCheck, text: "Surveillance 24/7" },
              { icon: Clock, text: "Réactivité immédiate" },
              { icon: AlertTriangle, text: "Gestion proactive" },
              { icon: CheckCircle, text: "Conformité & audits" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 bg-white rounded-lg p-3 shadow hover:shadow-md transition"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="text-primary-500 w-6 h-6" />
                <span className="text-gray-700 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-primary-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md 
                       hover:bg-primary-700 transition-transform transform hover:scale-105"
          >
            Demander une présentation
          </button>
        </motion.div>

        {/* ✅ Image avec effet */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg max-w-md w-full">
            <img
              src="/SSM.png"
              alt="Illustration sécurité SSM"
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* ✅ Modal amélioré */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-primary-600 mb-6 text-center">
              Demander une présentation SSM
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom complet"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Votre téléphone"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nom de votre entreprise (facultatif)"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default SSMSection;
