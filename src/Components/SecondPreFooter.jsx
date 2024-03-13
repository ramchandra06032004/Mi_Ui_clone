import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "../Styles/SecondPreFooter.css";

const SecondPreFooter = () => {
  return (
    <div>
      <div className="SecondPreFooterMainContainer ">
        <div className="center FirstChild">
          <div className="head">LET'S STAY IN TOUCH</div>
          <div>Get Update On Sales specials and more</div>
        </div>
        <div className="center secondChild">
          <input type="text" placeholder="Enter Email Address" />
          <div>Thanks ,You are on our email list foe special offers</div>
        </div>
        <div className="center FirstChild">
          <div className="head">FOLLOW MI</div>
          <div>We want to hear from you</div>
        </div>
        <div className="followIcon center">
          <FaFacebook />
          <FaYoutube />
          <BsInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default SecondPreFooter;
