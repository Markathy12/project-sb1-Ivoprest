import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Award, ArrowRight } from 'lucide-react';

const CertifyingTrainingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img src="/images/formation-slide3.jpg" alt="Certifications" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold text-white mb-4">Formations Certifiantes</h1>
          <p className="text-xl text-gray-200">Validez votre expertise avec des titres reconnus mondialement.</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Excellence Académique & Technique</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nos programmes sont alignés sur les exigences des organismes de certification les plus prestigieux. 
              Chaque cursus inclut des supports officiels et une préparation intensive aux examens.
            </p>
            <ul className="space-y-4">
              {[
                "Instructeurs certifiés experts",
                "Examens officiels blancs inclus",
                "Accès aux plateformes d'apprentissage 24/7",
                "Accompagnement après l'obtention du titre"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary-500" />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-xl">
             <Award className="w-12 h-12 text-primary-500 mb-4" />
             <h3 className="text-2xl font-bold mb-4">Prêt pour la certification ?</h3>
             <p className="text-gray-600 mb-6">Consultez notre calendrier pour rejoindre la prochaine cohorte.</p>
             <a href="/inscription" className="inline-flex items-center justify-center w-full py-4 bg-primary-500 text-white font-bold rounded-2xl hover:bg-primary-600 transition shadow-lg">
                Voir les sessions <ArrowRight className="ml-2 w-5 h-5" />
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertifyingTrainingPage;