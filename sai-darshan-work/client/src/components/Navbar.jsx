import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"], ["Tours", "/tours"], ["Cabs", "/cabs"], ["Fleet", "/fleet"], ["Hotels", "/hotels"],
    ["Darshan", "/darshan"], ["Accessibility", "/accessibility"], ["Gallery", "/gallery"], ["Contact", "/contact"]
  ];
  return <header className="navbar">
    <div className="container nav-inner">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <span className="brand-mark">ॐ</span>
        <span><b>Sai Darshan</b><small>Tour & Travel • Shirdi</small></span>
      </Link>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="menu">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="nav-wa" href="https://wa.me/917498510536?text=Hello%20Sai%20Darshan%20Tour%20%26%20Travel%2C%20I%20want%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a>
      </nav>
    </div>
  </header>
}
