import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    //check if user is authenticated using access token from the cookies
    const accessToken = req.cookies.accessToken;

    //if it doesnt exist
    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token provided" });
    }

    //if it exists
    try {
      //check if access token provided is the correct one
      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

      //find the user using the userId
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        return res.status(401).json({ message: "User Not Found" });
      }

      //
      req.user = user;

      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Unauthorized - Access Token Expired" });
      }
      throw error;
    }
  } catch (error) {
    console.log("Error in the protectRoute Middleware", error.message);
    return res
      .status(401)
      .json({ message: "Unauthorized - Invalid access Token" });
  }
};

export const adminRoute = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access Denied - Admin only" });
  }
};
