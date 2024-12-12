import { Calendar, Filter, Download } from "lucide-react";
import { useScheduleContext } from "../../context/ScheduleContext";

const ScheduleHeader = () => {
  const { currentDate, setCurrentDate } = useScheduleContext();

  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Calendar className="h-6 w-6 text-yellow-600" />
            <h1 className="text-2xl font-bold text-gray-900">Fleet Schedule</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduleHeader;
