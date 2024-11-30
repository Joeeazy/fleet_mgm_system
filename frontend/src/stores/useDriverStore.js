import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast";

export const useDriverStore = create((set) => ({
  drivers: [],
  loading: false,
  error: null,

  fetchAllDrivers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("/drivers");
      set({ drivers: response.data.drivers, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      toast.error(error.response.data.error || "Failed to fetch Products");
    }
  },

  addDriver: async (driverData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post("/drivers", driverData);

      set((prevState) => ({
        drivers: [...state.drivers, res.data],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response.data.error);
      set({ error: error.message, loading: false });
    }
  },

  updateDriverStatus: async (id, status) => {
    set({ loading: true, error: null });
    try {
      await axios.patch(`/drivers/${id}/${status}`);

      set((state) => ({
        drivers: state.drivers.map((d) => (d.id === id ? { ...d, status } : d)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deleteDriver: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/drivers/${id}`);

      set((prevDrivers) => ({
        drivers: prevDrivers.drivers.filter((driver) => driver._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
