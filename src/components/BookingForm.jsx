import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Car, 
  MapPin, 
  Calendar, 
  Users, 
  Phone, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  FileText,
  MessageCircle,
  HelpCircle,
  X
} from 'lucide-react';
import { FLEET_DATA } from '../data/fleet';
import { COMPANY_DETAILS } from '../data/company';

const JOURNEY_TYPES = [
  'One-Way',
  'Round Trip',
  'Airport Transfer',
  'Railway Transfer',
  'Local Travel'
];

export default function BookingForm({ 
  preselectedVehicle = '', 
  compact = false, 
  title = 'Request a Taxi Fare Quotation', 
  subtitle = 'Share your journey details. We respond promptly on WhatsApp with transparent quotations and vehicle availability.' 
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    journeyType: 'One-Way',
    travelDate: '',
    passengers: '2',
    vehicle: preselectedVehicle || 'Any / Recommend for me',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync if preselectedVehicle prop changes
  useEffect(() => {
    if (preselectedVehicle) {
      setFormData((prev) => ({ ...prev, vehicle: preselectedVehicle }));
    }
  }, [preselectedVehicle]);

  // Set default minimum date to today (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters).';
    }

    // Phone validation: Indian 10-digit or valid international
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+?91)?[6-9]\d{9}$/;
    if (!cleanPhone) {
      errs.phone = 'Mobile number is required.';
    } else if (!phoneRegex.test(cleanPhone) && cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.pickup.trim()) {
      errs.pickup = 'Please specify your pickup location (e.g. Hotel name, Shirdi Temple Gate 2, Kopargaon Station, Mumbai Airport).';
    }

    if (!formData.destination.trim()) {
      errs.destination = 'Please specify your destination (e.g. Shirdi Temple, Shani Shingnapur, Pune, Mumbai, Nashik).';
    }

    if (!formData.travelDate) {
      errs.travelDate = 'Please select your travel date.';
    }

    const pax = parseInt(formData.passengers, 10);
    if (isNaN(pax) || pax < 1 || pax > 35) {
      errs.passengers = 'Enter passengers between 1 and 35.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Format neat WhatsApp Message
    const msg = 
`*NEW TAXI ENQUIRY — SAI DARSHAN TOUR & TRAVEL*
--------------------------------------------
👤 *Customer Name:* ${formData.name.trim()}
📞 *Mobile:* ${formData.phone.trim()}
🚖 *Vehicle Selected:* ${formData.vehicle}
🛣️ *Journey Type:* ${formData.journeyType}
📍 *Pickup Location:* ${formData.pickup.trim()}
🎯 *Destination:* ${formData.destination.trim()}
📅 *Travel Date:* ${formData.travelDate}
👥 *Number of Passengers:* ${formData.passengers}
${formData.requirements.trim() ? `📝 *Requirements/Notes:* ${formData.requirements.trim()}\n` : ''}--------------------------------------------
Kindly share fare quotation, availability, and confirmed vehicle details. Thank you!`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappLink = `https://wa.me/917498510536?text=${encodedMsg}`;

    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');

    // Display confirmation modal feedback
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      pickup: '',
      destination: '',
      journeyType: 'One-Way',
      travelDate: '',
      passengers: '2',
      vehicle: 'Any / Recommend for me',
      requirements: ''
    });
    setErrors({});
  };

  return (
    <div id="booking-section" className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 px-6 py-5 text-white">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <Car className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Instant WhatsApp Cab Enquiry
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
          {title}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
        {/* Journey Type Selector Tabs */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Journey Type <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {JOURNEY_TYPES.map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setFormData((prev) => ({ ...prev, journeyType: type }))}
                className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                  formData.journeyType === type
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column: Customer Name & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Mobile Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* 2-Column: Pickup & Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500" />
              </div>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                placeholder="e.g. Shirdi Hotel, Kopargaon Stn, Mumbai Airport"
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  errors.pickup ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.pickup && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.pickup}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Destination Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="e.g. Sai Baba Mandir, Shani Shingnapur, Pune, Nashik"
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  errors.destination ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.destination && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.destination}
              </p>
            )}
          </div>
        </div>

        {/* 3-Column: Travel Date, Passengers & Vehicle Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Travel Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="date"
                name="travelDate"
                min={todayStr}
                value={formData.travelDate}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  errors.travelDate ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.travelDate && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.travelDate}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Passengers <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Users className="w-4 h-4" />
              </div>
              <input
                type="number"
                name="passengers"
                min="1"
                max="35"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
            </div>
            {errors.passengers && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.passengers}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Vehicle Selection <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full pl-3 pr-8 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              >
                <option value="Any / Recommend for me">Any / Recommend for me</option>
                {FLEET_DATA.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name} ({v.verifiedSeats})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Additional Requirements */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Additional Requirements / Notes (Optional)</span>
            <span className="text-[11px] font-normal text-slate-500">e.g. Senior citizen, wheelchair, Aarti timing</span>
          </label>
          <textarea
            name="requirements"
            rows="2"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Tell us if you need senior citizen assistance, luggage space for folding wheelchair, Kakad Aarti 3:30 AM pickup, or specific flight/train numbers..."
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
          ></textarea>
        </div>

        {/* Disclaimer / Notice */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Transparent Process:</strong> Submitting this form creates a direct WhatsApp message to our travel desk (+91 74985 10536). Our team confirms route quotation, vehicle availability, and chauffeur details before any booking is finalized. No upfront credit card or online payment is required.
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Generate & Send WhatsApp Enquiry</span>
          </button>
          <p className="text-center text-xs text-slate-500 mt-2">
            Instant direct connection to Sai Darshan Tour & Travel desk
          </p>
        </div>
      </form>

      {/* Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  WhatsApp Enquiry Initiated!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Enquiry for: <strong>{formData.name}</strong> • Travel Date: <strong>{formData.travelDate}</strong>
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 text-left text-xs space-y-2 border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Route:</span>
                  <span className="font-semibold text-slate-800">{formData.pickup} ➔ {formData.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Vehicle:</span>
                  <span className="font-semibold text-slate-800">{formData.vehicle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Type:</span>
                  <span className="font-semibold text-slate-800">{formData.journeyType} ({formData.passengers} Pax)</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-left text-xs text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Important Confirmation Notice:</span>
                </p>
                <p className="leading-relaxed">
                  WhatsApp has opened in a new tab with your journey details ready to send. 
                  <strong>Please tap "Send" in WhatsApp</strong> to transmit the enquiry to our desk (+91 74985 10536).
                </p>
                <p className="text-[11px] text-amber-800 italic">
                  Note: An enquiry does not constitute an instant confirmed booking. Our team will review vehicle availability and confirm your vehicle and quotation directly with you.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="py-2.5 px-4 rounded-xl font-bold text-xs bg-slate-900 text-white hover:bg-slate-800 text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Desk Directly</span>
                </a>
                <button
                  onClick={handleReset}
                  className="py-2.5 px-4 rounded-xl font-bold text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 text-center"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
