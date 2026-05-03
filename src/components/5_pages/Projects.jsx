import React from "react";
import "../../styles/projects.css";

export default function Projects() {
  return (
    <>
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
          System.<span className="cmd-text">getProjects()</span>
        </h1>
        <p className="max-w-xl text-sm text-zinc-500">
          A collection of technical implementations, university assignments, and
          professional ventures.
        </p>
      </header>

      <section id="all" className="space-y-4">
        <div className="group rounded-xl border border-zinc-800 bg-[#0d0d0d] p-6 transition-all hover:border-green-900">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="status-dot bg-green-500 shadow-[0_0_8px_#4ade80]"></span>
                <h3 className="text-lg font-bold italic transition-colors group-hover:text-green-400">
                  RDA Reserve
                </h3>
              </div>
              <p className="max-w-2xl text-xs leading-relaxed text-zinc-500">
                Laboratory reservation system for Lab Rekayasa Data & Aplikasi.
                Streamlining management for university infrastructure.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Tailwind</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold md:flex-col md:items-end">
              <span className="text-zinc-600">v1.2.0</span>
              <a
                href="#"
                className="rounded bg-zinc-800 px-4 py-2 tracking-widest uppercase transition-all hover:bg-green-900 hover:text-white"
              >
                Open_Source
              </a>
            </div>
          </div>
        </div>

        <div className="group rounded-xl border border-zinc-800 bg-[#0d0d0d] p-6 transition-all hover:border-amber-900">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="status-dot bg-amber-500 shadow-[0_0_8px_#f59e0b]"></span>
                <h3 className="text-lg font-bold italic transition-colors group-hover:text-amber-400">
                  PINTAR-KODING
                </h3>
              </div>
              <p className="max-w-2xl text-xs leading-relaxed text-zinc-500">
                Edutech venture focused on elementary coding education. Business
                proposal (PKM-K) for Bangkalan region.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="tech-tag">Entrepreneurship</span>
                <span className="tech-tag">EdTech</span>
                <span className="tech-tag">Market Analysis</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold md:flex-col md:items-end">
              <span className="text-zinc-600">STABLE</span>
              <a
                href="#"
                className="rounded bg-zinc-800 px-4 py-2 tracking-widest uppercase transition-all hover:bg-amber-900 hover:text-white"
              >
                View_Proposal
              </a>
            </div>
          </div>
        </div>

        <div className="group rounded-xl border border-zinc-800 bg-[#0d0d0d] p-6 transition-all hover:border-blue-900">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="status-dot bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                <h3 className="text-lg font-bold italic transition-colors group-hover:text-blue-400">
                  AI_Lang_Detector
                </h3>
              </div>
              <p className="max-w-2xl text-xs leading-relaxed text-zinc-500">
                A programming language detector for JavaScript, PHP, and Python
                code snippets. Minimalist SaaS-style UI.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">React</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold md:flex-col md:items-end">
              <span className="text-zinc-600">BETA</span>
              <a
                href="#"
                className="rounded bg-zinc-800 px-4 py-2 tracking-widest uppercase transition-all hover:bg-blue-900 hover:text-white"
              >
                Launch_App
              </a>
            </div>
          </div>
        </div>

        <div className="group rounded-xl border border-zinc-800 bg-[#0d0d0d] p-6 transition-all hover:border-purple-900">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="status-dot bg-purple-500 shadow-[0_0_8px_#a855f7]"></span>
                <h3 className="text-lg font-bold italic transition-colors group-hover:text-purple-400">
                  GA_Scheduler
                </h3>
              </div>
              <p className="max-w-2xl text-xs leading-relaxed text-zinc-500">
                Optimization of employee shift scheduling using Genetic
                Algorithms (Tournament Selection & Two-Point Crossover).
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="tech-tag">Computational Intelligence</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Optimization</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold md:flex-col md:items-end">
              <span className="text-zinc-600">ARCHIVED</span>
              <a
                href="#"
                className="rounded bg-zinc-800 px-4 py-2 tracking-widest uppercase transition-all hover:bg-purple-900 hover:text-white"
              >
                Docs_LaTeX
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10 text-center">
        <p className="mb-6 text-xs text-zinc-600">
          Want to see more detailed code?
        </p>
        <a
          href="https://github.com/evanrafa"
          className="rounded-lg bg-white px-8 py-3 text-xs font-bold tracking-[0.2em] text-black uppercase transition-colors hover:bg-green-400"
        >
          Visit_GitHub_Profile
        </a>
      </div>
    </>
  );
}
