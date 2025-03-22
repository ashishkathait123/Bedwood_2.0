import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  {
    src: "https://api.bedwoodfurnishing.com/17285379219160.377031732726657.png",
    alt: "Beds",
    title: "Beds",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17345463077000.6334857882503226.png",
    alt: "Sofa",
    title: "Sofa",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17345460958320.7578627858783833.png",
    alt: "Dining & Kitchen",
    title: "Dining & Kitchen",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17287277048310.5448024423156492.jpeg",
    alt: "Almirah",
    title: "Almirah",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17287279053670.03130171516561253.jpeg",
    alt: "Table",
    title: "Table",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17287279570800.399965434336647.jpeg",
    alt: "Study & Office",
    title: "Study & Office",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17287279974490.4662144902459344.jpeg",
    alt: "Furnishing",
    title: "Furnishing",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17287280826920.2828515321593075.jpeg",
    alt: "Outdoor",
    title: "Outdoor",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17287281872670.45440272288296146.jpeg",
    alt: "Modular",
    title: "Modular",
  },
  {
    src: "https://api.bedwoodfurnishing.com/17287282372770.9811433838677206.jpeg",
    alt: "Wooden",
    title: "Wooden",
  },
];

const UpdatePicksSection = () => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    let scrollAmount = 0;
    const speed = 1.5;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainerRef.current && isScrolling) {
        const container = scrollContainerRef.current;
        scrollAmount += speed;
        container.scrollLeft = scrollAmount;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isScrolling]);

  const handleUserScroll = useCallback(() => {
    setIsScrolling(false);
    setTimeout(() => setIsScrolling(true), 3000);
  }, []);

  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Top Picks For You
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Impressive Collection for Your Dream Home
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 scroll-smooth"
        onMouseEnter={handleUserScroll}
        onScroll={handleUserScroll}
      >
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/products?category=${encodeURIComponent(cat.title)}`}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-full bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-2 border-gray-300">
              <img
                src={cat.src}
                alt={cat.alt}
                title={cat.title}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-2 text-center text-xs lg:text-base font-medium">
              {cat.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpdatePicksSection;
