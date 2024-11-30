import React from "react";
//import { DriverCard } from "../components/DriverCard";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
//import { VehicleCard } from "../components/VehicleCard";
import { AddDriverForm } from "../components/AddDriverForm";
import { AddVehicleForm } from "../components/AddVehicleForm";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AddDriverForm />
      <AddVehicleForm />
    </div>
  );
}
