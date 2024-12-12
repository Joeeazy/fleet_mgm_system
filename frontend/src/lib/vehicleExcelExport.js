import { utils, writeFile } from "xlsx";

/**
 * Formats vehicle data for Excel export
 * @param {Object} vehicle - The vehicle object to format
 * @returns {Object} Formatted vehicle data
 */
const formatVehicleData = (vehicle) => ({
  Model: vehicle.name,
  location: vehicle.location,
  "License Plate": vehicle.licensePlate,
  fuelLevel: vehicle.fuelLevel,
  "Last Service": new Date(vehicle.lastService).toLocaleDateString(),
  "Next Service Due": new Date(vehicle.nextServiceDue).toLocaleDateString(),
  "Last Updated": new Date(vehicle.lastUpdated).toLocaleDateString(),
});

/**
 * Exports vehicle data to an Excel file
 * @param {Array} vehicles - Array of vehicle objects
 * @param {string} [fileName='vehicles-report'] - Name of the output file
 */
export const exportToExcel = (vehicles, fileName = "vehicles-report") => {
  const exportData = vehicles.map(formatVehicleData);

  const worksheet = utils.json_to_sheet(exportData);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Vehicles");

  // Auto-size columns
  const maxWidth = exportData.reduce(
    (w, r) => Math.max(w, Object.keys(r).join("").length),
    10
  );
  const colWidth = Array(Object.keys(exportData[0]).length).fill({
    wch: maxWidth,
  });
  worksheet["!cols"] = colWidth;

  writeFile(workbook, `${fileName}.xlsx`);
};
