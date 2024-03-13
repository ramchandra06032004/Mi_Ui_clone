import React from "react";
import { FaPlay } from "react-icons/fa";
import "../Styles/videoCard.css";
const VideoCard = ({ name, image, key }) => {
  return (
    <div className="videoCard" style={{ backgroundImage: `url(${image})` }}>
      <div className="button">
        <FaPlay />
      </div>
      <p className="name" key={key}>
        {name}
      </p>
    </div>
  );
};

export default VideoCard;
