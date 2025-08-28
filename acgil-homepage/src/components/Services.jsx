import { FaCode, FaCogs, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Web Development",
      desc: "Modern web apps with React & Node.",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "ERP Solutions",
      desc: "Customized ERP software for enterprises.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: "Cloud Services",
      desc: "Scalable & secure cloud solutions.",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-12 px-6 bg-white text-center">
      {/* Animated Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Our Services
      </motion.h2>

      <motion.div
        className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className={`group p-6 bg-gray-50 rounded-xl shadow transition-all duration-500 hover:bg-gradient-to-r hover:${service.gradient} cursor-pointer`}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10 }}
              className="mb-3 flex justify-center text-black group-hover:text-white transition-colors duration-300"
            >
              {service.icon}
            </motion.div>
            {/* Title */}
            <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>
            {/* Description */}
            <p className="mt-2 text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
