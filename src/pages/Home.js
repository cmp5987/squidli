import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import IntroBanner from "../components/IntroBanner";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";

export default function Home(){

    return (
        <>
            <IntroBanner />
            <SkillsSection />
            <ProjectSection />
            <ExperienceSection />
        </>
    );
}