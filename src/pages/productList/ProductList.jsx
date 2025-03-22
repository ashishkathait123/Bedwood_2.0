import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Sofa Set",
    price: 25000,
    image: "/products/1.png",
  },
  {
    id: 2,
    name: "Wooden Dining Table",
    price: 18000,
    image: "/products/2.png",
  },
  {
    id: 3,
    name: "Comfort King Bed",
    price: 30000,
    image: "/products/3.png",
  },
];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminPhoneNumber = "919675111719"; // Replace with actual admin WhatsApp number

    const message = `New Order Request:
Product: ${selectedProduct.name}
Price: ₹${selectedProduct.price}
Customer Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}`;

    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    // Optionally, clear the form and hide the form after submission
    setFormData({ name: "", phone: "", email: "", address: "" });
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover mb-2"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-700">Price: ₹{product.price}</p>
            <button
              onClick={() => handleBuyNow(product)}
              className="mt-2 bg-green-600 text-white py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="mt-6 p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Order Form - {selectedProduct.name}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Send Order to WhatsApp
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductList;
