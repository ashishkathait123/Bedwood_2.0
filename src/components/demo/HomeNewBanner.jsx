import { PhoneCallIcon } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeNewBanner = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[400px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/Home/bg.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute top-10 left-6 z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">ROHUB</h1>
              <p className="text-xl md:text-2xl mt-2 font-bold font-serif bg-slate-800">
                Shreeansh Aqua Solutions
              </p>
            </div>
            <div className="absolute left-auto top-28 md:right-8 m-2 border-4 md:border-8 border-gray-300 rounded-lg shadow-lg">
              <img
                src="/Home/main.png"
                className="h-auto md:h-[700px] border border-gray-400 rounded-lg"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/Home/project11.png')" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute top-10 left-6 z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">Fresh Water</h1>
              <p className="text-xl md:text-sm mt-2 font-bold font-serif bg-slate-800">
                Safe and Healthy Drinking Water
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/Home/p44.png')" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute top-10 left-6 z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">Pure Water</h1>
              <p className="text-xl md:text-sm mt-2 font-bold font-serif bg-slate-800">
                Safe and Healthy Drinking Water
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/Home/p33.png')" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute top-10 left-6 z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">Industrial Water</h1>
              <p className="text-xl md:text-sm mt-2 font-bold font-serif bg-slate-800">
                Safe and Healthy Drinking Water
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/Home/p11.png')" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute top-10 left-6 z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">Home Water</h1>
              <p className="text-xl md:text-sm mt-2 font-bold font-serif bg-slate-800">
                Safe and Healthy Drinking Water
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/Home/p88.png')" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute top-10 left-6 z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold">All Services</h1>
              <p className="text-xl md:text-sm mt-2 font-bold font-serif bg-slate-800">
                Safe and Healthy Drinking Water
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    
     {/* Blue Boxes Section */}
     <div className="relative z-20 -mt-20 md:-mt-35 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: " Water Purifier",
              description: "RO HUB Provide the Sales and Services of all Domestic water purifier",
            },
            {
              title: "Commercial Purifier",
              description: "RO HUB Provide the Sales and Services of all Commercial water purifier",
            },
            {
              title: "Industrial Service",
              description: "RO HUB Provide the Sales and Services of all Brand Water Purifier",
            },
            {
              title: "Softner Service",
              description: "RO HUB Provide the Sales and Services of all Brand Water Purifier",
            },
            {
              title: "Domestic Purifie",
              description: "RO HUB Provide the Sales and Services of all Brand Water Purifier",
            },
            {
              title: "All Brand Service",
              description: "RO HUBProvide the Sales and Services of all Brand Water Purifier",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#26BAED] text-white p-14 rounded-bl-md shadow-md flex flex-col items-center text-center"
>
  <div className="text-4xl">✔</div>
  <h2 className="text-xl font-bold mt-2">{item.title}</h2>
  <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomeNewBanner;
