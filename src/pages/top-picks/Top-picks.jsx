import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  {
    src: "/furniture/TP1.png",
    alt: "Beds",
    title: "Beds",
  },
  {
    src: "/furniture/TP2.png",
    alt: "Sofa",
    title: "Sofa",
  },
  {
    src: "/furniture/TP3.png",
    alt: "Dining & Kitchen",
    title: "Dining & Kitchen",
  },
  {
    src: "/furniture/TP4.jpeg",
    alt: "Almirah",
    title: "Almirah",
  },
  {
    src: "/furniture/TP5.jpeg",
    alt: "Table",
    title: "Table",
  },
  {
    src: "/furniture/TP6.jpeg",
    alt: "Study & Office",
    title: "Study & Office",
  },
  {
    src: "/furniture/TP7.jpeg",
    alt: "Furnishing",
    title: "Furnishing",
  },
  {
    src: "/furniture/TP8.jpeg",
    alt: "Outdoor",
    title: "Outdoor",
  },
  {
    src: "/furniture/TP9.jpeg",
    alt: "Modular",
    title: "Modular",
  },
  {
    src: "/furniture/TP10.jpeg",
    alt: "Wooden",
    title: "Wooden",
  },
];

const UpdatePicksSection = () => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const navigate = useNavigate();
  const handleSubCategoryClick = (category) => {
    navigate(`/products/${encodeURIComponent(category)}`);
  };
  useEffect(() => {
    let scrollAmount = 0;
    const speed = 1.5;
    let animationFrameId;

    // const scroll = () => {
    //   if (scrollContainerRef.current && isScrolling) {
    //     const container = scrollContainerRef.current;
    //     scrollAmount += speed;
    //     container.scrollLeft = scrollAmount;
    //     if (scrollAmount >= container.scrollWidth - container.clientWidth) {
    //       scrollAmount = 0;
    //     }
    //   }
    //   animationFrameId = requestAnimationFrame(scroll);
    // };

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
            onClick={() => handleSubCategoryClick(cat.title)}

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
