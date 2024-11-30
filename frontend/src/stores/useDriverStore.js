// import { create } from "zustand";
// import axios from "../lib/axios";

// export const useDriverStore = create((set) => ({
//   drivers: [],

//   loading: false,

//   setDrivers: (drivers) => set({ drivers }),

//   createDriver: async (driverData) => {
//     set({ loading: true });

//     try {
//       const res = await axios.post("/drivers");
//     } catch (error) {}
//   },
// }));
import { create } from "zustand";
import axios from "../lib/axios";
import { DriverStatus } from "../types";

export const useDriverStore = create((set) => ({
  drivers: [],
  loading: false,
  error: null,

  loadDrivers: async () => {
    set({ loading: true, error: null });
    try {
      const drivers = await api.getDrivers();
      set({ drivers, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addDriver: async (driver) => {
    set({ loading: true, error: null });
    try {
      const newDriver = await api.addDriver({
        ...driver,
        status: DriverStatus.AVAILABLE,
      });
      set((state) => ({
        drivers: [...state.drivers, newDriver],
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateDriverStatus: async (id, status) => {
    set({ loading: true, error: null });
    try {
      await api.updateDriverStatus(id, status);
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
      await api.deleteDriver(id);
      set((state) => ({
        drivers: state.drivers.filter((d) => d.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
