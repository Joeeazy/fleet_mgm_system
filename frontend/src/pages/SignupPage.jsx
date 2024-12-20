import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";
import bannerimg from "../assets/roadrimz_banner.jpg";

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Left Side - Signup Form */}
      <div className="bg-yellow-600 flex-grow flex flex-col justify-center py-6 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create an account
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Fields */}
              {[
                { id: "name", label: "Full name", type: "text", icon: <User />, placeholder: "John Doe" },
                { id: "email", label: "Email address", type: "email", icon: <Mail />, placeholder: "you@example.com" },
                { id: "password", label: "Password", type: "password", icon: <Lock />, placeholder: "••••••••" },
                { id: "confirmPassword", label: "Confirm Password", type: "password", icon: <Lock />, placeholder: "••••••••" },
              ].map(({ id, label, type, icon, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {icon}
                    </div>
                    <input
                      id={id}
                      type={type}
                      required
                      value={formData[id]}
                      onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                      className="block w-full px-3 py-2 pl-10 bg-white text-gray-800 border border-yellow-600 rounded-md shadow-sm
                        placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      placeholder={placeholder}
                    />
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                    Loading...
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 h-5 w-5" aria-hidden="true" />
                    Sign up
                  </>
                )}
              </button>
            </form>
            <p className="mt-8 text-center text-sm text-black">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-yellow-700 hover:text-yellow-500">
                Login here <ArrowRight className="inline h-4 w-4" />
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden sm:block sm:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerimg})` }}
      ></motion.div>
    </div>
  );
}

export default SignUpPage;
