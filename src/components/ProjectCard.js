import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link to={"/project/" + project.name}>
      <div className="flex flex-row hover:shadow-2xl rounded-lg my-2 shadow cursor-pointer">
        <div className="flex-shrink-0 sm:32 sm:flex flex-col justify-center items-center sm:p-8 bg-gray-100 hiden">
          <img
            className="rounded sm:w-32 w-0"
            alt={"icon for " + project.name}
            src={"/images/" + project.icon}
          />
        </div>
        <div className="mx-8">
          <h3 className="text-xl my-4">{project.title}</h3>
          <p className="leading-loose">
            {project.description.substring(0, 200)}...
          </p>
          <div className="flex flex-row my-4 font-semibold flex-wrap">
            {project.tags.map((tag, key) => (
              <div
                className="mr-2 py-1 px-2 bg-gray-200 rounded-lg shadow my-1"
                key={key}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
