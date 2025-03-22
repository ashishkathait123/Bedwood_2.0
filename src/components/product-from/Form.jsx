import { useState, useRef } from "react";

const ProductForm = ({ onClose }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    salePrice: "",
    color: "",
    productSku: "",
    stock: "",
    category: "",
    subCategory: ""
  });

  const imageRef = useRef(null);
  const galleryRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setProduct((prev) => ({ ...prev, image: URL.createObjectURL(e.target.files[0]) }));
    }
  };

  const handleGalleryChange = (e) => {
    if (e.target.files.length > 0) {
      const images = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setProduct((prev) => ({ ...prev, galleryImages: images }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...product,
      image: imageRef.current?.files[0] ? URL.createObjectURL(imageRef.current.files[0]) : null,
      galleryImages: galleryRef.current?.files.length > 0
        ? Array.from(galleryRef.current.files).map((file) => URL.createObjectURL(file))
        : []
    };

    const storedProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
    const updatedProducts = [...storedProducts, newProduct];

    localStorage.setItem("allProducts", JSON.stringify(updatedProducts));

    alert("Product added successfully!");
    setProduct({
      name: "",
      description: "",
      price: "",
      salePrice: "",
      color: "",
      productSku: "",
      stock: "",
      category: "",
      subCategory: ""
    });

    if (imageRef.current) imageRef.current.value = "";
    if (galleryRef.current) galleryRef.current.value = "";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="relative bg-white p-6 shadow-lg rounded-lg max-w-4xl w-full mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition"
        >
          ✖
        </button>

        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Add New Product</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />

            <textarea name="description" value={product.description} onChange={handleChange} placeholder="Product Description" className="w-full p-3 border rounded-lg h-24 resize-none focus:ring-2 focus:ring-blue-400"></textarea>

            <input ref={imageRef} type="file" accept="image/*" onChange={handleImageChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />

            <input ref={galleryRef} type="file" accept="image/*" multiple onChange={handleGalleryChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />

            <input type="number" name="salePrice" value={product.salePrice} onChange={handleChange} placeholder="Sale Price" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />

            <input type="text" name="color" value={product.color} onChange={handleChange} placeholder="Color" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />

            <input type="text" name="productSku" value={product.productSku} onChange={handleChange} placeholder="Product SKU" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />

            <input type="number" name="stock" value={product.stock} onChange={handleChange} placeholder="Stock Quantity" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />

            <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />

            <input type="text" name="subCategory" value={product.subCategory} onChange={handleChange} placeholder="Sub Category" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          </div>

          {/* Full-width button */}
          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
