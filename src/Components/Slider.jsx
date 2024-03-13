import React from "react";
import "../Styles/Slider.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item, indx) => (
        <Carousel.Item>
          <img
            key={indx}
            className="d-block w-100"
            src={item}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
