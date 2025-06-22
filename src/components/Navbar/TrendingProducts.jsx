import { useEffect, useState } from "react";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          console.log("Erro getting data");
        }
        const data = await res.json();
        console.log(data);

        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  // if (loading)
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <p className="text-gray-600">Loading products...</p>
  //     </div>
  //   );
  return (
    <div className=" px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Trending Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-square">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/80 rounded-full px-2 py-1 text-xs font-medium">
                {product.rating} ★
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900 line-clamp-1">
                  {product.title}
                </h3>
                <span className="font-bold text-blue-600">
                  ${product.price}
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-2">{product.brand}</p>

              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {product.description}
              </p>

              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
