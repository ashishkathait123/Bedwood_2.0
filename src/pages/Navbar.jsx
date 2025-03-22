import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length); // or sum up the quantities if necessary
  };

  // Run this effect when the component mounts or when the cart changes
  useEffect(() => {
    updateCartCount();
  }, []);
 useEffect(() => {
  axios
    .get("https://experthometutorsacademy.com/getProducts.php")
    .then((response) => {
      console.log("API Response:", response.data);
      setCategories(response.data.categories || []);
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);


const handleSubCategoryClick = (subcategory) => {
  
  navigate(`/products?subcategory=${encodeURIComponent(subcategory)}`);
  setMenuOpen(false);
};

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/logo/bedlogo.png"
            alt="Logo"
            className="h-14 md:h-20 w-auto"
          />
        </Link>

        <div className="relative flex-1 mx-4 hidden md:block">
          <input
            placeholder="Search Products..."
            className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            🔍
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative flex items-center">
            🛒
            {/* Display the cart count dynamically */}
            <span className="absolute -top-1 -right-2 text-xs text-red-500">
              {cartCount}
            </span>
          </Link>

          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-6 border-t bg-gray-50 py-2">
        {categories.map((category) => (
          <div key={category.name} className="relative group">
            <button className="text-gray-700 hover:text-orange-500 px-4 py-2">
              {category.name}
            </button>
            {category.subCategories?.length > 0 && (
              <div
                className="absolute left-0 min-w-[180px] bg-white shadow-lg border rounded-lg 
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       transition-all duration-300 ease-in-out py-2"
              >
                {category.subCategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubCategoryClick(sub.name)}
                    className="block w-full text-left px-4 py-2 text-gray-700 
                         hover:bg-orange-100 hover:text-orange-500 transition-all duration-300"
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 h-96 overflow-y-auto rounded-lg">
        {/* Mobile Search Bar */}
    <div className="relative mb-4">
      <input
        placeholder="Search Products..."
        className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
      >
        🔍
      </button>
    </div>
          {categories.map((category) => (
            <div key={category.name} className="border-b py-2">
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 flex justify-between"
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category ? null : category
                  )
                }
              >
                {category.name}
              </button>
              {activeCategory === category &&
                category.subCategories?.length > 0 && (
                  <div className="pl-4 bg-gray-50 border-l">
                    {category.subCategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubCategoryClick(sub.name)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition-all duration-300"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
