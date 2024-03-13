import React from "react";
import "../Styles/StarProductMenu.css";
import { Link } from "react-router-dom";

const StarProductMenu = () => {
  return (
    <div className="hotProductMenuContainer">
      <Link className="hotProductMenu" to="/music">
        Music
      </Link>
      <Link className="hotProductMenu" to="/SmartDevice">
        Smart Device
      </Link>
      <Link className="hotProductMenu" to="/Home">
        Home
      </Link>
      <Link className="hotProductMenu" to="/Lifestyle">
        Lifestyle
      </Link>
      <Link className="hotProductMenu" to="/MobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default StarProductMenu;
