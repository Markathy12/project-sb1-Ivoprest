import React, { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "SecureData a transformé notre approche de la protection des données. Leur solution de sauvegarde automatisée nous a sauvés lors d'une tentative de ransomware l'année dernière.",
      author: "Marie Dupont",
      position: "Directrice IT",
      company: "Groupe Financier National",
      image:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      id: 2,
      text: "La formation en cybersécurité que nous avons suivie était exceptionnelle. Nos équipes sont maintenant bien mieux préparées pour faire face aux menaces actuelles.",
      author: "Thomas Leroy",
      position: "RSSI",
      company: "TechSolutions SA",
      image:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
    },
    {
      id: 3,
      text: "Leur solution de conformité RGPD nous a permis de mettre à jour toutes nos politiques et procédures. L'audit que nous avons passé s'est déroulé sans aucun problème.",
      author: "Sophie Martin",
      position: "DPO",
      company: "HealthCare Plus",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
  ];

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ce que nos clients disent
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous avons aidé nos clients à protéger leurs
            données et à renforcer leur sécurité
          </p>
        </div>

        {/* Témoignages */}
        <div className="max-w-4xl mx-auto relative">
          {/* Citation */}
          <Quote
            size={120}
            className="absolute -top-10 -left-10 text-blue-200 opacity-40 transform -scale-x-100"
          />

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 md:p-10 text-center border border-white/50"
          >
            {/* Fond flouté du client */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 rounded-xl"
              style={{
                backgroundImage: `url(${testimonials[activeIndex].image})`,
                filter: "blur(8px)",
              }}
            ></div>

            <div className="relative z-10">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonials[activeIndex].text}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full object-cover mb-3 border-4 border-white shadow-md"
                />
                <h4 className="text-lg font-bold text-blue-900">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[activeIndex].position}
                </p>
                <p className="text-blue-600 text-sm">
                  {testimonials[activeIndex].company}
                </p>

                {/* Notation étoiles */}
                <div className="flex mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonials[activeIndex].rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  i === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { value: "97%", label: "Taux de satisfaction client" },
            { value: "500+", label: "Clients satisfaits" },
            { value: "10,000+", label: "Certifications délivrées" },
            { value: "24/7", label: "Support technique" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 text-center border border-white/50 hover:scale-105 transition-transform"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
