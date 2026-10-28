import React from 'react';
import { 
  Car, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Phone, 
  MessageCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';
import SeoMeta from '../components/SeoMeta';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_DETAILS } from '../data/company';

export default function ServicesPage() {
  return (
    <>
      <SeoMeta
        title="Taxi & Cab Services in Shirdi — 24/7 Car Rental"
        description="Explore 11 specialized taxi services by Sai Darshan Tour & Travel: Shirdi local cabs, airport pickup, outstation drops to Mumbai & Pune, senior citizen travel assistance. Call +91 74985 10536."
      />

      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            24/7 Dedicated Cab Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Taxi Services in Shirdi & Beyond
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From seamless Shirdi temple visits and airport transfers to outstation pilgrimages across Maharashtra, Sai Darshan Tour & Travel delivers punctual, sanitized, and respectful service.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Standards & Transparency Strip */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 mb-1">
                  Punctuality Guarantee
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We value your devotion and time. Pickups for early morning Kakad Aarti (3:30 AM) and midnight trains are planned with buffer time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 mb-1">
                  Transparent Fare Quotation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every booking is priced based on actual itinerary details. No invented fares, hidden toll additions, or surge pricing surprises.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 mb-1">
                  Devotional Chauffeurs
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Polite, verified drivers who know the local Shirdi landscape, temple gates, footwear counters, and safe parking zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form on Services Page */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BookingForm 
            title="Book Any Taxi Service" 
            subtitle="Select your preferred service and journey requirements below for an instant quotation via WhatsApp."
          />
        </div>
      </section>
    </>
  );
}
