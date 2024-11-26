import React from "react";
import ReactPlayer from "react-player";
import "./video.css";
import video from "../../assets/Untitled.mov";
export const Video = () => {
  return (
    <div>
      <ReactPlayer
        url={video}
        loop={true}
        muted={true}
        playing={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};
