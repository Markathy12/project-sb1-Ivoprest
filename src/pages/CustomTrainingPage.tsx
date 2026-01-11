import React from 'react';
import { Briefcase, Settings } from 'lucide-react';

const CustomTrainingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img src="/images/team-training.jpg" alt="Entreprise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold text-white mb-4">Formations sur Mesure</h1>
          <p className="text-xl text-gray-200">Des solutions adaptées à la réalité de votre entreprise.</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Briefcase className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">L'Expertise à votre rythme</h2>
          <p className="text-gray-600 text-lg">Nous intervenons directement dans vos locaux ou à distance pour former vos équipes sur vos enjeux spécifiques.</p>
        </div>
        
        <div className="space-y-6">
           {["Audit de compétences gratuit", "Contenu personnalisé par secteur", "Flexibilité de calendrier", "Suivi post-formation"].map((text, i) => (
             <div key={i} className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Settings className="text-primary-500 mr-4" />
                <span className="text-xl font-semibold text-gray-800">{text}</span>
             </div>
           ))}
        </div>

        <div className="mt-16 text-center">
           <a href="/contact" className="inline-block px-12 py-5 bg-secondary-500 text-white font-black text-xl rounded-full shadow-2xl hover:bg-secondary-600 transition">
              Demander un devis B2B
           </a>
        </div>
      </section>
    </div>
  );
};

export default CustomTrainingPage;