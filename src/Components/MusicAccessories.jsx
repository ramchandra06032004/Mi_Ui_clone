import React from "react";
import "../Styles/MusicAccessories.css";
import HotAccessoriesCard from "../Components/hotAccessoriesCard.jsx";
import { FaArrowRight } from "react-icons/fa";

const MusicAccessories = ({
  hotAccessoriesMusicCover,
  hotAccessoriesMusic,
}) => {
  return (
    <div className="MusicAccessoriesContainer">
      <div className="hotAccessoriesCover">
        <img src={hotAccessoriesMusicCover} alt="" />
      </div>
      <div className="cardContainer">
        {hotAccessoriesMusic.map((item, indx) => (
          <HotAccessoriesCard
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
        <div className="Browse">
          Browse <br />
          More <FaArrowRight />{" "}
        </div>
      </div>
    </div>
  );
};

export default MusicAccessories;
