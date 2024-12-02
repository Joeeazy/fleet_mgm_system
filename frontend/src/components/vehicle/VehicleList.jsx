import { useState } from "react";
import axios from "axios";
import VehicleListItem from "./VehicleListItem";
import LoadingSpinner from "../ui/LoadingSpinner";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getVehicles = async () => {
    setLoading(true);
    setError(""); // Clear previous errors
    try {
      const response = await axios.get("/api/vehicles/");
      setVehicles(response.data);
    } catch (err) {
      setError("Failed to fetch vehicles.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Vehicles</h2>
        <button
          onClick={getVehicles}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Refresh List
        </button>
      </div>
      {loading && (
        <div className="flex justify-center items-center py-6">
          <LoadingSpinner />
        </div>
      )}
      {error && (
        <div className="text-red-600 bg-red-100 p-4 rounded-md">{error}</div>
      )}
      <ul className="divide-y divide-gray-200">
        {vehicles.length > 0
          ? vehicles.map((vehicle) => (
              <li key={vehicle.id} className="py-4">
                <VehicleListItem vehicle={vehicle} />
              </li>
            ))
          : !loading && <p className="text-gray-600">No vehicles found.</p>}
      </ul>
    </div>
  );
};

export default VehicleList;
