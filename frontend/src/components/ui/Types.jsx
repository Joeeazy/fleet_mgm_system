export const VehicleStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  MAINTENANCE: "MAINTENANCE",
};

export const StatusColors = {
  [VehicleStatus.ACTIVE]: "bg-green-100 text-green-800",
  [VehicleStatus.INACTIVE]: "bg-gray-100 text-gray-800",
  [VehicleStatus.MAINTENANCE]: "bg-yellow-100 text-yellow-800",
};
