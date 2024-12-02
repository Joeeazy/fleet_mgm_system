import { Location } from "../models/location.model.js";

//Updates vehicle location and broadcasts via Socket.IO
export const updateLocation = async (req, res) => {
  try {
    const { vehicleId, latitude, longitude, speed } = req.body;

    const location = await Location.create({
      vehicleId,
      coordinates: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
      speed,
    });

    // Emit the location update through socket.io
    req.app.get("io").emit(`vehicle-location-${vehicleId}`, location);

    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Retrieves the latest location for a specific vehicle
export const getVehicleLocation = async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const location = await Location.findOne({ vehicleId }).sort({
      timestamp: -1,
    });

    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Finds vehicles within a specified radius using geospatial queries
export const getNearbyVehicles = async (req, res) => {
  try {
    const { latitude, longitude, radius = 5000 } = req.query; // radius in meters

    const locations = await Location.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: "distance",
          maxDistance: parseInt(radius),
          spherical: true,
        },
      },
      {
        $group: {
          _id: "$vehicleId",
          lastLocation: { $first: "$$ROOT" },
        },
      },
    ]);

    res.status(200).json(locations.map((l) => l.lastLocation));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
