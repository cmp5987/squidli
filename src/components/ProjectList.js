import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectList = ({ projects = [] }) => {
  return (
    <>
      <div className="flex flex-row lg:mx-32 sm:mx-12 mx-4 flex-wrap">
        {projects.map((project, key) => (
          <ProjectCard key={key} project={project} />
        ))}
      </div>
    </>
  );
};
export default ProjectList;
