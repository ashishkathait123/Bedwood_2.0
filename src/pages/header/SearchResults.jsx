import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/cart/ProductCard";
import Pagination from "@/components/cart/Pagination";
// import Header1 from "../header/Header1";
import ListHeader from "@/components/productDetails/ListHeader";
import CartDrawer from "@/components/cart/CartDrawer";
import Navbar from "../Navbar";
const SearchResults = () => {
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("search"); // ✅ Get "search" from query string

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("1");
  const [selectedLayout, setSelectedLayout] = useState("2x2");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  const handleUpdateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      const apiURL = `https://experthometutorsacademy.com/getProducts.php?search=${encodeURIComponent(query)}`;
      console.log("Fetching:", apiURL);
    
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log("API Response:", data);
    
        if (data && Array.isArray(data.products) && data.products.length > 0) {
          setFilteredProducts(data.products);
        } else {
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    

    fetchProducts();
  }, [query]);

  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      let updatedCart = prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      );

      updatedCart = updatedCart.filter((item) => item.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="p-4 relative">
     <Navbar />

      <ListHeader
        selectedSortOption={selectedSortOption}
        onSortChange={setSelectedSortOption}
        selectedLayout={selectedLayout}
        onLayoutChange={setSelectedLayout}
      />

      <h2 className="text-2xl font-bold mb-4 capitalize">
        Search Results for "{query}"
      </h2>

      <div className={`grid gap-4 ${selectedLayout === "1x1" ? "grid-cols-1" : selectedLayout === "2x2" ? "grid-cols-2" : selectedLayout === "3x3" ? "grid-cols-3" : "grid-cols-4"}`}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              initialCount={cart.find((item) => item.id === product.id)?.quantity || 0}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No products found.</p>
        )}
      </div>

      <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredProducts.length / productsPerPage)} onPageChange={setCurrentPage} />

      <div className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer" onClick={() => setCartDrawerOpen(true)}>
        🛒
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </div>

      {cartDrawerOpen && (
        <CartDrawer cart={cart} onClose={() => setCartDrawerOpen(false)} 
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}

/>
      )}
    </div>
  );
};

export default SearchResults;
