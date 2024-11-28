import express from "express";
import {
  getVehicles,
  addVehicle,
  updateVehicleStatus,
} from "../controllers/vehicle.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.get("/", getVehicles);

router.post(
  "/",
  [
    body("name").notEmpty().trim(),
    body("location").notEmpty(),
    body("fuelLevel").isFloat({ min: 0, max: 100 }),
    body("nextMaintenanceDue").isISO8601(),
  ],
  addVehicle
);

router.patch(
  "/:id/status",
  body("status").isIn(["Active", "Maintenance", "Out of Service"]),
  updateVehicleStatus
);

export default router;
