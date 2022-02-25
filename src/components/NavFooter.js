import React from "react";
import Fade from 'react-reveal/Fade';

export default function NavFooter(){
    return(
        <Fade clear>
            <div className="absolute t-0 w-full grid grid-cols-12">
                <div className="flex flex-row col-start-2 col-span-10 py-4 justify-between items-center text-gray-600 text-base">
                    <h4 >@Catie Poggioli 2022</h4>
                    <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                        <a href = "mailto:catie@squidli.com">
                            Email
                        </a>
                        <a href="https://github.com/cmp5987">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/catherine-poggioli-122239119/">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    )
}