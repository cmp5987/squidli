import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="p-4 border-gray-300 border-b-2 z-10">
    <div className="flex flex-row justify-between items-center md:mx-16">
      <div id="site-logo" className="flex flex-row">
        <div id="site-icon" className="md:w-12 md:h-12 w-6 h-6">
          <img alt="site icon of a squid" src="/images/SQUIDICON.png"></img>
        </div>
        <div
          id="site-name"
          className="font-mono font-hairline md:text-5xl px-2 text-secondary-600 text-2xl"
        >
          <Link to="/">Squidli</Link>
        </div>
      </div>
      <div id="menu">
        <div
          id="project-nav"
          className="md:text-2xl font-serif font-hairline text-gray-600 text-md"
        >
          <Link to="/project-list">projects</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
