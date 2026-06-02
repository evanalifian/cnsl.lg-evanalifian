import React from "react";

export default function AcademinEducationLoading() {
  return (
    <div
      id="edu-skeleton"
      className="bg-glass animate-pulse space-y-8 rounded-2xl border border-glass-border p-6 backdrop-blur-xl sm:p-8"
    >
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="h-5 w-48 rounded bg-white/10"></div>
          <div className="h-5 w-24 rounded bg-white/10"></div>
        </div>
        <div className="h-4 w-full rounded bg-white/10"></div>
      </div>
      <div className="space-y-4 border-t border-glass-border/40 pt-8">
        <div className="flex justify-between">
          <div className="h-5 w-40 rounded bg-white/10"></div>
          <div className="h-5 w-20 rounded bg-white/10"></div>
        </div>
        <div className="h-4 w-full rounded bg-white/10"></div>
      </div>
    </div>
  );
}
