import React from "react";
import { Dashboard } from "../components/Dashboard";
import { Navbar } from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}
