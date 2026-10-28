import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export default function QuickFloatingActions() {
  const whatsappUrl = COMPANY_DETAILS.whatsappUrl;
  const phoneRaw = COMPANY_DETAILS.phoneRaw;

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <aside aria-label="Quick contact" className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          title="Chat with Sai Darshan Tour & Travel on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="pr-1">Enquire on WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Bar */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href={`tel:${phoneRaw}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Call Now</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
