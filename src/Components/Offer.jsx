import React from "react";
import "../Styles/Offer.css";

const Offer = ({ src, index, link }) => {
  return (
    <div className="offerContainer">
      <img src={src} alt={`${index} St offer`} />
    </div>
  );
};

export default Offer;
