'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const collections = [
  { image: '/collections/1.png', title: '', paragraph: '', link: '/productlist?categoryId=67076494cb95d84fec71ff78' },
  { image: '/collections/2.png', title: '', paragraph: '', link: '/productlist?categoryId=670764abcb95d84fec71ff96' },
  { image: '/collections/3.png', title: '', paragraph: '', link: '/productlist?categoryId=67075e3299a97c3e8c6512f2' },
  { image: '/collections/4.png', title: '', paragraph: '', link: '/productlist?categoryId=670a3b24cb95d84fec72238b' },
  { image: '/collections/5.png', title: '', paragraph: '', link: '/productlist?categoryId=670a3b3bcb95d84fec7223be' },
  { image: '/collections/6.png', title: '', paragraph: '', link: '/productlist?categoryId=670a3b0ecb95d84fec72235b' },
  { image: '/collections/7.png', title: '', paragraph: '', link: '/productlist?categoryId=67075e3299a97c3e8c6512f2' },
  { image: '/collections/8.png', title: '', paragraph: '', link: '/productlist?categoryId=670a3e2ecb95d84fec722485' }
];

const CollectionsSection = () => {
  return (
    <section className="w-full h-auto py-12 px-6 bg-gray-80 z-40">
      {/* Text Section */}
      <div className="text-start mb-8">
        <h2 className="md:text-2xl text-xl font-semibold mb-2">New Collections</h2>
      </div>

      {/* Swiper with Autoplay */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,  // 3 seconds delay
          disableOnInteraction: false // keeps autoplay even after manual swipe
        }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="relative p-4"
      >
        {collections.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={item.link} className="block bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={`Collection ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {item.title && <h3 className="font-semibold text-lg">{item.title}</h3>}
                {item.paragraph && <p className="text-sm text-gray-600">{item.paragraph}</p>}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CollectionsSection;
