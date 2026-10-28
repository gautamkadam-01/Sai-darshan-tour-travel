import React from 'react';
import { Clock, ShieldAlert, CheckCircle2, ExternalLink, Info, AlertTriangle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export const AARTI_TIMINGS = [
  { name: 'Kakad Aarti (Morning)', time: '04:30 AM', note: 'Early morning waking prayer. Devotees assemble by 3:30 AM.' },
  { name: 'Holy Bath (Mangal Snan)', time: '05:05 AM', note: 'Abhishek pooja and fresh vastra offerings.' },
  { name: 'Darshan Commences', time: '05:40 AM', note: 'General line opens for Samadhi Mandir darshan.' },
  { name: 'Madhyan Aarti (Noon)', time: '12:00 PM', note: 'Midday prayer. Line fills rapidly by 11:00 AM.' },
  { name: 'Dhoop Aarti (Sunset)', time: 'Sunset / ~06:30 PM', note: 'Evening prayer at dusk.' },
  { name: 'Shej Aarti (Night)', time: '10:30 PM', note: 'Night lullaby prayer before temple closes at 11:15 PM.' },
];

export default function DarshanTipsCard() {
  return (
    <div className="space-y-6">
      {/* Official Links Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-slate-950 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-slate-950 text-white text-[11px] font-bold uppercase tracking-wider mb-1.5">
              Official Sansthan Portals
            </div>
            <h4 className="text-xl font-extrabold text-slate-950">
              Book Official Darshan, Aarti & Sansthan Rooms
            </h4>
            <p className="text-xs sm:text-sm text-slate-900 mt-1 max-w-2xl font-medium">
              We strongly advise all devotees to book their darshan tokens and Aarti passes directly through the Shri Saibaba Sansthan Trust official website or on-spot Sansthan counters.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={COMPANY_DETAILS.officialTrustOnlinePortal}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors"
            >
              <span>online.sai.org.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={COMPANY_DETAILS.officialTrustWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors"
            >
              <span>sai.org.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Aarti Schedule Grid */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
          <Clock className="w-5 h-5 text-amber-600" />
          <h4 className="text-lg font-extrabold text-slate-900">
            Daily Temple Aarti & Darshan Schedule
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {AARTI_TIMINGS.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-colors">
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold text-xs text-slate-900">{item.name}</span>
                <span className="font-extrabold text-xs text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                  {item.time}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Essential Guidelines & Restrictions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dress code & Rules */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-3">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <Info className="w-4 h-4 text-amber-600" />
            <span>Dress Code & Important Temple Rules</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Modest Attire:</strong> Devotees should wear traditional or respectful clothing (Kurtas, Sarees, Salwar Kameez, full trousers). Shorts and revealing clothing are discouraged.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Electronics Prohibited:</strong> Mobile phones, electronic gadgets, smartwatches, and cameras are strictly banned inside the Samadhi Mandir queue. Free and paid locker facilities are provided by the Sansthan near Gate 2.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Footwear Stands:</strong> Free shoe counters are located outside Gate 1, Gate 2, and Gate 3. Remember your counter token number.</span>
            </li>
          </ul>
        </div>

        {/* Senior Citizens & Special Needs */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-3">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <ShieldAlert className="w-4 h-4 text-emerald-600" />
            <span>Senior Citizens, Wheelchair & Medical Facility</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Senior Citizen Gate Access:</strong> Senior citizens (men 65+, women 60+) and specially-abled devotees have dedicated queue access (usually via Gate 2). Keep original government photo ID (Aadhaar / Passport) handy.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Wheelchair Counters:</strong> Shri Saibaba Sansthan provides free wheelchairs near the PRO office and Gate 2. Ramp paths allow easy access to the Samadhi Mandir hall.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span><strong>Medical Centers:</strong> Free 24/7 Sansthan medical dispensaries operate adjacent to the temple complex, in addition to the modern Shri Saibaba Superspeciality Hospital nearby.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
