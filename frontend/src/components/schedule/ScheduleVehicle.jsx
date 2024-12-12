import { Truck, Battery, MapPin } from "lucide-react";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-yellow-500 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Truck className="h-5 w-5 text-yellow-600" />
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              {vehicle.name}
            </h3>
            <p className="text-xs text-gray-500">{vehicle.type}</p>
          </div>
        </div>
        <div
          className={`h-2 w-2 rounded-full ${
            vehicle.status === "active" ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-gray-500">
        <div className="flex items-center">
          <Battery className="h-4 w-4 mr-1" />
          {vehicle.fuel}%
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          {vehicle.location}
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
