import React from "react";
import { useDrivers } from "../../hooks/useDrivers";
import { AddDriverForm } from "./AddDriverForm";
import DriverList from "./DriverList";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorAlert from "../ui/ErrorAlert";
import { Users, UserPlus, FileText } from "lucide-react";
import { exportToExcel } from "../../lib/excelExport";

const DriversPage = () => {
  const {
    drivers,
    loading,
    error,
    addDriver,
    updateDriverStatus,
    deleteDriver,
  } = useDrivers();

  const handleExport = () => {
    const timestamp = new Date().toISOString().split("T")[0];
    exportToExcel(drivers, `drivers-report-${timestamp}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-base-100 to-base-200 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Driver Management</h1>
              <p className="text-gray-600">Manage your fleet drivers</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleExport}
              className="btn btn-outline btn-primary gap-2"
              title="Export drivers data to Excel"
            >
              <FileText size={16} />
              Export Report
            </button>
            <button className="btn btn-primary gap-2">
              <UserPlus size={16} />
              Add Driver
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <AddDriverForm onAdd={addDriver} />
        <DriverList
          drivers={drivers}
          onDelete={deleteDriver}
          onStatusChange={updateDriverStatus}
        />
      </div>
    </div>
  );
};

export default DriversPage;
