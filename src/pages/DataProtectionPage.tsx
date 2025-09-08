import React, { useEffect } from 'react';
import { Lock, ShieldCheck, Users, AlertCircle, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
import BackButton from '../components/BackButton';

const DataProtectionPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services de Protection des Données - Ivoprest | Sécurité & Conformité';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const features = [
    {
      icon: <Lock size={24} className="text-purple-600" />,
      title: "Chiffrement Avancé",
      description: "Protection de vos données sensibles grâce à des techniques de chiffrement robustes."
    },
    {
      icon: <ShieldCheck size={24} className="text-blue-600" />,
      title: "Contrôle d’Accès",
      description: "Gestion fine des droits d’accès pour garantir la confidentialité des informations."
    },
    {
      icon: <Users size={24} className="text-green-600" />,
      title: "Sensibilisation & Formation",
      description: "Programmes dédiés pour former vos équipes aux bonnes pratiques de sécurité."
    },
    {
      icon: <AlertCircle size={24} className="text-red-600" />,
      title: "Détection des Fuites",
      description: "Surveillance proactive pour identifier et prévenir les fuites de données."
    }
  ];

  const benefits = [
    "Conformité RGPD assurée",
    "Réduction des risques liés aux cyberattaques",
    "Renforcement de la confiance client",
    "Protection des données critiques",
    "Réduction des coûts liés aux incidents",
    "Accompagnement expert 24/7"
  ];

  const methodology = [
    {
      step: "01",
      title: "Audit de Sécurité",
      description: "Analyse approfondie de votre infrastructure et de vos pratiques."
    },
    {
      step: "02",
      title: "Mise en œuvre de politiques",
      description: "Définition et application des règles de protection adaptées."
    },
    {
      step: "03",
      title: "Surveillance Continue",
      description: "Monitoring en temps réel pour détecter toute activité anormale."
    },
    {
      step: "04",
      title: "Révision & Amélioration",
      description: "Évaluation régulière et adaptation des mesures de sécurité."
    }
  ];

  const technologies = [
    {
      category: "Solutions de Chiffrement",
      tools: ["VeraCrypt", "BitLocker", "Thales CipherTrust"]
    },
    {
      category: "Gestion des Identités",
      tools: ["Okta", "Microsoft Azure AD", "Auth0"]
    },
    {
      category: "DLP (Data Loss Prevention)",
      tools: ["Symantec DLP", "Forcepoint DLP", "McAfee Total Protection"]
    },
    {
      category: "Surveillance & Audit",
      tools: ["Splunk", "IBM QRadar", "Elastic Security"]
    }
  ];

  const stats = [
    { value: "100%", label: "Conformité RGPD atteinte" },
    { value: "0 incident", label: "Fuite de données en 2024" },
    { value: "24/7", label: "Support & surveillance" },
    { value: "300+", label: "Clients protégés" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50">
      
      {/* HERO AVEC IMAGE DE FOND */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <img
  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80"
  alt="Protection des données"
  className="absolute inset-0 w-full h-full object-cover"
/>

        <div className="absolute inset-0 bg-purple-900 bg-opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-4xl mx-auto">
          <BackButton className="absolute top-6 left-6 text-white hover:text-purple-300" />
          <Lock size={64} className="mb-6 text-purple-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services de Protection des Données</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Assurez la confidentialité, l’intégrité et la disponibilité de vos données avec nos solutions complètes de protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
            <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors shadow-lg">
              Demander une démonstration
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Télécharger la brochure
            </button>
          </div>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Vue d'ensemble du service</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nos solutions combinent technologies avancées et expertises humaines pour protéger vos données contre les menaces internes et externes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-lg mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="py-20 bg-white/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Bénéfices pour votre entreprise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-white/50">
                <CheckCircle size={20} className="text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* METHODOLOGY */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Notre méthodologie</h2>
          <div className="space-y-8">
            {methodology.map((step, index) => (
              <div key={index} className="flex items-start bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies utilisées</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-purple-300">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="flex items-center">
                      <ArrowRight size={16} className="text-purple-400 mr-2" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Nos performances</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/50">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à renforcer la protection de vos données ?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contactez nos experts pour une évaluation complète et une mise en œuvre efficace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors shadow-lg flex items-center justify-center">
              <Phone size={20} className="mr-2" />
              Appeler maintenant
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
              <Mail size={20} className="mr-2" />
              Demander un devis
            </button>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default DataProtectionPage;
