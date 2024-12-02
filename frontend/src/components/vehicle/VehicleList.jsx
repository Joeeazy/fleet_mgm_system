import { useEffect } from "react";
import { useVehicleStore } from "../../store/useVehicleStore";
import VehicleListItem from "./VehicleListItem";
import LoadingSpinner from "../ui/LoadingSpinner";

const VehicleList = () => {
  const { vehicles, loading, error, fetchAllVehicles } = useVehicleStore();

  useEffect(() => {
    fetchAllVehicles();
  }, [fetchAllVehicles]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Vehicles
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {vehicles.map((vehicle) => (
          <VehicleListItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
