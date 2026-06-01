import React from "react";

export default function ProjectCard({
  project_name,
  description,
  github_repository,
  technologies = [],
}) {
  return (
    <div className="bg-glass group flex flex-col justify-between rounded-3xl border border-glass-border p-8 backdrop-blur-xl transition-all duration-300 hover:border-glass-borderHover hover:bg-glass-bgHover">
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-white/80">
              {project_name}
            </h3>
          </div>
        </div>
        <p className="text-base leading-relaxed font-light text-gray-300">
          {description}
        </p>
        <div className="text-darkgray-300 flex flex-wrap gap-2 font-mono text-[10px]">
          {technologies.map((t) => (
            <span key={t} className="rounded border border-glass-border/40 bg-white/3 px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-glass-border/40 pt-5 font-mono text-[12px]">
        <a
          href={github_repository}
          className="flex items-center text-[12px] font-bold tracking-wider text-white/60 transition-colors group-hover:text-white"
        >
          VIEW_SOURCE
          <span className="ml-1.5 text-[10px] transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}
