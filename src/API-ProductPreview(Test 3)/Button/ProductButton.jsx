import React from "react";

const ProductButton = ({ buttonText, onClick, className }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>{buttonText}</button>
    </div>
  );
};

export default ProductButton;
