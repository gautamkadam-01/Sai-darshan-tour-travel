import React from 'react';
import { MapPin, Navigation, Car, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export default function RouteCard({ route }) {
  const { title, from, to, tag, type, availableVehicles, highlights, fareDisplay, note } = route;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sai Darshan Tour & Travel, I would like to get a quotation for the route: *${title}* (${type}). Please share car options and rates.`
    );
    window.open(`https://wa.me/917498510536?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-400 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Header Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900">
            {tag}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
            {type}
          </span>
        </div>

        {/* Route Title */}
        <h4 className="text-lg font-extrabold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
          {title}
        </h4>

        {/* Origin & Destination Visualization */}
        <div className="bg-slate-50 rounded-xl p-3 mb-4 space-y-2 border border-slate-100 text-xs">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
            <span className="font-medium text-slate-500">From:</span>
            <span className="font-bold text-slate-900">{from}</span>
          </div>
          <div className="border-l-2 border-dashed border-slate-300 ml-1 pl-3 text-[10px] text-slate-400">
            Doorstep pickup • Highway transit
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0"></span>
            <span className="font-medium text-slate-500">To:</span>
            <span className="font-bold text-slate-900">{to}</span>
          </div>
        </div>

        {/* Available Fleet Chips */}
        <div className="mb-4">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
            Available Fleet Options:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {availableVehicles.map((v, idx) => (
              <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-1.5 mb-4">
          {highlights.slice(0, 3).map((hl, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="pt-3 border-t border-slate-100">
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="text-slate-500 font-medium">Route Fare:</span>
          <span className="font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2 py-1 rounded border border-amber-200">
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
            <span>Enquire Fare</span>
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
