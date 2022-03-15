import { ClipboardCheckIcon, ClockIcon, IdentificationIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade';

const UnBurden = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 justify-center bg-primary-800 py-20 my-8 w-full">         
        <div className="col-start-2 col-span-10 flex md:flex-row md:justify-between items-center flex-col-reverse gap-4">
          <Fade left>
              <div className="flex flex-col md:w-1/2 w-full">
                  <div className="flex flex-col gap-6">
                      <h2 className="md:text-4xl text-3xl font-bold text-white">
                          UnBurden
                      </h2>
                      <p className="md:text-lg text-base leading-loose text-gray-200">
                      iOS application to improve management and deconfliction around shared packing and planning aspects of camping. 
                      </p>
                      <div className="flex flex-row gap-4 flex-wrap md:text-base text-sm">
                          <div className=" border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                              Figma
                          </div>
                          <div className=" border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                              Swift
                          </div>
                          <div className="border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                              UX / UI
                          </div>
                          <div className="border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                              Market Research
                          </div>
                          <div className="border-2 border-gray-200 py-1 px-4 rounded-full text-gray-200">
                              Firebase
                          </div>
                      </div>
                      <div className="flex flex-row gap-4 md:text-lg text-base leading-loose text-gray-200">
                          <h3>Role:</h3>
                          <strong>Swift Developer</strong>
                      </div>
                  </div>
              </div>
          </Fade>
          <Fade right>
              <div className="flex flex-row flex-wrap md:justify-end justify-center items-center">
                  <img className="max-w-xs" src="/images/PreviewProjects/UnBurden.png" alt="Preview of Unburden packing application"/>
              </div>
          </Fade>
        </div> 
      </div>
        {/* Highlights */}
        <Fade>
        <div className="max-w-full overflow-hidden grid grid-cols-12 pt-12 pb-20">
            <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
                <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
                <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">The Highlights</h2>
            </div>
            <div className="col-start-2 col-span-10 grid md:grid-cols-4 grid-cols-1 gap-12 max-w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2 items-center">
                    <IdentificationIcon className="w-6" />
                    <h3 className="text-lg font-bold">Background:</h3>
                    </div>
                    <p className="leading-loose">
                        Identified a gap in existing hiking and packing applications where users are not provided packing suggestions and are not able to share their packing lists with other campers.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 items-center">
                    <QuestionMarkCircleIcon className="w-6" />
                    <h3 className="text-lg font-bold">Problem:</h3>
                    </div>
                    <p className="leading-loose">
                        Campers, individually and as a group, need to manage items to pack to reduce duplicated or forgotten items.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2 items-center">
                    <ClipboardCheckIcon className="w-6" />
                    <h3 className="text-lg font-bold">Exit Goal:</h3>
                    </div>
                    <p className="leading-loose">
                        Build a mobile application to share packing management and provide suggestions to reduce likelyhood of forgetting common camping items.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 items-center">
                    <ClockIcon className="w-6" />
                    <h3 className="text-lg font-bold">Timeline:</h3>
                    </div>
                    <p className="leading-loose">
                        6 weeks
                    </p>
                </div>
            </div>
        </div>
        </Fade>
        {/* End of Highlights */}
        {/* Features */}
      <Fade>
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">The Features</h2>
          </div>
          <div className="col-start-2 col-span-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">User Accounts:</h3>
              <p className="leading-loose">
                Provide a Login/Signup page to ensure users have an account where they can access their personal trip data throughout sessions.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Organize a Trip:</h3>
              <p className="leading-loose">
                Users can fill out information for their upcoming camping trip for later reference. They also can add items to a list for packing and track what they have already packed.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Share a Trip:</h3>
              <p className="leading-loose">
                Multiple Users can view and edit data for a single trip. Individuals will be able to join a trip to share their information.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Packing Suggestions:</h3>
              <p className="leading-loose">
                Users will be provided with a list of suggested items to pack. They will be able to filter this list by categories like Hygiene or Tools.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Plan Multiple Trips:</h3>
              <p className="leading-loose">
                Users will be able to create more than one trip. They will be able to have more than one current plan and easily navigate between them.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Mark Items as Packed:</h3>
              <p className="leading-loose">
                Once an item is added to a users list for a trip, they will have the ability to pack or unpack the item. 
              </p>
            </div>
            <section className="flex flex-col items-center justify-center col-span-1 md:col-span-2">
              <img src="/images/Unburden/unburden_tasks.jpg" alt="Miro Map of Tasks" className="w-full"/>
            </section>
          </div>
        </div>
      </Fade>
      {/* Features */}
        {/* High Fidelity */}
        <Fade>
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12 bg-gray-200">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">High-Fi Prototype</h2>
          </div>
          <section className="col-start-2 col-span-10 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Figma Prototype:</h3>
              <p className="leading-loose">
                After a short round of hand drawn sketches of potential layouts, I moved on to high fidelity prototyping. In this prototype, I experimented with potential ways to visualize suggestions for items to pack when users add items to their list. Once the language for a single user's pack was created, I used that as a foundation of how to visually represent other camper's items.
              </p>
            </div>
            <img src="/images/UnBurden/UnBurden-Hi-Fi-Prototype.png" alt="Frames of High fidelity Prototype"/>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">The Code:</h3>
              <p className="leading-loose">
                The application for unBurden was made using xCode and Swift, thus native to iOs. With a goal of having multiple trips and shared trips, tracking state throughout the application would had to be planned into the inital designs and backend. The nested usage of navigation controls, tab controls, and story boards meant that this project was hefty to plan. As a result, I broke down each feature into smaller components like just visualizing a list before adding the ability to add items to the list. 
              </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <button className="bg-primary-700 text-white hover:shadow-2xl cursor-pointer py-4 px-12 text-center rounded-lg hover:bg-secondary-700 my-4 font-semibold text-lg">
                  <a
                  href="https://github.com/cmp5987/unBurden"
                >
                  View unBurden Code
                </a>
              </button>
            </div>
          </section>
        </div>
      </Fade>
      {/* End of of High Fidelity */}
    {/* Challanges Faced */}
    <Fade >
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12 bg-gray-200">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">The Challenges</h2>
          </div>
          <div className="col-start-2 col-span-10 grid grid-cols-2 md:grid-cols-3 gap-12">
            <section className="flex flex-col items-center justify-center col-span-2 md:col-span-1">
              <img src="/images/UnBurden/firestore.png" alt="diagram for uploading images to firestore"/>
            </section>
            <section className="flex flex-col gap-6 col-span-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Navigation Complexity:</h3>
                <p className="leading-loose">
                    Early implementation of authentication lead to quickly needing to learn how to develop multiple navigation grpahs of storyboards and how to pass storyboard references to handle navigation. This complexity came from needing to ensure that a 'back' button would step backwards in the current navigation and login state.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Firebase Complexity:</h3>
                <p className="leading-loose">
                    Supporting shared data during the initial implementation on Firebase lead to more complicated classes, request, and data. The blur between resources and documentation for cloud and real-time databases made researching issues a challenge.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Fade>
      {/* End of Challenges Faced */}
    {/* Lessons Learned */}
    <Fade >
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">Lessons Learned</h2>
          </div>
          <div className="col-start-2 col-span-10 grid grid-cols-2 md:grid-cols-3 gap-12">
            <section className="flex flex-col items-center justify-center col-span-2 md:col-span-1">
              <img src="/images/UnBurden/scope_creep.png" alt="unDraw vector for scope creep"/>
            </section>
            <section className="flex flex-col gap-6 col-span-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Scope Creep:</h3>
                <p className="leading-loose">
                    While the overall application was successful, the timelines were cutting it close as I ended up adding more features than initially planned. I ended up adding an ability to remove items, delete trips, filter suggestions, and preserve user state. Ideally, spending more time planning for the implementation of features would have provided guidance of what features and capabilities should be explored in the initial MVP. 
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Iterative Development:</h3>
                <p className="leading-loose">
                   Attempting to handle shared data from the start of the project lead to increased user data and navigation complexity. This became a blocker as key functions had to be postponed for implementation of firebase and user authentication.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Fade>
      {/* End of Lessons Learned */}
    </div>
  );
};

export default UnBurden;
