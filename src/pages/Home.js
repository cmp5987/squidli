import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import IntroBanner from "../components/IntroBanner";
import Nav from "../components/Nav";
import NavFooter from "../components/NavFooter";
import SkillsSection from "../components/SkillsSection";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

export default function Home(){

    return (
        <>
            <Nav/>
            <IntroBanner />
            <SkillsSection />
            <div className="flex flex-col min-h-screen w-full justify-center bg-primary-800 py-20">         
                <div className="grid grid-cols-12 gap-12 w-full">
                    <div className="col-start-2 col-span-9 flex md:flex-row flex-col-reverse gap-4">
                        <Fade left>
                            <div className="flex flex-col md:w-1/2 w-full">
                                <div className="flex flex-col gap-8">
                                    <h2 className="text-4xl font-bold text-white">
                                        Not Your Maid
                                    </h2>
                                    <p className="text-lg leading-loose text-gray-200">
                                        Simplifies organization of house tasking by providing a platform where users can delegate household labor and negotiate assigned tasking. 
                                    </p>
                                    <div className="flex flex-row gap-4 flex-wrap">
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
                                    <div>
                                        <button className="bg-primary-700 text-white hover:shadow-2xl cursor-pointer py-4 px-12 text-center rounded-lg hover:bg-secondary-700 my-4 font-semibold text-lg">
                                            <Link to="/project/not-your-maid">
                                                View Case Study
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="flex flex-row flex-wrap md:w-1/2 w-full justify-end items-center">
                                <img className="max-w-xs" src="/images/PreviewProjects/NotYourMaid.png" alt="Preview image of Not Your Maid App"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="flex flex-col min-h-screen w-full justify-center bg-white py-20">         
                <div className="grid grid-cols-12 gap-12 w-full">
                    <div className="col-start-2 col-span-9 flex md:flex-row flex-col-reverse gap-4">
                        <Fade left>
                            <div className="flex flex-row flex-wrap md:w-1/2 w-full justify-start items-center">
                                <img className="max-w-xs" src="/images/PreviewProjects/UnBurden.png" alt="Preview images of unBurden App"/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="flex flex-col md:w-1/2 w-full">
                                <div className="flex flex-col gap-8">
                                    <h2 className="text-4xl font-bold text-primary-700">
                                        unBurden
                                    </h2>
                                    <p className="text-lg leading-loose text-gray-900">
                                        iOS application to improve management and deconfliction around shared packing and planning aspects of camping. 
                                    </p>
                                    <div className="flex flex-row gap-4 flex-wrap">
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
                                    <div>
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
            </div>
            <ExperienceSection />
            <NavFooter/>
        </>
    );
}