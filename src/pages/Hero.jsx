'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Image Arrays
const sliderImages = [
  '/Home/slide1.png',
  '/Home/slide2.png',
  '/Home/slide3.png',
  '/Home/slide4.png',
];

const sideImages = [
  '/Home/sideimg1.png',
  '/Home/sideimg2.png',
];

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row p-4">
      {/* Main Slider Section */}
      <div className="w-full md:w-2/3">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-auto"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Side Images Section - Visible only on medium+ screens */}
      <div className="w-full md:w-1/3 hidden md:flex flex-col justify-center items-center space-y-4">
        {sideImages.map((sideImage, index) => (
          <div key={index} className="w-full h-auto">
            <img
              src={sideImage}
              alt={`Side Image ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
