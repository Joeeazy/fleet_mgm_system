import React from "react";
//import { DriverCard } from "../components/DriverCard";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
//import { VehicleCard } from "../components/VehicleCard";
import { AddDriverForm } from "../components/driver/AddDriverForm";
import { AddVehicleForm } from "../components/vehicle/AddVehicleForm";
import { DriverList } from "../components/driver/DriverList";
import VehicleList from "../components/vehicle/VehicleList";
// import VehicleMap from "../components/vehicle/VehicleMap";
// import VehicleList from "../components/vehicle/VehicleList";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AddDriverForm />
      <AddVehicleForm />
      <DriverList />
      <VehicleList />
      {/* <VehicleMap />
      <VehicleList /> */}
    </div>
  );
}
