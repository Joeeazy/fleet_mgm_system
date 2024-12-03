import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import { driverService } from "../lib/axios";

export const useDrivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDrivers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await driverService.getAll();
      setDrivers(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch drivers");
      toast.error("Failed to fetch drivers");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

  const addDriver = async (driverData) => {
    try {
      await driverService.add(driverData);
      toast.success("Driver added successfully");
      await fetchDrivers();
      return true;
    } catch (err) {
      toast.error("Failed to add driver");
      return false;
    }
  };

  const updateDriverStatus = async (id, status) => {
    try {
      await driverService.updateStatus(id, status);
      toast.success("Status updated successfully");
      await fetchDrivers();
      return true;
    } catch (err) {
      toast.error("Failed to update status");
      return false;
    }
  };

  const deleteDriver = async (id) => {
    try {
      await driverService.delete(id);
      toast.success("Driver deleted successfully");
      await fetchDrivers();
      return true;
    } catch (err) {
      toast.error("Failed to delete driver");
      return false;
    }
  };

  return {
    drivers,
    loading,
    error,
    addDriver,
    updateDriverStatus,
    deleteDriver,
    refreshDrivers: fetchDrivers,
  };
};
