import React from "react";
import "../Styles/NavOptionCard.css";

const NavOptionCard = ({ image, price, name }) => {
  return (
    <div className="NavOptionCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default NavOptionCard;
