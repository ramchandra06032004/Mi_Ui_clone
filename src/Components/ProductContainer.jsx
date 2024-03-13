import React from "react";
import "../Styles/ProductContainer.css";
const ProductContainer = ({ image, review, name, price }) => {
  return (
    <div className="productContainer">
      <img src={image} alt="" />

      <p className="review">{review}</p>
      <p className="name">{name}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default ProductContainer;
