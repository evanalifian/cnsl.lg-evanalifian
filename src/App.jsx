import HeaderNav from "./components/layout/HeaderNav";
import MainContent from "./components/layout/MainContent";
import Jumbotron from "./components/layout/Jumbotron";
import TechStacks from "./components/layout/TechStacks";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import Footer from "./components/layout/Footer";

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
      <Footer />
    </>
  );
}
