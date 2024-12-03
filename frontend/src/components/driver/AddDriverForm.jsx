import React, { useState } from "react";
import { UserPlus } from "lucide-react";

export function AddDriverForm({ onAdd }) {
  const initialDriverState = {
    name: "",
    licenseNumber: "",
    contactNumber: "",
    status: "Available",
  };

  const [newDriver, setNewDriver] = useState(initialDriverState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAdd(newDriver);
      setNewDriver(initialDriverState);
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDriver((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="card bg-base-100 shadow-lg text-black">
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2">
          <UserPlus className="text-primary" />
          Add New Driver
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={newDriver.name}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Enter driver name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">License Number</span>
              </label>
              <input
                type="text"
                name="licenseNumber"
                value={newDriver.licenseNumber}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Enter license number"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input
                type="text"
                name="contactNumber"
                value={newDriver.contactNumber}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Enter contact number"
                required
              />
            </div>
          </div>
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary">
              Add Driver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
