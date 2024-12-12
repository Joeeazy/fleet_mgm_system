import express from "express";

import { signup, login, getProfile } from "../controllers/auth.controller.js";

const router = express.Router();

//signup route
router.post("/signup", signup);

//login route
router.post("/login", login);

// get users profile route
router.get("/profile", getProfile);

export default router;
