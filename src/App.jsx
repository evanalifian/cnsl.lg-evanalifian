import HeaderNav from "./components/layout/HeaderNav";
import MainContent from "./components/layout/MainContent";
import Jumbotron from "./components/layout/Jumbotron";
import TechStacks from "./components/layout/TechStacks";
import data from "../data.json";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";

export default function App() {
  return (
    <>
      <HeaderNav />
      <MainContent>
        <Jumbotron />
        <TechStacks />
        <About />
        <Projects />
      </MainContent>
    </>
  );
}
