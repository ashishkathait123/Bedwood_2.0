import { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useParams, useNavigate } from "react-router-dom";

const MergedProductComponent = () => {
  const { id } = useParams();
  const [subcategory, setCategory] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleQuickView = (product) => {
    navigate('/productDetails', { state: { product } });
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      if(!id) return;
      
      try {
        const response = await fetch(`https://experthometutorsacademy.com/getProducts.php?limit=350`);
        const data = await response.json();
        const product = data.products.find((p) => String(p.id) === String(id));

        if (product) {
          setCategory(product.subcategory);
        } else {
          console.error("Product not found.");
          setIsError(true);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setIsError(true);
      }
    };

    fetchProductDetails();
  }, [id]);

  useEffect(() => {
    if (!subcategory) return;

    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(`https://experthometutorsacademy.com/getProducts.php?limit=350`);
        const data = await response.json();

        const filteredProducts = data.products.filter((p) => p.subcategory === subcategory && String(p.id) !== String(id));
        setRelatedProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [subcategory, id]);

  if (isLoading) {
    return (
      <div className="text-center w-full h-screen flex justify-center items-center">
        <ImSpinner2 className="animate-spin text-2xl" />
      </div>
    );
  }

  if (isError) {
    return <div className="text-center">Error fetching products!</div>;
  }

  return (
    <section className="pb-12 min-h-screen">
      <div className="text-center py-10">
        <h1 className="text-3xl font-semibold text-gray-800">Related Products</h1>
        <p className="mt-2 text-md text-gray-500">Browse similar products from this category</p>
      </div>

      <div className="py-10 px-2 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.length > 0 ? (
        relatedProducts.map((product) => (
          <div key={product.id} className="relative w-full h-[270px] overflow-hidden rounded-lg shadow-lg group">
            <a className="block w-full h-full" href={`/product/${product.id}`}>
              <div className="w-full h-full">
                <img 
                  src={product.image_url} 
                  alt={product.name} 
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={`/product/${product.id}`}>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors duration-200" aria-label={`Quick view ${product.name}`}>Quick View</button>
              </a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
              <h3 className="text-md font-normal text-white line-clamp-1 font-sans">{product.name}</h3>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">No related products found.</p>
      )}
    </div>
      </div>
    </section>
  );
};

export default MergedProductComponent;
