import React from "react";

const SkillCard = ({ skill = [] }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <div>
        <object
          type="image/svg+xml"
          className="w-16 md:w-32"
          data={"/images/" + skill.image}
        >
          Your browser does not support SVG
        </object>
      </div>
      <h1 className="text-center text-xl font-mono my-2 font-semibold">
        {skill.title}
      </h1>
      {skill.skills.map((skillname, key) => (
        <div key={key} className="text-center mb-1">
          {skillname}
        </div>
      ))}
    </div>
  );
};
export default SkillCard;
