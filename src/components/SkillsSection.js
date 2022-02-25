import React from "react";
import Fade from 'react-reveal/Fade';
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function SkillsSection(){
    return(
        <div className="flex flex-col min-h-screen w-full justify-center bg-gray-200 py-20">         
            <div className="grid grid-cols-12">
                <div className=" col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap pb-12">
                    <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
                    <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">Skills & Technologies</h2>
                </div>
                <Fade top cascade>
                <div className=" col-start-2 col-span-9 grid md:grid-cols-3 grid-cols-1 gap-12">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold">UX Design</h3>
                        <p>
                            Advocating and defining the way the end user will interact with the product.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    User Personas / User Stories
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Usability Testing / User Research
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Design Thinking / Roadmapping
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold">UI Design</h3>
                        <p>
                            Building a truly habit-forming product that encourages discovery and learning.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Wire-Framing
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Prototyping
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Figma / Sketch
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold">Front End Development</h3>
                        <p>
                            Putting concepts into code to transition ideas into usable products.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    React / Flutter
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Javascript / JQuery
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    HTML5 / CSS3
                                </span>
                            </div>
                        </div>
                    </div>
                    <div  className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold">Research / Visualization</h3>
                        <p>
                            Gathering and interperting user behaviors to improve designs.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Matomo / Google Analytics
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Plotly / Pandas / d3.js
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold">iOS and Android</h3>
                        <p>
                            Understanding and implementing platform specific design standards. 
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Swift
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Kotlin
                                </span>
                            </div>
                        </div>
                    </div>
                    <div  className="flex flex-col gap-6">
                        <h3 className="text-lg font-bold">Back-End Development</h3>
                        <p>
                            Developing APIs that keep speed and user desired utility in mind.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Flask / Python
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    Docker / Kubernetes
                                </span>
                            </div>
                            <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-primary-700 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-gray-900">
                                    MongoDB / PostgreSQL / Firebase
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}