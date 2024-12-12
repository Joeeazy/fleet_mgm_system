//import Button from "../ui/Button";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-yellow-50 min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Delivering Excellence
            <br />
            <span className="text-yellow-500">Across Every Mile</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted partner in logistics solutions. We ensure your cargo
            reaches its destination safely and on time.
          </p>
          <div className="space-x-4">
            <button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 rounded-full font-semibold transition-colors duration-200">
              <Link to="/dashboard">Get Started</Link>
            </button>
            <button className="bg-white text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-50 px-6 py-3 rounded-full font-semibold transition-colors duration-200">
              <a
                href="https://roadrimz.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
