import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          ACGIL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-6 py-4 space-y-3">
          <Link to="/" className="block hover:text-gray-200">Home</Link>
          <Link to="/about" className="block hover:text-gray-200">About</Link>
          <Link to="/services" className="block hover:text-gray-200">Services</Link>
          <Link to="/products" className="block hover:text-gray-200">Products</Link>
          <Link to="/contact" className="block hover:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}
