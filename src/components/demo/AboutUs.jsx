import { Link } from "react-router-dom";
import React from "react";
import { Button } from "../ui/button";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src="/new/img-2.png"
            alt="Shreeansh Aqua Solutions"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shreeansh Aqua Solutions – Pure Water, Pure Trust
          </h2>
          <p className="text-lg mb-4">
            Welcome to Shreeansh Aqua Solutions, your trusted partner in RO systems,
            water purifiers, water softeners, and filtration plants. Based in Dehradun,
            Uttarakhand, we have been delivering top-quality water purification solutions
            for the last 15 years, ensuring clean, safe, and healthy water for homes,
            offices, and industries.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>✔ Domestic, commercial, and industrial RO systems</li>
            <li>✔ Water softeners for hard water treatment</li>
            <li>✔ AMC, sales, and service support</li>
            <li>✔ Custom water filtration solutions</li>
          </ul>
          <p className="text-lg mb-4">
            At Shreeansh Aqua Solutions, we don’t just sell products—we build
            long-term relationships based on trust, reliability, and excellence. Our
            expert team ensures seamless installation, maintenance, and after-sales
            support, making your water purification experience hassle-free.
          </p>
          <p className="text-lg mb-6">
            Join our growing list of satisfied customers and experience the purity of
            water with the purity of service.
          </p>
          <div className="flex justify-start">
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
