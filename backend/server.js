import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import authRoutes from "./routes/auth.route.js";
import vehicleRoutes from "./routes/vehicle.route.js";
import driverRoutes from "./routes/driver.route.js";
import locationRoutes from "./routes/location.route.js";
import { connectDB } from "./db/db.js";
import { setupLocationSocket } from "./socket/locationSocket.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT;

app.use(express.json()); // Make sure this line is included
app.use(cors());

// Store io instance in app for use in routes
app.set("io", io);


app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/locations", locationRoutes);

// Setup Socket.IO
setupLocationSocket(io);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  //mongodb connect
  connectDB();
});
