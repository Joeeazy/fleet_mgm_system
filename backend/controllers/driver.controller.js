import Driver from "../models/driver.model.js";
import { validationResult } from "express-validator";

export const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find().populate(
      "currentVehicle",
      "name status"
    );
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addDriver = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const driver = new Driver(req.body);
    const savedDriver = await driver.save();
    res.status(201).json(savedDriver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDriverStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, currentVehicle } = req.body;

    const driver = await Driver.findByIdAndUpdate(
      id,
      { status, currentVehicle },
      { new: true }
    );

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.json(driver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
