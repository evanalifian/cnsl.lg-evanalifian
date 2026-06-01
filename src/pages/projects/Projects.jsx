import React from "react";
import MainLayout from "../../components/MainLayout";

export default function Projects() {
  return (
    <MainLayout>
      <section id="featured" class="scroll-mt-32 space-y-6">
        <div class="flex items-center space-x-2 font-mono text-[11px] font-bold tracking-[0.25em] text-white/30 uppercase">
          <span>[01]</span> <span>PRODUCTION_REGISTRY</span>
        </div>

        <div class="grid grid-cols-1 gap-8">
          <div class="bg-glass group flex flex-col justify-between rounded-3xl border border-glass-border p-8 backdrop-blur-xl transition-all duration-300 hover:border-glass-borderHover hover:bg-glass-bgHover">
            <div class="space-y-6">
              <div class="flex items-start justify-between gap-6">
                <div class="space-y-2">
                  <h3 class="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-white/80">
                    Mini Information Retrieval Engine
                  </h3>
                  <div class="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    <span>SYSTEM_TYPE:</span>
                    <span class="text-white/70">API_BACKEND</span>
                  </div>
                </div>
                <span class="shrink-0 rounded border border-glass-border bg-white/5 px-3 py-1 font-mono text-[11px] text-white/50 uppercase">
                  Python
                </span>
              </div>

              <p class="text-base leading-relaxed font-light text-gray-300">
                Standalone text search application executing mathematical
                <span class="font-medium text-white">
                  BM25 (Best Matching 25)
                </span>
                ranking mechanics. Engineered to manage length normalization and
                compute high-precision token relevance scores.
              </p>

              <div class="text-darkgray-300 flex flex-wrap gap-2 font-mono text-[10px]">
                <span class="rounded border border-glass-border/40 bg-white/[0.03] px-3 py-1">
                  FastAPI
                </span>
                <span class="rounded border border-glass-border/40 bg-white/[0.03] px-3 py-1">
                  BM25 Algorithm
                </span>
                <span class="rounded border border-glass-border/40 bg-white/[0.03] px-3 py-1">
                  Information Retrieval
                </span>
              </div>
            </div>

            <div class="mt-8 flex items-center justify-between border-t border-glass-border/40 pt-5 font-mono text-[12px]">
              <span class="tracking-wider text-darkgray-500">VER_1.0.0</span>
              <a
                href="#"
                class="flex items-center text-[12px] font-bold tracking-wider text-white/60 transition-colors group-hover:text-white"
              >
                VIEW_SOURCE
                <span class="ml-1.5 text-[10px] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div class="bg-glass group flex flex-col justify-between rounded-3xl border border-glass-border p-8 backdrop-blur-xl transition-all duration-300 hover:border-glass-borderHover hover:bg-glass-bgHover">
            <div class="space-y-6">
              <div class="flex items-start justify-between gap-6">
                <div class="space-y-2">
                  <h3 class="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-white/80">
                    Modular React Portfolio System
                  </h3>
                  <div class="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    <span>SYSTEM_TYPE:</span>
                    <span class="text-white/70">INTERFACE_CORE</span>
                  </div>
                </div>
                <span class="shrink-0 rounded border border-glass-border bg-white/5 px-3 py-1 font-mono text-[11px] text-white/50 uppercase">
                  React
                </span>
              </div>

              <p class="text-base leading-relaxed font-light text-gray-300">
                Complete architecture migration from a conventional layout into
                a<span class="font-medium text-white">React.js</span> framework
                using modular components based on
                <span class="font-medium text-white">Atomic Design</span>
                principles.
              </p>

              <div class="text-darkgray-300 flex flex-wrap gap-2 font-mono text-[10px]">
                <span class="rounded border border-glass-border/40 bg-white/[0.03] px-3 py-1">
                  React Router
                </span>
                <span class="rounded border border-glass-border/40 bg-white/[0.03] px-3 py-1">
                  Tailwind CSS
                </span>
                <span class="rounded border border-glass-border/40 bg-white/[0.03] px-3 py-1">
                  GitHub API
                </span>
              </div>
            </div>

            <div class="mt-8 flex items-center justify-between border-t border-glass-border/40 pt-5 font-mono text-[12px]">
              <span class="tracking-wider text-darkgray-500">VER_2.1.0</span>
              <a
                href="#"
                class="flex items-center text-[12px] font-bold tracking-wider text-white/60 transition-colors group-hover:text-white"
              >
                VIEW_SOURCE
                <span class="ml-1.5 text-[10px] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
