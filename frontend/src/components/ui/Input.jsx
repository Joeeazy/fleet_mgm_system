export function Input({ label, className = "", ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm text-gray-600 mb-1">{label}</label>
      )}
      <input
        className="border rounded p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...props}
      />
    </div>
  );
}
