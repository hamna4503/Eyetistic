import React from "react";
import backvideo from "../videos/loginBackground.mp4";

function Video() {
  return (
    <video muted autoPlay loop id="myVideo">
      <source src={backvideo} type="video/mp4" />
    </video>

    // <video src={backvideo} muted autoplay loop id="myVideo" type="video/mp4" />
  );
}

export default Video;
