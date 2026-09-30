import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Hotel, MapPin, ShieldCheck, Accessibility as AccessibilityIcon, Plane, Train, Star, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { services, tours, fleet } from "../data/content";
import EnquiryForm from "../components/EnquiryForm";

const icons = {car:Car, repeat:ArrowRight, plane:Plane, train:Train, hotel:Hotel, access:AccessibilityIcon};

export default function Home() {
 return <div>
  <section className="hero hero-premium">
   <div className="container hero-grid">
    <div className="hero-copy">
      <div className="hero-badge"><Sparkles size={14}/> SHIRDI • MAHARASHTRA • ALL INDIA SERVICE</div>
      <span className="eyebrow">SAI DARSHAN TOUR & TRAVEL</span>
      <h1>Travel <span>Comfortably.</span><br/>Arrive <strong>Peacefully.</strong></h1>
      <p className="hero-lead">One-way & round-trip cabs, hotel assistance, airport transfers and special travel support — all coordinated through one simple WhatsApp enquiry.</p>
      <div className="hero-actions"><Link className="btn btn-primary btn-lg" to="/cabs">Plan My Journey <ArrowRight size={18}/></Link><a className="btn btn-soft btn-lg" href="https://wa.me/917498510536?text=Hello%20Sai%20Darshan%20Tour%20%26%20Travel%2C%20I%20want%20a%20travel%20quote." target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp Quote</a></div>
      <div className="hero-trust"><span><CheckCircle2/> Pickup & Drop</span><span><CheckCircle2/> Clean AC Vehicles</span><span><CheckCircle2/> Human Support</span></div>
      <div className="hero-stats"><div><b>One-Way</b><small>Across India</small></div><div><b>24×7</b><small>Enquiry support</small></div><div><b>7+</b><small>Vehicle options</small></div></div>
    </div>
    <div className="hero-form-wrap"><div className="form-ribbon">GET A QUICK QUOTE</div><EnquiryForm/></div>
   </div>
  </section>

  <section className="quick-strip"><div className="container quick-grid"><Link to="/cabs"><Car/><span><b>One-Way Cab</b><small>Pickup → Drop</small></span><ArrowRight/></Link><Link to="/cabs"><Plane/><span><b>Airport Transfer</b><small>Pickup / Drop</small></span><ArrowRight/></Link><Link to="/hotels"><Hotel/><span><b>Hotel Assistance</b><small>Find a stay</small></span><ArrowRight/></Link><Link to="/accessibility"><AccessibilityIcon/><span><b>Special Assistance</b><small>Wheelchair / Senior</small></span><ArrowRight/></Link></div></section>

  <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">WHY SAI DARSHAN</span><h2>One travel desk for the whole journey.</h2><p className="section-intro">Inspired by modern travel-service websites, we keep the important information visible and the booking flow simple.</p></div><Link className="text-link" to="/contact">Talk to us <ArrowRight size={16}/></Link></div>
   <div className="service-grid">{services.map(s=>{const I=icons[s.icon]||Car; return <div className="service-card" key={s.title}><div className="icon-box"><I/></div><h3>{s.title}</h3><p>{s.text}</p><Link to="/contact">Enquire now <ArrowRight size={15}/></Link></div>})}</div>
  </div></section>

  <section className="section fleet-highlight"><div className="container"><div className="section-head"><div><span className="eyebrow">OUR VEHICLES</span><h2>Choose the ride for your group.</h2><p className="section-intro">Sedans for everyday travel, premium SUVs for families and Tempo Travellers for larger groups.</p></div><Link className="btn btn-outline" to="/fleet">View Full Fleet <ArrowRight size={16}/></Link></div><div className="fleet-home-grid">{fleet.slice(0,4).map(v=><article className="fleet-mini" key={v.name}><div className="vehicle-photo"><img src={v.image} alt={v.name}/><span>{v.passengers} seats</span></div><div className="fleet-mini-body"><span className="vehicle-type">{v.type}</span><h3>{v.name}</h3><p>{v.note}</p><a href={`https://wa.me/917498510536?text=${encodeURIComponent("Hello Sai Darshan, I want to enquire about "+v.name+".")}`} target="_blank" rel="noreferrer">Ask availability <ArrowRight size={15}/></a></div></article>)}</div></div></section>

  <section className="section soft"><div className="container"><div className="section-head"><div><span className="eyebrow">TRAVEL PLANS</span><h2>Popular journeys from Shirdi.</h2></div><Link className="text-link" to="/tours">Explore tours <ArrowRight size={16}/></Link></div><div className="route-grid">{tours.map((t,i)=><article className="route-card" key={t.title}><div className="route-number">0{i+1}</div><span className="pill">{t.tag}</span><h3>{t.title}</h3><p>{t.places}</p><Link className="text-link" to="/contact">Get a quote <ArrowRight size={15}/></Link></article>)}</div></div></section>

  <section className="section assistance"><div className="container assistance-box"><div className="assistance-copy"><span className="eyebrow">TRAVEL WITH CARE</span><h2>Need extra support during your trip?</h2><p>Tell us in advance if a traveller needs wheelchair support, senior-citizen assistance or a carefully planned pickup and drop.</p><div className="care-points"><span><AccessibilityIcon/> Mobility assistance</span><span><ShieldCheck/> Comfortable planning</span><span><Hotel/> Hotel coordination</span></div><Link className="btn btn-primary" to="/accessibility">Request Assistance</Link></div><div className="assistance-art"><div className="art-circle"><AccessibilityIcon size={54}/></div><b>Comfort first</b><span>For families, seniors & groups</span></div></div></section>

  <section className="cta"><div className="container cta-inner"><div><span className="eyebrow">PAN-INDIA ENQUIRIES</span><h2>Tell us the route. We’ll help plan the ride.</h2><p>Pickup • Drop • Date • Passengers • Vehicle • Special requirements</p></div><a className="btn btn-light btn-lg" href="https://wa.me/917498510536?text=Hello%20Sai%20Darshan%20Tour%20%26%20Travel%2C%20I%20want%20to%20plan%20a%20trip." target="_blank" rel="noreferrer"><MessageCircle size={18}/> Start on WhatsApp</a></div></section>
 </div>
}
