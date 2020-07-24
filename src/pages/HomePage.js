import React, { useEffect } from "react";

import { skills } from "../components/skillData";
import { projects } from "../components/tempData";
import { expData } from "../components/expData";

import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import HexIntro from "../components/HexIntro";

import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <HexIntro />
      <div className="">
        <div className="my-24 bg-gray-200 py-16">
          <div className="bg-primary-800 text-white md:text-3xl text-xl p-4 rounded-r-full font-mono md:w-4/12 w-11/12 my-12">
            <h1 className="ml-12">My Skills</h1>
          </div>
          <div className="flex sm:flex-row flex-col justify-around my-20 text-gray-800">
            {skills.map((skill, key) => (
              <SkillCard key={key} skill={skill} />
            ))}
          </div>
        </div>

        <div className="">
          <div className="bg-primary-700 text-white md:text-3xl text-xl p-4 rounded-r-full font-mono md:w-4/12 w-11/12 my-12">
            <h1 className="ml-12">Recent Projects</h1>
          </div>
          <div className="flex flex-row lg:mx-32 sm:mx-12 mx-4 flex-wrap text-gray-800">
            {projects
              .filter((item) => item.highlight === true)
              .map((project, key) => (
                <ProjectCard key={key} project={project} />
              ))}
          </div>
          <div className="text-right lg:mx-32 my-4">
            <button className="text-xl font-mono text-gray-600 hover:text-primary-900">
              <Link to="/project-list">see more projects...</Link>
            </button>
          </div>
        </div>

        <div className="mt-24 bg-gray-200 py-16">
          <div className="bg-primary-600 text-white md:text-3xl text-xl p-4 rounded-r-full font-mono md:w-4/12 w-11/12 my-12">
            <h1 className="ml-12">Experience</h1>
          </div>
          <div className="lg:mx-64 sm:mx-12 mx-4">
            {expData.map((exp, key) => (
              <div className="flex flex-col my-12" key={key}>
                <div className="flex flex-row text-2xl text-primary-700 font-serif font-semibold">
                  {exp.company + " // " + exp.title}
                </div>
                <div className="sm:mx-12 my-3 text-gray-800">{exp.date}</div>
                <div className="sm:mx-12 leading-loose text-gray-800">
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
