import MainLayout from "../4_templates/MainLayout";
import Jumbotron from "../3_organisms/Jumbotron"
import CurrentTechStacks from "../3_organisms/CurrentTechStacks";
import About from "../3_organisms/About"
import ProjectsGrid from "../3_organisms/ProjectsGrid"
import data from "../../../data.json";

export default function Home() {
  return (
    <MainLayout>
      <Jumbotron alias={data.alias} tagline={data.tagline} />
      <CurrentTechStacks techs={data.tech_stacks} />
      <About about={data.about} />
      <ProjectsGrid projects={data.projects} />
    </MainLayout>
  );
}
