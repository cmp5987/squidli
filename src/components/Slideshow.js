import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slideshow = ({ images = [] }) => {
  return (
    <Carousel className="">
      {images.map((image, key) => (
        <div>
          <img className="" src={"/images/" + image} />
        </div>
      ))}
    </Carousel>
  );
};
export default Slideshow;
