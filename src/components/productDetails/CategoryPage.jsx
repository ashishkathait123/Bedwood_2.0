import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import categories from '../data/categories'; // Move categories array to a separate file

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // Find the selected category
  const category = categories.find((cat) => cat.name === decodeURIComponent(categoryName));

  if (!category) {
    return <h2 className="text-center text-xl text-gray-700 mt-10">Category Not Found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800">{category.name}</h1>
      <img src={category.imgSrc} alt={category.name} className="w-full h-64 object-cover rounded-lg mt-4 shadow-md" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {category.subCategories.map((sub, index) => (
          <button
            key={index}
            onClick={() => navigate(`/products/${encodeURIComponent(sub)}`)}
            className="bg-white border border-gray-300 text-gray-700 rounded-md p-4 text-center shadow-sm hover:bg-orange-100 transition"
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
