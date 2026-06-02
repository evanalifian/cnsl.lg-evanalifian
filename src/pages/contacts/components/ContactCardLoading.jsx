import React from "react";

export default function ContactCardLoading() {
  return (
    <div id="contact-skeleton" class="space-y-4">
      <div class="bg-glass/50 flex animate-pulse items-center justify-between rounded-2xl border border-glass-border px-6 py-5">
        <div class="flex flex-1 items-center space-x-4">
          <div class="h-3 w-16 rounded bg-white/10"></div>{" "}
          <div class="h-4 w-32 rounded bg-white/10"></div>{" "}
        </div>
        <div class="h-4 w-24 rounded bg-white/10"></div>{" "}
      </div>

      <div class="bg-glass/50 flex animate-pulse items-center justify-between rounded-2xl border border-glass-border px-6 py-5">
        <div class="flex flex-1 items-center space-x-4">
          <div class="h-3 w-16 rounded bg-white/10"></div>
          <div class="h-4 w-32 rounded bg-white/10"></div>
        </div>
        <div class="h-4 w-24 rounded bg-white/10"></div>
      </div>
    </div>
  );
}
