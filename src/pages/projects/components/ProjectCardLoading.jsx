import React from "react";

export default function ProjectCardLoading() {
  return (
    <div
      id="project-skeleton"
      class="bg-glass/50 group flex animate-pulse flex-col justify-between rounded-3xl border border-glass-border p-8 backdrop-blur-xl"
    >
      <div class="space-y-6">
        <div class="flex items-start justify-between gap-6">
          <div class="space-y-3">
            <div class="h-7 w-64 rounded bg-white/10"></div>
            <div class="h-3 w-32 rounded bg-white/10"></div>
          </div>
          <div class="h-8 w-16 rounded bg-white/10"></div>
        </div>

        <div class="space-y-2">
          <div class="h-4 w-full rounded bg-white/10"></div>
          <div class="h-4 w-[90%] rounded bg-white/10"></div>
          <div class="h-4 w-[40%] rounded bg-white/10"></div>
        </div>

        <div class="flex flex-wrap gap-2">
          <div class="h-7 w-20 rounded bg-white/10"></div>
          <div class="h-7 w-24 rounded bg-white/10"></div>
        </div>
      </div>

      <div class="mt-8 flex items-center justify-between border-t border-glass-border/40 pt-5">
        <div class="h-4 w-20 rounded bg-white/10"></div>
        <div class="h-4 w-24 rounded bg-white/10"></div>
      </div>
    </div>
  );
}
