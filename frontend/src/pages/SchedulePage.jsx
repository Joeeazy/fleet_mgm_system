import { motion } from "framer-motion";
import ScheduleHeader from "../components/schedule/ScheduleHeader";
import ScheduleCalendar from "../components/schedule/ScheduleCalendar";
import VehicleList from "../components/schedule/ScheduleList";
import { ScheduleProvider } from "../context/ScheduleContext";

const SchedulePage = () => {
  return (
    <ScheduleProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50"
      >
        <ScheduleHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <ScheduleCalendar />
            </div>
            <div className="lg:col-span-1">
              <VehicleList />
            </div>
          </div>
        </div>
      </motion.div>
    </ScheduleProvider>
  );
};

export default SchedulePage;
