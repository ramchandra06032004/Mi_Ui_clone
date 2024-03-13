import React from "react";
import "../Styles/BannerEnd.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const BannerEnd = ({ data }) => {
  return (
    <Carousel fade className="BannerContaiter">
      {data.map((item, indx) => (
        <Carousel.Item
          key={item.image}
          interval={1000}
          keyboard={true}
          id="banner"
        >
          <img
            src={item.image}
            alt={`${indx} data`}
            className="d-block w-100"
            id="BannerImage"
          />
          <Carousel.Caption className="caption">
            <p className="name"> {item.name}</p>
            <p className="discription">{item.description}</p>
            <p className="source">{item.source}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerEnd;
