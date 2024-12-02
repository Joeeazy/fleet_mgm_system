export const setupLocationSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected to location tracking");

    socket.on("subscribe-vehicle", (vehicleId) => {
      socket.join(`vehicle-${vehicleId}`);
      console.log(`Subscribed to vehicle ${vehicleId}`);
    });

    socket.on("unsubscribe-vehicle", (vehicleId) => {
      socket.leave(`vehicle-${vehicleId}`);
      console.log(`Unsubscribed from vehicle ${vehicleId}`);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected from location tracking");
    });
  });
};

// Real-time location updates using Socket.IO
// Subscribe/unsubscribe functionality for vehicle tracking
// Broadcast location updates to subscribed clients
