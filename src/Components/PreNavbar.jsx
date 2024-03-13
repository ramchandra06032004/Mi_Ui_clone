import React from "react";
import "../Styles/PreNavbar.css";
const PreNavbar = () => {
  return (
    <div className="PreNavbar">
      <div>
        <a href="Mi.india">Mi India </a> <span>|</span>
        <a href=""> Get MI Store App</a> <span>|</span>
        <a href=""> Online Help</a> <span>|</span>
        <a href=""> Retail Store</a>
      </div>
      <div>
        <a href="">Sign In</a> <span>|</span>
        <a href="">Sign Up</a> <span>|</span>
        <a href="">
          {" "}
          <i class="fa-solid fa-cart-plus"></i>Cart(0)
        </a>
      </div>
    </div>
  );
};

export default PreNavbar;
