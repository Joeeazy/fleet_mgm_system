import { create } from "zustand";
import axios from "../lib/axios";
import { VehicleStatus } from "../types";

export const useVehicleStore = create((set) => ({
  vehicles: [],
  loading: false,
  error: null,

  loadVehicles: async () => {
    set({ loading: true, error: null });
    try {
      const vehicles = await api.getVehicles();
      set({ vehicles, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addVehicle: async (vehicle) => {
    set({ loading: true, error: null });
    try {
      const newVehicle = await api.addVehicle({
        ...vehicle,
        status: VehicleStatus.ACTIVE,
      });
      set((state) => ({
        vehicles: [...state.vehicles, newVehicle],
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateVehicleStatus: async (id, status) => {
    set({ loading: true, error: null });
    try {
      await api.updateVehicleStatus(id, status);
      set((state) => ({
        vehicles: state.vehicles.map((v) =>
          v.id === id ? { ...v, status } : v
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deleteVehicle: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.deleteVehicle(id);
      set((state) => ({
        vehicles: state.vehicles.filter((v) => v.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
