import React from "react";
import { vehicles, getStatusColor } from "../constants/vehicleData.js";

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.name}
            className="bg-white rounded-lg shadow-md p-4 mb-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{vehicle.name}</h3>
              <span
                className={`px-2 py-1 rounded-full text-white text-sm ${getStatusColor(
                  vehicle.status
                )}`}
              >
                {vehicle.status}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Driver:</span>
                <span className="font-medium"> {vehicle.driver}</span>
              </div>
              <div>
                <span className="text-gray-600">Location:</span>
                <span className="font-medium"> {vehicle.location}</span>
              </div>
              <div>
                <span className="text-gray-600">Fuel Level:</span>
                <span className="font-medium"> {vehicle.fuel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
