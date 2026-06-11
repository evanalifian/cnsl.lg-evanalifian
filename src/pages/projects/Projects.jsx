import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { SidebarContext } from "../../hooks/SidebarContext";
import ProjectCard from "./components/ProjectCard";
import ProjectCardLoading from "./components/ProjectCardLoading";
import SectionContent from "../../components/SectionContent";

export default function Projects() {
  const sidebar = {
    sectionName: "WORK_REPOSITORY",
    title: "Projects",
    subTitle: "System Development Archive",
    description:
      "A curated collection of software architectures, backend search engines, and modular web platforms.",
  };
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getProjectsp() {
      await fetch("/data.json")
        .then((res) => res.json())
        .then((res) => {
          setProjects(res.projects);
          setLoading(false);
        });
    }

    getProjectsp();
  }, []);

  return (
    <SidebarContext value={sidebar}>
      <MainLayout>
        <SectionContent
          pageName="projects"
          sectionName="featured"
          title="Featured_Projects"
        >
          <div className="grid grid-cols-1 gap-8">
            {loading ? (
              <>
                <ProjectCardLoading />
                <ProjectCardLoading />
              </>
            ) : (
              projects
                .reverse()
                .map((project) => (
                  <ProjectCard key={project.project_name} {...project} />
                ))
            )}
          </div>
        </SectionContent>
      </MainLayout>
    </SidebarContext>
  );
}
