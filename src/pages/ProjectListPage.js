import React, { useEffect } from "react";
import { projects } from "../components/tempData";

import ProjectList from "../components/ProjectList";

const ProjectListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col text-primary-900 min-h-screen">
        <div className="w-full flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-12 w-full gap-8">
                <div className="col-start-2 col-span-10">
                  <h1 className="text-primary-800 text-3xl font-semibold">
                    Projects
                  </h1>
                  <div className="my-8">
                    <ProjectList projects={projects} />
                  </div>
                </div>
              </div>
        </div>
    </div>
  );
};

export default ProjectListPage;
