export function StatusBadge({ status, icon: Icon }) {
  const colors = {
    Available: "text-green-500",
    "On Trip": "text-blue-500",
    "Off Duty": "text-gray-500",
    Active: "text-green-500",
    Maintenance: "text-yellow-500",
    "Out of Service": "text-red-500",
  };

  return (
    <div className={`flex items-center ${colors[status]}`}>
      <Icon size={20} />
    </div>
  );
}
