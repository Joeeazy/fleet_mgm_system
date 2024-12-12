import { motion } from "framer-motion";
import { Truck } from "lucide-react";

const ScheduleEvent = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md cursor-pointer hover:bg-yellow-100"
    >
      <div className="flex items-center space-x-2">
        <Truck className="h-4 w-4 text-yellow-600" />
        <span className="text-sm font-medium text-gray-900">
          {event.vehicleId}
        </span>
      </div>
      <div className="mt-1 text-xs text-gray-500">{event.description}</div>
    </motion.div>
  );
};

export default ScheduleEvent;
