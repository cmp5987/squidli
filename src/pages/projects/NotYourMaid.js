import { ClipboardCheckIcon, ClockIcon, IdentificationIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Slideshow from "../../components/Slideshow";

const NotYourMaid = () => {
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
                      <div className="flex flex-row gap-4 md:text-lg text-base leading-loose text-gray-200">
                          <h3>Role:</h3>
                          <strong>User Experience Designer</strong>
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
                    Qualitative research revealed that participants felt household chores and communication are ranked as the highest cause of tension between college roommates.
                </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                  <QuestionMarkCircleIcon className="w-6" />
                  <h3 className="text-lg font-bold">Problem:</h3>
                </div>
                <p className="leading-loose">
                    College roommates need to communicate their household expectations and deadlines to reduce household tension and unhappiness.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <ClipboardCheckIcon className="w-6" />
                  <h3 className="text-lg font-bold">Exit Goal:</h3>
                </div>
                <p className="leading-loose">
                    Design a solution which college roommates feel would reduce their household tension.
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

      {/* Initial Research */}
      <Fade>
      <div className="max-w-full overflow-hidden grid grid-cols-12 py-12 bg-gray-200">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">Initial Research</h2>
          </div>
          <div className="col-start-2 col-span-10 grid grid-cols-2 md:grid-cols-3 gap-12 ">
            {/* Section 1 row 1 */}
            <section className="flex flex-col items-center justify-center col-span-2 md:col-span-1">
              <img src="/images/NotYourMaid/undraw_house_searching_re_stk8.svg" alt="House with Search Magnifying Glass" className="w-full"/>
            </section>
            {/* Section 2 row 1*/}
            <section className="flex flex-col gap-6 col-span-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Identifying the User:</h3>
                <p className="leading-loose">
                  NotYourMaid's target demographic is women and men ages 18-26 years old who co-habit apartments with similarly aged individuals.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Aesthetic Direction:</h3>
                <p className="leading-loose">
                  A mood board on <a href="https://www.pinterest.com/cmpoggioli/iste264-app-planning/">pinterest</a> was created for design inspiration of the NotYourMaid application. Designs should be simple and color should primarily be used to signify differences between users assigned to tasks.
                </p>
              </div>
            </section>
             {/* Section 3 row 2*/}
            <section className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">User Research:</h3>
                <p className="leading-loose">
                  Taking advantage of my location, I took to the streets of Rochester Institute of Technology to survey students to identify current pain points in co-habiting apartments. 
                  The initial survey consistend of twenty student participants, all which confirmed that they had roommates. Following the initial screening, the survey had several likert questions, several open ended questions, and ranking a list of household stressors.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Research Takeaways:</h3>
                <p className="leading-loose">
                  About 60% of students surveyed rated chores as their highest stressor. 6 of 20 of the students surveyed said they felt unhappy with their current roommates.
                </p>
                <p className="leading-loose">
                  Students responded that unequal chores, lack of recognition, and incomplete chores were points of tension.  One of the major complaints was about the messiness of shared spaces, specifically kitchens. 
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">User Personas:</h3>
                <p className="leading-loose">
                  Four personas were created to highlight themes across questionaire responses, such as failure to agree upon responsibilities and deadlines, issues recalling tasks, and issues with communication.
                </p>
              </div>
            </section>
            {/* Section 4 row 2*/}
            <section className="flex flex-col gap-6 col-span-2 justify-center">
                <Slideshow 
                  images={[
                    "/NotYourMaid/notyourmaid_persona3.jpg",
                    "/NotYourMaid/notyourmaid_persona4.jpg",
                    "/NotYourMaid/notyourmaid_persona1.jpg",
                    "/NotYourMaid/notyourmaid_persona2.jpg",
                  ]}
                />
            </section>
            {/* End of Section 3 row 2 */}
          </div>
      </div>
      </Fade>
      {/* End of Initial Research */}
      {/* Features */}
      <Fade>
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">The Features</h2>
          </div>
          <div className="col-start-2 col-span-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Task List:</h3>
              <p className="leading-loose">
                A view that allows users to preview names of upcoming tasks, deadlines, and who is assigned to them. Users will be able to interact with tasks to mark them as completed or start the process of creating new ones from this view.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Happiness Survey:</h3>
              <p className="leading-loose">
                A dislike for confrontation was often the cause of rising tensions between housemates but many stated they were unwilling to confront their roommates. A monthly survey provided by the site will provide awareness to housemates current happiness as well as sumarize recent workload to ensure recogninition.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Gamification:</h3>
              <p className="leading-loose">
                Users will be able to approve and recognize their housemates' efforts by providing ‘Kudos’ or ‘Hearts’ when a specific task is complete. Additionally, awards like ‘Deadline Streak’ can be maintained by successfully completing all tasks by their due date for weeks in a row.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Notification:</h3>
              <p className="leading-loose">
                Individuals that forget upcoming tasks, can be reminded via notification when the deadline specified is approaching.
              </p>
            </div>
            <section className="flex flex-col items-center justify-center col-span-1 md:col-span-2">
              <img src="/images/NotYourMaid/notyourmaid_tasks.jpg" alt="Miro Map of Tasks" className="w-full"/>
            </section>
          </div>
        </div>
      </Fade>
      {/* Features */}
      {/* First Iteration */}
      <Fade>
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12 bg-gray-200">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">Low-Fidelity Prototype</h2>
          </div>
          <section className="col-start-2 col-span-10 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Figma Prototype:</h3>
              <p className="leading-loose">
                In order to explore potential layout of features, I created a wireframe prototype that highlights some of the primary pages that will be used in the application: alerts, profile, tasks, and history. The prototype focuses on developing an organization to features for the application and how best to display or accept user interactions.
              </p>
            </div>
            <img src="/images/NotYourMaid/NotYourMaid-Low-Fi-Prototype.png" alt="Frames of Low fidelity Prototype"/>
            <div className="flex flex-col justify-center items-center">
              <button className="bg-primary-700 text-white hover:shadow-2xl cursor-pointer py-4 px-12 text-center rounded-lg hover:bg-secondary-700 my-4 font-semibold text-lg">
                  <a
                  href="https://www.figma.com/proto/8jy4YY3xB1HgidkPnG43BA/notyourmaid-Lo-Fi?node-id=14%3A470&scaling=min-zoom"
                >
                  View Low-Fi Prototype
                </a>
              </button>
            </div>
          </section>
        </div>
      </Fade>
      {/* End of of First Iteration */}
      {/* First Iteration of Testing */}
      <Fade >
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">Low-Fidelity Usability Testing</h2>
          </div>
          <div className="col-start-2 col-span-10 grid grid-cols-2 md:grid-cols-3 gap-12">
            <section className="flex flex-col gap-6 col-span-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Testing Procedures:</h3>
                <p className="leading-loose">
                  Tasks were completed using an Invision prototype, in person or with the help of google hangouts. Participants were asked to complete a series of tasks and observed. Afterwards, they were asked to rates how difficult they found it from a 1 to 5 (1 for little to no difficulty and a 5 for extreme difficulty).
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Testing Findings:</h3>
                <p className="leading-loose">
                  User tasks for leaving a current household and checking tasks due on a specific date were considered the easiest to complete. 
                  Users struggled the most with the current landing page(notifications page) as users expected to see the full list of tasks.
                  The wireframe style of elements made it difficult for users to identify what elements were actionable.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Lessons Learned:</h3>
                <p className="leading-loose">
                  Landing page should be the most commonly used view as an update page will confuse newer users.
                </p>
                <p className="leading-loose">
                  Future testing should randomize order of test to reduce the chance of novelty and infamiliarity leading to earlier tasks getting rated as higher.
                </p>
              </div>
            </section>
            <section className="flex flex-col items-center justify-center col-span-2 md:col-span-1">
              <img src="/images/NotYourMaid/undraw_user_flow_re_bvfx.svg" alt="unDraw vector for user flows"/>
            </section>
          </div>
        </div>
      </Fade>
      {/* End of First Iteration of Testing */}
      {/* High Fidelity */}
      <Fade>
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12 bg-gray-200">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">High-Fidelity Prototype</h2>
          </div>
          <section className="col-start-2 col-span-10 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Figma Prototype:</h3>
              <p className="leading-loose">
                I improved upon the initial low-fidelity prototype by changing the initial landing screen to the task list page. Additionally a mood board was created to develop a color scheme and color was used to help visualize the difference between users. Shadows were added to interactive elements as well as color to help signify actionable features.
              </p>
            </div>
            <img src="/images/NotYourMaid/NotYourMaid-High-Fi-Prototype.png" alt="Frames of High fidelity Prototype"/>
            <div className="flex flex-col justify-center items-center">
              <button className="bg-primary-700 text-white hover:shadow-2xl cursor-pointer py-4 px-12 text-center rounded-lg hover:bg-secondary-700 my-4 font-semibold text-lg">
                  <a
                  href="https://invis.io/UZ12HEF5SMV8"
                >
                  View High-Fi Prototype
                </a>
              </button>
            </div>
          </section>
        </div>
      </Fade>
      {/* End of of High Fidelity */}
      {/* Future Improvements */}
      <Fade >
        <div className="max-w-full overflow-hidden grid grid-cols-12 py-12">
          <div className="col-start-2 col-span-10 flex flex-row gap-4 items-center flex-wrap py-12">
              <img src="/images/HexIcon.svg" alt="Hexagon Icon" className="w-12 h-12"/>
              <h2 className="md:text-4xl text-2xl text-primary-700 font-semibold">Reflections</h2>
          </div>
          <div className="col-start-2 col-span-10 grid grid-cols-2 md:grid-cols-3 gap-12">
            <section className="flex flex-col items-center justify-center col-span-2 md:col-span-1">
              <img src="/images/NotYourMaid/undraw_book_lover_re_rwjy.svg" alt="unDraw vector for future learning"/>
            </section>
            <section className="flex flex-col gap-6 col-span-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Narrow the Scope:</h3>
                <p className="leading-loose">
                  The large array of initial features lead to less attention to the individual implementation of each section. In the future, feature based iterative design would help ensure that the application prioritizes frictionless interaction over unneeded features.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Reduce Actions on Views:</h3>
                <p className="leading-loose">
                  Users had a level of confusion when interacting with the application due to being able to perform multiple different actions on each page. In the future, I would narrow the potential actions performed on each page to reduce the cognitive complexity.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Iterate Before Commiting:</h3>
                <p className="leading-loose">
                  Rather than developing an entire application at once, I think small interactions and the language behind them would have been improved if I iterated on each component rather than the final application.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Fade>
      {/* Future Improvements */}
    </div>
  );
};

export default NotYourMaid;
