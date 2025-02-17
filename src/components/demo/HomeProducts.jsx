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
      offers: "Chemical-Free Purification",
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
      offers: "Removes up to 99% of contaminants including dissolved salts, bacteria, and viruses.",
      button: "Explore Now",
      bgClass: "bg-gradient-to-r from-yellow-500 via-yellow-550 to-yellow-600",
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
    <div className="px-4 md:px-8 bg-white py-6">
      <h1 className="text-center font-bold text-2xl md:text-3xl py-3 md:py-4">
        Our Domestic & Commercial RO PRODUCTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${product.bgClass} p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center`}
          >
            <h2 className="text-lg md:text-xl text-center font-semibold mb-3 text-white">
              {product.heading}
            </h2>
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-52 md:h-64 lg:h-72 object-contain mb-4"
            />
            <p className="text-lg md:text-xl font-medium text-white text-center">{product.name}</p>
            <p className="text-sm text-gray-100 font-bold mb-4 text-center">{product.offers}</p>
            <Link to="/services">
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition">
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
