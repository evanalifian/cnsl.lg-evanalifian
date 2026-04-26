import React from "react";
import ".././../styles/about.css";
import HeroAbout from "../3_organisms/HeroAbout";
import AcademicTimeline from "../3_organisms/AcademicTimeline";
import StackTools from "../3_organisms/StackTools";

export default function About() {
  return (
    <>
      <HeroAbout />
      <AcademicTimeline />
      <StackTools />
    </>
  );
}
