import { FaTruck, FaWarehouse, FaShip, FaPlane } from "react-icons/fa";
import ServiceCard from "./ServicesCard";

const Services = () => {
  const services = [
    {
      icon: <FaTruck className="text-4xl text-yellow-500" />,
      title: "Road Transport",
      description:
        "Efficient and reliable road transportation services across the country.",
    },
    {
      icon: <FaWarehouse className="text-4xl text-yellow-500" />,
      title: "Warehousing",
      description: "Secure storage solutions with modern facility management.",
    },
    {
      icon: <FaShip className="text-4xl text-yellow-500" />,
      title: "Sea Freight",
      description: "International shipping services for global reach.",
    },
    {
      icon: <FaPlane className="text-4xl text-yellow-500" />,
      title: "Air Freight",
      description: "Fast and secure air cargo services worldwide.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-yellow-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
