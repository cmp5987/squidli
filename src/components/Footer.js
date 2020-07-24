import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800">
    <div className="md:w-1/4 sm:w-1/2 m-auto py-12">
      <h1 className="text-center text-2xl font-mono mb-8 font-bold text-gray-200">
        get in touch
      </h1>
      <div className="flex flex-row justify-around border-t-2 border-gray-600">
        <div className="bg-gray-300 rounded-full pt-2 px-2 pb-1 shadow hover:shadow-2xl mt-8 hover:bg-white">
          <button>
            <a href="https://github.com/cmp5987">
              <img src="./images/github.png"></img>
            </a>
          </button>
        </div>
        <div className="bg-gray-300 rounded-full pt-2 px-2 pb-1 shadow hover:shadow-2xl mt-8 hover:bg-white">
          <button>
            <a href="https://www.linkedin.com/in/catherine-poggioli-122239119/">
              <img src="./images/linkedin.png"></img>
            </a>
          </button>
        </div>
        {/*<div className="bg-gray-300 rounded-full pt-2 px-2 pb-1 shadow hover:shadow-2xl mt-8 hover:bg-white">
          <button>
            <img src="/images/mail.png"></img>
          </button>
        </div>
        */}
      </div>
    </div>
  </footer>
);

export default Footer;
