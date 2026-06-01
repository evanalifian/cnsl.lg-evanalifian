import React from "react";

export default function AcademinEducation({ academics = [] }) {
  return (
    <section id="education" className="scroll-mt-32 space-y-6">
      <div className="flex items-center space-x-2 font-mono text-[11px] font-bold tracking-[0.25em] text-white/30 uppercase">
        <span>[03]</span> <span>ACADEMIC_EDUCATION</span>
      </div>

      <div className="bg-glass space-y-8 rounded-2xl border border-glass-border p-6 backdrop-blur-xl sm:p-8">
        {academics.map((m, i) => (
          <div
            key={m.institution}
            className={`group space-y-2 ${i !== 0 ? "border-t border-glass-border/40 pt-8" : null}`}
          >
            <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-center">
              <h3 className="text-base font-medium text-white transition-colors group-hover:text-darkgray-400">
                {m.institution}
              </h3>
              <span className="self-start rounded border border-glass-border/60 px-2 py-0.5 font-mono text-[10px] tracking-widest text-darkgray-500 uppercase sm:self-center">
                {m.status}
              </span>
            </div>
            <p className="text-sm font-light text-darkgray-400">
              {m.level_type} — {m.major}
            </p>
            <p className="pt-0.5 font-mono text-xs text-darkgray-500">
              Core Competencies: {m.focus_skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
