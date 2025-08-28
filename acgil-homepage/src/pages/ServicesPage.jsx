import {
  FaCogs,
  FaCloud,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaCogs />,
      title: "ERP Implementation",
      description:
        "End-to-end ERP deployment tailored to your organization's needs for seamless operations.",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Secure and scalable cloud-based platforms for your enterprise applications and data.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: <FaChartLine />,
      title: "Business Intelligence",
      description:
        "Data analytics and reporting tools that provide actionable insights for decision-making.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "IT Security",
      description:
        "Comprehensive cybersecurity solutions to safeguard your business data and systems.",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: <FaUsers />,
      title: "Consulting Services",
      description:
        "Expert IT and business consulting to optimize workflows and technology adoption.",
      gradient: "from-red-500 to-red-700",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Custom mobile solutions for Android and iOS to enhance your business reach.",
      gradient: "from-pink-500 to-pink-700",
    },
  ];

  // Motion Variants
  const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
  const cardVariants = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[70vh] flex flex-col justify-start"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-4c4f50b68d62?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Animated Hero Title */}
        <motion.div
          className="relative text-center text-white px-6 md:px-20 pt-32"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Our Services
          </h1>
          <p className="mt-6 pb-6 text-lg md:text-2xl text-gray-200 drop-shadow">
            We deliver a wide range of IT and ERP services to help your business thrive.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-50 rounded-t-full md:h-48"></div>
      </section>

      {/* Services Grid */}
      <motion.div
        className="py-20 px-6 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className={`group flex flex-col items-center rounded-2xl shadow-md transition-all duration-500 p-6 bg-white hover:bg-gradient-to-r hover:${service.gradient} cursor-pointer`}
          >
            {/* Icon with rotation and color change on hover */}
            <motion.div
              whileHover={{ rotate: 10 }}
              className="mb-4 text-4xl text-black group-hover:text-white transition-colors duration-300"
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-center flex-grow mt-2 text-gray-600 group-hover:text-white transition-colors duration-300">
              {service.description}
            </p>

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
