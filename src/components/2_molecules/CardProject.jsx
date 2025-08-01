import { ExternalLink } from "lucide-react";
import React from "react";

export default function CardProject({ project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-300 bg-white">
      <figure>
        <img src={project.img} alt={`${project.name} img`} />
        <figcaption className="flex items-end bg-zinc-500/80 px-4 py-1 font-medium text-gray-50">
          {project.name}
        </figcaption>
      </figure>
      <div className="flex justify-end bg-zinc-200/50">
        <div className="flex flex-1 items-center gap-x-4 px-4 overflow-x-auto">
          {project.techs.map((t) => (
            <img
              key={t.name}
              src={t.icon}
              alt={`${t.name} icon`}
              className="w-4"
              title={t.name}
            />
          ))}
        </div>
        <GithubProject github={project.github} />
      </div>
    </div>
  );
}

function GithubProject({ github }) {
  if (github) {
    return (
      <a
        href={github}
        target="_blank"
        className="inline-flex items-center gap-x-2 rounded-tl-[50%] bg-zinc-950 p-2 pl-6 font-mono text-xs text-gray-50"
      >
        <ExternalLink size={18} />
        See on GitHub
      </a>
    );
  } else {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-x-2 rounded-tl-[50%] bg-zinc-950 p-2 pl-6 font-mono text-xs text-gray-50">
        Not available
      </span>
    );
  }
}
