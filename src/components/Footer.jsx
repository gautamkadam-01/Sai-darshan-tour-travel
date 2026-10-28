import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  ShieldAlert, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center shadow-lg">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  Sai Darshan Tour & Travel
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  Shirdi, Maharashtra
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Trusted, 24/7 sanitized AC cab service for Sai Baba Temple darshan, Shirdi Airport pickups, outstation travel to Mumbai, Pune, Nashik, and pan-India pilgrimage tours.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a 
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
                  className="text-white hover:text-amber-400 font-semibold transition-colors"
                >
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={COMPANY_DETAILS.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  WhatsApp: +91 74985 10536
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Operating Hours: 24/7 Round the Clock</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Website Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Taxi Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Our Vehicle Fleet
                </Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Popular Routes
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/darshan-guide" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Sai Baba Darshan Guide
                </Link>
              </li>
              <li>
                <Link to="/hotel-assistance" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Hotel Assistance
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> About Sai Darshan Tour & Travel
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Fleet & Key Routes */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                Our Fleet Models
              </h4>
              <ul className="text-xs space-y-1 text-slate-400">
                <li>• Toyota Innova Crysta (6-7 Seater)</li>
                <li>• Maruti Suzuki Swift Dzire (4 Seater)</li>
                <li>• Hyundai Verna (4 Seater Premium)</li>
                <li>• Maruti Suzuki Ciaz (4 Seater Executive)</li>
                <li>• Maruti Suzuki Ertiga (6 Seater MUV)</li>
                <li>• Tempo Traveller — 17 Seater</li>
                <li>• Tempo Traveller — 20 Seater</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                Major Routes
              </h4>
              <ul className="text-xs space-y-1 text-slate-400">
                <li>• Shirdi ⇄ Mumbai Airport / City</li>
                <li>• Shirdi ⇄ Pune Airport / City</li>
                <li>• Shirdi ⇄ Nashik & Trimbakeshwar</li>
                <li>• Shirdi ⇄ Shani Shingnapur</li>
                <li>• Shirdi Airport (Kakadi) ⇄ Temple</li>
                <li>• Kopargaon / Manmad Railway Pickup</li>
              </ul>
            </div>
          </div>

          {/* Column 4: Official Trust Links & Guidelines */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Official Sansthan Portals
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              For official temple darshan passes, online aarti tokens, and Sansthan Bhakta Niwas room bookings, please visit official Trust websites:
            </p>

            <div className="space-y-2.5">
              <a 
                href={COMPANY_DETAILS.officialTrustOnlinePortal} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs text-amber-300 transition-colors"
              >
                <span>Online Sansthan Services</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a 
                href={COMPANY_DETAILS.officialTrustWebsite} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs text-slate-200 transition-colors"
              >
                <span>Shri Saibaba Sansthan Trust</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            <div className="bg-amber-950/40 border border-amber-900/60 rounded-xl p-3 text-[11px] text-amber-200/90 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Travel Advisory:</span>
              </div>
              <p className="leading-tight">
                Be cautious of touts promising "instant VIP darshan". Only official Trust counters and online.sai.org.in issue valid passes.
              </p>
            </div>
          </div>
        </div>

        {/* Clear Legal & Transparency Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400 space-y-1.5">
          <p className="font-bold text-slate-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Independent Travel Service Provider Disclaimer:</span>
          </p>
          <p className="leading-relaxed">
            {COMPANY_DETAILS.trustDisclaimer}
          </p>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {currentYear} <strong>Sai Darshan Tour & Travel</strong>. All rights reserved. Shirdi, Maharashtra.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact Desk
            </Link>
            <span>•</span>
            <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-amber-400 hover:underline">
              {COMPANY_DETAILS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
