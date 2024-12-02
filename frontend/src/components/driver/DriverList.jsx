import { useState, useEffect } from "react";
import axios from "axios";
import DriverCard from "./DriverCard";

export function DriverList() {
  const [drivers, setDrivers] = useState([]);

  const getDrivers = async () => {
    try {
      const response = await axios.get("/api/drivers/");
      const fetchedDrivers = response.data;
      setDrivers(fetchedDrivers);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  useEffect(() => {
    // Fetch drivers only if not already available in localStorage
    if (!drivers.length) {
      getDrivers();
    }
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded"
        onClick={getDrivers}
      >
        Get List of Drivers
      </button>
      {drivers.map((driver, index) => (
        <DriverCard
          key={driver.id}
          driver={driver}
          //onStatusChange={handleStatusChange}
          //onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
