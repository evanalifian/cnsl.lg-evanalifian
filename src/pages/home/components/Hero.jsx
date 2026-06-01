import React from "react";

export default function Hero() {
  return (
    <div className="bg-glass group flex flex-col items-start justify-between gap-8 rounded-3xl border border-glass-border p-8 backdrop-blur-xl transition-all duration-300 hover:border-glass-borderHover sm:p-12 lg:flex-row lg:items-center">
      <div className="max-w-2xl space-y-4">
        <span className="block font-mono text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">
          // CORE_IDENTITY
        </span>
        <h1 className="text-5xl leading-none font-light tracking-tight text-white sm:text-6xl">
          <span className="bg-linear-to-r from-white via-gray-300 to-darkgray-400 bg-clip-text font-normal text-transparent">
            Evan Alifian
          </span>
        </h1>
        <p className="pt-2 text-base leading-relaxed font-light text-darkgray-400 sm:text-lg">
          Focusing on modular frontend architecture built with{" "}
          <span className="font-normal text-white/80">Atomic Design</span>{" "}
          principles and high-performance backend systems.
        </p>
      </div>
      <div className="w-full shrink-0 pt-4 lg:w-auto lg:pt-0">
        <a
          href="#"
          className="inline-flex w-full items-center justify-center rounded-xl border border-glass-border bg-white/5 px-8 py-4 font-mono text-xs font-bold tracking-widest text-white transition-all duration-300 hover:border-transparent hover:bg-white hover:text-black lg:w-auto"
        >
          DOWNLOAD_CV (PDF) ↓
        </a>
      </div>
    </div>
  );
}
