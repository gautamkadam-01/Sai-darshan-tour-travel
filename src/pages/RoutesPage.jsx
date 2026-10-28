import React from 'react';
import RouteCard from '../components/RouteCard';
import BookingForm from '../components/BookingForm';
import SeoMeta from '../components/SeoMeta';
import { POPULAR_ROUTES } from '../data/routes';
import { COMPANY_DETAILS } from '../data/company';
import { MapPin, Navigation, Info, ShieldCheck } from 'lucide-react';

export default function RoutesPage() {
  return (
    <>
      <SeoMeta
        title="Popular Taxi Routes — Shirdi to Mumbai, Pune, Nashik Cabs"
        description="Book popular taxi routes with Sai Darshan Tour & Travel: Shirdi to Mumbai, Pune, Nashik, Shani Shingnapur, Trimbakeshwar, and Shirdi Airport transfers. Contact for customized quotation."
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            One-Way & Round-Trip Routes
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Popular Taxi Routes Connecting Shirdi
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reliable highway journeys connecting Shirdi to major metropolitan hubs, airports, railway junctions, and Jyotirlinga shrines across Maharashtra.
          </p>
        </div>
      </div>

      {/* Transparency Note */}
      <section className="bg-amber-50 border-b border-amber-200 py-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-950">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Transparent Fare Quotations:</strong> We do not publish generic or fabricated fares because road conditions, expressways, toll options, and vehicle requirements vary by journey. Simply tap "Enquire Fare" or WhatsApp us with your pickup address and passenger count for a fair, all-inclusive quotation.
          </p>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_ROUTES.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BookingForm
            title="Book Your Intercity Route"
            subtitle="Tell us your pickup and destination locations for an immediate WhatsApp quotation."
          />
        </div>
      </section>
    </>
  );
}
