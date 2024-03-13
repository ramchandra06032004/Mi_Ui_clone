import React from "react";
import "../Styles/Offers.css";
import Offer from "./Offer.jsx";
const Offers = ({ data }) => {
  return (
    <div className="OfferRow">
      {data &&
        data.map((item, indx) => (
          <Offer
            key={item.image}
            index={indx}
            src={item.image}
            link={item.url}
          />
        ))}
    </div>
  );
};

export default Offers;
