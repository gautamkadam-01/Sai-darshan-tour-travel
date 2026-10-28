import React from 'react';
import BookingForm from '../components/BookingForm';
import SeoMeta from '../components/SeoMeta';
import { COMPANY_DETAILS } from '../data/company';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Info, 
  ExternalLink, 
  Car, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';

const HOTEL_AREAS = [
  {
    area: 'Shri Saibaba Sansthan Bhakta Niwas (Trust Accommodation)',
    badge: 'Official Non-Profit Stays',
    description: 'The Shri Saibaba Sansthan Trust operates large pilgrim accommodations including Sai Ashram (approx. 1,500 rooms), Dwarawati Bhakta Niwas, and the historic 500-Room Bhakta Niwas. Rooms are clean, nominal, and strictly non-commercial.',
    keyPoints: [
      'Must be booked in advance directly via official portal online.sai.org.in or on-spot Sansthan counters',
      'Free or nominal bus shuttle operates between Sai Ashram complex and the temple',
      'Sai Darshan Tour & Travel provides 24/7 direct cab transfers from stations/airports directly to any Bhakta Niwas gate'
    ],
    bookingNote: 'Book directly via online.sai.org.in. We do not sell or reserve Trust rooms.'
  },
  {
    area: 'Temple Gate 1, 2 & 3 Vicinity (Pimpalwadi Road)',
    badge: 'Walking Distance to Sanctum',
    description: 'Hotels located along Pimpalwadi road and the immediate perimeter of the temple complex offer the advantage of walking directly into the darshan queues without needing vehicular transport each time.',
    keyPoints: [
      'Convenient for families with elderly members or toddlers who need to return to rooms between aartis',
      'Higher room rates due to proximity to the Samadhi Mandir',
      'Narrow lanes during peak festivals — our cabs drop you off at the closest permitted vehicle access point'
    ],
    bookingNote: 'Reserve through reputed verified online travel agencies or direct hotel desks.'
  },
  {
    area: 'Nagar-Manmad Highway (Main Thoroughfare)',
    badge: 'Spacious & Convenient Parking',
    description: 'Lined with a broad variety of modern hotels, budget guest houses, and family lodges. Located 500 meters to 1.5 km from the temple, this area offers wider roads and easy parking.',
    keyPoints: [
      'Wide selection from budget-friendly dharamshalas to well-reviewed family hotels',
      'Abundant restaurants serving pure vegetarian Maharashtrian, South Indian, and Gujarati thalis',
      'Our local cabs can shuttle your family to and from the temple entrance at any hour'
    ],
    bookingNote: 'Independent hotels — verify cancellation policies and reviews before booking.'
  },
  {
    area: 'Sun-N-Sand Road & Off-Highway Zones',
    badge: 'Quiet & Premium Resorts',
    description: 'Located in quieter pockets slightly away from the bustling town core, featuring resort-style properties with swimming pools, landscaped lawns, and tranquil environments.',
    keyPoints: [
      'Ideal for travelers seeking quietude, relaxation, and spacious premises',
      'Situated 1.5 to 3 km from the temple complex',
      'Pre-arranging dedicated cab transfers ensures prompt transit to all Aartis'
    ],
    bookingNote: 'We provide on-demand vehicle standby and pickup directly from resort porches.'
  }
];

export default function HotelAssistancePage() {
  return (
    <>
      <SeoMeta
        title="Hotel Assistance in Shirdi — Areas to Stay, Bhakta Niwas & Cab Transfers"
        description="Impartial guidance on staying in Shirdi: official Sansthan Bhakta Niwas (Sai Ashram), hotels near temple gates, and punctual cab transfers by Sai Darshan Tour & Travel."
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Impartial Visitor Accommodation Guidance
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Hotel Assistance & Area Orientation in Shirdi
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Guidance for finding convenient lodging near the temple or quiet resorts, accompanied by seamless 24/7 cab transfers to every Aarti.
          </p>
        </div>
      </div>

      {/* Transparent Disclaimer */}
      <section className="bg-amber-50 border-b border-amber-200 py-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 border border-amber-300 shadow-sm flex items-start gap-4">
          <ShieldCheck className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Transparent Hotel Assistance Policy:
            </h4>
            <p className="leading-relaxed">
              Sai Darshan Tour & Travel does NOT claim hotel partnerships, exclusive commissions, or guaranteed room blocks. We do not invent rates or take payment for hotel reservations. Our assistance is strictly focused on <strong>local navigation, impartial advice on convenient locations, and reliable 24/7 taxi transportation</strong> between your accommodation, Shirdi Temple gates, railway stations, and airport.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Guide Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Where to Stay in Shirdi: Area Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Evaluate each zone based on your family's mobility, quietness preference, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOTEL_AREAS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900">
                      {item.badge}
                    </span>
                    <Building2 className="w-5 h-5 text-amber-600" />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {item.area}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {item.keyPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
                  Note: {item.bookingNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Trust Rooms CTA */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Booking Shri Saibaba Sansthan Bhakta Niwas?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Reserve official Sansthan rooms through the Trust's verified portal. Once booked, let us take care of your airport or railway station transfer straight to the Bhakta Niwas gate.
          </p>
          <a
            href={COMPANY_DETAILS.officialTrustOnlinePortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-amber-600 transition-colors shadow-md"
          >
            <span>Visit Official Sansthan Portal (online.sai.org.in)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Cab Booking for Hotel Transfers */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BookingForm
            title="Book Airport / Station Transfer to Your Shirdi Hotel"
            subtitle="Arriving late or have multiple bags? Pre-book a comfortable AC cab straight to your hotel reception."
          />
        </div>
      </section>
    </>
  );
}
