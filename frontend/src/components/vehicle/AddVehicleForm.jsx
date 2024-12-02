import { CarFront } from "lucide-react";
import { Card } from "./Card";
import { Input } from "./Input";
import { Button } from "./Button";

export function AddVehicleForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onAdd({
      name: formData.get("name"),
      location: formData.get("location"),
      fuelLevel: Number(formData.get("fuelLevel")),
      nextMaintenanceDue: formData.get("nextMaintenanceDue"),
      status: "Active",
    });
    e.target.reset();
  };

  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <CarFront /> Add New Vehicle
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-950">
        <div className="grid gap-4 md:grid-cols-2">
          <Input name="name" placeholder="Vehicle Name" required />
          <Input name="location" placeholder="Current Location" required />
          <Input
            name="fuelLevel"
            type="number"
            label="Fuel Level (%)"
            min="0"
            max="100"
            defaultValue="100"
            required
          />
          <Input
            name="nextMaintenanceDue"
            type="date"
            label="Next Maintenance Due"
            required
          />
        </div>
        <Button type="submit">Add Vehicle</Button>
      </form>
    </Card>
  );
}
