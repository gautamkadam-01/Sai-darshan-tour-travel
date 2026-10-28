import React from 'react';
import PackageCard from '../components/PackageCard';
import BookingForm from '../components/BookingForm';
import SeoMeta from '../components/SeoMeta';
import { PACKAGES_DATA } from '../data/packages';
import { Sparkles, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function PackagesPage() {
  return (
    <>
      <SeoMeta
        title="Tour Packages — Shirdi, Shani Shingnapur, Jyotirlinga Tours"
        description="Explore spiritual tour packages from Shirdi: 1-Day Shani Shingnapur, 2-Day Nashik Trimbakeshwar, 3 Jyotirlinga Maharashtra Yatra, and custom pilgrimages by Sai Darshan Tour & Travel."
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Curated Pilgrimage Circuits
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Shirdi & Maharashtra Tour Packages
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Thoughtfully planned spiritual circuits designed to maximize your time at sacred temples without rushing your family.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES_DATA.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Pilgrimage CTA */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">
            Need a Custom Pilgrimage Itinerary?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Whether visiting Kolhapur Mahalaxmi, Pandharpur, Tuljapur, Akkalkot, or undertaking a 5 Jyotirlinga tour, our travel planners can customize vehicles, night halts, and timings for your family.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BookingForm
            title="Book or Customize a Tour Package"
            subtitle="Let us know which package interests you and your travel dates for an instant customized quotation."
          />
        </div>
      </section>
    </>
  );
}
