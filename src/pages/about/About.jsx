import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { SidebarContext } from "../../hooks/SidebarContext";
import PersonalProfile from "./components/PersonalProfile";
import TechnicalSkills from "./components/TechnicalSkills";
import AcademinEducation from "./components/AcademinEducation";

export default function About() {
  const sidebar = {
    sectionName: "PERSONAL_CANVAS",
    title: "About Me",
    subTitle: "Evan Rafa Radya Alifian",
    description:
      "Profile summary, core technical competencies, and formal academic background.",
  };
  const [skills, setSkills] = useState({});
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    async function getSkill() {
      await fetch("/data.json")
        .then((res) => res.json())
        .then((res) => {
          setSkills(res.technical_skills);
          setAcademics(res.academic_education);
        });
    }

    getSkill()
  }, []);

  return (
    <SidebarContext value={sidebar}>
      <MainLayout>
        <PersonalProfile />
        <TechnicalSkills {...skills} />
        <AcademinEducation academics={academics} />
      </MainLayout>
    </SidebarContext>
  );
}
