import { useState } from "react";
import { format, startOfWeek, addDays } from "date-fns";
import { useScheduleContext } from "../../context/ScheduleContext";
import ScheduleEvent from "./ScheduleEvent";

const ScheduleCalendar = () => {
  const { currentDate, scheduleEvents } = useScheduleContext();
  const startDate = startOfWeek(currentDate);

  const weekDays = [...Array(7)].map((_, index) => addDays(startDate, index));

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="grid grid-cols-7 gap-px">
        {weekDays.map((day) => (
          <div key={day.toString()} className="p-4 border-b">
            <div className="text-sm font-medium text-gray-900">
              {format(day, "EEE")}
            </div>
            <div className="mt-1 text-sm text-gray-500">{format(day, "d")}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200 h-[600px]">
        {weekDays.map((day) => (
          <div key={day.toString()} className="relative bg-white p-2">
            {scheduleEvents
              .filter(
                (event) =>
                  format(event.date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
              )
              .map((event) => (
                <ScheduleEvent key={event.id} event={event} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar;
