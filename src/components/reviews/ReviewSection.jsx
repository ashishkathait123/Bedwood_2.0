'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Card } from './Review'; // You can import it if needed, but I'll define it directly below.

const sampleReviews = [
  { name: 'John Doe', review: 'This podcast is amazing!', rating: 3 },
  { name: 'Jane Smith', review: 'A must-listen for true crime enthusiasts!', rating: 4 },
  { name: 'Emily Johnson', review: 'Highly recommend!', rating: 5 },
  { name: 'Michael Brown', review: 'Fantastic podcast with great storytelling.', rating: 4 },
  { name: 'Laura White', review: 'An engaging and enjoyable listen.', rating: 5 },
];

// Define the Card component directly in this file (optional - you can also import it)
const Card = ({ name, review, rating }) => (
  <div className="bg-gray-200 rounded-lg md:mx-12 m-auto flex flex-col justify-center text-center items-center min-w-[270px] md:min-w-[370px] max-w-xs md:max-w-md aspect-[4/3] flex-shrink-0 w-auto">
    <p className="font-bold uppercase">{name}</p>
    <p className="md:text-lg text-sm font-light italic text-gray-700">{review}</p>
    <div className="flex items-center justify-center space-x-2 mt-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`text-yellow-500 w-4 h-4 ${index < rating ? 'block' : 'hidden'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
      ))}
    </div>
  </div>
);

const ReviewSection = () => {
  return (
    <section className="bg-white px-4 py-12 md:py-24">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-semibold text-black text-center md:text-3xl text-lg leading-none uppercase max-w-2xl mx-auto mb-12">
          Their Words, Our Pride
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-full"
        >
          {sampleReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card
                name={review.name}
                review={review.review}
                rating={review.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSection;
