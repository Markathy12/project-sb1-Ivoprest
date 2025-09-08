import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ManagedSecurityPage from './pages/ManagedSecurityPage';
import DataProtectionPage from './pages/DataProtectionPage';
import TrainingCenterPage from './pages/TrainingCenterPage';
import IntegrationSolutionPage from './pages/IntegrationSolutionPage';
import TestExamenPage from './pages/TestExamenPage';
import AuditInformatiquePage from "./pages/AuditInformatiquePage";
import SecurityApplicationsPage from './pages/SecurityApplicationsPage';

// Nouvelles pages sécurité
import SecurityNetworksPage from './pages/SecurityNetworksPage';
import BackupReplicationPage from './pages/BackupReplicationPage';
import DataSecurityPage from './pages/DataSecurityPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
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

      </Routes>

      <Footer />

      <BackButton />
      
    </div>
  );
};

export default App;
