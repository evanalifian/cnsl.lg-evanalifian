import React from "react";
import "../../styles/contact.css";

export default function Contact() {
  return (
    <>
      <header class="space-y-6">
        <h1 class="text-4xl font-bold tracking-tighter md:text-6xl">
          Reach_Out<span class="cmd-text">.sh</span>
        </h1>
        <p class="max-w-2xl text-sm leading-relaxed text-zinc-500 md:text-base">
          Saya selalu terbuka untuk diskusi mengenai
          <span class="text-zinc-300">Data Engineering</span>, kolaborasi
          proyek, atau sekadar bertegur sapa. Silakan hubungi saya melalui jalur
          di bawah ini.
        </p>
      </header>

      <section class="group">
        <div class="flex flex-col items-center space-y-6 rounded-3xl border-2 border-dashed border-zinc-800 p-8 text-center transition-colors hover:border-green-500/50 md:p-12">
          <span class="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
            Main Communication Channel
          </span>
          <a
            href="mailto:hello@evanrafa.com"
            class="text-2xl font-bold break-all transition-all hover:text-green-400 md:text-4xl"
          >
            hello@evanrafa.com
          </a>
          <div class="rounded-full border border-green-900 bg-green-950/20 px-4 py-1 text-[10px] tracking-widest text-green-400 uppercase">
            Available for New Projects
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a href="#" class="link-card group flex items-center justify-between">
          <div>
            <p class="mb-1 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
              Networking
            </p>
            <p class="text-lg font-bold transition-colors group-hover:text-green-400">
              LinkedIn
            </p>
          </div>
          <span class="text-2xl text-zinc-800 transition-colors group-hover:text-green-400">
            {"->"}
          </span>
        </a>

        <a href="#" class="link-card group flex items-center justify-between">
          <div>
            <p class="mb-1 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
              Source Code
            </p>
            <p class="text-lg font-bold transition-colors group-hover:text-green-400">
              GitHub
            </p>
          </div>
          <span class="text-2xl text-zinc-800 transition-colors group-hover:text-green-400">
            {"->"}
          </span>
        </a>

        <a href="#" class="link-card group flex items-center justify-between">
          <div>
            <p class="mb-1 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
              Thoughts
            </p>
            <p class="text-lg font-bold transition-colors group-hover:text-green-400">
              X / Twitter
            </p>
          </div>
          <span class="text-2xl text-zinc-800 transition-colors group-hover:text-green-400">
            {"->"}
          </span>
        </a>

        <a href="#" class="link-card group flex items-center justify-between">
          <div>
            <p class="mb-1 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
              Visuals
            </p>
            <p class="text-lg font-bold transition-colors group-hover:text-green-400">
              Instagram
            </p>
          </div>
          <span class="text-2xl text-zinc-800 transition-colors group-hover:text-green-400">
            {"->"}
          </span>
        </a>
      </section>
    </>
  );
}
