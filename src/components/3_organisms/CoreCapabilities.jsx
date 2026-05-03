import React from "react";

export default function CoreCapabilities() {
  return (
    <section
      id="tech"
      className="grid grid-cols-1 items-start gap-12 md:grid-cols-12"
    >
      <div className="md:col-span-4">
        <h2 className="mb-2 text-sm font-bold tracking-[0.3em] text-zinc-600 uppercase">
          Core_Capabilities
        </h2>
        <div className="h-1 w-12 rounded bg-green-900"></div>
      </div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-8 text-sm sm:grid-cols-2 md:col-span-8 lg:grid-cols-3">
        <div>
          <p className="cmd-text mb-3">
            const <span className="text-white">frontend</span> ={" "}
            <span className="bracket">[</span>
          </p>
          <ul className="space-y-1.5 border-l border-zinc-800 pl-6 text-zinc-400">
            <li>"React", "Next.js",</li>
            <li>"TailwindCSS"</li>
          </ul>
          <p className="cmd-text">
            <span className="bracket">]</span>;
          </p>
        </div>
        <div>
          <p className="cmd-text mb-3">
            const <span className="text-white">backend</span> ={" "}
            <span className="bracket">[</span>
          </p>
          <ul className="space-y-1.5 border-l border-zinc-800 pl-6 text-zinc-400">
            <li>"Python (FastAPI)",</li>
            <li>"Spring Boot"</li>
          </ul>
          <p className="cmd-text">
            <span className="bracket">]</span>;
          </p>
        </div>
        <div>
          <p className="cmd-text mb-3">
            const <span className="text-white">data</span> ={" "}
            <span className="bracket">[</span>
          </p>
          <ul className="space-y-1.5 border-l border-zinc-800 pl-6 text-zinc-400">
            <li>"PostgreSQL", "Fuzzy Systems",</li>
            <li>"Genetic Algorithms"</li>
          </ul>
          <p className="cmd-text">
            <span className="bracket">]</span>;
          </p>
        </div>
      </div>
    </section>
  );
}
