import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Calendar, Users, ChevronDown, ChevronUp, Search, Clock, MapPin, Phone, Mail } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  certification: string;
  dates: string[];
  price: string;
  prerequisites: string[];
  objectives: string[];
  instructor: {
    name: string;
    title: string;
    image: string;
  };
}

const TrainingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cybersecurity' | 'dataprotection' | 'cloudSecurity'>('cybersecurity');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Update page title when component mounts
  useEffect(() => {
    document.title = 'Formation - Ivoprest | Formations Certifiantes en Cybersécurité';
  }, []);
  
  const courses: Record<string, Course[]> = {
    cybersecurity: [
      {
        id: 'cs-101',
        title: 'Fondamentaux de la Cybersécurité',
        duration: '3 jours',
        level: 'Débutant',
        description: 'Formation complète couvrant les bases essentielles de la cybersécurité, de la gestion des menaces aux meilleures pratiques de protection.',
        certification: 'Certification de Base en Cybersécurité',
        dates: ['15-17 Mai 2025', '10-12 Juin 2025', '22-24 Juillet 2025'],
        price: '1 500€',
        prerequisites: [
          'Connaissances de base en informatique',
          'Familiarité avec les systèmes d\'exploitation',
          'Compréhension basique des réseaux'
        ],
        objectives: [
          'Comprendre les principes fondamentaux de la cybersécurité',
          'Identifier les menaces et vulnérabilités courantes',
          'Mettre en place des mesures de sécurité de base',
          'Gérer les incidents de sécurité'
        ],
        instructor: {
          name: 'Dr. Sophie Martin',
          title: 'Expert en Cybersécurité',
          image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      {
        id: 'cs-201',
        title: 'Réponse aux Incidents de Sécurité',
        duration: '4 jours',
        level: 'Intermédiaire',
        description: 'Apprenez à détecter, analyser et répondre efficacement aux incidents de sécurité avec les méthodologies NIST et l\'analyse forensique.',
        certification: 'Certificat de Réponse aux Incidents',
        dates: ['5-8 Juin 2025', '3-6 Août 2025', '14-17 Septembre 2025'],
        price: '2 200€',
        prerequisites: [
          'Connaissances en cybersécurité',
          'Expérience en administration système',
          'Compréhension des réseaux TCP/IP'
        ],
        objectives: [
          'Maîtriser les techniques de détection d\'incidents',
          'Conduire une analyse forensique',
          'Mettre en place un plan de réponse',
          'Documenter et communiquer les incidents'
        ],
        instructor: {
          name: 'Jean Dubois',
          title: 'Expert en Forensique Numérique',
          image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      {
        id: 'cs-301',
        title: 'Test d\'Intrusion Avancé',
        duration: '5 jours',
        level: 'Avancé',
        description: 'Maîtrisez les techniques de test d\'intrusion avancées pour identifier les vulnérabilités et renforcer les défenses de sécurité.',
        certification: 'Certificat Professionnel en Test d\'Intrusion',
        dates: ['10-14 Juillet 2025', '18-22 Septembre 2025', '6-10 Novembre 2025'],
        price: '2 800€',
        prerequisites: [
          'Solides connaissances en cybersécurité',
          'Expérience en administration réseau',
          'Maîtrise des outils de sécurité'
        ],
        objectives: [
          'Maîtriser les outils de pentest',
          'Identifier les vulnérabilités critiques',
          'Rédiger des rapports d\'audit',
          'Proposer des mesures correctives'
        ],
        instructor: {
          name: 'Marc Rousseau',
          title: 'Pentester Senior',
          image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      }
    ],
    dataprotection: [
      {
        id: 'dp-101',
        title: 'Protection des Données et RGPD',
        duration: '3 jours',
        level: 'Débutant',
        description: 'Formation complète sur le RGPD et la mise en œuvre des stratégies de protection des données.',
        certification: 'Certification DPO',
        dates: ['20-22 Mai 2025', '15-17 Juin 2025', '25-27 Juillet 2025'],
        price: '1 800€',
        prerequisites: [
          'Connaissances de base en protection des données',
          'Compréhension du cadre légal',
          'Notions de gestion de projet'
        ],
        objectives: [
          'Comprendre les exigences du RGPD',
          'Mettre en place un programme de conformité',
          'Gérer les droits des personnes concernées',
          'Conduire des analyses d\'impact'
        ],
        instructor: {
          name: 'Marie Lambert',
          title: 'DPO Certifiée',
          image: 'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      {
        id: 'dp-201',
        title: 'Gouvernance des Données',
        duration: '4 jours',
        level: 'Intermédiaire',
        description: 'Apprenez à développer et maintenir un cadre de gouvernance des données robuste.',
        certification: 'Certification en Gouvernance des Données',
        dates: ['1-4 Juin 2025', '20-23 Août 2025', '10-13 Octobre 2025'],
        price: '2 100€',
        prerequisites: [
          'Expérience en gestion des données',
          'Connaissances en conformité',
          'Notions de risk management'
        ],
        objectives: [
          'Développer une stratégie de gouvernance',
          'Mettre en place des politiques de données',
          'Gérer le cycle de vie des données',
          'Assurer la qualité des données'
        ],
        instructor: {
          name: 'Pierre Durand',
          title: 'Consultant en Gouvernance',
          image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      }
    ],
    cloudSecurity: [
      {
        id: 'cs-101',
        title: 'Sécurité Cloud Fondamentale',
        duration: '4 jours',
        level: 'Intermédiaire',
        description: 'Maîtrisez la sécurisation des environnements cloud sur les principales plateformes.',
        certification: 'Cloud Security Professional',
        dates: ['10-13 Juin 2025', '8-11 Juillet 2025', '12-15 Août 2025'],
        price: '2 500€',
        prerequisites: [
          'Expérience en administration cloud',
          'Connaissances en sécurité informatique',
          'Familiarité avec AWS/Azure/GCP'
        ],
        objectives: [
          'Sécuriser les infrastructures cloud',
          'Implémenter les contrôles de sécurité',
          'Gérer les identités et accès',
          'Assurer la conformité cloud'
        ],
        instructor: {
          name: 'Alexandre Chen',
          title: 'Architecte Cloud Senior',
          image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      {
        id: 'cs-201',
        title: 'DevSecOps pour Cloud',
        duration: '5 jours',
        level: 'Avancé',
        description: 'Intégrez la sécurité dans vos processus DevOps pour le cloud.',
        certification: 'Certification DevSecOps Cloud',
        dates: ['1-5 Juillet 2025', '10-14 Octobre 2025', '1-5 Décembre 2025'],
        price: '2 900€',
        prerequisites: [
          'Expérience DevOps',
          'Connaissances cloud avancées',
          'Maîtrise des outils CI/CD'
        ],
        objectives: [
          'Automatiser les tests de sécurité',
          'Gérer les secrets et configurations',
          'Implémenter la sécurité comme code',
          'Monitorer la sécurité en continu'
        ],
        instructor: {
          name: 'Sarah Johnson',
          title: 'DevSecOps Lead',
          image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      }
    ]
  };

  const renderLevelBadge = (level: string) => {
    const colors = {
      'Débutant': 'bg-green-100 text-green-800',
      'Intermédiaire': 'bg-blue-100 text-blue-800',
      'Avancé': 'bg-purple-100 text-purple-800'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level as keyof typeof colors]}`}>
        {level}
      </span>
    );
  };

  const filteredCourses = courses[activeTab].filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
     {/* Hero Section */}
<div className="relative bg-blue-900 text-white py-20">
  <img
    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Formation en cybersécurité"
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  />
  <div className="relative container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Centre de Formation Certifiant</h1>
      <p className="text-xl text-blue-100 mb-8">
        Développez vos compétences en cybersécurité avec nos formations professionnelles
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
          Voir le calendrier
        </button>
        <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
          Demander un devis
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
          Voir le catalogue de formation
        </button>
      </div>
    </div>
  </div>
</div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white/80 backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('cybersecurity')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors shadow-md ${
              activeTab === 'cybersecurity'
                ? 'bg-blue-600 text-white'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-50 border border-white/50'
            }`}
          >
            Cybersécurité
          </button>
          <button
            onClick={() => setActiveTab('dataprotection')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors shadow-md ${
              activeTab === 'dataprotection'
                ? 'bg-blue-600 text-white'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-50 border border-white/50'
            }`}
          >
            Protection des Données
          </button>
          <button
            onClick={() => setActiveTab('cloudSecurity')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors shadow-md ${
              activeTab === 'cloudSecurity'
                ? 'bg-blue-600 text-white'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-50 border border-white/50'
            }`}
          >
            Sécurité Cloud
          </button>
        </div>

        {/* Course Listings */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/50 hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      {renderLevelBadge(course.level)}
                      <span className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
                        <Clock size={16} className="mr-1" />
                        {course.duration}
                      </span>
                      <span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm">
                        {course.price}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                    className="text-gray-400 hover:text-gray-600 ml-4"
                  >
                    {expandedCourse === course.id ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>
                </div>

                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex items-center mb-4">
                  <Award size={18} className="text-blue-600 mr-2" />
                  <span className="text-gray-700 font-medium">{course.certification}</span>
                </div>

                {expandedCourse === course.id && (
                  <div className="mt-6 space-y-6 border-t pt-6 bg-gray-50/50 -mx-6 px-6 pb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <BookOpen size={18} className="mr-2 text-blue-600" />
                        Objectifs de la formation
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {course.objectives.map((objective, index) => (
                          <li key={index} className="text-gray-600">{objective}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Prérequis</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {course.prerequisites.map((prerequisite, index) => (
                          <li key={index} className="text-gray-600">{prerequisite}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Formateur</h4>
                      <div className="flex items-center bg-white/80 p-4 rounded-lg">
                        <img
                          src={course.instructor.image}
                          alt={course.instructor.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{course.instructor.name}</p>
                          <p className="text-blue-600">{course.instructor.title}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Calendar size={18} className="mr-2 text-blue-600" />
                        Prochaines sessions
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {course.dates.map((date, index) => (
                          <div key={index} className="bg-white/80 px-4 py-3 rounded-lg text-gray-700 text-center border border-gray-200">
                            {date}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium">
                        S'inscrire à cette formation
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Étudiants formés', icon: Users },
            { value: '95%', label: 'Taux de réussite', icon: Award },
            { value: '50+', label: 'Formations disponibles', icon: BookOpen },
            { value: '24/7', label: 'Support pédagogique', icon: Clock }
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 text-center border border-white/50">
              <stat.icon size={32} className="text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pearson Vue Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Centre de Test Pearson Vue Agréé</h2>
              <p className="text-gray-300 text-lg">
                Passez vos examens de certification dans notre centre officiel
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">500+ Certifications</h3>
                <p className="text-gray-300">
                  Large choix de certifications professionnelles disponibles
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Reconnaissance Mondiale</h3>
                <p className="text-gray-300">
                  Certifications reconnues par l'industrie
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexibilité</h3>
                <p className="text-gray-300">
                  Sessions d'examen disponibles 6 jours sur 7
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
                Réserver un examen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Besoin d'informations ?</h2>
              <p className="text-gray-600 text-lg">
                Notre équipe pédagogique est là pour vous accompagner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-md border border-white/50">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-md border border-white/50">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">formation@ivoprest.com</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-md border border-white/50">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-600">123 Avenue de la Sécurité<br />75008 Paris</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default TrainingPage;