import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["Active", "Maintenance", "Out of Service"],
      default: "Active",
    },
    location: {
      type: String,
      required: true,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
    },
    fuelLevel: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    lastMaintenance: {
      type: Date,
      default: Date.now,
    },
    nextMaintenanceDue: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vehicle", vehicleSchema);
