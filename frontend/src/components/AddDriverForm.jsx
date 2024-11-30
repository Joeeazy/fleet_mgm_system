import { UserPlus } from "lucide-react";
import { Card } from "./Card";
import { Input } from "./Input";
import { Button } from "./Button";

export function AddDriverForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onAdd({
      name: formData.get("name"),
      licenseNumber: formData.get("licenseNumber"),
      contactNumber: formData.get("contactNumber"),
      status: "Available",
    });
    e.target.reset();
  };

  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <UserPlus /> Add New Driver
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <Input name="name" placeholder="Driver Name" required />
          <Input name="licenseNumber" placeholder="License Number" required />
          <Input
            name="contactNumber"
            type="tel"
            placeholder="Contact Number"
            required
          />
        </div>
        <Button type="submit">Add Driver</Button>
      </form>
    </Card>
  );
}
