import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="w-full md:px-24 px-4 py-6 bg-white border-t">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between text-sm text-gray-600 gap-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 w-full lg:w-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <a className="flex items-center space-x-3" href="">
              <img
                alt="Logo"
                loading="lazy"
                width="800"
                height="1000"
                decoding="async"
                data-nimg="1"
                className="h-24 w-auto"
                srcSet="/logo/bedlogo.png"
                src="/logo/bedlogo.png"
                style={{ color: 'transparent' }}
              />
            </a>
          </div>

          {/* Links Section */}
          <div className="flex flex-col w-full lg:w-auto">
            <div className="flex flex-wrap items-center gap-2 lg:gap-4 font-semibold">
              <Link to="/about-us" className="hover:underline">About us</Link>

              <span>|</span>
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              
              <span>|</span>
              <Link to="/licensing" className="hover:underline">Licensing</Link>

              <span>|</span>
              <Link to="/services" className="hover:underline">Product Services</Link>

            </div>

            {/* Social Media Section */}
            <div>
              {/* Social Media Links */}
              <div className="flex justify-start mt-4 gap-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61565700196739&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/bedwood_furnishing_/profilecard/?igsh=MTdodjc0NGN2emxyYg=="
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-500 hover:text-red-700"
                >
                  <FaInstagramSquare className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/bedwood-furnishing/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://x.com/BedwoodFurnish?t=U2xuHD4kyimLI-TsSpLe9A&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FaTwitterSquare className="text-2xl" />
                </a>
                <a
                  href="https://youtube.com/@bedwoodfurnishing?si=dIEgxhM_r2mJsqUp"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:text-red-800"
                >
                  <FaYoutubeSquare className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
             
              
            </div>
        {/* Rights Section */}
        <div className="text-sm text-gray-500 text-center lg:text-left">
          © 2024 Bedwood Furnishing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
