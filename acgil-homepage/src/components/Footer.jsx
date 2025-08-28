import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const linkVariants = {
    hover: { scale: 1.1, x: 5, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Logo + About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white">ACGIL</h3>
          <p className="mt-3 text-sm text-gray-400">
            Providing innovative ERP & web solutions to help businesses grow and scale globally.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Products", to: "/products" },
              { label: "Contact", to: "/contact" },
            ].map((link, index) => (
              <motion.li key={index} whileHover="hover">
                <Link
                  to={link.to}
                  className="hover:text-white transition-colors duration-300"
                  variants={linkVariants}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <p className="mt-3 text-sm text-gray-400">📍 Noida, India</p>
          <p className="mt-2 text-sm text-gray-400">📞 +91 12345 67890</p>
          <p className="mt-2 text-sm text-gray-400">✉️ info@acgil.com</p>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} ACGIL. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
