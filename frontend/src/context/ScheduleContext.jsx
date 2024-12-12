import { createContext, useContext, useState } from "react";

const ScheduleContext = createContext();

export const useScheduleContext = () => useContext(ScheduleContext);

export const ScheduleProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Mock data - replace with actual data from your API
  const [vehicles] = useState([
    {
      id: 1,
      name: "Truck 001",
      type: "Heavy Duty",
      status: "active",
      fuel: 85,
      location: "Warehouse A",
    },
    {
      id: 2,
      name: "Truck 002",
      type: "Delivery Van",
      status: "active",
      fuel: 70,
      location: "Route 66",
    },
    {
      id: 3,
      name: "Truck 003",
      type: "Container",
      status: "inactive",
      fuel: 45,
      location: "Maintenance",
    },
  ]);

  const [scheduleEvents] = useState([
    {
      id: 1,
      vehicleId: "Truck 001",
      date: new Date(),
      description: "Delivery to Downtown",
    },
    {
      id: 2,
      vehicleId: "Truck 002",
      date: new Date(),
      description: "Pickup from Supplier",
    },
  ]);

  return (
    <ScheduleContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        vehicles,
        scheduleEvents,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
