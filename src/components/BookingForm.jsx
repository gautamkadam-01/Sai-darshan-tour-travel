import React, { useState, useEffect } from 'react';
import { 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  Navigation, 
  FileText, 
  MessageCircle, 
  AlertCircle, 
  CheckCircle2, 
  X, 
  ExternalLink,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export const JOURNEY_TYPES = [
  'One-Way',
  'Round Trip',
  'Airport Transfer',
  'Railway Transfer',
  'Local Shirdi Travel',
  'Outstation Travel',
  'Other'
];

export const VEHICLE_OPTIONS = [
  'Toyota Innova Crysta',
  'Swift Dzire',
  'Hyundai Verna',
  'Maruti Suzuki Ciaz',
  'Maruti Suzuki Ertiga',
  'Tempo Traveller 17 Seater',
  'Tempo Traveller 20 Seater',
  'Any Suitable Vehicle'
];

// Normalize any incoming vehicle name to match standard VEHICLE_OPTIONS
function normalizeVehicleSelection(name) {
  if (!name) return 'Any Suitable Vehicle';
  const lower = name.toLowerCase();
  if (lower.includes('innova')) return 'Toyota Innova Crysta';
  if (lower.includes('dzire')) return 'Swift Dzire';
  if (lower.includes('verna')) return 'Hyundai Verna';
  if (lower.includes('ciaz')) return 'Maruti Suzuki Ciaz';
  if (lower.includes('ertiga')) return 'Maruti Suzuki Ertiga';
  if (lower.includes('17')) return 'Tempo Traveller 17 Seater';
  if (lower.includes('20')) return 'Tempo Traveller 20 Seater';
  if (VEHICLE_OPTIONS.includes(name)) return name;
  return 'Any Suitable Vehicle';
}

// Get local date in YYYY-MM-DD format
function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function BookingForm({ 
  preselectedVehicle = '', 
  title = 'Request a Taxi Fare Quotation', 
  subtitle = 'Fill in your journey details below. We generate a WhatsApp enquiry for instant fare quotation & vehicle availability.' 
}) {
  const todayStr = getTodayDateString();

  // Controlled form state
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    pickupLocation: '',
    destination: '',
    journeyType: 'One-Way',
    travelDate: '',
    passengerCount: '2',
    vehiclePreference: normalizeVehicleSelection(preselectedVehicle),
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  // Synchronize when preselectedVehicle prop changes
  useEffect(() => {
    if (preselectedVehicle) {
      setFormData((prev) => ({
        ...prev,
        vehiclePreference: normalizeVehicleSelection(preselectedVehicle)
      }));
    }
  }, [preselectedVehicle]);

  // Mobile number validation logic: Indian 10-digit with optional +91, 91, or 0
  const validateMobile = (phone) => {
    if (!phone || !phone.trim()) {
      return 'Mobile number is required.';
    }
    const val = phone.trim();
    if (/[a-zA-Z]/.test(val)) {
      return 'Mobile number cannot contain letters.';
    }
    // Remove allowed formatting characters (spaces, hyphens, parentheses)
    const cleanDigits = val.replace(/[\s\-\(\)]/g, '');
    const indianMobileRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!indianMobileRegex.test(cleanDigits)) {
      return 'Enter a valid Indian 10-digit mobile number (e.g. 9876543210 or +91 9876543210).';
    }
    return null;
  };

  const validateField = (field, value) => {
    switch (field) {
      case 'fullName':
        if (!value || !value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters.';
        return null;

      case 'mobileNumber':
        return validateMobile(value);

      case 'pickupLocation':
        if (!value || !value.trim()) return 'Pickup location is required.';
        return null;

      case 'destination':
        if (!value || !value.trim()) return 'Destination is required.';
        return null;

      case 'journeyType':
        if (!value || !JOURNEY_TYPES.includes(value)) return 'Please select a valid journey type.';
        return null;

      case 'travelDate':
        if (!value) return 'Travel date is required.';
        if (value < todayStr) return 'Travel date cannot be in the past.';
        return null;

      case 'passengerCount': {
        const num = parseInt(value, 10);
        if (!value || isNaN(num) || num < 1) return 'Please specify at least 1 passenger.';
        if (num > 50) return 'For groups above 50, please contact our desk directly.';
        return null;
      }

      case 'vehiclePreference':
        if (!value || !VEHICLE_OPTIONS.includes(value)) return 'Please select a vehicle preference.';
        return null;

      default:
        return null;
    }
  };

  const validateAll = () => {
    const errs = {};
    const fieldsToValidate = [
      'fullName',
      'mobileNumber',
      'pickupLocation',
      'destination',
      'journeyType',
      'travelDate',
      'passengerCount',
      'vehiclePreference'
    ];

    fieldsToValidate.forEach((f) => {
      const err = validateField(f, formData[f]);
      if (err) errs[f] = err;
    });

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Re-validate field on the fly if it has already been touched
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched to show errors
    setTouched({
      fullName: true,
      mobileNumber: true,
      pickupLocation: true,
      destination: true,
      journeyType: true,
      travelDate: true,
      passengerCount: true,
      vehiclePreference: true
    });

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    // Build neatly formatted, readable WhatsApp message
    const msg = 
`*NEW TAXI ENQUIRY — SAI DARSHAN TOUR & TRAVEL*
--------------------------------------------
👤 *Full Name:* ${formData.fullName.trim()}
📞 *Mobile Number:* ${formData.mobileNumber.trim()}
🛣️ *Journey Type:* ${formData.journeyType}
📍 *Pickup Location:* ${formData.pickupLocation.trim()}
🎯 *Destination:* ${formData.destination.trim()}
📅 *Travel Date:* ${formData.travelDate}
👥 *Number of Passengers:* ${formData.passengerCount}
🚖 *Vehicle Preference:* ${formData.vehiclePreference}
${formData.additionalRequirements.trim() ? `📝 *Additional Requirements:* ${formData.additionalRequirements.trim()}\n` : ''}--------------------------------------------
Kindly share fare quotation, availability, and vehicle details.`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/917498510536?text=${encodedMsg}`;

    // Safely open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Save submitted record to display on-screen instruction
    setLastWhatsAppUrl(whatsappUrl);
    setSubmittedData({ ...formData });
    setIsSubmitting(false);
  };

  const handleCloseModal = () => {
    setSubmittedData(null);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      mobileNumber: '',
      pickupLocation: '',
      destination: '',
      journeyType: 'One-Way',
      travelDate: '',
      passengerCount: '2',
      vehiclePreference: 'Any Suitable Vehicle',
      additionalRequirements: ''
    });
    setErrors({});
    setTouched({});
  };

  return (
    <div id="booking-section" className="bg-[#fffefb] rounded-2xl shadow-xl border border-amber-200/80 overflow-hidden">
      {/* Form Header with Spiritual / Ivory / Forest-Green Styling */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 px-6 py-5 text-white">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
            <Car className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
            Direct WhatsApp Taxi Booking
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Main Enquiry Form */}
      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-5">
        {/* Row 1: Full Name & Mobile Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Ramesh Kulkarni"
                aria-invalid={errors.fullName ? 'true' : 'false'}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName && touched.fullName
                    ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500/30'
                }`}
              />
            </div>
            {errors.fullName && touched.fullName && (
              <p id="fullName-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Mobile Number (WhatsApp) <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="mobileNumber"
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 9876543210 or +91 9876543210"
                aria-invalid={errors.mobileNumber ? 'true' : 'false'}
                aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : undefined}
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.mobileNumber && touched.mobileNumber
                    ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500/30'
                }`}
              />
            </div>
            {errors.mobileNumber && touched.mobileNumber && (
              <p id="mobileNumber-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.mobileNumber}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Pickup Location & Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pickupLocation" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Pickup Location <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-600">
                <MapPin className="w-4 h-4" />
              </div>
              <input
                id="pickupLocation"
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Hotel Sun-n-Sand Shirdi, Kopargaon Station, Mumbai Airport"
                aria-invalid={errors.pickupLocation ? 'true' : 'false'}
                aria-describedby={errors.pickupLocation ? 'pickupLocation-error' : undefined}
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.pickupLocation && touched.pickupLocation
                    ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500/30'
                }`}
              />
            </div>
            {errors.pickupLocation && touched.pickupLocation && (
              <p id="pickupLocation-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.pickupLocation}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="destination" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Destination <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-600">
                <Navigation className="w-4 h-4" />
              </div>
              <input
                id="destination"
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Shirdi Temple, Shani Shingnapur, Pune, Mumbai, Nashik"
                aria-invalid={errors.destination ? 'true' : 'false'}
                aria-describedby={errors.destination ? 'destination-error' : undefined}
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.destination && touched.destination
                    ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500/30'
                }`}
              />
            </div>
            {errors.destination && touched.destination && (
              <p id="destination-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.destination}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Journey Type & Vehicle Preference Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="journeyType" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Journey Type <span className="text-red-600">*</span>
            </label>
            <select
              id="journeyType"
              name="journeyType"
              value={formData.journeyType}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all font-medium text-slate-800"
            >
              {JOURNEY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.journeyType && touched.journeyType && (
              <p role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.journeyType}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="vehiclePreference" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Vehicle Preference <span className="text-red-600">*</span>
            </label>
            <select
              id="vehiclePreference"
              name="vehiclePreference"
              value={formData.vehiclePreference}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all font-medium text-slate-800"
            >
              {VEHICLE_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            {errors.vehiclePreference && touched.vehiclePreference && (
              <p role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.vehiclePreference}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 4: Travel Date & Passenger Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="travelDate" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Travel Date <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                id="travelDate"
                type="date"
                name="travelDate"
                min={todayStr}
                value={formData.travelDate}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={errors.travelDate ? 'true' : 'false'}
                aria-describedby={errors.travelDate ? 'travelDate-error' : undefined}
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.travelDate && touched.travelDate
                    ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500/30'
                }`}
              />
            </div>
            {errors.travelDate && touched.travelDate && (
              <p id="travelDate-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.travelDate}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="passengerCount" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Number of Passengers <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Users className="w-4 h-4" />
              </div>
              <input
                id="passengerCount"
                type="number"
                name="passengerCount"
                min="1"
                max="50"
                value={formData.passengerCount}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={errors.passengerCount ? 'true' : 'false'}
                aria-describedby={errors.passengerCount ? 'passengerCount-error' : undefined}
                className={`w-full pl-10 pr-3 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.passengerCount && touched.passengerCount
                    ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                    : 'border-slate-300 focus:border-amber-500 focus:ring-amber-500/30'
                }`}
              />
            </div>
            {errors.passengerCount && touched.passengerCount && (
              <p id="passengerCount-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.passengerCount}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 5: Additional Requirements (Optional Textarea) */}
        <div>
          <label htmlFor="additionalRequirements" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <span>Additional Requirements (Optional)</span>
            <span className="text-[11px] font-normal text-slate-500">e.g. Senior citizen, wheelchair boot space, Aarti timing</span>
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            rows="2"
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Tell us if you need senior citizen assistance, luggage space for folding wheelchair, Kakad Aarti 3:30 AM pickup, or specific flight/train numbers..."
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
          ></textarea>
        </div>

        {/* Process Note */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-950 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Direct WhatsApp Booking:</strong> Submitting prepares a structured message in WhatsApp to our travel desk (+91 74985 10536). You can review all details and hit send. No upfront payment required.
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 hover:from-emerald-800 hover:to-teal-950 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white flex-shrink-0" />
            <span>Generate WhatsApp Enquiry</span>
          </button>
          <p className="text-center text-xs text-slate-500 mt-2">
            Punctual pickups • Sanitized AC Cabs • Direct contact with Sai Darshan Tour & Travel
          </p>
        </div>
      </form>

      {/* Confirmation & Instructions Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close confirmation dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1.5">
                  WhatsApp Opened in New Tab
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Enquiry Prepared for Sending
                </h4>
              </div>

              {/* Trip Summary Table */}
              <div className="bg-slate-50 rounded-xl p-4 text-left text-xs space-y-2 border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Customer:</span>
                  <span className="font-bold text-slate-900">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Mobile:</span>
                  <span className="font-bold text-slate-900">{submittedData.mobileNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Route:</span>
                  <span className="font-semibold text-slate-900">{submittedData.pickupLocation} ➔ {submittedData.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Vehicle:</span>
                  <span className="font-semibold text-amber-800">{submittedData.vehiclePreference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Travel Date & Pax:</span>
                  <span className="font-semibold text-slate-900">{submittedData.travelDate} ({submittedData.passengerCount} Passengers)</span>
                </div>
              </div>

              {/* Crucial Instructions Banner */}
              <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-4 text-left text-xs text-amber-950 space-y-2">
                <p className="font-bold flex items-center gap-1.5 text-amber-950 text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Next Step: Tap "Send" in WhatsApp!</span>
                </p>
                <p className="leading-relaxed">
                  WhatsApp has opened in a new tab with your journey details pre-filled. <strong>Please review and tap the Send button in WhatsApp</strong> to transmit the enquiry directly to our travel desk (+91 74985 10536).
                </p>
                <p className="text-[11px] text-slate-600 border-t border-amber-200 pt-2 leading-relaxed">
                  <em>Note: Opening WhatsApp does not confirm your booking. Our team will verify vehicle availability and confirm your itinerary with a final quotation.</em>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={lastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-700 hover:bg-emerald-800 text-white text-center flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Re-open WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-900 text-white hover:bg-slate-800 text-center flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Desk</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 text-center transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
