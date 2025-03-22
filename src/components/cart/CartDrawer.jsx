import React, { useState } from "react";

const CartDrawer = ({ cart = [], onClose, onUpdateQuantity, onRemoveItem }) => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (!customerDetails.name || !customerDetails.address || !customerDetails.phone || !customerDetails.email) {
      alert("Please fill all customer details before proceeding to checkout.");
      return;
    }

    const message = `
🌟 *Hello! Here are the details of my order:* 

👤 *Customer Information:*
- *Name*: ${customerDetails.name}
- *Address*: ${customerDetails.address}
- *Phone*: ${customerDetails.phone}
- *Email*: ${customerDetails.email}

🛒 *Order Details:*
${cart
  .map(
    (item) => `
    🏷️ *Product*: ${item.name}
    🏷️ *Category*: ${item.category || "N/A"}
    🔢 *Product ID*: ${item.id}
    🎨 *Color*: ${item.color || "N/A"}
    🧵 *Material*: ${item.material || "N/A"}
    ✨ *Designs*: ${item.designs || "N/A"}
    🏠 *Storage*: ${item.storage || "N/A"}
    💺 *Seater*: ${item.seater || "N/A"}
    🏗️ *Shape*: ${item.shape || "N/A"}
    🏷️ *Style*: ${item.style || "N/A"}
    🛠️ *Features*: ${item.features || "N/A"}
    🛋️ *Armrest*: ${item.armrest || "N/A"}
    🧳 *Foam*: ${item.foam || "N/A"}
    🔢 *Quantity*: ${item.quantity}
    🏁 *Finish*: ${item.finish || "N/A"}
    📏 *Three Seater Dimensions (Inches)*: ${item.dimensionsInches || "N/A"}
    📐 *Three Seater Dimensions (Cm)*: ${item.dimensionsCm || "N/A"}
    🛡️ *Warranty*: ${item.warranty || "N/A"}
    📦 *Brand*: ${item.brand || "N/A"}
    🚚 *Delivery Condition*: ${item.deliveryCondition || "N/A"}
    🔧 *Expert-Assembly*: ${item.expertAssembly || "N/A"}
    🏷️ *Product SKU*: ${item.sku || "N/A"}
    💸 *Price per item*: ₹${item.price.toLocaleString()}
    `
  )
  .join("\n")}

💰 *Total Amount*: ₹${calculateSubtotal().toLocaleString()}

🚚 *I look forward to receiving my order soon!* 
🔔 *Thank you for your excellent service!*

If you need any further details or assistance, feel free to reach out. I’m happy to provide any additional information! 😊
`;


    const adminPhoneNumber = "+918630715936"; // Replace with actual admin number (with country code)
    const whatsappURL = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-xl z-50 transform transition-transform ease-in-out duration-300 overflow-y-auto">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between sticky top-0 bg-white z-10 py-4 px-4 sm:px-6 border-b">
          <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            ✖️
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 mt-6">Your cart is empty.</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center border-b pb-4">
                  <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">₹{item.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-400">Product ID: {item.id}</p>
                    <p className="text-xs text-gray-400">Category: {item.category || "N/A"}</p>

                    {/* Quantity controls */}
                    <div className="mt-2 flex items-center space-x-2">
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="px-2 bg-gray-200 rounded"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Subtotal */}
        <div className="border-t px-4 py-3 sm:px-6 flex justify-between font-medium text-lg">
          <span>Subtotal</span>
          <span>₹{calculateSubtotal().toLocaleString()}</span>
        </div>

        {/* Customer Details Form */}
        <div className="px-4 py-3 sm:px-6 space-y-2 border-t">
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            value={customerDetails.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={customerDetails.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={customerDetails.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={customerDetails.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Proceed to Checkout */}
        <div className="p-4 sm:px-6 border-t">
          <button
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
