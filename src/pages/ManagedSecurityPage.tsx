import React from "react";
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

/**
 * ManagedSecurityPage – Page complète "Service de Sécurité Managée (SSM)"
 *
 * Style: premium, fond clair (blanc) + accent bleu (#1E3A8A), animations légères.
 * Dépendances: tailwindcss, framer-motion, lucide-react.
 *
 * À prévoir dans /public :
 * - /videos/cyber-map.mp4 : vidéo d'arrière-plan pour le hero
 * - /images/siem-dashboard.jpg : visuel dashboard SIEM (ou webp/png)
 * - /images/partners/{fortinet,microsoft,veeam,sophos,paloalto}.png : logos partenaires (optionnel)
 */

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

export default function ManagedSecurityPage() {
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
            Service de Sécurité Managée (SSM)
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Protégez vos systèmes 24/7
          </h1>
          <p className="mt-6 text-white/85 text-lg md:text-xl">
            Détection & réponse aux menaces, conformité, visibilité temps réel et SLA contractuels.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-white text-gray-900 hover:bg-gray-100 shadow"
            >
              Planifier une démo <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#audit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold border border-white/60 text-white hover:bg-white/10"
            >
              Demander un audit gratuit
            </a>
          </div>
          {/* Dashboard image (optionnel) 
          <div className="mt-12">
            <img
              src="/images/siem-dashboard.jpg"
              alt="Dashboard SIEM"
              className="w-full rounded-2xl border border-white/10 shadow-xl shadow-black/40"
            />
          </div> */}

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left text-white/80">
            {[
              { icon: Activity, label: "Détection en <5 min (SLA)" },
              { icon: ShieldCheck, label: "Couverture 24/7/365" },
              { icon: FileCheck2, label: "Rapports conformité" },
              { icon: LineChart, label: "MTTR optimisé" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2">
                <f.icon className="w-4 h-4" />
                <span className="text-sm">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CAPABILITIES */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Capacités SSM</h2>
          <p className="mt-3 text-gray-600">
            Une couverture complète du périmètre à l'endpoint en passant par le cloud, pilotée par un SOC + SIEM.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "Surveillance 24/7",
              desc: "Corrélation SIEM, runbooks & analystes niveau 1/2/3.",
            },
            {
              icon: Eye,
              title: "Détection avancée",
              desc: "EDR/XDR, détection comportementale & UEBA.",
            },
            {
              icon: Lock,
              title: "Conformité",
              desc: "RGPD, ISO 27001, PCI-DSS, rapports & audits.",
            },
            {
              icon: Activity,
              title: "Réponse rapide",
              desc: "Isolation, containment, éradication guidée ou gérée.",
            },
            {
              icon: Server,
              title: "Protection SI/Serveurs",
              desc: "Durcissement, vulnérabilités, patching piloté.",
            },
            {
              icon: Cloud,
              title: "Cloud Security",
              desc: "Azure/AWS/Google, posture, logs, CSPM.",
            },
            {
              icon: Radar,
              title: "Threat Intelligence",
              desc: "IOCs, TTPs MITRE ATT&CK, enrichissements.",
            },
            {
              icon: Bell,
              title: "Alerting & Reporting",
              desc: "Rapports exécutifs, KPIs, tableaux de bord.",
            },
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

      {/* APPROCHE */}
      <Section className="bg-gray-50" id="approche">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Notre approche</h2>
            <p className="mt-3 text-gray-600">
              Un cadre opérationnel clair, aligné sur MITRE ATT&CK et ITIL, pour minimiser l'impact et le temps de réponse.
            </p>
            <div className="mt-8 space-y-5">
              {[
                {
                  step: "01",
                  title: "Évaluation & Audit",
                  desc: "Cartographie des risques, collecte des sources, cadrage SIEM/XDR.",
                  icon: FileCheck2,
                },
                {
                  step: "02",
                  title: "Déploiement & Intégration",
                  desc: "Connecteurs logs, agents EDR, playbooks d'escalade.",
                  icon: Network,
                },
                {
                  step: "03",
                  title: "Surveillance continue",
                  desc: "Corrélation, priorisation, chasse aux menaces (threat hunting).",
                  icon: Cpu,
                },
                {
                  step: "04",
                  title: "Réponse & Amélioration",
                  desc: "Post-mortem, leçons apprises, renforcement et KPIs.",
                  icon: TimerReset,
                },
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
            <img src="/images/siem-dashboard.jpg" alt="Aperçu SOC/SIEM" className="rounded-2xl shadow-md border border-gray-200" />
          </div>
        </div>
      </Section>

      {/* DIFFERENCIATEURS */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pourquoi nous choisir ?</h2>
          <p className="mt-3 text-gray-600">Des garanties concrètes plutôt que des promesses vagues.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "SLA & Runbooks", desc: "SLA de détection & réponse, procédures documentées." },
            { icon: KeyRound, title: "Zero Trust", desc: "Approche identity-first, moindre privilège, MFA/SSO." },
            { icon: Building2, title: "Certifications", desc: "Équipes certifiées CISSP, CEH, ISO 27001 Lead." },
            { icon: Globe2, title: "Couverture globale", desc: "Surveillance continue, fuseaux multiples, francophone." },
          ].map((d, i) => (
            <div key={i} className={`${cardBase} text-center`}>
              <div className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${primary}0D` }}>
                <d.icon className="w-6 h-6" style={{ color: primary }} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{d.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PARTENAIRES (optionnel) */}
      <Section className="bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Écosystème & Partenaires</h2>
          <p className="mt-2 text-gray-600">Intégration native avec vos solutions existantes.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
          {["fortinet","microsoft","veeam","sophos","kaspersky"].map((p) => (
            <img
              key={p}
              src={`/partenaires/${p}.png`}
              alt={`Logo ${p}`}
              className="h-10 object-contain mx-auto"
            />
          ))}
        </div>
      </Section>

      {/* CHIFFRES / METRICS */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { kpi: "< 5 min", label: "Délai de détection (SLA)" },
            { kpi: "24/7/365", label: "Supervision continue" },
            { kpi: "99.9%", label: "Disponibilité des plateformes" },
            { kpi: "70%", label: "Incidents critiques en moins (6 mois)" },
          ].map((m, i) => (
            <div key={i} className={`${cardBase} text-center`}> 
              <div className="text-3xl font-extrabold" style={{ color: primary }}>{m.kpi}</div>
              <div className="mt-2 text-sm text-gray-600">{m.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CAS CLIENTS */}
      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className={cardBase}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: primary }}>
                  {i}
                </div>
                <div>
                  <h3 className="font-semibold">Cas client #{i} – Secteur Financier</h3>
                  <p className="text-xs text-gray-500">Déploiement SIEM + EDR, 1 500 endpoints</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: primary }} /> MTTR réduit de 58%.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: primary }} /> Visibilité complète des logs critiques.</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: primary }} /> Conformité audit ISO renforcée.</li>
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* TARIFICATION (exemple indicatif) */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Offres & Forfaits</h2>
          <p className="mt-3 text-gray-600">Modèles flexibles selon votre taille et votre maturité sécurité.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Essentiel",
              price: "Sur devis",
              features: [
                "Surveillance 8x5",
                "Alerting & rapports mensuels",
                "Intégration basique SIEM",
              ],
              cta: "Demander un devis",
            },
            {
              name: "Pro 24/7",
              price: "Sur devis",
              features: [
                "Surveillance 24/7",
                "EDR/XDR + playbooks",
                "SLA de détection & réponse",
                "Rapports hebdomadaires",
              ],
              highlight: true,
              cta: "Planifier une démo",
            },
            {
              name: "Enterprise",
              price: "Sur devis",
              features: [
                "SOC dédié & threat hunting",
                "Intégration multi-cloud",
                "Gouvernance & conformité avancées",
                "Support prioritaire",
              ],
              cta: "Parler à un expert",
            },
          ].map((tier, i) => (
            <div key={i} className={`${cardBase} flex flex-col ${tier.highlight ? "ring-2" : ""}`} style={tier.highlight ? { borderColor: primary, boxShadow: "0 8px 32px rgba(30,58,138,0.12)" } : {}}>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="mt-2 text-3xl font-extrabold" style={{ color: primary }}>{tier.price}</div>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: primary }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-white" style={{ backgroundColor: primary }}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">FAQ</h2>
          <div className="mt-8 divide-y divide-gray-200 bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {[
              {
                q: "Quelle est la différence avec un MSSP classique ?",
                a: "Nous fournissons des SLAs mesurables, des playbooks personnalisés et une intégration étroite avec vos équipes IT. L'objectif est la réduction tangible du risque et du MTTR, pas seulement l'alerting.",
              },
              {
                q: "Pouvez-vous travailler avec nos outils existants ?",
                a: "Oui. Nous intégrons les principaux SIEM (Microsoft, Splunk, Elastic), EDR (Defender, CrowdStrike…), firewalls (Fortinet, Palo Alto…) et clouds (Azure, AWS, GCP).",
              },
              {
                q: "Quels délais de mise en place ?",
                a: "Typiquement 2 à 6 semaines selon la taille et la complexité. L'audit initial permet d'optimiser le plan de déploiement.",
              },
              {
                q: "Comment sont gérées les escalades ?",
                a: "Runbooks d'escalade clairs, astreintes 24/7 et communication multicanal (mail, téléphone, portail).",
              },
            ].map((item, i) => (
              <details key={i} className="group p-6 cursor-pointer">
                <summary className="flex items-center justify-between list-none">
                  <span className="font-semibold">{item.q}</span>
                  <span className="transition-transform group-open:rotate-45" style={{ color: primary }}>+</span>
                </summary>
                <p className="mt-3 text-gray-700 text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Prêt à sécuriser vos infrastructures ?</h2>
            <p className="mt-3 text-gray-600">
              Contactez nos experts pour une démo personnalisée ou un audit de sécurité gratuit.
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
                <div className="text-xs text-gray-500">SLA détection</div>
                <div className="text-2xl font-extrabold" style={{ color: primary }}>≤ 5 min</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Couverture</div>
                <div className="text-2xl font-extrabold" style={{ color: primary }}>24/7/365</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Onboarding</div>
                <div className="text-2xl font-extrabold" style={{ color: primary }}>2–6 semaines</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50">
                <div className="text-xs text-gray-500">Conformité</div>
                <div className="text-2xl font-extrabold" style={{ color: primary }}>ISO / RGPD</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <AlertTriangle className="w-4 h-4 mt-1" style={{ color: primary }} />
              <p>
                Bonnes pratiques : segmentation réseau, moindre privilège, MFA, sauvegardes testées, gestion des vulnérabilités continue.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER LIGHT */}
      <footer className="w-full py-10 px-6 border-t bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ivoprest – Service de Sécurité Managée</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#approche" className="hover:underline">Notre approche</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
