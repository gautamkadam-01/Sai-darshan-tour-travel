import React from 'react';
import { 
  Car, 
  Compass, 
  Navigation, 
  Repeat, 
  Plane, 
  Train, 
  MapPin, 
  Users, 
  HeartHandshake, 
  Accessibility, 
  Building2,
  CheckCircle2,
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

const ICON_MAP = {
  Car,
  Compass,
  Navigation,
  Repeat,
  Plane,
  Train,
  MapPin,
  Users,
  HeartHandshake,
  Accessibility,
  Building2,
};

export default function ServiceCard({ service, onEnquire }) {
  const { id, name, iconName, summary, description, benefits, pricingNote } = service;
  const IconComponent = ICON_MAP[iconName] || Car;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sai Darshan Tour & Travel, I would like to inquire about *${name}*. Please share details, vehicle options, and quotation.`
    );
    window.open(`https://wa.me/917498510536?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-400/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Service Icon & Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 text-amber-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
            {pricingNote}
          </span>
        </div>

        {/* Title & Summary */}
        <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
          {name}
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {summary}
        </p>

        {/* Benefits checklist */}
        <div className="space-y-2 mb-6 border-t border-slate-100 pt-3">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full py-2 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
          <span>WhatsApp</span>
        </button>
        <a
          href={`tel:${COMPANY_DETAILS.phoneRaw}`}
          className="w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 text-center"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
          <span>Call Desk</span>
        </a>
      </div>
    </div>
  );
}
