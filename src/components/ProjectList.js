import React from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectList = ({ projects = [] }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {projects.map((project, key) => (
          <ProjectCard key={key} project={project} />
        ))}
      </div>
    </>
  );
};
export default ProjectList;
