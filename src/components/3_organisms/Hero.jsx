import React from "react";

export default function Hero() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-8">
      <div className="space-y-4 text-sm md:text-base">
        <p>
          <span className="bracket">[</span> <span className="text-zinc-500">info</span>{" "}
          <span className="bracket">]</span> Loading developer profile...
        </p>
        <h1 className="text-3xl leading-tight font-bold tracking-tight md:text-5xl">
          <span className="cmd-text">Evan Rafa Alifian</span> <br />
          <span className="text-zinc-600">
            Full-stack & Data Engineering Student.
          </span>
        </h1>
        <p className="max-w-2xl pt-4 text-zinc-400">
          Specialized in designing clean logic and developing functional
          interfaces. Balancing algorithmic efficiency with minimalist user
          experience. Currently focusing on laboratory ecosystem automation.
        </p>
        <div className="flex items-center space-x-4 pt-6">
          <span className="font-bold text-green-500">{">>>"}</span>
          <a
            href="#work"
            className="rounded border border-green-900 bg-green-950 px-5 py-2.5 text-xs font-bold tracking-widest text-green-400 uppercase transition-all hover:bg-green-900"
          >
            Execute ./view_work
          </a>
        </div>
      </div>
    </section>
  );
}
