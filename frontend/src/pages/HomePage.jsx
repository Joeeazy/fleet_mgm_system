import React from "react";
//import { DriverCard } from "../components/DriverCard";
// import { Hero } from "../components/Hero";
// import { Navbar } from "../components/Navbar";
// //import { VehicleCard } from "../components/VehicleCard";
// import { AddDriverForm } from "../components/driver/AddDriverForm";
// import { AddVehicleForm } from "../components/vehicle/AddVehicleForm";
// import { DriverList } from "../components/driver/DriverList";
// import VehicleList from "../components/vehicle/VehicleList";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
// import VehicleMap from "../components/vehicle/VehicleMap";
// import VehicleList from "../components/vehicle/VehicleList";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-white text-blac">
      {/* <Sidebar /> */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <Dashboard />
      </main>
    </div>
    // <div className="flex">
    //   <div className=" h-screen fixed bg-white text-gray-950">
    //     <Sidebar />
    //   </div>
    //   <div className="w-screen">
    //     <Navbar />
    //     <Hero />
    //     <AddDriverForm />
    //     <AddVehicleForm />
    //     <DriverList />
    //     <VehicleList />
    //   </div>
    // </div>
  );
}
