import React from "react";
import "../Styles/SubFooter.css";
import { FaRegCopyright } from "react-icons/fa";
const SubFooter = () => {
  return (
    <div className="subFooter">
      <FaRegCopyright />
      <span></span>
      2024 Ramchandra Mulik
    </div>
  );
};

export default SubFooter;
