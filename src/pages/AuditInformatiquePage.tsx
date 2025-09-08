import React from "react";
import SSMSection from "../components/SSMSection";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Activity,
  Server,
  Network,
  Radar,
  Bell,
  FileCheck2,
  AlertTriangle,
  Cpu,
  Cloud,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  TimerReset,
  PhoneCall,
  Mail,
  ArrowRight,
  Building2,
  Globe2,
  LineChart,
} from "lucide-react";

const primary = "#F97316"; // orange dominant

const Section = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => (
  <section className={`w-full py-20 px-6 ${className}`}>
    <div className="max-w-[1200px] mx-auto">{children}</div>
  </section>
);

const cardBase =
  "bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AuditInformatiquePage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/cyber-map.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-white/10 text-white backdrop-blur">
            Audit Informatique
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Analyse & Sécurisation de vos systèmes
          </h1>
          <p className="mt-6 text-white/85 text-lg md:text-xl">
            Évaluation complète, détection des vulnérabilités et recommandations personnalisées.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-white text-gray-900 hover:bg-gray-100 shadow"
            >
              Planifier un audit <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#audit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold border border-white/60 text-white hover:bg-white/10"
            >
              En savoir plus
            </a>
          </div>
        </motion.div>
      </section>

      {/* CAPABILITIES */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nos Services</h2>
          <p className="mt-3 text-gray-600">
            Une couverture complète pour identifier les failles et optimiser la sécurité de votre SI.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Test de pénétration", desc: "Analyse détaillée de vos systèmes et réseau." },
            { icon: Eye, title: "Gestion de vulnérabilité", desc: "Identification des failles et risques potentiels." },
            { icon: Lock, title: "Conformité & standards", desc: "RGPD, ISO, PCI-DSS, recommandations sécurisées." },
            { icon: Activity, title: "Monitoring 24/7", desc: "Plan d’action clair et priorisé." },
          ].map((s, i) => (
            <motion.div key={i} className={cardBase} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${primary}0D` }}>
                  <s.icon className="w-6 h-6" style={{ color: primary }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* SSM SECTION */}
      <SSMSection />

      {/* APPROCHE */}
      <Section className="bg-gray-50" id="approche">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Notre approche</h2>
            <p className="mt-3 text-gray-600">
              Audit structuré et recommandations concrètes pour sécuriser vos systèmes efficacement.
            </p>
            <div className="mt-8 space-y-5">
              {[
                { step: "01", title: "Analyse & Cartographie", desc: "Évaluation des actifs, flux et risques.", icon: FileCheck2 },
                { step: "02", title: "Tests & Vulnérabilités", desc: "Scan, tests d’intrusion et recommandations.", icon: Network },
                { step: "03", title: "Rapport & Priorisation", desc: "Rapport clair avec plan d’action priorisé.", icon: Cpu },
                { step: "04", title: "Suivi & Amélioration", desc: "Accompagnement post-audit et recommandations évolutives.", icon: TimerReset },
              ].map((it, idx) => (
                <div key={idx} className={`${cardBase} flex items-center gap-4`}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: primary }}>
                    {it.step}
                  </div>
                  <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
                    <it.icon className="w-5 h-5 mt-1" style={{ color: primary }} />
                    <div>
                      <h3 className="font-semibold">{it.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="/images/siem-dashboard.jpg" alt="Audit Aperçu" className="rounded-2xl shadow-md border border-gray-200" />
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Prêt à sécuriser vos systèmes ?</h2>
            <p className="mt-3 text-gray-600">
              Contactez nos experts pour un audit personnalisé ou une évaluation gratuite.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:contact@votre-domaine.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold" style={{ backgroundColor: primary }}>
                <Mail className="w-4 h-4" /> Envoyer un e-mail
              </a>
              <a href="tel:+225000000000" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border font-semibold" style={{ borderColor: primary, color: primary }}>
                <PhoneCall className="w-4 h-4" /> Appeler un expert
              </a>
            </div>
          </div>
          <div className={`${cardBase} space-y-3`}>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Délai audit</div>
                <div className="text-2xl font-extrabold" style={{ color: primary }}>2–6 semaines</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Couverture</div>
                <div className="text-2xl font-extrabold" style={{ color: primary }}>Complet</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Conformité</div>
                <div className="text-2xl font-extrabold" style={{ color: primary }}>ISO / RGPD</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Rapport</div>
                <div className="text-2xl font-extrabold" style={{ color: primary }}>Priorisé</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <AlertTriangle className="w-4 h-4 mt-1" style={{ color: primary }} />
              <p>
                Bonnes pratiques : segmentation réseau, moindre privilège, MFA, sauvegardes testées, suivi des vulnérabilités.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="w-full py-10 px-6 border-t bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ivoprest – Audit Informatique</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#approche" className="hover:underline">Notre approche</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
