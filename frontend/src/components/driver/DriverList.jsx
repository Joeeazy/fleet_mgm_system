// import { useState, useEffect } from "react";
// import axios from "axios";
// import DriverCard from "./DriverCard";

// export function DriverList() {
//   const [drivers, setDrivers] = useState([]);

//   const getDrivers = async () => {
//     try {
//       const response = await axios.get("/api/drivers/");
//       const fetchedDrivers = response.data;
//       setDrivers(fetchedDrivers);
//     } catch (error) {
//       console.error("Error fetching drivers:", error);
//     }
//   };

//   useEffect(() => {
//     // Fetch drivers only if not already available in localStorage
//     if (!drivers.length) {
//       getDrivers();
//     }
//   }, []);

//   return (
//     <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       <button
//         className="bg-blue-700 text-white px-4 py-2 rounded"
//         onClick={getDrivers}
//       >
//         Get List of Drivers
//       </button>
//       {drivers.map((driver, index) => (
//         <DriverCard
//           key={driver.id}
//           driver={driver}
//           //onStatusChange={handleStatusChange}
//           //onDelete={handleDelete}
//         />
//       ))}
//     </div>
//   );
// }
import React from "react";
import { Trash2 } from "lucide-react";

const DriverList = ({ drivers, onDelete, onStatusChange }) => {
  const statusColors = {
    Available: "badge-success",
    "On Trip": "badge-warning",
    "Off Duty": "badge-error",
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow text-black">
      <table className="table w-full">
        <thead>
          <tr className="bg-base-200">
            <th>Name</th>
            <th>License Number</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Current Vehicle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver._id}>
              <td>{driver.name}</td>
              <td>{driver.licenseNumber}</td>
              <td>{driver.contactNumber}</td>
              <td>
                <select
                  className={`select select-sm ${statusColors[driver.status]}`}
                  value={driver.status}
                  onChange={(e) => onStatusChange(driver._id, e.target.value)}
                >
                  <option value="Available">Available</option>
                  <option value="On Trip">On Trip</option>
                  <option value="Off Duty">Off Duty</option>
                </select>
              </td>
              <td>
                {driver.currentVehicle
                  ? `${driver.currentVehicle.name} (${driver.currentVehicle.status})`
                  : "Not Assigned"}
              </td>
              <td className="flex gap-2">
                <button
                  className="btn btn-sm btn-ghost text-red-500"
                  onClick={() => onDelete(driver._id)}
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

export default DriverList;
