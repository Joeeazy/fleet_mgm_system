export const vehicles = [
  {
    id: 1,
    name: "Truck 001",
    status: "Active",
    location: "Route 66",
    driver: "John Doe",
    fuel: "75%",
  },
  {
    id: 2,
    name: "Van 102",
    status: "Maintenance",
    location: "Garage",
    driver: "Jane Smith",
    fuel: "45%",
  },
  {
    id: 3,
    name: "Truck 003",
    status: "Active",
    location: "Highway 95",
    driver: "Mike Johnson",
    fuel: "90%",
  },
];

export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-500";
    case "maintenance":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};
