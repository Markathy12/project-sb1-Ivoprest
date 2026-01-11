import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

// Structure de données générique pour une session
interface Session {
  id: number;
  trainingName: string;
  date: string;
  duration: string;
  location: string; // ex: "Abidjan" ou "En ligne"
  type: "Présentiel" | "Distanciel";
  seatsLeft: number;
  status: "Ouvert" | "Bientôt complet" | "Complet";
}

const SESSIONS_DATA: Session[] = [
  {
    id: 1,
    trainingName: "Certified Ethical Hacker (CEH) V12",
    date: "15 Mars - 20 Mars 2026",
    duration: "5 jours (40h)",
    location: "Abidjan / Plateau",
    type: "Présentiel",
    seatsLeft: 5,
    status: "Bientôt complet",
  },
  {
    id: 2,
    trainingName: "ISO 27001 Lead Auditor",
    date: "02 Avril - 07 Avril 2026",
    duration: "5 jours (40h)",
    location: "En ligne (Classe virtuelle)",
    type: "Distanciel",
    seatsLeft: 12,
    status: "Ouvert",
  },
  {
    id: 3,
    trainingName: "Cisco Certified Network Associate (CCNA)",
    date: "10 Mai - 25 Mai 2026",
    duration: "15 jours (Soir & Week-end)",
    location: "Abidjan / Cocody",
    type: "Présentiel",
    seatsLeft: 8,
    status: "Ouvert",
  },
];

const SessionsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Header de la page */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Prochaines <span className="text-primary-500">Sessions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Consultez le calendrier de nos formations certifiantes et réservez votre place dès maintenant.
          </p>
        </motion.div>
      </section>

      {/* Liste des Sessions */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="space-y-6">
          {SESSIONS_DATA.map((session, i) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-shadow group"
            >
              {/* Infos principales */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    session.type === "Présentiel" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                  }`}>
                    {session.type}
                  </span>
                  <span className={`text-sm font-semibold ${
                    session.status === "Bientôt complet" ? "text-orange-500" : "text-green-500"
                  }`}>
                    • {session.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors">
                  {session.trainingName}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span>{session.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-500" />
                    <span>{session.seatsLeft} places restantes</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="w-full md:w-auto">
                <motion.a
                  href={`/inscription/${session.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-secondary-500 text-white font-extrabold rounded-2xl shadow-lg hover:bg-secondary-600 transition gap-2"
                >
                  S'inscrire <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Note d'information */}
      <section className="mt-20 px-6 max-w-4xl mx-auto text-center">
        <div className="p-8 bg-primary-900 rounded-[2rem] text-white">
          <h3 className="text-2xl font-bold mb-4">Besoin d'une formation sur mesure ?</h3>
          <p className="text-primary-100 mb-6">
            Nous organisons également des sessions privées pour les entreprises, adaptées à vos besoins spécifiques et à votre calendrier.
          </p>
          <a href="/contact" className="font-bold border-b-2 border-secondary-500 text-secondary-500 hover:text-white hover:border-white transition pb-1">
            Contacter le service formation &rarr;
          </a>
        </div>
      </section>
    </div>
  );
};

export default SessionsPage;