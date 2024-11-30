import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import vehicleRoutes from "./routes/vehicle.route.js";
import driverRoutes from "./routes/driver.route.js";

import { connectDB } from "./db/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json()); // Make sure this line is included
app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/drivers", driverRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  //mongodb connect
  connectDB();
});
