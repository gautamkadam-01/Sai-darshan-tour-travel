import React from "react";
import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const WA = import.meta.env.VITE_WHATSAPP_NUMBER || "917498510536";

export default function EnquiryForm({ defaultType = "One Way Cab" }) {
  const [form, setForm] = useState({ type: defaultType, name:"", phone:"", pickup:"", drop:"", date:"", time:"", passengers:"", vehicle:"", hotel:"No", assistance:"None", message:"" });
  const [status, setStatus] = useState("");
  const change = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = async e => {
    e.preventDefault();
    setStatus("Preparing WhatsApp enquiry...");
    const msg = `Hello Sai Darshan Tour & Travel,%0A%0A*New Enquiry*%0AService: ${form.type}%0AName: ${form.name}%0APhone: ${form.phone}%0APickup: ${form.pickup}%0ADrop: ${form.drop}%0ADate: ${form.date}%0ATime: ${form.time}%0APassengers: ${form.passengers}%0AVehicle: ${form.vehicle}%0AHotel: ${form.hotel}%0ASpecial assistance: ${form.assistance}%0ANote: ${form.message}`;
    try {
      await fetch(`${API}/enquiries`, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form)});
    } catch (_) {}
    window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
    setStatus("WhatsApp opened. Please send the message to complete your enquiry.");
  };

  return <form className="enquiry-card" onSubmit={submit}>
    <div className="form-head"><div><span className="eyebrow">Quick enquiry</span><h3>Plan your journey</h3></div><MessageCircle className="gold-icon"/></div>
    <div className="form-grid">
      <label>Service<select name="type" value={form.type} onChange={change}><option>One Way Cab</option><option>Round Trip</option><option>Airport Pickup / Drop</option><option>Railway Pickup / Drop</option><option>Hotel Assistance</option><option>Tour Package</option><option>Wheelchair Assistance</option></select></label>
      <label>Name<input required name="name" value={form.name} onChange={change} placeholder="Your name"/></label>
      <label>Mobile<input required name="phone" value={form.phone} onChange={change} placeholder="+91"/></label>
      <label>Pickup location<input required name="pickup" value={form.pickup} onChange={change} placeholder="City / airport / station"/></label>
      <label>Drop location<input required name="drop" value={form.drop} onChange={change} placeholder="Destination"/></label>
      <label>Date<input required type="date" name="date" value={form.date} onChange={change}/></label>
      <label>Pickup time<input type="time" name="time" value={form.time} onChange={change}/></label>
      <label>Passengers<input type="number" min="1" name="passengers" value={form.passengers} onChange={change} placeholder="e.g. 4"/></label>
      <label>Vehicle<select name="vehicle" value={form.vehicle} onChange={change}><option value="">Select vehicle</option><option>Sedan</option><option>Ertiga</option><option>Innova Crysta</option><option>Tempo Traveller</option></select></label>
      <label>Hotel required?<select name="hotel" value={form.hotel} onChange={change}><option>No</option><option>Yes</option></select></label>
      <label>Special assistance<select name="assistance" value={form.assistance} onChange={change}><option>None</option><option>Wheelchair</option><option>Senior Citizen</option><option>Mobility Assistance</option><option>Extra Luggage</option></select></label>
      <label className="full">Additional note<textarea name="message" value={form.message} onChange={change} placeholder="Anything else we should know?"/></label>
    </div>
    <button className="btn btn-primary form-submit" type="submit"><Send size={18}/> Get Quote on WhatsApp</button>
    {status && <p className="form-status">{status}</p>}
    <small>Fare and availability are confirmed manually after enquiry. No online payment is collected here.</small>
  </form>
}
