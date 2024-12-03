import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const driverService = {
  getAll: () => api.get("/drivers"),
  add: (data) => api.post("/drivers/driver", data),
  updateStatus: (id, status) => api.patch(`/drivers/${id}/status`, { status }),
  delete: (id) => api.delete(`/drivers/${id}`),
};

export const vehicleService = {
  getAll: () => api.get("/vehicles"),
  add: (data) => api.post("/vehicles/vehicle", data),
  updateStatus: (id, status) => api.patch(`/vehicles/${id}/status`, { status }),
  delete: (id) => api.delete(`/vehicles/${id}`),
};

export default api;
