import React from "react";
import Slideshow from "../components/Slideshow";

const ColumnProject = ({ component }) => {
  return (
    <div className="font-serif">
      <h2 className="text-2xl text-gray-800 mb-4">{component.title}</h2>

      {component.details.map((detail, dkey) => (
        <p className="leading-loose my-4">{detail}</p>
      ))}

      {component.subdetails.map((sd, sdkey) => (
        <div className="my-2">
          <h4 className="text-lg py-2">{sd.title}</h4>
          <p className="text-base leading-loose">{sd.details}</p>
          <ol className="list-decimal mx-8">
            {sd.list &&
              sd.list.map((li, likey) => <li className="my-2">{li}</li>)}
          </ol>
        </div>
      ))}

      {component.images.length > 1 && (
        <div className="py-2 w-0 sm:w-full sm:block hidden ">
          <Slideshow images={component.images} />
        </div>
      )}
      {component.images.length === 1 && (
        <div className="py-8">
          <img src={"./images/" + component.images} />
        </div>
      )}

      {component.link && (
        <div className="flex flex-col justify-center items-center py-4">
          <a
            href={component.link}
            className="bg-primary-800 text-white hover:shadow-2xl cursor-pointer p-2 sm:w-1/3 w-1/2 text-center rounded-full hover:bg-secondary-700"
          >
            {"Explore the " + component.title}
          </a>
        </div>
      )}
    </div>
  );
};
export default ColumnProject;
