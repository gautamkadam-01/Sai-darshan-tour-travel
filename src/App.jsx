import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickFloatingActions from './components/QuickFloatingActions';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FleetPage from './pages/FleetPage';
import RoutesPage from './pages/RoutesPage';
import PackagesPage from './pages/PackagesPage';
import DarshanGuidePage from './pages/DarshanGuidePage';
import HotelAssistancePage from './pages/HotelAssistancePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/darshan-guide" element={<DarshanGuidePage />} />
            <Route path="/hotel-assistance" element={<HotelAssistancePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Quick Action Floating Buttons (WhatsApp & Call) */}
        <QuickFloatingActions />

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
