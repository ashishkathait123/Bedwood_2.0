import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../productDetails/ProductContext"; // Import ProductContext
const ProductCard = ({ product, onAddToCart, onSeeDetails,initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount); // Start with passed initialCount (useful for rehydrating from a global cart)
  const navigate = useNavigate();
  // const baseURL = "https://experthometutorsacademy.com/getProducts.php/";
  // const imageUrl = `${baseURL}${product.image_url}`;
  
  useEffect(() => {
    setCount(initialCount); // Update count if initialCount changes (e.g., cart persistence)
  }, [initialCount]);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAddToCart = () => {
    if (count === 0) setCount(1); // If adding for the first time, default to 1
    onAddToCart(product, count > 0 ? count : 1);

  };
  const handleSeeDetails = () => {
    selectedProduct(product); // Store product in Context
    navigate(`/product-details/${product.id}`); // Navigate with ID
  };
  
  return (
    <div className="bg-white relative p-4 border rounded-lg shadow-lg flex flex-col justify-between h-full">
      <a className="block" href={`/product/${product.id}`}>
        <div className="w-full h-[180px] md:h-[250px] overflow-hidden relative cursor-pointer" 
        >
          <img
  src={product.image_url} 
  alt={product.name}
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
            
          />

        </div>
        
      </a>

      <div className="md:p-5 p-1 flex flex-col flex-grow">
        <h3 className="text-xs sm:text-sm md:text-lg font-bold text-gray-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto">
          <hr className="my-4" />
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-sm sm:text-lg font-extrabold text-orange-600">
              ₹{product.price}
            </h4>

            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                className={`h-6 w-6 text-gray-500 hover:text-orange-600 transition-colors duration-200 p-1 rounded-full ${count === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleDecrement}
                disabled={count === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </button>

              <span className="text-xs sm:text-sm text-gray-700 font-medium w-6 sm:w-8 text-center border-x-2">
                {count}
              </span>

              <button
                className="h-6 w-6 text-gray-500 hover:text-orange-600 transition-colors duration-200 p-1 rounded-full"
                onClick={handleIncrement}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </div>

          <button
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center space-x-2"
            onClick={handleAddToCart}
           >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="text-xs sm:text-sm">
              {count > 0 ? "Update Cart" : "Add to Cart"}
            </span>
          </button>
      
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
