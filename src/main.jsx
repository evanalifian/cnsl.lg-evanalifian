import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./components/5_pages/Home";
import ContentLayout from "./components/4_templates/ContentLayout";
import About from "./components/5_pages/About";
import Projects from "./components/5_pages/Projects";
import Contact from "./components/5_pages/Contact";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ContentLayout />}>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
