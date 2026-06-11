import React from "react";
import SectionContent from "../../../components/SectionContent";

export default function TechnicalSkills({
  frameworks = [],
  languages = [],
  tools = [],
}) {
  return (
    <SectionContent
      pageName="about"
      sectionName="technical-skills"
      title="Technical_Skills"
    >
      <div className="bg-glass space-y-8 rounded-2xl border border-glass-border p-6 font-mono text-sm backdrop-blur-xl sm:p-8">
        <div className="space-y-3">
          <span className="block text-[11px] tracking-widest text-darkgray-500">
            // LANGUAGES
          </span>
          <div className="flex flex-wrap gap-2.5">
            {languages.map((l) => (
              <span
                key={l}
                className="rounded-lg border border-glass-border bg-white/5 px-4 py-2 text-gray-300"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3 border-t border-glass-border/40 pt-6">
          <span className="block text-[11px] tracking-widest text-darkgray-500">
            // FRAMEWORKS_&_LIBRARIES
          </span>
          <div className="flex flex-wrap gap-2.5">
            {frameworks.map((f) => (
              <span
                key={f}
                className="rounded-lg border border-glass-border bg-white/5 px-4 py-2 text-gray-300"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3 border-t border-glass-border/40 pt-6">
          <span className="block text-[11px] tracking-widest text-darkgray-500">
            // TOOLS_&_ENVIRONMENT
          </span>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-glass-border bg-white/5 px-4 py-2 text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionContent>
  );
}
