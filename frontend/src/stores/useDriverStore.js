import { create } from "zustand";
import axios from "../lib/axios";

export const useDriverStore = create((set) => ({
  drivers: [],

  loading: false,

  setDrivers: (drivers) => set({ drivers }),

  createDriver: async (driverData) => {
    set({ loading: true });

    try {
      const res = await axios.post("/drivers");
    } catch (error) {}
  },
}));
