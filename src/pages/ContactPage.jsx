import React from 'react';
import BookingForm from '../components/BookingForm';
import SeoMeta from '../components/SeoMeta';
import { COMPANY_DETAILS } from '../data/company';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck, 
  Car,
  Compass
} from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <SeoMeta
        title="Contact Us — Sai Darshan Tour & Travel Shirdi"
        description="Contact Sai Darshan Tour & Travel, Shirdi. Phone / WhatsApp: +91 74985 10536. 24/7 taxi booking, airport pickup, outstation cabs, and Shirdi temple darshan travel."
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            24/7 Travel Desk
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact Sai Darshan Tour & Travel
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are based in Shirdi and operate 24 hours a day, 7 days a week. Connect with our dispatch team by phone, WhatsApp, or through the online enquiry form below.
          </p>
        </div>
      </div>

      {/* Contact Cards & Map / Info Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 cols: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-slate-900 pb-3 border-b border-slate-100">
                  Business Contact Details
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase">Direct Telephone</span>
                      <a 
                        href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                        className="font-bold text-slate-900 hover:text-amber-600 transition-colors text-base"
                      >
                        {COMPANY_DETAILS.phoneDisplay}
                      </a>
                      <span className="block text-xs text-slate-500">Available 24 hours for calls & inquiries</span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 fill-emerald-600" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase">WhatsApp Desk</span>
                      <a 
                        href={COMPANY_DETAILS.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-700 hover:text-emerald-800 transition-colors text-base"
                      >
                        +91 74985 10536
                      </a>
                      <span className="block text-xs text-slate-500">Instant chat & quotation dispatch</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase">Office Location</span>
                      <p className="font-semibold text-slate-800 leading-snug">
                        {COMPANY_DETAILS.address}
                      </p>
                      <span className="block text-xs text-slate-500 mt-0.5">Shirdi, Ahmednagar, Maharashtra — 423109</span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase">Working Hours</span>
                      <span className="font-bold text-slate-800">24 Hours / 7 Days a Week</span>
                      <span className="block text-xs text-slate-500">Every day including Sundays and festival holidays</span>
                    </div>
                  </div>
                </div>

                {/* Direct Connect Buttons */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="py-3 px-4 rounded-xl font-bold text-xs bg-slate-900 text-white hover:bg-slate-800 text-center flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 text-center flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Service Areas Note */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>Coverage & Pickup Points</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We provide doorstep pickups from all hotels, resorts, and Sansthan Bhakta Niwas across Shirdi, Shirdi International Airport (Kakadi), Sainagar Shirdi Railway Station (SNSI), Kopargaon (KPG), Manmad (MMR), Nashik, Pune, Mumbai, and outstation points across India.
                </p>
              </div>
            </div>

            {/* Right 7 cols: Interactive Booking Form */}
            <div className="lg:col-span-7">
              <BookingForm 
                title="Send Your Travel Enquiry"
                subtitle="Fill in your details below. We generate a formatted WhatsApp message to finalize your quotation instantly."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
