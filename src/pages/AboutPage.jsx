import React from 'react';
import SeoMeta from '../components/SeoMeta';
import { COMPANY_DETAILS } from '../data/company';
import { 
  Car, 
  MapPin, 
  ShieldCheck, 
  HeartHandshake, 
  Clock, 
  Award, 
  CheckCircle2, 
  Phone, 
  MessageCircle 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <SeoMeta
        title="About Us — Sai Darshan Tour & Travel, Shirdi"
        description="Learn about Sai Darshan Tour & Travel, Shirdi: our commitment to safe, punctual, and respectful pilgrimage transportation across Shirdi, Maharashtra, and India."
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            About Our Travel Desk
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Sai Darshan Tour & Travel
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Rooted in Shirdi, Maharashtra, providing honest, comfortable, and devotional cab transportation for pilgrims and travelers from all across India.
          </p>
        </div>
      </div>

      {/* Main Story & Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Who We Are */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                Local Hospitality & Devotion
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Serving Pilgrims with Respect, Honesty & Care
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visiting Shirdi is a deeply spiritual journey for every devotee. At <strong>Sai Darshan Tour & Travel</strong>, we view our work not just as a taxi service, but as an opportunity to assist devotees arriving to seek Shri Sai Baba's divine blessings.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Headquartered directly in Shirdi on Nagar-Manmad Highway, we have grown by providing dependable, clean, and properly maintained commercial vehicles operated by respectful, experienced local chauffeurs.
              </p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-4">
              <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>Our Business Commitments</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Surge Pricing:</strong> Transparent quotations agreed before travel commences.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Sanitized Fleet:</strong> Clean, odor-free, fully air-conditioned vehicles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Round-the-Clock Dispatch:</strong> 24/7 service catering to midnight trains & early aartis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Citizen Care:</strong> Considerate, gentle driving and boarding assistance for elders.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Values 3-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">Unwavering Punctuality</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When you book a cab for a 3:30 AM Kakad Aarti or an afternoon flight at Shirdi Airport, our vehicle is positioned outside your door before time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">Verified Fleet & Chauffeurs</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All vehicles carry commercial tourist permits, valid insurances, and are driven by background-checked, non-smoking professionals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">Devotional Orientation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our drivers are helpful guides who assist in identifying nearest temple gates, shoe counters, prasad collection counters, and wheelchair access.
              </p>
            </div>
          </div>

          {/* Legal / Transparency Disclaimer */}
          <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200 text-xs text-amber-950 space-y-2">
            <h4 className="font-bold flex items-center gap-2 text-slate-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Independent Entity Statement</span>
            </h4>
            <p className="leading-relaxed text-slate-700">
              {COMPANY_DETAILS.trustDisclaimer}
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Need Cab Assistance in Shirdi Today?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Our travel coordinator is available 24/7. Call or WhatsApp with your requirements for instant quotes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
