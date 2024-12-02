import { StatusColors } from "../ui/Types";
import { useVehicleStore } from "../../stores/useVehicleStore";

const VehicleListItem = ({ vehicle }) => {
  const { updateVehicleStatus, deleteVehicle } = useVehicleStore();

  const handleStatusChange = (e) => {
    updateVehicleStatus(vehicle.id, e.target.value);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      deleteVehicle(vehicle.id);
    }
  };

  return (
    <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{vehicle.name}</h3>
        <p className="text-sm text-gray-500">Driver: {vehicle.driver}</p>
        <p className="text-sm text-gray-400">
          Status updated: {new Date(vehicle.updatedAt).toLocaleDateString()}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <select
          value={vehicle.status}
          onChange={handleStatusChange}
          className={`text-sm rounded-md border-gray-300 bg-gray-50 px-4 py-2 focus:ring-2 focus:ring-blue-500 ${
            StatusColors[vehicle.status] || "text-gray-700"
          }`}
        >
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
          <option value="MAINTENANCE">Maintenance</option>
        </select>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default VehicleListItem;
