import React from "react";

const HexIntro = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="lg:w-1/2 w-11/12">
        <object
          className="w-full h-auto"
          type="image/svg+xml"
          data="./images/HexIntro.svg"
        >
          Your browser does not support SVG
        </object>
      </div>
      <div className="absolute flex justify-center lg:mt-40 lg:mr-32 mt-24 mr-16">
        <div className="">
          <button className="md:px-8 sm:px-2 p-1 rounded-lg bg-primary-200 text-primary-800 md:text-base text-xs font-semibold shadow hover:shadow-2xl font-mono hover:bg-secondary-800 hover:text-primary-200">
            <a href="/images/Resume_Fall_2020.pdf" download>
              download resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HexIntro;
