import React from 'react';

const BuyOnPhoneButton = () => {
  return (
    <a
      href="tel:+91 8630715936"
      className="fixed left-4 top-2/3 transform -translate-y-1/2 bg-orange-500 border-3 border-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out z-50"
      aria-label="Call Now"
    >
      {/* Phone Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
  );
};

export default BuyOnPhoneButton;
