import React from 'react';
import { motion } from 'framer-motion';
import { Users, Terminal, Zap, ArrowRight } from 'lucide-react';

const WorkshopPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img src="/images/workshop.jpg" alt="Labs" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold text-white mb-4">Ateliers Pratiques (Labs)</h1>
          <p className="text-xl text-gray-200">Apprenez par l'action dans des environnements réels.</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-900 text-white rounded-3xl text-center">
                   <Terminal className="mx-auto mb-2 text-primary-400" />
                   <span className="font-bold">Real Scenarios</span>
                </div>
                <div className="p-6 bg-primary-500 text-white rounded-3xl text-center">
                   <Zap className="mx-auto mb-2" />
                   <span className="font-bold">Live Attack</span>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Immersion Totale</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Pas de slides interminables ici. Nous mettons à votre disposition des bacs à sable (sandboxes) 
              et des infrastructures réseaux complètes pour tester vos compétences en hacking éthique et défense.
            </p>
            <a href="/contact" className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-primary-600 transition shadow-lg">
               Réserver un Lab
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopPage;