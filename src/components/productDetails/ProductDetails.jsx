import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "./ProductContext";
import ContactBanner from "../contactbanner/ContactBanner";
import Navbar from "@/pages/Navbar";
import CartDrawer from "../cart/CartDrawer";
import { useForm, Controller } from "react-hook-form";
import ProductGrid from "./ProductGrid";
import Footer from "@/pages/Footer";
const ProductDetails = ({ onAddToCart, initialCount }) => {
  const { selectedProduct, setSelectedProduct } = useProduct();
  const { id } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(initialCount || 1);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const getValueOrNA = (value) => (value ? value : 'N/A');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 1));

  const onSubmit = (data) => {
    const message = `New Order!

    🛍 *Product Details*
    🆔 *ID:* ${selectedProduct.id}
    📛 *Name:* ${selectedProduct.name}
    🗂 *Category:* ${selectedProduct.category}
    📦 *Subcategory:* ${selectedProduct.subcategory}
    💰 *Price:* ₹${selectedProduct.price}
    🎨 *Color:* ${selectedProduct.color}
    🛋 *Material:* ${selectedProduct.material}
    🗄 *Storage:* ${selectedProduct.storage}
    🪑 *Seater:* ${selectedProduct.seater}
    🔷 *Shape:* ${selectedProduct.shape}
    🧑‍🎨 *Style:* ${selectedProduct.style}
    ✨ *Features:* ${selectedProduct.features}
    🛠 *Armrest:* ${selectedProduct.armrest}
    🧽 *Foam:* ${selectedProduct.foam}
    📊 *Quantity Available:* ${selectedProduct.quantity}
    🌟 *Finish:* ${selectedProduct.finish}
    📐 *Dimensions (inches):* ${selectedProduct.dimensions_inches}
    📏 *Dimensions (cm):* ${selectedProduct.dimensions_cm}
    🛡 *Warranty:* ${selectedProduct.warranty}
    🏷 *Brand:* ${selectedProduct.brand}
    🚚 *Delivery Condition:* ${selectedProduct.delivery_condition}
    🛠 *Expert Assembly:* ${selectedProduct.expert_assembly ? "Yes" : "No"}
    🆔 *SKU:* ${selectedProduct.sku}
    
    🖼️ *Image:* ${selectedProduct.image_url}
    
    👤 *Customer Details*
    👤 *Name:* ${data.name}
    📞 *Phone:* ${data.phone}
    📧 *Email:* ${data.email}
    🏠 *Address:* ${data.address}
    `;    const whatsappURL = `https://wa.me/918630715936?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    setCount(initialCount || 1);
  }, [initialCount]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const response = await fetch(`https://experthometutorsacademy.com/getProducts.php?id=${id}`);
        const data = await response.json();
        console.log("API Response:", data);
        if (data?.products && Array.isArray(data.products)) {
          const product = data.products.find((p) => Number(p.id) === Number(id));
          if (product) {
            setSelectedProduct(product);
          } else {
            console.error("Product not found");
            setSelectedProduct(null);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setSelectedProduct(null);
      }
    };
    
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      if (!isProductInCart) {
        setIsProductInCart(true);
        setNotification("Product added to cart!");
      } else {
        setNotification("This item is already in your cart!");
      }
      setTimeout(() => setNotification(null), 3000);
      const existingItemIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity = quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

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

  if (!selectedProduct) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <Navbar />
        <p className="text-lg font-semibold text-gray-700">No product found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col md:flex-row items-center pt-4 md:pt-6 px-4 md:px-8 lg:px-32">
        {/* Product Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-4 md:mb-0">
          <img
            src={selectedProduct.image_url}
            alt={selectedProduct.name}
            className="w-full max-w-[450px] h-auto md:w-[500px] md:h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 px-4 md:px-8 py-6 md:py-0 flex flex-col justify-start space-y-4">
          {/* Product Name & Category */}
          <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
          <p className="text-gray-600">{selectedProduct.category}</p>

          {/* Pricing Section */}
          <div className="relative">
            <hr className="my-2" />
            <div className="flex flex-col px-4">
              <span className="text-sm uppercase text-orange-500">Today's Deal</span>
              <span className="text-2xl font-bold text-black">Rs. {selectedProduct.price}</span>
            </div>
            <hr className="my-2" />
          </div>

          {/* Product Description */}
          <p className="text-gray-700">{selectedProduct.features}</p>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
              <button
                className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-orange-600 transition rounded-full"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="text-sm text-gray-700 font-medium w-10 text-center border-x-2">{count}</span>
              <button
                className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-orange-600 transition rounded-full"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>

            <button
              className="bg-orange-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-500 transition"
              onClick={() => handleAddToCart(selectedProduct, count)}
            >
              🛒 {count > 0 ? "Update Cart" : "Add to Cart"}
            </button>

            <button
              className="px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
              onClick={() => setShowModal(true)}
            >
              Buy Now
            </button>
          </div>

          {/* Product Overview */}
          <div className="overflow-auto">
            <h4 className="text-lg font-semibold mt-4 mb-2">Product Overview</h4>
            <hr className="my-2" />
            <table className="table-auto w-full text-left">
            <tbody>
  {[
    { label: "ID", value: getValueOrNA(selectedProduct.id) },
    { label: "Name", value: getValueOrNA(selectedProduct.name) },
    { label: "Category", value: getValueOrNA(selectedProduct.category) },
    { label: "Subcategory", value: getValueOrNA(selectedProduct.subcategory) },
    { label: "Price", value: `₹${getValueOrNA(selectedProduct.price)}` },
    { label: "Color", value: getValueOrNA(selectedProduct.color) },
    { label: "Material", value: getValueOrNA(selectedProduct.material) },
    { label: "Storage", value: getValueOrNA(selectedProduct.storage) },
    { label: "Seater", value: getValueOrNA(selectedProduct.seater) },
    { label: "Shape", value: getValueOrNA(selectedProduct.shape) },
    { label: "Style", value: getValueOrNA(selectedProduct.style) },
    // { label: "Features", value: getValueOrNA(selectedProduct.features) },
    { label: "Armrest", value: getValueOrNA(selectedProduct.armrest) },
    { label: "Foam", value: getValueOrNA(selectedProduct.foam) },
    { label: "Quantity Available", value: getValueOrNA(selectedProduct.quantity) },
    { label: "Finish", value: getValueOrNA(selectedProduct.finish) },
    { label: "Dimensions (inches)", value: getValueOrNA(selectedProduct.dimensions_inches) },
    { label: "Dimensions (cm)", value: getValueOrNA(selectedProduct.dimensions_cm) },
    { label: "Warranty", value: getValueOrNA(selectedProduct.warranty) },
    { label: "Brand", value: getValueOrNA(selectedProduct.brand) },
    { label: "Delivery Condition", value: getValueOrNA(selectedProduct.delivery_condition) },
    { label: "Expert Assembly", value: selectedProduct.expert_assembly ? "Yes" : "No" },
    { label: "SKU", value: getValueOrNA(selectedProduct.sku) },
    {
      label: "Image",
      value: selectedProduct.image_url ? (
        <img src={selectedProduct.image_url} alt={selectedProduct.name || 'Product Image'} className="w-20 h-20 object-cover" />
      ) : (
        'N/A'
      ),
    },
  ].map((item, index) => (
    <tr key={index}>
      <td className="text-sm font-medium text-gray-600">{item.label}</td>
      <td className="text-sm text-gray-800">{item.value}</td>
    </tr>
  ))}
</tbody>
            </table>
          </div>
        </div>
      </main>

      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
          {notification}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 top-32 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[90%] md:w-1/3">
            <h3 className="text-xl font-bold text-center">Order Now</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Controller
                name="name"
                control={control}
                render={({ field }) => <input {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Full Name" />}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => <input {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Email" />}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <input {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Phone Number" />}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => <textarea {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Address" />}
              />
              <div className="flex justify-end">
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg">Confirm Order</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ContactBanner />
      <ProductGrid /> 
      <div
        className="fixed bottom-20 right-6 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer"
        onClick={() => setCartDrawerOpen(true)}
      >
        🛒
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </div>
      
      {cartDrawerOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartDrawerOpen(false)}
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}
      <Footer />
    </>
  );
};

export default ProductDetails;
