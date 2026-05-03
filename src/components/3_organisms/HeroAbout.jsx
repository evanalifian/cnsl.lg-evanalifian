import React from "react";

export default function HeroAbout() {
  return (
    <section className="grid items-center gap-12 md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <span className="text-8xl font-black text-zinc-800 transition-transform group-hover:scale-110">
            ER
          </span>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <p className="text-[10px] font-bold tracking-widest text-green-400 uppercase">
              System.User_01
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6 md:col-span-8">
        <h1 className="text-3xl font-bold tracking-tighter uppercase italic md:text-5xl">
          Evan Rafa Alifian
        </h1>
        <div className="space-y-4">
          <div className="bio-line">
            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              Current ID
            </p>
            <p className="text-sm">
              NIM 240411100063 • Informatics Engineering @ UTM
            </p>
          </div>
          <div className="bio-line">
            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              Focus Area
            </p>
            <p className="text-sm">
              Data Engineering, Full-stack Dev, & Computational Intelligence
            </p>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
            Seorang mahasiswa Teknik Informatika semester 4 yang antusias dalam
            membangun sistem backend yang skalabel dan antarmuka frontend yang
            minimalis. Berbasis di Bangkalan, Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}
