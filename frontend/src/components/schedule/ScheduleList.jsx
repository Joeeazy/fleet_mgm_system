import { motion } from "framer-motion";
import { useScheduleContext } from "../../context/ScheduleContext";
import VehicleCard from "./ScheduleVehicle";

const VehicleList = () => {
  const { vehicles } = useScheduleContext();

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Available Vehicles
      </h2>
      <div className="space-y-4">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <VehicleCard vehicle={vehicle} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
