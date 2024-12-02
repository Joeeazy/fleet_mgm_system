export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    danger: "text-red-500 hover:text-red-700",
  };

  return (
    <button
      className={`px-4 py-2 rounded transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
