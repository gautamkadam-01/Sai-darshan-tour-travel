import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><div className="footer-brand">Sai Darshan Tour & Travel</div><p>Your travel companion for Shirdi trips, cabs, hotel assistance, sightseeing and accessibility support.</p></div>
      <div><h4>Services</h4><Link to="/cabs">One-Way Cabs</Link><Link to="/hotels">Hotel Assistance</Link><Link to="/darshan">Darshan Assistance</Link><Link to="/accessibility">Accessibility</Link></div>
      <div><h4>Contact</h4><span><MapPin size={16}/> Shirdi, Maharashtra</span><span><Phone size={16}/> +91 74985 10536</span><span><Mail size={16}/> hello@saidarshantravels.com</span></div>
      <div><h4>Quick Enquiry</h4><a className="footer-wa" href="https://wa.me/917498510536" target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp Us</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Sai Darshan Tour & Travel.</span><span>Independent travel service provider.</span></div>
  </footer>
}
