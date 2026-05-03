import React from "react";

export default function AcademicTimeline() {
  return (
    <section className="space-y-10">
      <h2 className="text-xs font-bold tracking-[0.5em] text-zinc-600 uppercase">
        01 // Academic_Timeline
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6">
          <div className="absolute top-0 right-0 p-4">
            <span className="rounded bg-green-500/10 px-2 py-1 text-[10px] font-bold text-green-500">
              ONGOING
            </span>
          </div>
          <h3 className="text-lg font-bold">Universitas Trunojoyo Madura</h3>
          <p className="text-xs text-zinc-500">
            Bachelor of Engineering - Informatics
          </p>
          <p className="mt-4 text-xs text-zinc-600 italic">
            Fokus pada Kecerdasan Komputasional IF 4F.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-6 opacity-50">
          <h3 className="text-lg font-bold">Pendidikan Sebelumnya</h3>
          <p className="text-xs text-zinc-500">Sekolah Menengah Atas / Kejuruan</p>
          <p className="mt-4 text-xs font-bold tracking-widest text-zinc-600 uppercase">
            ARCHIVED
          </p>
        </div>
      </div>
    </section>
  );
}
