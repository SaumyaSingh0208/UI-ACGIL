import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Product from "./components/Product.jsx";
import CTA from "./components/CTA.jsx";
import Products from "./pages/Products.jsx"; // ✅ Added import

import About from "./pages/About.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Product /> {/* ✅ Products on main page */}
              <CTA />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
