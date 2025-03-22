import React from 'react';
import Card from './Card';
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    image: '/furniture/1.jpg',
    title: '',
    paragraph: '',
    link: '/products/Beds/Single%20Bed?sort=1',
  },
  {
    image: '/furniture/2.jpg',
    title: '',
    paragraph: '',
    link: '/products/Sofa/Living%20Sofa?sort=1',
  },
  {
    image: '/furniture/3.jpg',
    title: '',
    paragraph: '',
    link: '/products/Table/Dining%20Table?sort=1',
  },
  {
    image: '/furniture/4.jpg',
    title: '',
    paragraph: '',
    link: '/products/Sofa/Room%20Sofa?sort=1',
  },
  {
    image: '/furniture/5.jpg',
    title: '',
    paragraph: '',
    link: '/products/Sofa/Hotel%20Sofa?sort=1',
  },
  {
    image: '/furniture/6.jpg',
    title: '',
    paragraph: '',
    link: '/products/Almirah/Modular%20Almirah?sort=1',
  },
];

const BrandSection = () => {
  const navigate = useNavigate();

  const handleSubCategoryClick = (subCategory) => {
    navigate(`/products/${encodeURIComponent(subCategory)}`);
  };

  return (
    <section className="w-full h-auto py-12 px-6 bg-inherit">
      {/* Text Section */}
      <div className="md:text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          India&apos;s Finest Online Furniture Brand.
        </h2>
        <p className="md:text-lg text-gray-600 text-balance">
          Buy Furniture Online from our extensive collection of wooden furniture units to give your home an elegant touch.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-8xl mx-auto flex justify-center">
        {/* For small screens */}
        <div className="md:hidden grid grid-cols-2 gap-4 w-full">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
              link={card.link}
            />
          ))}
        </div>

        {/* For larger screens */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
