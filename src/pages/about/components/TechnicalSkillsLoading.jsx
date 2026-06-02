import React from "react";

export default function TechnicalSkillsLoading() {
  return (
    <div
      id="skills-skeleton"
      className="bg-glass animate-pulse space-y-8 rounded-2xl border border-glass-border p-6 font-mono text-sm backdrop-blur-xl sm:p-8"
    >
      <div className="space-y-3">
        <div className="h-3 w-24 rounded bg-white/10"></div>
        <div className="flex flex-wrap gap-2.5">
          <div className="h-9 w-20 rounded-lg bg-white/10"></div>
          <div className="h-9 w-24 rounded-lg bg-white/10"></div>
        </div>
      </div>
      <div className="space-y-3 border-t border-glass-border/40 pt-6">
        <div className="h-3 w-40 rounded bg-white/10"></div>
        <div className="flex flex-wrap gap-2.5">
          <div className="h-9 w-28 rounded-lg bg-white/10"></div>
          <div className="h-9 w-20 rounded-lg bg-white/10"></div>
        </div>
      </div>
    </div>
  );
}
