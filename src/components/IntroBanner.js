import React from "react";
import Fade from 'react-reveal/Fade';

export default function IntroBanner(){
    return(
        <div className="flex flex-col text-primary-900 h-8/10">
            <div className="w-full flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-start-2 col-span-10 flex flex-row flex-wrap text-4xl font-bold gap-4">
                        <h1 className="text-secondary-900">
                            Hello! I'm
                        </h1>
                        <h1 className="text-primary-700">
                            Catie Poggioli
                        </h1>
                    </div>
                    <p className="md:text-2xl text-xl  col-start-2 col-span-10">
                            I develop user-friendly interfaces to simplify complex workflows.
                    </p>
                    <Fade left cascade>
                        <div className="col-start-2 col-span-10 grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-4">
                            <div className="flex flex-col flex-wrap border-t-2 border-gray-300 py-2">
                                <h4 className=" font-bold">5 Years of Experience</h4>
                                <p className="text-gray-600">
                                    Applying ux concepts and developing awesome products
                                </p>
                            </div>
                            <div className="flex flex-col flex-wrap border-t-2 border-gray-300 py-2">
                                <h4 className=" font-bold">Full stack developer</h4>
                                <p className="text-gray-600">
                                    at New Relic.
                                </p>
                            </div>
                            <div className="flex flex-col flex-wrap border-t-2 border-gray-300 py-2">
                                <h4 className=" font-bold">D&#38;D Player and DM </h4>
                                <p className="text-gray-600">
                                    since 2012
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}