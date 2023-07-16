import React from "react";
import slider1 from "../images/shop/slider3.JPG";
import slider2 from "../images/shop/product4.jpg";
import slider3 from "../images/shop/slider3.JPG";
import slider4 from "../images/shop/slider4.JPG";
import { Slider } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./shopslider.css";

function ShopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={slider1} alt="Slider Image 1" />
      </div>
      <div>
        <img src={slider2} alt="Slider Image 2" />
      </div>
      <div>
        <img src={slider3} alt="Slider Image 3" />
      </div>
      <div>
        <img src={slider4} alt="Slider Image 4" />
      </div>
    </Slider>
  );
}

export default ShopSlider;
