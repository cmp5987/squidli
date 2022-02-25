import React, { useEffect } from "react";

import { projects } from "../components/tempData";

import ColumnProject from "../components/ColumnProject";
import InlineSection from "../components/InlineSection";

const ProjectPage = ({ match }) => {
  const name = match.params.name;
  const project = projects.find((project) => project.name === name);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-screen w-full justify-center py-24">         
      <div className="grid grid-cols-12 gap-12 w-full">
        <div className="col-start-2 col-span-10">
          <div className=" border-gray-100 border-b-2">
            <h1 className="text-4xl text-primary-900 mt-12 font-semibold">
              {project.title}
            </h1>

            <div className="flex flex-row flex-wrap mt-2 sm:mb-8">
              {project.tags.map((tag, key) => (
                <div
                  key={key}
                  className="mr-2 py-1 px-2 my-1 bg-gray-200 rounded-lg shadow"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {project.components.map((component, ckey) => (
            <div className="my-4" key={ckey}>
              {component.type === "column" && (
                <ColumnProject component={component} />
              )}

              {component.type === "row" && (
                <InlineSection component={component} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
