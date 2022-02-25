import React from "react";
import Fade from 'react-reveal/Fade';

export default function ExperienceSection(){
    return(
            <div className="grid grid-cols-12 min-h-screen py-20 gap-8">      
                    <div className=" col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap">
                        <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
                        <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">Experience</h2>
                    </div>   
                    <Fade left>
                        <div className="md:col-start-3 md:col-span-8 col-start-2 col-span-10">
                            <div className="flex flex-col gap-4">
                                <h3 className="md:text-2xl text-lg text-primary-700 font-bold">Expedition Technology // User Experience Specialist</h3>
                                <h4 className=" italic text-gray-600">
                                    May 2020 - Current
                                </h4>
                                <ol className="flex flex-col gap-4 text-sm">
                                    <li>Lead a team of twelve developers in implementing designs that 
                                    reduce user frustration and improve user learning and discovery.</li>
                                    <li>
                                    Implemented end-to-end features of a storefront style 
                                    repository of image and signal data with the use of <span className=" font-bold">React, 
                                    Javascript, TailwindCSS, SQLAlchemy, FastAPI and Python.</span>
                                    </li>
                                    <li>
                                    Advocated for needs of the machine learning community when 
                                    developing user workflows through a combination of research, 
                                    user personas, wireframing, and low-high fidelity prototyping 
                                    using <span className="font-bold">Sketch and Storybook</span>.   
                                    </li>
                                    <li>
                                    Improved reliability and security of code bases by writing unit
                                    tests and integration tests with <span className="font-bold">Jest, Cypress, and PyTest</span>. 
                                    </li>
                                    <li>
                                    Scoped out project requirements from project managers into
                                    agile stories with clearly defined exit criteria for developers.
                                    </li>
                                    <li>
                                    Deployed product releases with the use of <span className="font-bold">Docker and 
                                    Kubernetes</span> in test, pre-prod, and production environments. 
                                    </li>
                                    <li>
                                    Ensures best security practices when researching, designing,
                                    developing, and deploying tools encompassing <span className="font-bold">TS/SCI </span> data.
                                    </li>
                                </ol>
                            </div>
                        </div>  
                    </Fade>
                    <Fade right>
                        <div className="md:col-start-3 md:col-span-8 col-start-2 col-span-9">
                            <div className="flex flex-col gap-4">
                                <h3 className="md:text-2xl text-lg text-primary-700 font-bold">Galahad Group // Software Engineer</h3>
                                <h4 className=" italic text-gray-600">
                                    January 2019 - January 2020
                                </h4>
                                <ol className="flex flex-col gap-4 text-sm">
                                    <li>Assisted in the research and development of novel ways to 
                                    improve consumer workflows with NLP technologies. </li>
                                    <li>
                                    Developed and presented prototypes to clients that highlighted
                                    how ML solutions improve the user experience of client products.
                                    </li>
                                    <li>
                                    Leveraged NLP APIs like <span className="font-bold">Luis, Dialogflow, and Text to Speech</span> to
                                    create chatbots that automated the customer service experience.
                                    </li>
                                </ol>
                            </div>
                        </div>  
                    </Fade>  
                    <Fade left>
                        <div className="md:col-start-3 md:col-span-8 col-start-2 col-span-9">
                            <div className="flex flex-col gap-4">
                                <h3 className="md:text-2xl text-lg text-primary-700 font-bold">Thomson Reuters // Software Engineer Co-Op</h3>
                                <h4 className=" italic text-gray-600">
                                    May 2018 - January 2019
                                </h4>
                                <ol className="flex flex-col gap-4 text-sm">
                                    <li>Increased company productivity and sprint planning by creating
                                    internal planning dashboard using <span className="font-bold">JQuery, Angular and Node.js</span>.</li>
                                    <li>Collaborated with a small team to quickly execute new features
                                    and improvements into test and production environments. </li>
                                    <li>
                                    Researched internal sprint and release planning workflows of 
                                    scrum masters to identify new data visualizations.   
                                    </li>
                                </ol>
                            </div>
                        </div> 
                    </Fade>   
                    {/* <div className="col-span-10 flex flex-row justify-center">
                        <button className="bg-primary-700 text-white hover:shadow-2xl cursor-pointer py-4 px-12 text-center rounded-lg hover:bg-secondary-700 my-4 font-semibold text-lg">
                            <a href="/images/catherine_poggioli_resume_2022.pdf" download>
                                Download Resume (pdf)
                            </a>
                        </button>
                    </div> */}
            </div>
    )
}