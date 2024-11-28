import express from "express";
import {
  getDrivers,
  addDriver,
  updateDriverStatus,
} from "../controllers/driver.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.get("/", getDrivers);

router.post(
  "/",
  [
    body("name").notEmpty().trim(),
    body("licenseNumber").notEmpty(),
    body("contactNumber").notEmpty(),
  ],
  addDriver
);

router.patch(
  "/:id/status",
  body("status").isIn(["Available", "On Trip", "Off Duty"]),
  updateDriverStatus
);

export default router;
