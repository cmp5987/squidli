import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slideshow = ({ images = [] }) => {
  return (
    <Carousel className="">
      {images.map((image, key) => (
        <div key={key}>
          <img
            className=""
            alt={"carousel for " + image}
            src={"/images/" + image}
          />
        </div>
      ))}
    </Carousel>
  );
};
export default Slideshow;
