import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useProduct } from "../productDetails/ProductContext";
import Pagination from "./Pagination";
import CartDrawer from "./CartDrawer";
import ListHeader from "../productDetails/ListHeader";
import Navbar from "@/pages/Navbar";
import Footer from "@/pages/Footer";

const ProductListing2 = () => {
  const { category = "All", subcategory = "" } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const { setSelectedProduct } = useProduct();

  const [selectedSortOption, setSelectedSortOption] = useState("1");
  const [selectedLayout, setSelectedLayout] = useState("2x2");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const getSubcategoryFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get('subcategory');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const subcategory = getSubcategoryFromUrl();
        const response = await fetch(`https://experthometutorsacademy.com/getProducts.php${subcategory ? `?subcategory=${subcategory}` : ''}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setProducts(Array.isArray(data?.products) ? data.products : []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, [location.search]);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (category === "All") return products;
    return products.filter(product => product.category?.toLowerCase() === category.toLowerCase());
  }, [products, category]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (selectedSortOption === "1") return a.price - b.price;
      if (selectedSortOption === "-1") return b.price - a.price;
      return 0;
    });
  }, [filteredProducts, selectedSortOption]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return sortedProducts.slice(startIndex, startIndex + productsPerPage);
  }, [sortedProducts, currentPage]);

  const handleProductClick = (product) => {
    if (!product?.id) return;
    setSelectedProduct(product);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      const updatedCart = existingItem
        ? prevCart.map((item) => item.id === product.id ? { ...item, quantity } : item)
        : [...prevCart, { ...product, quantity }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

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
        Showing products for {subcategory ? subcategory.replace("-", " ") : (category || "All Products").replace("-", " ")}
      </h2>
      <div className={`grid gap-4 ${
        selectedLayout === "1x1" ? "grid-cols-1" :
        selectedLayout === "2x2" ? "grid-cols-2" :
        selectedLayout === "3x3" ? "grid-cols-3" : "grid-cols-4"
      }`}>
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              initialCount={cart.find((item) => item.id === product.id)?.quantity || 0}
              onAddToCart={handleAddToCart}
              onClick={() => handleProductClick(product)}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No products found for this category or subcategory.</p>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedProducts.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
      <div
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer"
        onClick={() => setCartDrawerOpen(true)}
      >
        🛒
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>
        )}
      </div>
      {cartDrawerOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartDrawerOpen(false)}
        />
      )}
      <Footer />
    </div>
  );
};

export default ProductListing2;
