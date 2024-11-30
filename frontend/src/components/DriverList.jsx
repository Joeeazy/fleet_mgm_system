import { DriverCard } from "./DriverCard";

export function DriverList({ drivers, onStatusChange, onDelete }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {drivers.map((driver) => (
        <DriverCard
          key={driver.id}
          driver={driver}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
