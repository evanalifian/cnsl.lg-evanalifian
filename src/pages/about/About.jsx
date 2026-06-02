import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { SidebarContext } from "../../hooks/SidebarContext";
import PersonalProfile from "./components/PersonalProfile";
import TechnicalSkills from "./components/TechnicalSkills";
import AcademinEducation from "./components/AcademinEducation";
import TechnicalSkillsLoading from "./components/TechnicalSkillsLoading";
import AcademinEducationLoading from "./components/AcademinEducationLoading";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getSkill() {
      await fetch("/data.json")
        .then((res) => res.json())
        .then((res) => {
          setSkills(res.technical_skills);
          setAcademics(res.academic_education);
          setLoading(false);
        });
    }

    getSkill();
  }, []);

  return (
    <SidebarContext value={sidebar}>
      <MainLayout>
        <PersonalProfile />
        {loading ? <TechnicalSkillsLoading /> : <TechnicalSkills {...skills} />}
        {loading ? (
          <AcademinEducationLoading />
        ) : (
          <AcademinEducation academics={academics} />
        )}
      </MainLayout>
    </SidebarContext>
  );
}
