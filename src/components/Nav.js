import React from "react";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <Fade clear>
            <div className="w-full grid grid-cols-12 pt-8">
                <div className="flex flex-row col-start-2 col-span-10 py-4 justify-between items-center">
                    <Link to="/">
                        <div className="sm:w-24 sm:h-24 w-16 h-16">
                            <img src="/images/squidli_name.png" alt="squidli logo"/>
                        </div>
                    </Link>
                    <h4 className="md:text-xl text-gray-600 text-md">
                        <Link to="/">Home</Link>
                    </h4>
                </div>
            </div>
        </Fade>
    )
}