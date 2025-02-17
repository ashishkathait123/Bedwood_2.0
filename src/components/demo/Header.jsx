import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-[#E0FFFF] shadow-lg">
      <nav className="bg-[#F0F8FF] border-b-2 border-[#FFD700]">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo/RO2.jpg"
              className="w-12 h-12 rounded-full border-2 border-[#FFD700]"
              alt="Company Logo"
            />
            <div className="text-[#2C3E50]">
              <span className="text-2xl font-bold">RO</span>
              <span className="text-2xl font-bold">HUB.in</span>
              <br />
              <span className="text-sm font-medium">Shreeansh Aqua Solutions +91-7579008065</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#2C3E50] hover:bg-gray-200"
          >
            ☰
          </button>

          {/* Navigation Links */}
          <div
            ref={menuRef}
            className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-6`}
          >
            <Link to="/home" className="block px-4 py-2 md:py-1 text-[#2C3E50] hover:text-[#32CD32]">
              Home
            </Link>
            <Link to="/services" className="block px-4 py-2 md:py-1 text-[#2C3E50] hover:text-[#32CD32]">
              Services
            </Link>
            <Link to="/products" className="block px-4 py-2 md:py-1 text-[#2C3E50] hover:text-[#32CD32]">
              Products
            </Link>
            <Link to="/faqs" className="block px-4 py-2 md:py-1 text-[#2C3E50] hover:text-[#32CD32]">
              FAQs
            </Link>
            <Link to="/about" className="block px-4 py-2 md:py-1 text-[#2C3E50] hover:text-[#32CD32]">
              About Us
            </Link>
            <Link to="/contact" className="block px-4 py-2 md:py-1 text-[#2C3E50] hover:text-[#32CD32]">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Scrolling Banner */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll text-sm md:text-lg font-medium text-center">
          Drink Healthy. Live Healthy. Choose <b>Shreeansh Aqua Solutions!</b> Phone: <b>+91-7579008065</b>, Dehradun, Uttarakhand
        </div>
      </div>
    </div>
  );
};

export default Header;
