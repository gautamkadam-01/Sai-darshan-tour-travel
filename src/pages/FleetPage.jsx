import React, { useState } from 'react';
import VehicleCard from '../components/VehicleCard';
import BookingForm from '../components/BookingForm';
import SeoMeta from '../components/SeoMeta';
import { FLEET_DATA } from '../data/fleet';
import { COMPANY_DETAILS } from '../data/company';
import { ShieldCheck, Users, Briefcase, Wind, CheckCircle2 } from 'lucide-react';

export default function FleetPage() {
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const handleSelectVehicle = (vehicleName) => {
    setSelectedVehicle(vehicleName);
    const formElement = document.getElementById('booking-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SeoMeta
        title="Our Vehicle Fleet — Innova Crysta, Dzire, Ertiga, Tempo Traveller Shirdi"
        description="Inspect Sai Darshan Tour & Travel's vehicle fleet: Toyota Innova Crysta, Maruti Suzuki Swift Dzire, Hyundai Verna, Ciaz, Ertiga, and 17/20 seater Tempo Travellers in Shirdi. Clean & AC."
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Verified Seating & Clean AC Fleet
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Vehicle Fleet in Shirdi
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every vehicle in our fleet is commercially registered, routinely inspected, sanitized, and chauffeured by courteous local drivers.
          </p>
        </div>
      </div>

      {/* Fleet Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

      {/* Fleet Comparison Table */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Fleet Capacity & Feature Comparison
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Compare vehicle options to find the ideal match for your family size, luggage, and comfort preferences.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Vehicle Model</th>
                  <th className="py-3.5 px-4 font-bold">Category</th>
                  <th className="py-3.5 px-4 font-bold">Verified Seating</th>
                  <th className="py-3.5 px-4 font-bold">Luggage Space</th>
                  <th className="py-3.5 px-4 font-bold">Air Conditioning</th>
                  <th className="py-3.5 px-4 font-bold text-center">Quotation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {FLEET_DATA.map((v, idx) => (
                  <tr key={v.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {v.name}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {v.category}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {v.verifiedSeats}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {v.luggageCapacity.split('+')[0]}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {v.acType.split('with')[0]}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => handleSelectVehicle(v.name)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 transition-colors"
                      >
                        Enquire
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking Form with preselected vehicle */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BookingForm
            preselectedVehicle={selectedVehicle}
            title={selectedVehicle ? `Enquire for ${selectedVehicle}` : 'Enquire for Any Vehicle'}
            subtitle="Submit your travel requirements to receive an exact quotation and vehicle availability on WhatsApp."
          />
        </div>
      </section>
    </>
  );
}
