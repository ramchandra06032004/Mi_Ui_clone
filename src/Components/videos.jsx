import React from "react";
import "../Styles/videos.css";
import VideoCard from "./VideoCard.jsx";

const videos = ({ data }) => {
  return (
    <div className="videoContainer">
      {data.map((item, indx) => (
        <VideoCard name={item.name} key={indx} image={item.image} />
      ))}
    </div>
  );
};

export default videos;
