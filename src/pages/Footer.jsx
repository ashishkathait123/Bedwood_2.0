import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare, FaUserTie } from "react-icons/fa";
import CompanyAssociateForm from '@/components/form/assiociate';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="w-full md:px-24 px-4 py-6 bg-white border-t">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between text-sm text-gray-600 gap-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 w-full lg:w-auto">
          {/* Logo Section */}
          <a className="flex items-center space-x-3" href="">
            <img alt="Logo" loading="lazy" width="800" height="1000" decoding="async" data-nimg="1" className="h-24 w-auto" srcSet="/logo/bedlogo.png" src="/logo/bedlogo.png" style={{ color: 'transparent' }} />
          </a>

          {/* Links Section */}
          <div className="flex flex-wrap items-center gap-2 lg:gap-4 font-semibold">
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
            <div className="flex justify-start mt-4 gap-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700"><FaFacebook className="text-2xl" /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-700"><FaInstagramSquare className="text-2xl" /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900"><FaLinkedin className="text-2xl" /></a>
              <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900"><FaTwitterSquare className="text-2xl" /></a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="text-red-600 hover:text-red-800"><FaYoutubeSquare className="text-2xl" /></a>
            </div>
          </div>
        </div>

        {/* Associate Button Section */}
        <div className="flex flex-col items-end w-full lg:w-auto">
          <p className="text-lg lg:text-xl font-sans mb-4 lg:text-right">Become a Company Associate and join our journey to success!</p>
          <button className="flex items-center space-x-2 bg-black text-white p-2 rounded hover:bg-gray-700" onClick={openModal}>
            <FaUserTie className="text-xl" />
            <span>Join</span>
          </button>
        </div>
      </div>

      {/* Rights Section */}
      <div className="text-sm text-gray-500 text-center mt-6">© 2024 Bedwood Furnishing. All rights reserved.</div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 md:w-1/3 w-full">
            <button onClick={closeModal} className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl">×</button>
            <CompanyAssociateForm onClose={closeModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
