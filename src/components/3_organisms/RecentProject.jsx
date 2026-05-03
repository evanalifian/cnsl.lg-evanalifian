import React from "react";

export default function RecentProject() {
  return (
    <section id="work" className="space-y-12">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Recent_Commits <span className="text-zinc-700">(1)</span>
        </h2>
        <a href="#" className="text-xs text-zinc-500 hover:text-green-400">
          View_All {"->"}
        </a>
      </div>

      <div className="group grid items-center gap-8 rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-8 transition-colors hover:border-green-900 md:grid-cols-12">
        <div className="flex aspect-video items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 md:col-span-7">
          <div className="text-6xl font-black text-zinc-700">RDA</div>
        </div>
        <div className="space-y-4 md:col-span-5">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold text-green-400">#project-v1.0</span>
            <span className="text-xs text-zinc-600">commit: 7f3a1b2</span>
          </div>
          <h3 className="text-xl font-bold transition-colors group-hover:text-green-400">
            RDA Reserve System
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            A laboratory management ecosystem. Streamlining complex booking
            logic and resource allocation with real-time synchronization.
          </p>
          <div className="flex space-x-6 pt-4 text-xs">
            <a href="#" className="font-bold underline hover:text-green-400">
              View_Live
            </a>
            <a href="#" className="font-bold underline hover:text-green-400">
              Source_Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
