import React from "react";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

export default function ProjectSection(){
    return(
        <>
            <div className="grid grid-cols-12 min-h-screen justify-center bg-white py-20">         
                <div className="col-start-2 col-span-10 flex md:flex-row justify-between items-center flex-col gap-4">
                    <Fade left>
                        <div className="flex flex-row flex-wrap md:justify-end justify-center items-center">
                            <img className="max-w-xs" src="/images/PreviewProjects/UnBurden.png" alt="Preview of unBurden App"/>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="flex flex-col md:w-1/2 w-full">
                            <div className="flex flex-col gap-6">
                                <h2 className="md:text-4xl text-3xl font-bold text-primary-700">
                                    unBurden
                                </h2>
                                <p className="md:text-lg text-base leading-loose text-gray-900">
                                    iOS application to improve management and deconfliction around shared packing and planning aspects of camping. 
                                </p>
                                <div className="flex flex-row gap-4 flex-wrap md:text-base text-sm">
                                    <div className="border-2 border-gray-500 py-1 px-4 rounded-full text-gray-900">
                                        Figma
                                    </div>
                                    <div className="border-2 border-gray-500 py-1 px-4 rounded-full text-gray-900">
                                        Swift
                                    </div>
                                    <div className="border-2 border-gray-500 py-1 px-4 rounded-full text-gray-900">
                                        Mobile
                                    </div>
                                    <div className="border-2 border-gray-500 py-1 px-4 rounded-full text-gray-900">
                                        UX / UI
                                    </div>
                                    <div className="border-2 border-gray-500 py-1 px-4 rounded-full text-gray-900">
                                        Firebase
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-start items-center">
                                    <button className="bg-primary-700 text-white hover:shadow-2xl cursor-pointer py-4 px-12 text-center rounded-lg hover:bg-secondary-700 my-4 font-semibold text-lg">
                                        <Link to="/project/unburden">
                                            View Case Study
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="grid grid-cols-12 min-h-screen justify-center bg-primary-800 py-20">         
                <div className="col-start-2 col-span-10 flex md:flex-row md:justify-between items-center flex-col-reverse gap-4">
                    <Fade left>
                        <div className="flex flex-col md:w-1/2 w-full">
                            <div className="flex flex-col gap-6">
                                <h2 className="md:text-4xl text-3xl font-bold text-white">
                                    Not Your Maid
                                </h2>
                                <p className="md:text-lg text-base leading-loose text-gray-200">
                                    Simplifies organization of house tasking by providing a platform where users can delegate household labor and negotiate assigned tasking. 
                                </p>
                                <div className="flex flex-row gap-4 flex-wrap md:text-base text-sm">
                                    <div className=" border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                                        Figma
                                    </div>
                                    <div className=" border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                                        Mobile
                                    </div>
                                    <div className="border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                                        UX / UI 
                                    </div>
                                    <div className="border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                                        User Testing
                                    </div>
                                    <div className="border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                                        InVision
                                    </div>
                                    <div className="border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                                        Illustrator
                                    </div>
                                    <div className="border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                                        Prototyping
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-start items-center">
                                    <button className="bg-primary-700 text-white hover:shadow-2xl cursor-pointer py-4 px-12 text-center rounded-lg hover:bg-secondary-700 my-4 font-semibold text-lg">
                                        <Link to="/projects/NotYourMaid">
                                            View Case Study
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="flex flex-row flex-wrap md:justify-end justify-center items-center">
                            <img className="max-w-xs" src="/images/PreviewProjects/NotYourMaid.png" alt="Preview of Not Your Maid App"/>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}