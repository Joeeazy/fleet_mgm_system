import React from "react";
import { Trash2 } from "lucide-react";

const VehicleList = ({ vehicles, onDelete, onStatusChange }) => {
  const statusColors = {
    Active: "badge-success",
    Maintenance: "badge-warning",
    "Out of Service": "badge-error",
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow text-black">
      <table className="table w-full">
        <thead>
          <tr className="bg-base-200">
            <th>Name/ID</th>
            <th>Location</th>
            <th>Fuel Level</th>
            <th>Next Maintenance</th>
            <th>Status</th>
            <th>Assigned Driver</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle.name}</td>
              <td>{vehicle.location}</td>
              <td>
                <div className="flex items-center gap-2">
                  <progress
                    className="progress progress-primary w-20"
                    value={vehicle.fuelLevel}
                    max="100"
                  />
                  <span>{vehicle.fuelLevel}%</span>
                </div>
              </td>
              <td>
                {new Date(vehicle.nextMaintenanceDue).toLocaleDateString()}
              </td>
              <td>
                <select
                  className={`select select-sm ${statusColors[vehicle.status]}`}
                  value={vehicle.status}
                  onChange={(e) => onStatusChange(vehicle._id, e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Out of Service">Out of Service</option>
                </select>
              </td>
              <td>
                {vehicle.driver
                  ? `${vehicle.driver.name} (${vehicle.driver.status})`
                  : "Unassigned"}
              </td>
              <td className="flex gap-2">
                <button
                  className="btn btn-sm btn-ghost text-red-500"
                  onClick={() => onDelete(vehicle._id)}
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
