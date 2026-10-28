import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Car, 
  Sparkles, 
  ChevronRight, 
  Calendar, 
  Award, 
  Compass, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import BookingForm from '../components/BookingForm';
import VehicleCard from '../components/VehicleCard';
import ServiceCard from '../components/ServiceCard';
import RouteCard from '../components/RouteCard';
import PackageCard from '../components/PackageCard';
import DarshanTipsCard from '../components/DarshanTipsCard';
import SeoMeta from '../components/SeoMeta';
import { FLEET_DATA } from '../data/fleet';
import { SERVICES_DATA } from '../data/services';
import { POPULAR_ROUTES } from '../data/routes';
import { PACKAGES_DATA } from '../data/packages';
import { FAQS_DATA } from '../data/faqs';
import { COMPANY_DETAILS } from '../data/company';
import { getAssetUrl } from '../utils/assets';

export default function HomePage() {
  const [selectedVehicleForForm, setSelectedVehicleForForm] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleSelectVehicle = (vehicleName) => {
    setSelectedVehicleForForm(vehicleName);
    const formElement = document.getElementById('booking-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  return (
    <>
      <SeoMeta
        title="Taxi & Cab Service in Shirdi — Sai Darshan Tour & Travel"
        description="Book reliable, sanitized AC cabs in Shirdi. Innova Crysta, Swift Dzire, Ertiga, Ciaz & Tempo Travellers for temple darshan, Shirdi Airport, Mumbai, Pune & all-India routes. Call +91 74985 10536."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>24/7 Trusted Shirdi Cab Service</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Comfortable & Reliable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Taxi Service in Shirdi
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Welcome to <strong>Sai Darshan Tour & Travel</strong>. We provide sanitized, air-conditioned sedans, SUVs, and luxury Tempo Travellers for Sai Baba Temple darshan, Shirdi Airport transfers, outstation routes to Mumbai, Pune, Nashik, and all-India pilgrimage journeys.
              </p>

              {/* Trust Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <Clock className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="block text-xs font-bold text-white">24/7 Availability</span>
                  <span className="block text-[11px] text-slate-400">Day & night pickups</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                  <span className="block text-xs font-bold text-white">Sanitized Cabs</span>
                  <span className="block text-[11px] text-slate-400">Clean, inspected fleet</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 col-span-2 sm:col-span-1">
                  <Award className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="block text-xs font-bold text-white">Clear Quotations</span>
                  <span className="block text-[11px] text-slate-400">No hidden surge fares</span>
                </div>
              </div>

              {/* Quick Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
                </a>

                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

              {/* Fleet thumbnail preview */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <Car className="w-4 h-4 text-amber-400" />
                <span>Innova Crysta • Swift Dzire • Ertiga • Ciaz • Verna • Tempo Travellers</span>
              </div>
            </div>

            {/* Right Column: Hero Booking / Enquiry Form */}
            <div className="lg:col-span-6">
              <BookingForm preselectedVehicle={selectedVehicleForForm} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Strip */}
      <section className="bg-amber-500 text-slate-950 py-4 px-4 sm:px-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-xs sm:text-sm font-bold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Punctual Pickups from Shirdi Hotels & Stations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Experienced Devotional Highway Chauffeurs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Doorstep Transfers Across Maharashtra & India</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Luggage Safety During Temple Darshan</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              Our Taxi Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Travel & Cab Solutions in Shirdi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              From quick local temple shuttles to outstation highway road trips, our verified chauffeurs and comfortable fleet are at your service 24 hours a day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-amber-600 transition-colors shadow-md"
            >
              <span>View All 11 Specialized Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                Our Fleet
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Sanitized & Maintained Vehicles
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Choose from comfortable sedans, spacious family MUVs, premium SUVs, and group Tempo Travellers with verified seating configurations.
              </p>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span>Explore full vehicle fleet</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 7 Vehicle Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET_DATA.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelectVehicle={handleSelectVehicle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                Intercity & Pilgrimage Routes
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Popular Taxi Routes Connecting Shirdi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Frequent journeys between Shirdi, Mumbai, Pune, Nashik, Shani Shingnapur, and Sambhajinagar with flexible one-way drops or return tours.
              </p>
            </div>
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span>View all route details</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_ROUTES.slice(0, 6).map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Showcase */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              Pilgrimage Circuits
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Curated Shirdi Tour Packages
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Combine your sacred Sai Baba Darshan with nearby spiritual shrines like Shani Shingnapur, Trimbakeshwar Jyotirlinga, Grishneshwar, and Ellora Caves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES_DATA.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-amber-600 transition-colors shadow-md"
            >
              <span>Explore All Pilgrimage Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Sai Darshan Tour & Travel Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Your Devoted Travel Partner in Shirdi
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              We understand the sanctity of your pilgrimage. Our commitment is to deliver transparent, punctual, and tranquil transportation so you can focus entirely on Baba's blessings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-base font-extrabold mb-2">24/7 Guaranteed Punctuality</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether catching a 3:30 AM Kakad Aarti or a midnight train at Kopargaon, our chauffeurs arrive on time, every time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-extrabold mb-2">Clean Sanitized AC Fleet</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every vehicle is thoroughly vacuumed, washed, and sanitised before each dispatch. Enjoy fresh interiors and chilled air conditioning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-extrabold mb-2">Courteous Devotional Drivers</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our drivers are non-smokers, polite, background-verified locals with complete mastery over Shirdi temple gates, parking, and highway routes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-extrabold mb-2">Honest & Transparent Fares</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We provide clear quotations before you travel. No hidden surge pricing, surprise charges, or mid-trip fare increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sai Baba Darshan Guide Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              Pilgrim Information
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Shirdi Sai Baba Darshan Guidance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Essential tips, daily Aarti schedules, and official Shri Saibaba Sansthan Trust online booking links.
            </p>
          </div>

          <DarshanTipsCard />

          <div className="text-center mt-10">
            <Link
              to="/darshan-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-amber-600 transition-colors shadow-md"
            >
              <span>Read Complete Temple Visitor Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              Help & Answers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Everything you need to know about booking, darshan arrangements, airport pickups, and rates.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left font-bold text-sm sm:text-base text-slate-900 flex justify-between items-center gap-3 hover:bg-slate-100/80 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA Banner */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-14 px-4 sm:px-6 text-slate-950">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Planning Your Sacred Pilgrimage to Shirdi?
          </h2>
          <p className="text-sm sm:text-base text-slate-900 font-medium max-w-2xl mx-auto">
            Contact <strong>Sai Darshan Tour & Travel</strong> now for punctual pickups, clean AC cabs, and transparent quotations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl font-extrabold text-sm bg-slate-950 text-white hover:bg-slate-900 shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 74985 10536</span>
            </a>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-extrabold text-sm bg-emerald-700 text-white hover:bg-emerald-800 shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
