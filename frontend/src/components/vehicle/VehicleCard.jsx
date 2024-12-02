import { Car, Hammer, AlertTriangle, Battery } from "lucide-react";
import { Card } from "../ui/Card";
import { StatusBadge } from "../ui/StatusBadge";
import { Button } from "../ui/Button";

const statusIcons = {
  Active: Car,
  Maintenance: <Hammer />,
  "Out of Service": AlertTriangle,
};

export function VehicleCard({ vehicle, onStatusChange, onDelete }) {
  return (
    <Card>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{vehicle.name}</h3>
        <StatusBadge
          status={vehicle.status}
          icon={statusIcons[vehicle.status]}
        />
      </div>
      <div className="text-sm text-gray-600">
        <p>Location: {vehicle.location}</p>
        <div className="flex items-center gap-2">
          <Battery size={16} />
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${vehicle.fuelLevel}%` }}
            />
          </div>
          <span>{vehicle.fuelLevel}%</span>
        </div>
        <p className="mt-1">
          Next Maintenance:{" "}
          {new Date(vehicle.nextMaintenanceDue).toLocaleDateString()}
        </p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <select
          value={vehicle.status}
          onChange={(e) => onStatusChange(vehicle.id, e.target.value)}
          className="text-sm border rounded p-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="Active">Active</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Out of Service">Out of Service</option>
        </select>
        <Button variant="danger" onClick={() => onDelete(vehicle.id)}>
          <Car size={20} />
        </Button>
      </div>
    </Card>
  );
}
