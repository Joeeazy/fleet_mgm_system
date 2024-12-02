import { UserPlus } from "lucide-react";
import { Card } from "./Card";
import { Input } from "./Input";
import { Button } from "./Button";
import { useDriverStore } from "../../stores/useDriverStore";
import { useState } from "react";

export function AddDriverForm({ onAdd }) {
  const [newDriver, setNewDriver] = useState({
    name: "",
    licenseNumber: "",
    contactNumber: "",
    status: "Active",
  });

  const { addDriver, loading } = useDriverStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDriver(newDriver);
      setNewDriver({
        name: "",
        licenseNumber: "",
        contactNumber: "",
        status: "Active",
      });
    } catch (error) {
      console.error("Error creating a new driver:", error.message);
    }
  };

  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <UserPlus /> Add New Driver
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-950">
        <div className="grid gap-4 md:grid-cols-3">
          <Input
            name="name"
            value={newDriver.name}
            onChange={(e) =>
              setNewDriver({ ...newDriver, name: e.target.value })
            }
            placeholder="Driver Name"
            required
          />
          <Input
            name="licenseNumber"
            value={newDriver.licenseNumber}
            onChange={(e) =>
              setNewDriver({ ...newDriver, licenseNumber: e.target.value })
            }
            placeholder="License Number"
            required
          />
          <Input
            name="contactNumber"
            type="tel"
            value={newDriver.contactNumber}
            onChange={(e) =>
              setNewDriver({ ...newDriver, contactNumber: e.target.value })
            }
            placeholder="Contact Number"
            required
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Driver"}
        </Button>
      </form>
    </Card>
  );
}
