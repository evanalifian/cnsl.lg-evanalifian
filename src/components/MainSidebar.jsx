import React, { useContext } from "react";
import { SidebarContext } from "../hooks/SidebarContext";

export default function MainSidebar() {
  const sidebar = useContext(SidebarContext)

  function handlePrevious() {
    window.history.back()
  }

  return (
    <aside className="z-10 flex flex-col justify-between py-12 lg:sticky lg:top-28 lg:h-[calc(100vh-6rem)] lg:w-[40%] lg:py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <span className="block font-mono text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">
            // {sidebar.sectionName}
          </span>
          <h1 className="text-5xl leading-none font-light tracking-tight text-white sm:text-6xl">
            <span className="bg-linear-to-r from-white via-gray-300 to-darkgray-400 bg-clip-text font-normal text-transparent">
              {sidebar.title}
            </span>
          </h1>
          <p className="font-mono text-sm tracking-widest text-white/50 uppercase">
            {sidebar.subTitle}
          </p>
        </div>

        <p className="max-w-sm text-base leading-relaxed font-light text-darkgray-400">
          {sidebar.description}
        </p>
        <div className="max-w-xs pt-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="inline-flex w-full items-center justify-center rounded-xl border border-glass-border bg-white/5 px-7 py-3.5 font-mono text-xs font-bold tracking-widest text-white transition-all duration-300 hover:border-transparent hover:bg-white hover:text-black sm:w-auto"
          >
            ← BACK_TO_Previous
          </button>
        </div>
      </div>
      <div className="hidden space-y-2 font-mono text-xs text-darkgray-600 lg:block">
        <div className="flex items-center space-x-2">
          <span>LOCATED_IN:</span>
          <span className="font-sans text-white/60">Bangkalan, Indonesia</span>
        </div>
        <div>© 2026 Evan Alifian. All rights reserved.</div>
      </div>
    </aside>
  );
}
