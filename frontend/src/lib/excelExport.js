import { utils, writeFile } from "xlsx";

/**
 * Formats driver data for Excel export
 * @param {Object} driver - The driver object to format
 * @returns {Object} Formatted driver data
 */
const formatDriverData = (driver) => ({
  "Full Name": driver.name,
  Status: driver.status,
  "License Number": driver.licenseNumber,
  Phone: driver.contactNumber,
  Email: driver.email,
  "Join Date": new Date(driver.joinDate).toLocaleDateString(),
  "Last Updated": new Date(driver.lastUpdated).toLocaleDateString(),
});

/**
 * Calculates the optimal column width for the Excel sheet
 * @param {Array} data - The data to analyze
 * @returns {number} The maximum width needed
 */
const calculateColumnWidth = (data) => {
  return data.reduce(
    (width, row) => Math.max(width, Object.keys(row).join("").length),
    6
  );
};

/**
 * Exports driver data to an Excel file
 * @param {Array} drivers - Array of driver objects
 * @param {string} [fileName='drivers-report'] - Name of the output file
 */
export const exportToExcel = (drivers, fileName = "drivers-report") => {
  // Format the data for export
  const exportData = drivers.map(formatDriverData);

  // Create workbook and worksheet
  const worksheet = utils.json_to_sheet(exportData);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Drivers");

  // Set column widths
  const maxWidth = calculateColumnWidth(exportData);
  const colWidth = Array(Object.keys(exportData[0]).length).fill({
    wch: maxWidth,
  });
  worksheet["!cols"] = colWidth;

  // Generate and download Excel file
  writeFile(workbook, `${fileName}.xlsx`);
};
