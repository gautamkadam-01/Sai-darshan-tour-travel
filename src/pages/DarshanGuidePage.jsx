import React from 'react';
import DarshanTipsCard from '../components/DarshanTipsCard';
import BookingForm from '../components/BookingForm';
import SeoMeta from '../components/SeoMeta';
import { COMPANY_DETAILS } from '../data/company';
import { 
  ShieldAlert, 
  ExternalLink, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  HelpCircle, 
  Info,
  Calendar
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const SACRED_SPOTS = [
  {
    name: 'Shri Sai Baba Samadhi Mandir',
    desc: 'The sanctum sanctorum housing the holy Samadhi of Shri Sai Baba and the sacred Italian marble idol carved by Balaji Vasant Talim.'
  },
  {
    name: 'Dwarkamai Masjid',
    desc: 'The dilapidated mosque where Baba resided for nearly 60 years. Home to the perpetual Dhuni Maa fire, the grinding stone (chakki), and the sacred stone slab.'
  },
  {
    name: 'Gurusthan',
    desc: 'The sacred spot under the Neem tree where Sai Baba was first seen by the villagers of Shirdi as a young lad of sixteen sitting in meditation.'
  },
  {
    name: 'Chavadi',
    desc: 'Where Baba spent alternate nights during the later years of his life. The historic palanquin procession to Chavadi takes place every Thursday evening.'
  },
  {
    name: 'Lendi Baug',
    desc: 'The garden tended by Sai Baba, featuring the perpetual lamp (Nanda Deep) burning continuously between the two trees planted by Baba.'
  },
  {
    name: 'Khandoba Mandir',
    desc: 'The ancient temple at the entrance of Shirdi where priest Mhalsapati first welcomed Baba with the revered words: "Aao Sai" (Welcome Sai).'
  }
];

export default function DarshanGuidePage() {
  return (
    <>
      <SeoMeta
        title="Sai Baba Darshan Guide — Aarti Timings, Online Passes & Temple Rules"
        description="Comprehensive visitor guide for Shirdi Sai Baba Darshan: official Trust links (online.sai.org.in), Aarti timings, senior citizen gate entry, wheelchair facilities, and sacred spots."
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Visitor Information & Travel Guidance
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Shirdi Sai Baba Darshan & Pilgrimage Guide
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know to plan a serene and peaceful darshan experience in Shirdi, with direct access to official Sansthan portals.
          </p>
        </div>
      </div>

      {/* Prominent Independent Service Disclaimer Box */}
      <section className="bg-amber-50 border-b border-amber-200 py-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 border border-amber-300 shadow-sm flex flex-col md:flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-slate-900">
              Independent Private Travel Desk Notice & Official Portal Advisory
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {COMPANY_DETAILS.trustDisclaimer}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={COMPANY_DETAILS.officialTrustOnlinePortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <span>Book Official Darshan: online.sai.org.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_DETAILS.officialTrustWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                <span>Official Trust: sai.org.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aarti Schedule & Tips Component */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <DarshanTipsCard />
        </div>
      </section>

      {/* Sacred Shrines in Shirdi */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              Holy Shrines
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sacred Spots Associated with Shri Sai Baba
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              During your pilgrimage, our local cabs can drop you off conveniently close to all these holy locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SACRED_SPOTS.map((spot, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-3">
                  {idx + 1}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  {spot.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {spot.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need local transport during darshan */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BookingForm
            title="Book Dedicated Temple Darshan Cab"
            subtitle="Coordinate punctual pickups for early morning Kakad Aarti (3:30 AM), local shrine tours, and luggage safe-keeping."
          />
        </div>
      </section>
    </>
  );
}
