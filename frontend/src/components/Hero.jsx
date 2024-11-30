import { Truck, Users } from "lucide-react";

export function Hero({ activeTab, onTabChange }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Fleet Management
              </h1>
            </div>
            <div className="ml-6 flex space-x-8">
              <NavButton
                active={activeTab === "drivers"}
                onClick={() => onTabChange("drivers")}
                icon={<Users className="mr-2" />}
                label="Drivers"
              />
              <NavButton
                active={activeTab === "vehicles"}
                onClick={() => onTabChange("vehicles")}
                icon={<Truck className="mr-2" />}
                label="Vehicles"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        active
          ? "border-blue-500 text-gray-900"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {icon} {label}
    </button>
  );
}
