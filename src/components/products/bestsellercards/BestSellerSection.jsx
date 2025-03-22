import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const bestSellers = [
  { image: '/bestsellerof/1.png', title: 'Best Seller 1', paragraph: 'Top trending product 1', link: '/products?subcategory=Double+Bed&sort=1' },
  { image: '/bestsellerof/2.png', title: 'Best Seller 2', paragraph: 'Top trending product 2', link: '/products?subcategory=Dining+Table&sort=1' },
  { image: '/bestsellerof/3.png', title: 'Best Seller 3', paragraph: 'Top trending product 3', link: '/products?subcategory=Living+Sofa&sort=1' },
  { image: '/bestsellerof/4.png', title: 'Best Seller 4', paragraph: 'Top trending product 4', link: '/products?subcategory=Carving+Sofa&sort=1' },
  { image: '/bestsellerof/5.png', title: 'Best Seller 5', paragraph: 'Top trending product 5', link: '/products?subcategory=Dressing+Table&sort=1' },
  { image: '/bestsellerof/6.png', title: 'Best Seller 6', paragraph: 'Top trending product 6', link: '/products?subcategory=Wardrobe+Almirah&sort=1' },
  { image: '/bestsellerof/7.png', title: 'Best Seller 7', paragraph: 'Top trending product 7', link: '/products/Table/Wooden%20Site%20Table?sort=1' },
  { image: '/bestsellerof/8.png', title: 'Best Seller 8', paragraph: 'Top trending product 8', link: '/products?subcategory=Room+Sofa&sort=1' }
];

const BestSellerSection = () => {
  return (
    <section className="w-full h-auto py-12 px-6 bg-gray-50">
      {/* Heading */}
      <div className="text-start mb-8 px-4">
        <h2 className="text-2xl font-semibold mb-2">Best-Sellers of the Season</h2>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="relative p-4"
      >
        {bestSellers.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.paragraph}</p>
                <a href={item.link} className="text-blue-500 mt-2 inline-block">
                  View Details
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestSellerSection;
