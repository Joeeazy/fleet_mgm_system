import { UserCheck, UserMinus, Truck, UserX } from "lucide-react";
import { Card } from "../ui/Card";
import { StatusBadge } from "../ui/StatusBadge";
import { Button } from "../ui/Button";

const statusIcons = {
  Available: UserCheck,
  "On Trip": Truck,
  "Off Duty": UserX,
};

export default function DriverCard({ driver, onStatusChange, onDelete }) {
  const { name, contactNumber, licenseNumber, status, createdAt } = driver;

  return (
    <Card className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <StatusBadge
          status={status}
          icon={statusIcons[status]}
          className="ml-2"
        />
      </div>
      <div className="text-sm text-gray-600 space-y-2">
        <p>
          <span className="font-medium text-gray-800">License:</span>{" "}
          {licenseNumber}
        </p>
        <p>
          <span className="font-medium text-gray-800">Contact:</span>{" "}
          {contactNumber}
        </p>
        <p>
          <span className="font-medium text-gray-800">Added:</span>{" "}
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <select
          value={status}
          onChange={(e) => onStatusChange(driver.id, e.target.value)}
          className="text-sm border border-gray-300 rounded text-black p-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="Available">Available</option>
          <option value="On Trip">On Trip</option>
          <option value="Off Duty">Off Duty</option>
        </select>
        <Button
          variant="danger"
          onClick={() => onDelete(driver.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center"
        >
          <UserMinus size={16} className="mr-2" />
          Remove
        </Button>
      </div>
    </Card>
  );
}
