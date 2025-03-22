import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
const ProductServices = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://experthometutorsacademy.com/getProducts.php');
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
  
        const data = await response.json();
        console.log('API Response:', data);
  
        if (data.categories && Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          throw new Error('Unexpected data format. Categories not found.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCategories();
  }, []);
  

  return (
    <div>
      <Navbar/>
       <div className="max-w-screen-lg mx-auto p-6">
      
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Product Services</h1>
        <p className="text-lg text-gray-600 mt-4">Exceptional Services for Your Home and Office Needs</p>
      </header>

      {["Product Design", "Custom Craftsmanship", "Innovation and Technology", "Customer-Centric Approach"].map((title, index) => (
        <section key={index} className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 mt-4">
            {index === 0
              ? "Our expert designers offer a wide range of customized furniture solutions to suit your personal style and space."
              : index === 1
              ? "Every piece of furniture we create is crafted with the utmost attention to detail."
              : index === 2
              ? "We leverage cutting-edge technology in furniture manufacturing to ensure precision and efficiency."
              : "Your satisfaction is our top priority."}
          </p>
        </section>
      ))}

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Categories and Subcategories</h2>
        <p className="text-lg text-gray-600 mt-4">Explore our wide range of categories to find products that suit your needs.</p>

        {loading ? (
          <p className="text-lg text-gray-600 mt-4">Loading categories...</p>
        ) : error ? (
          <p className="text-lg text-red-500 mt-4">Error: {error}</p>
        ) : categories.length > 0 ? (
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-800">Subcategories</th>
                </tr>
              </thead>
              <tbody>
  {categories.map((category) => (
    <tr key={category.id}>
      <td className="border border-gray-300 px-4 py-2 text-gray-700 font-medium">{category.name || 'Unknown'}</td>
      <td className="border border-gray-300 px-4 py-2 text-gray-600">
        {category.subCategories && category.subCategories.length > 0 ? (
          <ul className="list-disc list-inside">
            {category.subCategories.map((subCategory, index) => (
              <li key={index}>{subCategory.name || 'Unnamed'}</li>
            ))}
          </ul>
        ) : (
          <span>No subcategories available</span>
        )}
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        ) : (
          <p className="text-lg text-gray-600 mt-4">No categories available.</p>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Commitment to Sustainability</h2>
        <p className="text-lg text-gray-600 mt-4">
          We take pride in adopting sustainable practices, including using eco-friendly materials and minimizing waste. Our goal is to create furniture that not only serves your needs but also respects the environment.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Lifetime Value</h2>
        <p className="text-lg text-gray-600 mt-4">
          Our products are designed to stand the test of time. With durable materials and timeless designs, we ensure that your investment remains valuable for years to come.
        </p>
      </section>
     
    </div>
     <Footer/>
    </div>
   
  );
};

export default ProductServices;
