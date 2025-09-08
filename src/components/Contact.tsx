import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("http://localhost:5000/api/contact", { // <-- Ton backend local
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: formState.name,
    email: formState.email,
    subject: formState.subject,
    message: formState.message,
  }),
});

    if (response.ok) {
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert("Erreur lors de l'envoi du message.");
    }
  } catch (error) {
    console.error("Erreur :", error);
    alert("Problème de connexion.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contactez-Nous</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Besoin d'aide pour protéger vos données ou vous former à la cybersécurité ? Notre équipe d'experts est là pour vous aider.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form 
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/50"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Envoyez-nous un message</h3>
              
              {/* Success message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50/80 backdrop-blur-sm border border-green-200 text-green-700 rounded-lg flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Votre message a été envoyé avec succès. Notre équipe vous contactera sous peu.</span>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white/80 backdrop-blur-sm"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white/80 backdrop-blur-sm"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white/80 backdrop-blur-sm"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="dataprotection">Protection des données</option>
                  <option value="backup">Solutions de sauvegarde</option>
                  <option value="training">Formation certifiante</option>
                  <option value="pearsonvue">Centre de test Pearson Vue</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white/80 backdrop-blur-sm"
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full py-3 px-6 rounded-lg text-white font-medium transition-colors shadow-md ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-blue-300 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="font-medium text-blue-200 mb-1">Adresse</h4>
                    <p>123 Avenue de la Sécurité<br />75008 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blue-300 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="font-medium text-blue-200 mb-1">Téléphone</h4>
                    <p>+33 (0)1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-blue-300 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="font-medium text-blue-200 mb-1">Email</h4>
                    <p>contact@securedata.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-blue-300 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="font-medium text-blue-200 mb-1">Heures d'ouverture</h4>
                    <p>Lun - Ven: 9h00 - 18h00<br />
                    Samedi: 9h00 - 13h00 (Centre de test uniquement)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-16 max-w-6xl mx-auto h-96 bg-gradient-to-br from-gray-200 to-blue-200 rounded-xl shadow overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm">
            <div className="text-center">
              <MapPin size={48} className="text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Carte interactive sera affichée ici</p>
              <p className="text-gray-500">123 Avenue de la Sécurité, 75008 Paris, France</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
