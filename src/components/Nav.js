import React from "react";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <Fade clear>
            <div className="absolute t-0 w-full grid grid-cols-12">
                <div className="flex flex-row col-start-2 col-span-10 py-4 justify-between items-center">
                    <Link to="/">
                        <div className="w-24 h-24">
                            <img src="/images/squidli_name.png" alt="squidli logo"/>
                        </div>
                    </Link>
                    <h4 className="md:text-xl text-gray-600 text-md">
                        <Link to="/project-list">Projects</Link>
                    </h4>
                </div>
            </div>
        </Fade>
    )
}