import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';

// Lazy load des pages de détail
const ManagedSecurityPage = lazy(() => import('./pages/ManagedSecurityPage'));
const DataProtectionPage = lazy(() => import('./pages/DataProtectionPage'));
const TrainingCenterPage = lazy(() => import('./pages/TrainingCenterPage'));
const IntegrationSolutionPage = lazy(() => import('./pages/IntegrationSolutionPage'));
const TestExamenPage = lazy(() => import('./pages/TestExamenPage'));
const AuditInformatiquePage = lazy(() => import('./pages/AuditInformatiquePage'));
const SecurityApplicationsPage = lazy(() => import('./pages/SecurityApplicationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SecurityNetworksPage = lazy(() => import('./pages/SecurityNetworksPage'));
const BackupReplicationPage = lazy(() => import('./pages/BackupReplicationPage'));
const DataSecurityPage = lazy(() => import('./pages/DataSecurityPage'));
const SessionsPage = lazy(() => import('./pages/SessionsPage'));
const CertifyingTrainingPage = lazy(() => import('./pages/CertifyingTrainingPage'));
const CustomTrainingPage = lazy(() => import('./pages/CustomTrainingPage'));
const WorkshopPage = lazy(() => import('./pages/WorkshopPage'));

// Fallback loading component
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-12 w-12 bg-primary-600 rounded-full"></div>
      <p className="mt-4 text-gray-600">Chargement...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/securite-managee" element={<ManagedSecurityPage />} />
          <Route path="/services/protection-donnees" element={<DataProtectionPage />} />
          <Route path="/centre-formation" element={<TrainingCenterPage />} />
          <Route path="/services/integration-solution" element={<IntegrationSolutionPage />} />
          <Route path="/prestations/test-examen" element={<TestExamenPage />} />
          <Route path="/prestations/audit-si" element={<AuditInformatiquePage />} />

          {/* Routes des nouvelles pages */}
          <Route path="/services/securite-reseaux" element={<SecurityNetworksPage />} />
          <Route path="/services/sauvegarde-replication" element={<BackupReplicationPage />} />
          <Route path="/services/securite-donnees" element={<DataSecurityPage />} />
          <Route path="/services/securite-applications" element={<SecurityApplicationsPage />} />
          <Route path="/inscription" element={<SessionsPage />} />
          <Route path="/services/formations-certifiantes" element={<CertifyingTrainingPage />} />
          <Route path="/services/formations-sur-mesure" element={<CustomTrainingPage />} />
          <Route path="/services/ateliers-pratiques" element={<WorkshopPage />} />
        </Routes>
      </Suspense>

      <Footer />

      <BackButton />
      
    </div>
  );
};

export default App;
