import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductProvider";
import ProductButton from "../Button/ProductButton";

const ProductData = () => {
  const { product, setProduct, loading, setLoading, productId, setProductId } =
    useContext(ProductContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [productId]);

  function Next() {
    setProductId((prev) => prev + 1);
  }
  function Previous() {
    setProductId((prev) => prev - 1);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 border-black border-[1px]">

      <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg max-w-sm mx-auto">

        {loading ? (
          <div className="text-center">
            <p className="text-gray-500 animate-pulse">Loading...</p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-14">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-6">
              <span className="text-gray-600 font-semibold text-2xl">Description: </span>
              {product.description}
            </p>
            <p className="text-gray-600 mb-6  font-semibold text-2xl">
              Price: ${product.price}
            </p>
          </div>
        )}
        
      </div>

      <div className="flex justify-between w-full max-w-sm mt-8">
        <ProductButton
          onClick={Previous}
          buttonText={"Previous"}
          className=" border-2 bg-gray-500 text-white font-medium py-2 px-4 rounded shadow-md hover:bg-red-300 transition duration-300"
        />
        <ProductButton
          onClick={Next}
          buttonText={"Next"}
          className="border-2 bg-gray-500 text-white font-medium py-2 px-4 rounded shadow-md hover:bg-red-300 transition duration-300"
        />
      </div>
    </main>
  );
};

export default ProductData;
