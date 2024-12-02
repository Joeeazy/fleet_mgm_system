import { UserPlus } from "lucide-react";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useState } from "react";
import axios from "axios";

export function AddDriverForm({ onAdd }) {
  const initialDriverState = {
    name: "",
    licenseNumber: "",
    contactNumber: "",
    status: "Active",
  };

  const [newDriver, setNewDriver] = useState(initialDriverState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDriver((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addDriver = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/drivers/driver",
        newDriver
      );
      console.log(response.data);
      onAdd?.(response.data); // Notify parent component if onAdd is provided
      setNewDriver(initialDriverState); // Reset form after submission
    } catch (error) {
      console.error("Error adding driver:", error);
    }
  };

  return (
    <Card className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <UserPlus /> Add New Driver
      </h2>
      <form className="space-y-4 text-gray-950" onSubmit={addDriver}>
        <div className="grid gap-4 md:grid-cols-3">
          {["name", "licenseNumber", "contactNumber"].map((field) => (
            <Input
              key={field}
              name={field}
              value={newDriver[field]}
              onChange={handleChange}
              placeholder={`Enter ${
                field.charAt(0).toUpperCase() + field.slice(1)
              }`}
              required
            />
          ))}
        </div>
        <Button type="submit">Add Driver</Button>
      </form>
    </Card>
  );
}
