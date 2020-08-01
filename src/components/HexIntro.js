import React from "react";

const HexIntro = () => {
  return (
    /*
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="lg:w-1/2 md:w-6/10 w-11/12">
        <object
          className="w-full h-auto"
          type="image/svg+xml"
          data="./images/HexIntro.svg"
        >
          Your browser does not support SVG
        </object>
      </div>
      <div className="md:absolute flex justify-center md:mt-48 lg:mr-32 md:mr-20 mt-8">
        <div className="">
          <button className="md:px-12 px-16 py-2 rounded-lg bg-primary-200 text-primary-800 md:text-base text-sm font-semibold shadow hover:shadow-2xl font-mono hover:bg-secondary-800 hover:text-primary-200">
            <a href="/images/Resume_Fall_2020.pdf" download>
              download resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
    */
    <div className="flex flex-row h-8/10">
      <div className="flex sm:flex-row flex-col sm:mt-8 lg:mx-48 md:mx-24 sm:mx-12 items-center justify-center">
        <img
          className="md:w-1/3 w-1/2 flex-shrink-0"
          alt="Three Hexes vertically aligned"
          src="/images/Three_Hex.svg"
        ></img>
        <div className="flex flex-col sm:ml-12 justify-center px-4">
          <h1 className="font-mono sm:text-5xl text-3xl text-primary-700 font-bold">
            Hello!
          </h1>
          <p className="leading-loose my-4 font-serif sm:text-lg text-base">
            I’m Catie Poggioli, senior at Rochester Institute of Technology
            majoring in Human Centered Computing with a concentration in Front
            End Development and Natural Language Processing.
          </p>
          <button className="bg-primary-800 text-white hover:shadow-2xl cursor-pointer p-2 px-12 text-center rounded-full hover:bg-secondary-700 my-4 text-base font-mono lg:w-3/5">
            <a href="/images/Catherine_Poggioli_Resume.pdf" download>
              download resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HexIntro;
