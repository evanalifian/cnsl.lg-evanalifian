import HeaderNav from "./components/layout/HeaderNav";
import MainContent from "./components/layout/MainContent";
import Jumbotron from "./components/layout/Jumbotron";
import TechStacks from "./components/layout/TechStacks";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import Footer from "./components/layout/Footer";
import data from "../data.json"

export default function App() {
  return (
    <>
      <HeaderNav />
      <MainContent>
        <Jumbotron alias={data.alias} tagline={data.tagline} />
        <TechStacks techs={data.tech_stacks} />
        <About about={data.about} />
        <Projects projects={data.projects} />
      </MainContent>
      <Footer {...data} />
    </>
  );
}
