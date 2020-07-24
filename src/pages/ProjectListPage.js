import React, { useEffect } from "react";
import { projects } from "../components/tempData";

import ProjectList from "../components/ProjectList";

const ProjectListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="">
        <div className="sm:mx-32 mx-8 my-12">
          <h1 className="text-primary-800 font-mono text-3xl font-semibold">
            Projects
          </h1>
        </div>
        <div className="my-8">
          <ProjectList projects={projects} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectListPage;
