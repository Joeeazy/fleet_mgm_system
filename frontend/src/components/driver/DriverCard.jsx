import { UserCheck, UserMinus, Truck, UserX } from "lucide-react";
import { Card } from "./Card";
import { StatusBadge } from "./StatusBadge";
import { Button } from "./Button";

const statusIcons = {
  Available: UserCheck,
  "On Trip": Truck,
  "Off Duty": UserX,
};

export function DriverCard({ driver, onStatusChange, onDelete }) {
  return (
    <Card>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{driver.name}</h3>
        <StatusBadge status={driver.status} icon={statusIcons[driver.status]} />
      </div>
      <div className="text-sm text-gray-600">
        <p>License: {driver.licenseNumber}</p>
        <p>Contact: {driver.contactNumber}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <select
          value={driver.status}
          onChange={(e) => onStatusChange(driver.id, e.target.value)}
          className="text-sm border rounded p-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="Available">Available</option>
          <option value="On Trip">On Trip</option>
          <option value="Off Duty">Off Duty</option>
        </select>
        <Button variant="danger" onClick={() => onDelete(driver.id)}>
          <UserMinus size={20} />
        </Button>
      </div>
    </Card>
  );
}
