import { Link } from "react-router-dom";

const HomeProducts = () => {
  const products = [ 
    {
      heading: "Low power consumption for economical operation",
      img: "/new/img-1.png",
      name: "New Grand Plus with UF & Minerals",
      offers: "Suitable for domestic use, providing safe drinking water for households",
      button: "Explore Now",
      bgClass: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
    },
    {
      heading: "Storage purifier uv based",
      img: "/new/img-2.png",
      name: "Aquafresh UV-Based Storage Purifier",
      offers: "Chemical-Free Purification:",
      button: "Explore Now",
      bgClass: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
    },
    {
      heading: "Removes up to 99% of dissolved salts, chemicals, and impurities",
      img: "/new/img11.jpg",
      name: "1000 LPH RO System",
      offers: "Reduces plastic waste associated with bottled water consumption",
      button: "Explore Now",
      bgClass: "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300",
    },
    {
      heading: "Stainless steel frame for durability and corrosion resistance.",
      img: "/new/img22.jpg",
      name: "500 LPH RO System",
      offers:
        "Removes up to 99% of contaminants including dissolved salts, bacteria, and viruses.",
      button: "Explore Now",
      bgClass:
        "bg-gradient-to-r from-yellow-500 via-yellow-550 to-yellow-600",
    },
    {
      heading: "Multi-stage filtration",
      img: "/new/img-5.png",
      name: "Ozone RO Water Purifier",
      offers: "With a 16-liter storage capacity",
      button: "Explore Now",
      bgClass: "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500",
    },
    {
      heading: "Low Maintenance",
      img: "/new/img-2.png",
      name: "Hi-flow Water Purifier System",
      offers: "Standardized connections for easy installation",
      button: "Explore Now",
      bgClass: "bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700",
    },
  ];

  return (
    <div className="px-4 md:px-8 bg-white py-4">
      <h1 className="text-center font-bold text-2xl md:text-3xl py-3 md:py-4 pb-4">
      Our Domestic & Commercial RO
PRODUCTS

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${product.bgClass} lg:p-4 py-4 px-2 rounded-lg shadow-md flex flex-col`}
          >
            <h2 className="text-xl md:text-2xl text-center font-semibold mb-3">
              {product.heading}
            </h2>
            <img
              src={product.img}
              alt={product.name}
              className="w-full lg:h-96 object-contain mb-3"
            />
            <p className="text-xl font-medium">{product.name}</p>
            <p className="text-sm text-gray-900 font-bold mb-4">{product.offers}</p>
            <Link to="/services" className="flex lg:justify-center">
              {" "}
              <button className="self-center bg-white text-black px-4 py-2 rounded hover:bg-gray-100">
                {product.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;