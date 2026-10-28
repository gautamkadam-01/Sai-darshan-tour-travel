import React from 'react';
import { Users, Briefcase, Wind, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { COMPANY_DETAILS } from '../data/company';

export default function VehicleCard({ vehicle, onSelectVehicle }) {
  const {
    id,
    name,
    category,
    tagline,
    seatingCapacity,
    verifiedSeats,
    luggageCapacity,
    acType,
    pricingDisplay,
    image,
    imageAlt,
    imageCredit,
    highlights,
    bestSuitedFor
  } = vehicle;

  const handleEnquire = () => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicle.name);
    } else {
      // Scroll to booking form or navigate
      const element = document.getElementById('booking-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#/';
        setTimeout(() => {
          const el = document.getElementById('booking-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sai Darshan Tour & Travel, I am interested in inquiring about the *${name}* (${verifiedSeats}) for my trip in Shirdi. Please share fare quotation and vehicle availability.`
    );
    window.open(`https://wa.me/917498510536?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-amber-400/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img
          src={getAssetUrl(image)}
          alt={imageAlt || `${name} taxi in Shirdi`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback gracefully if any image fails to load
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

        {/* Category & Seating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900/90 text-white backdrop-blur-sm shadow-sm">
            {category}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500 text-slate-950 shadow-sm">
            {verifiedSeats}
          </span>
        </div>

        {/* Image credit note */}
        <div className="absolute bottom-2 right-3 text-[10px] text-white/80 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
          {imageCredit || 'Model reference photo'}
        </div>

        <div className="absolute bottom-2 left-3 text-white">
          <h4 className="text-lg font-extrabold drop-shadow-md">
            {name}
          </h4>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-slate-600 italic mb-4 min-h-[32px]">
            "{tagline}"
          </p>

          {/* Key Specs Pill Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs mb-4">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
              <Users className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <div className="overflow-hidden">
                <span className="block text-[10px] text-slate-400 font-semibold uppercase">Capacity</span>
                <span className="font-medium truncate block">{verifiedSeats}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
              <Briefcase className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <div className="overflow-hidden">
                <span className="block text-[10px] text-slate-400 font-semibold uppercase">Luggage</span>
                <span className="font-medium truncate block">{luggageCapacity.split('+')[0]}</span>
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
              <Wind className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <div className="overflow-hidden">
                <span className="block text-[10px] text-slate-400 font-semibold uppercase">Air Conditioning</span>
                <span className="font-medium truncate block">{acType}</span>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-1.5 mb-4">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Vehicle Highlights:
            </span>
            {highlights.slice(0, 3).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>

          {/* Pricing Display */}
          <div className="bg-amber-50/60 border border-amber-100 rounded-xl px-3 py-2 text-xs mb-4 flex items-center justify-between">
            <span className="text-slate-600 font-medium">Estimated Fare:</span>
            <span className="font-bold text-amber-800 uppercase tracking-wide">
              {pricingDisplay}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={handleEnquire}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-amber-600 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Enquire for This Vehicle</span>
          </button>

          <button
            type="button"
            onClick={handleDirectWhatsApp}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
