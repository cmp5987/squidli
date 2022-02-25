import React from "react";
import Slideshow from "../components/Slideshow";

const ColumnProject = ({ component }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl text-gray-800 mb-4">{component.title}</h2>

      {component.details.map((detail, dkey) => (
        <p className="leading-loose my-4" key={dkey}>
          {detail}
        </p>
      ))}

      {component.subdetails.map((sd, sdkey) => (
        <div key={sdkey} className="my-2">
          <h4 className="text-lg py-2">{sd.title}</h4>
          <p className="text-base leading-loose">{sd.details}</p>
          <ol className="list-decimal mx-8">
            {sd.list &&
              sd.list.map((li, likey) => (
                <li key={likey} className="my-2">
                  {li}
                </li>
              ))}
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
          <img alt={component.name} src={"/images/" + component.images} />
        </div>
      )}

      {component.link && (
        <div className="flex flex-col justify-center items-center mt-8 mb-12">
          <a
            href={component.link}
            className="bg-primary-800 text-white hover:shadow-2xl cursor-pointer py-4 px-12 sm:w-1/3 w-2/3 text-center rounded-full hover:bg-secondary-700 text-lg font-bold"
          >
            {"Explore the " + component.title}
          </a>
        </div>
      )}
    </div>
  );
};
export default ColumnProject;
