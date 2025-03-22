import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

const WhatsApp = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const phoneNumber = "+918630715936";

  // Create a ref to detect clicks outside the chat box
  const chatBoxRef = useRef(null);

  // Close the chat box if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
      setMessage("");
    }
  };

  return (
<div className="animate-bounce block fixed top-2/3 right-5 transform -translate-y-1/2 z-50">
{/* Floating WhatsApp Icon */}
      <div
  

        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <img
          src="collections/whatsapp.webp"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </div>

      {/* Smooth Chat Box */}
      <div
        ref={chatBoxRef} // Attach the ref to the chat box div
        className={`absolute bottom-18 right-0 bg-white shadow-lg rounded-lg p-4 w-72 transform transition-all duration-300 ${
          isChatOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ pointerEvents: isChatOpen ? "auto" : "none" }}
      >
        <div className="text-gray-800 font-semibold mb-2">Chat with us!</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full h-20 border rounded-lg p-2 text-[#0BDA51] focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSendMessage}
          className="mt-2 w-full bg-[#0BDA51] text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition flex items-center justify-center space-x-2"
        >
          <span>Send</span>
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default WhatsApp;
