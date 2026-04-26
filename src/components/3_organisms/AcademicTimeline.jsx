import React from "react";

export default function AcademicTimeline() {
  return (
    <section class="space-y-10">
      <h2 class="text-xs font-bold tracking-[0.5em] text-zinc-600 uppercase">
        01 // Academic_Timeline
      </h2>
      <div class="grid gap-6 md:grid-cols-2">
        <div class="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6">
          <div class="absolute top-0 right-0 p-4">
            <span class="rounded bg-green-500/10 px-2 py-1 text-[10px] font-bold text-green-500">
              ONGOING
            </span>
          </div>
          <h3 class="text-lg font-bold">Universitas Trunojoyo Madura</h3>
          <p class="text-xs text-zinc-500">
            Bachelor of Engineering - Informatics
          </p>
          <p class="mt-4 text-xs text-zinc-600 italic">
            Fokus pada Kecerdasan Komputasional IF 4F.
          </p>
        </div>
        <div class="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6 opacity-50">
          <h3 class="text-lg font-bold">Pendidikan Sebelumnya</h3>
          <p class="text-xs text-zinc-500">Sekolah Menengah Atas / Kejuruan</p>
          <p class="mt-4 text-xs font-bold tracking-widest text-zinc-600 uppercase">
            ARCHIVED
          </p>
        </div>
      </div>
    </section>
  );
}
