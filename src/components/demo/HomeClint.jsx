import React from "react";

const HomeClint = () => {
  const clients = [
    {img: "/aboutus/client-logo/logo-8.png",alt: "Venky-s India"},
    { img: "/aboutus/client-logo/logo-1.png", alt: "UK Logo" },
    { img: "/aboutus/client-logo/logo-2.png", alt: "VH Logo" },
    { img: "/aboutus/client-logo/logo-3.png", alt: "Sarovar" },
    { img: "/aboutus/client-logo/logo-4.png", alt: "Indra Gandhi" },
    { img: "/aboutus/client-logo/logo-5.png", alt: "ICFAI"  },
    { img: "/aboutus/client-logo/logo-6.png", alt: "IBDI Bank" },
    { img: "/aboutus/client-logo/logo-7.png", alt: "Hometel Roorkee" },
  ];

  return (
    <div className="bg-white py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
          Our some of <span className="font-bold">The Privilege Customers</span>
        </h2>
      </div>
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-5 md:px-12">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md"
          >
            <img
              src={client.img}
              alt={client.alt}
              className="max-h-16 md:max-h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeClint;
