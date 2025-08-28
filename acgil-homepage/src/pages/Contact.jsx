// src/pages/ContactPage.jsx
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ContactPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const offices = [
    {
      title: "Corporate Office - Noida",
      address: "H-107, Sector-63, Noida 201301 Uttar Pradesh, India",
      email: "akg@acgil.net",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      title: "Global R & D Office - San Francisco",
      address: "1750 O'Farrell Street, San Francisco, California-94115, USA",
      email: "akg@acgil.net",
      gradient: "from-green-400 to-green-600",
    },
    {
      title: "Regional Office - Pune",
      address:
        "6th Floor, Tower 5, World Trade Center, Kharadi, MIDC Knowledge Park, Pune, Maharashtra-411014",
      email: "akg@acgil.net",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[70vh] flex flex-col justify-start"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative text-center text-white px-6 md:px-20 pt-32"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-6 pb-6 text-lg md:text-2xl text-gray-200 drop-shadow">
            Thank you for your interest in ACG Infotech Limited. We’d love to hear from you!
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-50 rounded-t-full md:h-48"></div>
      </section>

      {/* Sales Enquiries */}
      <section className="w-full bg-gray-50 py-12 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            For Sales Enquiries
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <PhoneIcon className="w-6 h-6 text-blue-600" />
              (+91) 98 18 993537
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <EnvelopeIcon className="w-6 h-6 text-blue-600" />
              akg@acgil.net | manvi@acgil.net
            </div>
          </div>
        </motion.div>
      </section>

      {/* Office Locations */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {offices.map((office, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-500 hover:bg-gradient-to-r hover:${office.gradient} hover:text-white`}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{office.title}</h3>
            <p className="text-gray-600 flex items-start gap-2">
              <MapPinIcon className="w-5 h-5 flex-shrink-0" />
              {office.address}
            </p>
            <p className="mt-2 text-gray-600">Email: {office.email}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 gap-4">
            <input type="text" placeholder="Company Name" className="border rounded-lg p-3" />
            <input type="text" placeholder="Name*" className="border rounded-lg p-3" required />
            <input type="tel" placeholder="Phone" className="border rounded-lg p-3" />
            <input type="email" placeholder="Email" className="border rounded-lg p-3" />
            <textarea placeholder="Comments" rows="4" className="border rounded-lg p-3"></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
