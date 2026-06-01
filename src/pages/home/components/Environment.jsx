import React from "react";

export default function Environment() {
  return (
    <div
      id="environment"
      className="bg-glass flex scroll-mt-32 flex-col justify-between space-y-6 rounded-3xl border border-glass-border p-6 backdrop-blur-xl sm:p-8 lg:col-span-1"
    >
      <div className="space-y-6">
        <div className="flex items-center space-x-2 font-mono text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
          <span>[01]</span> <span>CORE_ENVIRONMENT</span>
        </div>
        <div className="space-y-4">
          <div className="border-b border-glass-border pb-3">
            <div className="mb-0.5 font-mono text-xs text-darkgray-500">
              FRONTEND
            </div>
            <div className="text-sm font-light text-white/80">
              React &amp; Tailwind CSS
            </div>
          </div>
          <div>
            <div className="mb-0.5 font-mono text-xs text-darkgray-500">
              BACKEND
            </div>
            <div className="text-sm font-light text-white/80">
              Python &amp; FastAPI
            </div>
          </div>
        </div>
      </div>
      <div className="hidden border-t border-glass-border/40 pt-6 font-mono text-[11px] text-darkgray-600 lg:block">
        SYSTEM_STATUS // PRODUCTION
      </div>
    </div>
  );
}
