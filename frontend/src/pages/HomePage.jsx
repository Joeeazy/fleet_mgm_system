import React from "react";
import Hero from "../components/landingPage/Hero";
import Navbar from "../components/landingPage/Navbar";
import Services from "../components/landingPage/Services";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
