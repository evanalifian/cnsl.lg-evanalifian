import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import Environment from "./components/Environment";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-pureblack pt-6 font-sans text-gray-200 antialiased selection:bg-white selection:text-black">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 space-y-12 px-6 pt-24 pb-16 lg:px-12">
        <Hero />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Environment />
          <div
            id="explore"
            className="grid scroll-mt-32 grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2"
          >
            <AboutMe />
            <Project />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
