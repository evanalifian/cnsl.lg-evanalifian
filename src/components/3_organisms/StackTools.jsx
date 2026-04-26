import React from "react";

export default function StackTools() {
  return (
    <section class="space-y-12">
      <div class="flex items-center justify-between">
        <h2 class="text-xs font-bold tracking-[0.5em] text-zinc-600 uppercase">
          02 // Stack_&_Tools
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="card-tech">
          <i class="devicon-react-original colored mb-4 block text-3xl"></i>
          <h4 class="text-xs font-bold tracking-widest uppercase">React.js</h4>
          <p class="mt-1 text-[10px] text-zinc-600">Frontend Core</p>
        </div>
        <div class="card-tech">
          <i class="devicon-tailwindcss-original colored mb-4 block text-3xl"></i>
          <h4 class="text-xs font-bold tracking-widest uppercase">Tailwind</h4>
          <p class="mt-1 text-[10px] text-zinc-600">Styling Engine</p>
        </div>
        <div class="card-tech">
          <i class="devicon-python-plain colored mb-4 block text-3xl"></i>
          <h4 class="text-xs font-bold tracking-widest uppercase">Python</h4>
          <p class="mt-1 text-[10px] text-zinc-600">Logic & AI</p>
        </div>
        <div class="card-tech">
          <i class="devicon-postgresql-plain colored mb-4 block text-3xl"></i>
          <h4 class="text-xs font-bold tracking-widest uppercase">
            PostgreSQL
          </h4>
          <p class="mt-1 text-[10px] text-zinc-600">Data Storage</p>
        </div>
      </div>

      <h2 class="pt-8 text-xs font-bold tracking-[0.5em] text-zinc-600 uppercase">
        03 // Learning_Processes
      </h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="card-tech border-dashed opacity-70 grayscale hover:grayscale-0">
          <i class="devicon-springboot-plain colored mb-4 block text-3xl"></i>
          <h4 class="text-xs font-bold tracking-widest uppercase">
            Spring Boot
          </h4>
          <p class="mt-1 text-[10px] text-zinc-600 italic">Pulling repo...</p>
        </div>
        <div class="card-tech border-dashed opacity-70 grayscale hover:grayscale-0">
          <i class="devicon-fastapi-plain colored mb-4 block text-3xl"></i>
          <h4 class="text-xs font-bold tracking-widest uppercase">FastAPI</h4>
          <p class="mt-1 text-[10px] text-zinc-600 italic">Optimizing...</p>
        </div>
        <div class="card-tech flex flex-col items-center justify-center border-dashed text-center opacity-70">
          <span class="mb-2 text-2xl font-bold italic">AI</span>
          <h4 class="text-xs font-bold tracking-widest uppercase">
            Genetic Algo
          </h4>
          <p class="mt-1 text-[10px] text-zinc-600 italic">Simulating...</p>
        </div>
        <div class="card-tech flex flex-col items-center justify-center border-dashed text-center opacity-70">
          <span class="mb-2 text-2xl font-bold italic">~</span>
          <h4 class="text-xs font-bold tracking-widest uppercase">
            Fuzzy Logic
          </h4>
          <p class="mt-1 text-[10px] text-zinc-600 italic">Computing...</p>
        </div>
      </div>
    </section>
  );
}
