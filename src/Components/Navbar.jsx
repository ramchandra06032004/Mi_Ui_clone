import React from "react";
import "../Styles/Navbar.css";
import data from "../Data/data.json";

const logo = data.logo;
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="/">
          <img id="logoImage" src={logo} alt="Not" />
        </a>
      </div>

      <a className="navLinks" href="/miPhones">
        Mi Phons
      </a>
      <a className="navLinks" href="/redmiphons">
        {" "}
        Redmi Phones
      </a>
      <a className="navLinks" href="/tv">
        TV
      </a>
      <a className="navLinks" href="/laptops">
        Laptops
      </a>
      <a className="navLinks" href="/lifestyle">
        Lifestyle & Fitness
      </a>
      <a className="navLinks" href="/home">
        Home
      </a>
      <div className="input">
        <input type="text" placeholder="Search" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;
