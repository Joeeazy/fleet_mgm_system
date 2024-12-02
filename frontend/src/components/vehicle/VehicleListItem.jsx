import { StatusColors } from "../../types";
import { useVehicleStore } from "../../store/useVehicleStore";

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
    <li className="px-4 py-4 sm:px-6 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {vehicle.name}
          </p>
          <p className="text-sm text-gray-500 truncate">{vehicle.driver}</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={vehicle.status}
            onChange={handleStatusChange}
            className={`text-sm rounded-full px-3 py-1 ${
              StatusColors[vehicle.status]
            }`}
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="MAINTENANCE">Maintenance</option>
          </select>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-900"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default VehicleListItem;
