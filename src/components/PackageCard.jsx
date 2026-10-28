import React from 'react';
import { Clock, MapPin, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export default function PackageCard({ pkg }) {
  const { title, duration, badge, description, sightsCovered, recommendedVehicles, includes, fareDisplay } = pkg;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sai Darshan Tour & Travel, I am interested in booking or inquiring about the *${title}* (${duration}). Please share vehicle availability and quotation.`
    );
    window.open(`https://wa.me/917498510536?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-400 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-800 border border-amber-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{badge}</span>
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5" />
            <span>{duration}</span>
          </span>
        </div>

        <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors mb-3">
          {title}
        </h4>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Sights Covered */}
        <div className="mb-4 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
          <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
            Destinations & Sights Covered:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {sightsCovered.map((sight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{sight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Package Inclusions */}
        <div className="mb-4">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
            Package Features:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {includes.map((inc, idx) => (
              <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{inc}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="text-slate-500 font-medium">Package Quotation:</span>
          <span className="font-extrabold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            {fareDisplay}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Enquire Package</span>
          </button>
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 text-center"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>Call Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
