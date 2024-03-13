import React from "react";
import "../Styles/MusicAccessoriesCard.css";
const hotAccessoriesCard = ({ name, price, image }) => {
  return (
    <div className="hotAccCard">
      <img src={image} alt="" />
      <p>{name}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default hotAccessoriesCard;
