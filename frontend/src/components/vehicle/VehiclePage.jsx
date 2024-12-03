// import React from "react";
// import { useVehicles } from "../../hooks/useVehicles";
// import { AddVehicleForm } from "./AddVehicleForm";
// import VehicleList from "./VehicleList";
// import LoadingSpinner from "../ui/LoadingSpinner";
// import ErrorAlert from "../ui/ErrorAlert";
// import { Truck } from "lucide-react";

// const VehiclesPage = () => {
//   const {
//     vehicles,
//     loading,
//     error,
//     addVehicle,
//     updateVehicleStatus,
//     deleteVehicle,
//   } = useVehicles();

//   if (loading) return <LoadingSpinner />;
//   if (error) return <ErrorAlert message={error} />;

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex items-center gap-3 mb-6">
//         <Truck className="w-8 h-8 text-primary" />
//         <h1 className="text-2xl font-bold">Vehicle Management</h1>
//       </div>

//       <AddVehicleForm onAdd={addVehicle} />

//       <VehicleList
//         vehicles={vehicles}
//         onDelete={deleteVehicle}
//         onStatusChange={updateVehicleStatus}
//       />
//     </div>
//   );
// };

// export default VehiclesPage;
import React from "react";
import { useVehicles } from "../../hooks/useVehicles";
import { AddVehicleForm } from "./AddVehicleForm";
import VehicleList from "./VehicleList";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorAlert from "../ui/ErrorAlert";
import { Truck, Plus, FileText, Fuel } from "lucide-react";

const VehiclesPage = () => {
  const {
    vehicles,
    loading,
    error,
    addVehicle,
    updateVehicleStatus,
    deleteVehicle,
  } = useVehicles();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error} />;

  const stats = [
    {
      title: "Total Vehicles",
      value: vehicles.length,
      icon: Truck,
      color: "text-primary",
    },
    {
      title: "Active",
      value: vehicles.filter((v) => v.status === "Active").length,
      icon: Fuel,
      color: "text-green-500",
    },
    {
      title: "In Maintenance",
      value: vehicles.filter((v) => v.status === "Maintenance").length,
      icon: Plus,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-base-100 to-base-200 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Vehicle Management</h1>
              <p className="text-gray-600">
                Monitor and manage your fleet vehicles
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-outline btn-primary gap-2">
              <FileText size={16} />
              Export Report
            </button>
            <button className="btn btn-primary gap-2">
              <Plus size={16} />
              Add Vehicle
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-base-100 p-6 rounded-lg border border-base-200 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 bg-base-200 rounded-lg ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{stat.title}</h3>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        <AddVehicleForm onAdd={addVehicle} />
        <VehicleList
          vehicles={vehicles}
          onDelete={deleteVehicle}
          onStatusChange={updateVehicleStatus}
        />
      </div>
    </div>
  );
};

export default VehiclesPage;
