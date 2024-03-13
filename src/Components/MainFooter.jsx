import React from "react";
import "../Styles/MainFooter.css";
import { Link } from "react-router-dom";

const MainFooter = ({ data }) => {
  return (
    <div className="footer">
      <div className="FooterContainer">
        <div className="support">
          <h2>Support</h2>
          <div className="FooterElement">
            {data.support.map((item, indx) => (
              <Link key={indx} to={item.url} className="Link">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="support">
          <h2>Shop And Learn</h2>
          <div className="FooterElement">
            {data.shopAndLearn.map((item, indx) => (
              <Link key={indx} to={item.url} className="Link">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="support">
          <h2>Retail Store</h2>
          <div className="FooterElement">
            {data.retailStore.map((item, indx) => (
              <Link key={indx} to={item.url} className="Link">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="support">
          <h2>About US</h2>
          <div className="FooterElement">
            {data.aboutUS.map((item, indx) => (
              <Link key={indx} to={item.url} className="Link">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="support">
          <h2>Contact Us</h2>
          <div className="FooterElement">
            {data.contactUs.map((item, indx) => (
              <Link key={indx} to={item.url} className="Link">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="chat">
        <div className="chatWithAiBot">
          Chat With our virtual AI bot <br />
          (24/7 live agent support)
        </div>
        <button className="chatNow">Chat Now</button>
      </div>
    </div>
  );
};

export default MainFooter;
