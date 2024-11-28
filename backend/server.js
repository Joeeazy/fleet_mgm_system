import express from "express";
import dotenv from "dotenv";

//import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./db/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//authentication
//app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  //mongodb connect
  connectDB();
});
