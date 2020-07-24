import React, { useEffect } from "react";

import { projects } from "../components/tempData";

import ColumnProject from "../components/ColumnProject";
import RowProject from "../components/RowProject";

const ProjectPage = ({ match }) => {
  const name = match.params.name;
  const project = projects.find((project) => project.name === name);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-row mb-12">
      <div className="xl:mx-64 lg:mx-32 mx-4">
        <h1 className="text-4xl text-primary-800 font-mono mt-12 font-semibold">
          {project.title}
        </h1>

        <div className="flex flex-row flex-wrap mb-12">
          {project.tags.map((tag, key) => (
            <div className="mr-4 text-tertiary-700 text-base">{tag}</div>
          ))}
        </div>

        {project.components.map((component, ckey) => (
          <div className="my-12">
            {component.type === "column" && (
              <ColumnProject component={component} />
            )}

            {component.type === "row" && <RowProject component={component} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
