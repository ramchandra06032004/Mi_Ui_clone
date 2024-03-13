import React from "react";
import "../Styles/StarProduct.css";
const StarProduct = ({ data }) => {
  return (
    <div className="starProductContainer">
      <div>
        <img src={data[0].image} alt="" />
      </div>
      <div>
        <img src={data[1].image} alt="" />
        <img src={data[2].image} alt="" />
        <img src={data[3].image} alt="" />
      </div>
    </div>
  );
};

export default StarProduct;
