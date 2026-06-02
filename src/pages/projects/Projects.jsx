import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { SidebarContext } from "../../hooks/SidebarContext";
import ProjectCard from "./components/ProjectCard";
import ProjectCardLoading from "./components/ProjectCardLoading";

export default function Projects() {
  const sidebar = {
    sectionName: "WORK_REPOSITORY",
    title: "Projects",
    subTitle: "System Development Archive",
    description:
      "A curated collection of software architectures, backend search engines, and modular web platforms.",
  };
  const [projects, setProjects] = useState([])
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
        <section id="featured" className="scroll-mt-32 space-y-6">
          <div className="flex items-center space-x-2 font-mono text-[11px] font-bold tracking-[0.25em] text-white/30 uppercase">
            <span>[01]</span> <span>PRODUCTION_REGISTRY</span>
          </div>
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
        </section>
      </MainLayout>
    </SidebarContext>
  );
}
