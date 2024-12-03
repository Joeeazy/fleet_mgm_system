import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import { vehicleService } from "../lib/axios";

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVehicles = useCallback(async () => {
    try {
      setLoading(true);
      const response = await vehicleService.getAll();
      setVehicles(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch vehicles");
      toast.error("Failed to fetch vehicles");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const addVehicle = async (vehicleData) => {
    try {
      await vehicleService.add(vehicleData);
      toast.success("Vehicle added successfully");
      await fetchVehicles();
      return true;
    } catch (err) {
      toast.error("Failed to add vehicle");
      return false;
    }
  };

  const updateVehicleStatus = async (id, status) => {
    try {
      await vehicleService.updateStatus(id, status);
      toast.success("Status updated successfully");
      await fetchVehicles();
      return true;
    } catch (err) {
      toast.error("Failed to update status");
      return false;
    }
  };

  const deleteVehicle = async (id) => {
    try {
      await vehicleService.delete(id);
      toast.success("Vehicle deleted successfully");
      await fetchVehicles();
      return true;
    } catch (err) {
      toast.error("Failed to delete vehicle");
      return false;
    }
  };

  return {
    vehicles,
    loading,
    error,
    addVehicle,
    updateVehicleStatus,
    deleteVehicle,
    refreshVehicles: fetchVehicles,
  };
};
