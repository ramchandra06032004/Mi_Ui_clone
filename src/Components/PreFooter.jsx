import React from "react";
import "../Styles/PreFooter.css";
import { GoIssueReopened } from "react-icons/go";
import { IoMapSharp } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
const PreFooter = () => {
  return (
    <div className="mainContainer">
      <div className="preFooterElementContainer">
        <GoIssueReopened />
        <div className="content">
          <p className="heading">Hassle-Free Replacement</p>
          <p className="info">10 Day Easy Replacement Policy on Mi.Com</p>
        </div>
      </div>
      <div className="preFooterElementContainer">
        <IoShieldCheckmark />
        <div className="content">
          <p className="heading">100% Secure Payment</p>
          <p className="info">We Support Card ,Wallets , EMI & COD</p>
        </div>
      </div>
      <div className="preFooterElementContainer">
        <IoMapSharp />
        <div className="content">
          <p className="heading">Vast Service Networkt</p>
          <p className="info">1000 Mi Service Across 600 Cities</p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
