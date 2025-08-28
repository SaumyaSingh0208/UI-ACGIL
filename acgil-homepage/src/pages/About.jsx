// src/pages/About.jsx
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="relative bg-cover bg-center h-[60vh] flex flex-col items-center justify-center pb-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1537432376769-00a8b2406f87?auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Hero content */}
          <motion.div
            className="relative text-center max-w-3xl px-6 z-10 text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              About the Company
            </h1>
            <p className="text-lg text-gray-200 drop-shadow">
              Empowering the world with technology since 1993
            </p>
          </motion.div>
        </div>

        {/* Curve at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-50 rounded-t-full md:h-48"></div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-gray-50 py-12 px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            ACG Infotech Ltd. comes under the list of best ERP companies. Founded
            and run by professionals from premier NIT/IIT and the University of
            Wales (UK), ACGIL has been offering web-based software solutions
            including ERP, HMIS, and CRM across India and overseas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a strong presence in industries like Manufacturing, Trading,
            Warehouse, SCM, EPC, Construction, Real-estate, Hospitals, Buying House,
            and Calibration assessment, we combine unparalleled experience with deep
            industry expertise to help clients improve their business performance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From Fortune 500 MNCs to emerging corporates, we deliver enterprise
            application solutions tailored to each client's unique needs.
          </p>
        </motion.div>
      </section>

      {/* Sales Enquiries */}
      <section className="w-full bg-gray-50 py-12 px-6 border-t border-gray-200">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Speak with our Representative Today!
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <PhoneIcon className="w-6 h-6 text-blue-600" />
              (+91) 98 18 993537
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <EnvelopeIcon className="w-6 h-6 text-blue-600" />
              akg@acgil.net
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
