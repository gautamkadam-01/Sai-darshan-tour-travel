import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Tours, Cabs, Hotels, Darshan, Accessibility, Gallery, Contact, Fleet } from "./pages/StandardPages";
export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/tours" element={<Tours/>}/><Route path="/cabs" element={<Cabs/>}/><Route path="/fleet" element={<Fleet/>}/><Route path="/hotels" element={<Hotels/>}/><Route path="/darshan" element={<Darshan/>}/><Route path="/accessibility" element={<Accessibility/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/contact" element={<Contact/>}/></Routes></Layout>}
