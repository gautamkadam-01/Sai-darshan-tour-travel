import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronDown
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import logoImg from '../assets/sai-darshan-logo.jpeg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Routes', path: '/routes' },
    { name: 'Packages', path: '/packages' },
    { name: 'Darshan Guide', path: '/darshan-guide' },
    { name: 'Hotel Assistance', path: '/hotel-assistance' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Bar with Contact & Hours */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Shirdi, Maharashtra</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>24/7 Taxi Service & Tour Assistance</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sanitized AC Cabs • Commercial Permits</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
              className="flex items-center gap-1.5 text-white hover:text-amber-400 transition-colors font-semibold"
              title="Call Sai Darshan Tour & Travel"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{COMPANY_DETAILS.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={COMPANY_DETAILS.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-200 ${scrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm ring-2 ring-amber-400/40 group-hover:ring-amber-500 transition-all flex-shrink-0">
              <img
                src={logoImg}
                alt="Sai Darshan Tour & Travel logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight">
                  Sai Darshan
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                  Shirdi
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Tour & Travel • 24/7 Cab Service
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-700 bg-amber-50 font-semibold'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Quick Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 transition-all shadow-md shadow-amber-500/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Cab</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="p-2 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors"
              title="Call Now"
            >
              <Phone className="w-5 h-5 fill-amber-600 text-amber-600" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl animate-in fade-in duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {/* Mobile Header Brand with Logo */}
            <div className="flex items-center gap-3 px-2 py-2.5 border-b border-slate-100 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center ring-2 ring-amber-400/40 flex-shrink-0">
                <img
                  src={logoImg}
                  alt="Sai Darshan Tour & Travel logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-sm text-slate-900 block leading-tight">
                  Sai Darshan Tour & Travel
                </span>
                <span className="text-[11px] text-amber-700 font-medium">
                  Shirdi, Maharashtra • 24/7 Cab Service
                </span>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-700 bg-amber-50 font-semibold'
                    : 'text-slate-800 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-sm text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 text-center text-xs text-slate-500">
              Sai Darshan Tour & Travel • Shirdi, Maharashtra
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
