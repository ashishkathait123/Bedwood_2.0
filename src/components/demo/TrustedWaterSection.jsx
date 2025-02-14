import React from "react";

const features = [
  {
    title: "Maximum Purity",
    description:
      "Ensuring pure & safe drinking water with advanced filtration technology.",
    icon: "flaticon-drop-leaf-table",
  },
  {
    title: "5 Steps Filtration",
    description:
      "Multi-stage filtration system effectively removes all contaminants.",
    icon: "flaticon-water",
  },
  {
    title: "Chlorine Free",
    description:
      "Our purification process eliminates chlorine, making water healthier.",
    icon: "flaticon-teardrop",
  },
  {
    title: "Quality Certified",
    description:
      "Certified water purification meeting the highest safety standards.",
    icon: "flaticon-water-barrel",
  },
];

const TrustedWaterSection = () => {
  return (
    <div className="bg-gradient-to-r from-100 mt-80 via-indigo-200 to-purple-300 py-16 px-6 md:px-16 lg:px-32 pt-40">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          A Trusted Name In <br />Water Purification Industry
        </h1>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
          >
            {/* Icon - Increased Size */}
            <div className="text-blue-500 text-7xl mb-6">
              <i className={feature.icon}></i>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-indigo-600">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-700 mt-3">{feature.description}</p>

            {/* Read More Link */}
            <div className="mt-5" >
              <a
                href="/services"
                className="text-blue-600 font-medium hover:text-blue-700 transition"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedWaterSection;
