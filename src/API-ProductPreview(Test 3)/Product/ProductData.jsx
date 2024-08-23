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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 ">

      <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg max-w-[700px] mx-auto border-[1px] border-black">

        {loading ? (
          <div className="text-center">
            <p className="text-gray-500 animate-pulse">Loading...</p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl text-center font-semibold text-gray-800 mb-4">
              {product.title}
            </h1>

            <img src={product.thumbnail} alt={product.title} width={200} height={100} className=" object-cover text-center mb-10" />

            <p className="text-gray-600 mb-4  font-semibold text-2xl">
              Price: ${product.price}
            </p>

            <p className="text-gray-600 mb-6">
              <span className="text-gray-600 font-semibold text-2xl">Description: </span>
              {product.description}
            </p>
          </div>
        )}

      </div>

      <div className="flex justify-between w-full max-w-sm mt-4">
        <ProductButton
          onClick={Previous}
          buttonText={"Previous"}
          className=" border-2 bg-gray-500 text-white font-medium py-2 px-4 mr-[5rem] rounded shadow-md hover:bg-red-300 transition duration-300"
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
