import {
  FaIndustry,
  FaTruck,
  FaHandshake,
  FaBuilding,
  FaHospital,
  FaFlask,
  FaStore,
  FaRecycle,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Product() {
  const products = [
    { icon: <FaIndustry />, title: "Manufacturing ERP", description: "Customized Cloud hosted ERP solution suitable for all sized manufacturing companies...", gradient: "from-blue-500 to-blue-700" },
    { icon: <FaTruck />, title: "Supply Chain Management (SCM)", description: "Fully integrated supply chain management software to manage planning, inventory, and more...", gradient: "from-green-400 to-green-600" },
    { icon: <FaHandshake />, title: "CRM - Lead & Service Management", description: "Integrated CRM software for sales, marketing, QC services, and customer relationship management...", gradient: "from-yellow-400 to-yellow-600" },
    { icon: <FaBuilding />, title: "ERP for Real Estate, EPC & Infra", description: "Reliable online ERP solution designed for construction and infrastructure companies...", gradient: "from-purple-500 to-purple-700" },
    { icon: <FaHospital />, title: "Hospital Management System (HMIS)", description: "Comprehensive hospital management software for patient care, administration, and reporting...", gradient: "from-red-500 to-red-700" },
    { icon: <FaFlask />, title: "Calibration / Testing Labs", description: "Smart calibration management software for efficient testing and laboratory operations...", gradient: "from-pink-500 to-pink-700" },
    { icon: <FaStore />, title: "Buying House Agencies", description: "ERP solution for buying house agencies with alerts for Time & Activity (TnA) and document generation...", gradient: "from-indigo-500 to-indigo-700" },
    { icon: <FaRecycle />, title: "Waste Management ERP", description: "Integrated ERP covering effluent treatment, solid waste disposal, and analytical reporting...", gradient: "from-teal-400 to-teal-600" },
  ];

  // Framer Motion variants
  const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
  const cardVariants = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="bg-gray-50">
      {/* Hero / Title */}
      <motion.div
        className="text-center py-16 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Our Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover our innovative software solutions designed to empower modern businesses.</p>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className={`group flex flex-col items-center rounded-2xl shadow-md transition-all duration-500 p-6 bg-white hover:bg-gradient-to-r hover:${product.gradient} cursor-pointer`}
          >
            {/* Icon with hover color change and rotation */}
            <motion.div
              whileHover={{ rotate: 10 }}
              className="mb-4 text-4xl text-black group-hover:text-white transition-colors duration-300"
            >
              {product.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-white transition-colors duration-300">{product.title}</h3>

            {/* Description */}
            <p className="text-sm text-center flex-grow mt-2 text-gray-600 group-hover:text-white transition-colors duration-300">{product.description}</p>

            {/* Button */}
            <a
              href="#"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
