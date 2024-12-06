import express from "express";
import {
  getDrivers,
  addDriver,
  updateDriverStatus,
  deleteDriver,
} from "../controllers/driver.controller.js";
import { body } from "express-validator";

const router = express.Router();


router.get("/", getDrivers);

router.post(
  "/driver",
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

router.delete("/:id", deleteDriver);

export default router;
