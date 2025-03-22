const ProductDetailsCart = ({ product, onClose, onAddToCart }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h3 className="text-lg font-bold mb-4">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
          <hr className="my-4" />
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-extrabold text-orange-600">₹{product.price}</h4>
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button className="h-6 w-6 text-gray-500 opacity-50 cursor-not-allowed" disabled>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </button>
              <span className="text-sm text-gray-700 font-medium w-8 text-center border-x-2">1</span>
              <button className="h-6 w-6 text-gray-500 hover:text-orange-600 transition-colors duration-200">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </div>
          <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center space-x-2" 
            onClick={() => onAddToCart(product)}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="text-sm">Add to Cart</span>
          </button>
          <button className="mt-4 text-sm text-gray-500 underline" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default ProductDetailsCart;
  