import React from "react";
import { Link } from "react-router";

export default function Project() {
  return (
    <div className="bg-glass group flex flex-col justify-between rounded-3xl border border-glass-border p-6 backdrop-blur-xl transition-all duration-300 hover:border-glass-borderHover hover:bg-glass-bgHover sm:p-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 font-mono text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
            <span>[03]</span> <span>SHOWCASE</span>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-darkgray-600 transition-colors group-hover:bg-white"></span>
        </div>
        <h3 className="text-2xl font-light tracking-tight text-white transition-colors group-hover:text-darkgray-400">
          Projects Archive
        </h3>
        <p className="text-xs leading-relaxed font-light text-darkgray-400 sm:text-sm">
          Explore active software architectures, including the specialized
          mathematical weighting{" "}
          <span className="text-white/70">
            BM25 Information Retrieval Engine
          </span>
          .
        </p>
      </div>
      <div className="mt-8 border-t border-glass-border/40 pt-4">
        <Link
          to="/projects"
          className="flex w-full items-center justify-between font-mono text-xs tracking-wider text-white/50 transition-colors group-hover:text-white"
        >
          <span>open_projects_page</span>{" "}
          <span className="text-[10px] transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </Link>
      </div>
    </div>
  );
}
