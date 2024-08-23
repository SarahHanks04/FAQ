import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState(1);

  const valueToBePassed = {
    product,
    setProduct,
    loading,
    setLoading,
    productId,
    setProductId,
  }
  return (
    <ProductContext.Provider
      value={valueToBePassed}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
