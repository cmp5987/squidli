import React from "react";
import Slideshow from "./Slideshow";

const RowProject = ({ component }) => {
  return (
    <div className="flex sm:flex-row flex-col font-serif">
      {component.images.length > 1 && (
        <div className="flex-shrink-0 sm:32 flex flex-col justify-center items-center mr-8 ">
          <Slideshow images={component.images} />
        </div>
      )}
      {component.images.length === 1 && (
        <div className="flex-shrink-0 sm:32 flex flex-col justify-center items-center m-8">
          <img
            className="rounded sm:w-32 w-0 hidden sm:block"
            src={"./images/" + component.images[0]}
          />
        </div>
      )}
      <div>
        <h2 className="text-2xl text-gray-800 mb-4">{component.title}</h2>

        {component.details.map((detail, dkey) => (
          <p className="leading-loose my-4">{detail}</p>
        ))}
      </div>
    </div>
  );
};
export default RowProject;
