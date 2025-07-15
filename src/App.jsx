import HeaderNav from "./components/layout/HeaderNav";
import MainContent from "./components/layout/MainContent";
import Jumbotron from "./components/layout/Jumbotron";
import TechStacks from "./components/layout/TechStacks";
import data from "../data.json";
import About from "./components/layout/About";

export default function App() {
  return (
    <>
      <HeaderNav />
      <MainContent>
        <Jumbotron />
        <TechStacks />
        <About />
        <section className="space-y-8 py-28 md:text-center lg:text-start">
          <h2
            id="projects"
            className="scroll-mt-16 text-3xl font-medium text-gray-900 md:scroll-mt-24 md:text-center md:text-4xl"
          >
            Projects
          </h2>
        </section>
      </MainContent>
    </>
  );
}
