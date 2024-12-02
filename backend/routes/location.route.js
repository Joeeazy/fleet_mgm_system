import express from "express";
import {
  updateLocation,
  getVehicleLocation,
  getNearbyVehicles,
} from "../controllers/location.controller.js";

const router = express.Router();

router.post("/update", updateLocation);
router.get("/vehicle/:vehicleId", getVehicleLocation);
router.get("/nearby", getNearbyVehicles);

export default router;
