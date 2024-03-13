import React from "react";
import "../Styles/Seprater.css";
const Seprater = ({ text }) => {
  return (
    <div className="sepratre">
      <div className="line"></div>
      <p>{text}</p>
      <div className="line"></div>
    </div>
  );
};

export default Seprater;
