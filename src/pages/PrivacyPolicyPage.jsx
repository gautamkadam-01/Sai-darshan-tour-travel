import React from 'react';
import SeoMeta from '../components/SeoMeta';
import { COMPANY_DETAILS } from '../data/company';
import { ShieldCheck, Lock, Eye, FileText, Phone, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SeoMeta
        title="Privacy Policy — Sai Darshan Tour & Travel Shirdi"
        description="Privacy policy of Sai Darshan Tour & Travel, Shirdi. Transparent handling of customer travel inquiries, contact numbers, and zero online payment data storage."
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Transparency & Security
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last Updated: October 2026 • Sai Darshan Tour & Travel, Shirdi
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 prose prose-slate text-xs sm:text-sm leading-relaxed space-y-8">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At <strong>Sai Darshan Tour & Travel</strong> ("we", "our", or "us"), we are committed to safeguarding the privacy and personal details of our pilgrims and customers who use our website or contact our travel desk for taxi bookings and tour inquiries. This Privacy Policy details how we handle the information you provide to us.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              2. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We collect information strictly necessary to provide accurate taxi quotations, dispatch vehicles, and communicate travel itineraries with you. This information is submitted voluntarily by you through our enquiry forms, WhatsApp conversations, or phone calls:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mt-2">
              <li>Customer full name</li>
              <li>Contact telephone or WhatsApp mobile number</li>
              <li>Pickup address, hotel name, or airport/station terminal</li>
              <li>Destination and travel dates</li>
              <li>Number of traveling passengers and vehicle preference</li>
              <li>Special travel requests (e.g. senior citizen assistance, wheelchair luggage space)</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-950">
            <h3 className="font-extrabold text-sm mb-1 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-600" />
              <span>3. Zero Financial or Payment Card Data Stored</span>
            </h3>
            <p className="text-xs leading-relaxed text-amber-900">
              Our website does NOT operate an online payment gateway. We never ask for, collect, process, or store credit card numbers, debit card details, CVVs, or online banking passwords. Payments for taxi services are handled independently and directly between the customer and our travel desk or chauffeur via standard UPI apps (GPay, PhonePe, Paytm) or cash upon pickup.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              4. How We Use Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Your details are used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 mt-2">
              <li>Calculate and communicate transparent taxi fare quotations.</li>
              <li>Coordinate vehicle dispatch and share assigned chauffeur details with you.</li>
              <li>Verify pickup location and timing on your travel date.</li>
              <li>Assist with customer service inquiries regarding routes and darshan schedules.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              5. No Selling or Sharing of Phone Numbers
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We have a strict anti-spam policy. We do not sell, rent, lease, or share your contact numbers or travel details with external marketing agencies, advertising networks, or third-party telemarketers.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              6. Third-Party Links & WhatsApp Messaging
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our website provides links to external official services, specifically the Shri Saibaba Sansthan Trust official portals (<code>sai.org.in</code> and <code>online.sai.org.in</code>) and WhatsApp (Meta Platforms). When you submit an enquiry through our form, your device connects to WhatsApp to transmit your message. Your interaction with WhatsApp and the official Trust websites is governed by their respective privacy terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              7. Contact for Privacy Inquiries
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy or wish to have your contact details updated or deleted from our booking records, please contact:
            </p>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mt-2 space-y-1 text-slate-700">
              <p><strong>Sai Darshan Tour & Travel</strong></p>
              <p>Address: {COMPANY_DETAILS.address}</p>
              <p>Phone / WhatsApp: {COMPANY_DETAILS.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
