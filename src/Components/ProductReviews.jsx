import React from "react";
import ProductContainer from "../Components/ProductContainer.jsx";
import "../Styles/ProductReviews.css";

const ProductReviews = ({ data }) => {
  return (
    <div className="pReviewsContainer">
      {data.map((item, indx) => (
        <ProductContainer
          image={item.image}
          review={item.review}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
