import React from 'react';
import Card from './card'; // Import the Card component (renamed from EssentialCard)
import { useNavigate, Link } from "react-router-dom";

const EssentialsSection = () => {
  const essentials = [
    { image: '/homefurniture/1.jpg', title: 'Computer Desk', description: 'Comfortable Computer Desk', link: '/products?subcategory=Computer+Desk&sort=1' },
    { image: '/homefurniture/2.jpg', title: 'Double Bed', description: 'Comfortable Double Bed for your bedroom', link: '/products?subcategory=Double+Bed&sort=1' },
    { image: '/homefurniture/3.jpg', title: 'Living Sofa', description: 'Comfortable sofa for your living room', link: '/products?subcategory=Living+Sofa&sort=1' },
    { image: '/homefurniture/4.jpg', title: 'Wooden Almirah', description: 'A Wooden Almirah for your room', link: '/products?subcategory=Wooden+Almirah&sort=1' },
    { image: '/homefurniture/5.jpg', title: 'Sofa Cum Bed', description: 'Comfortable Sofa Cum Bed for your home', link: '/products?subcategory=Sofa+Cum+Bed&sort=1' },
    { image: '/homefurniture/6.jpg', title: 'Modern Sofa', description: 'Comfortable modern sofa for your living room', link: '/products?subcategory=Living+Sofa&sort=1' },
    { image: '/homefurniture/7.jpg', title: 'Dining Table', description: 'A Dining Table for your family', link: '/products?subcategory=Dining+Table&sort=1' },
    { image: '/homefurniture/8.jpg', title: 'Almirah', description: 'An Almirah for your accessories', link: '/products?subcategory=Wooden+Almirah&sort=1' }
  ];
    const navigate = useNavigate();
  
  const handleSubCategoryClick = (subCategory) => {
    navigate(`/products/${encodeURIComponent(subCategory)}`);
    
  };

  return (
    <section className="w-full py-12 px-6 bg-white">
      {/* Text Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Explore Essential Home Furniture</h2>
        <p className="text-lg text-gray-600">Design Your Home Decor, Your Way</p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
        onClick={handleSubCategoryClick}>
        {essentials.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default EssentialsSection;
