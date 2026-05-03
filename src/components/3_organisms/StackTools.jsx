import React from "react";

export default function StackTools() {
  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-bold tracking-[0.5em] text-zinc-600 uppercase">
          02 // Stack_&_Tools
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="card-tech">
          <i className="devicon-react-original colored mb-4 block text-3xl"></i>
          <h4 className="text-xs font-bold tracking-widest uppercase">React.js</h4>
          <p className="mt-1 text-[10px] text-zinc-600">Frontend Core</p>
        </div>
        <div className="card-tech">
          <i className="devicon-tailwindcss-original colored mb-4 block text-3xl"></i>
          <h4 className="text-xs font-bold tracking-widest uppercase">Tailwind</h4>
          <p className="mt-1 text-[10px] text-zinc-600">Styling Engine</p>
        </div>
        <div className="card-tech">
          <i className="devicon-python-plain colored mb-4 block text-3xl"></i>
          <h4 className="text-xs font-bold tracking-widest uppercase">Python</h4>
          <p className="mt-1 text-[10px] text-zinc-600">Logic & AI</p>
        </div>
        <div className="card-tech">
          <i className="devicon-postgresql-plain colored mb-4 block text-3xl"></i>
          <h4 className="text-xs font-bold tracking-widest uppercase">
            PostgreSQL
          </h4>
          <p className="mt-1 text-[10px] text-zinc-600">Data Storage</p>
        </div>
      </div>

      <h2 className="pt-8 text-xs font-bold tracking-[0.5em] text-zinc-600 uppercase">
        03 // Learning_Processes
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="card-tech border-dashed opacity-70 grayscale hover:grayscale-0">
          <i className="devicon-springboot-plain colored mb-4 block text-3xl"></i>
          <h4 className="text-xs font-bold tracking-widest uppercase">
            Spring Boot
          </h4>
          <p className="mt-1 text-[10px] text-zinc-600 italic">Pulling repo...</p>
        </div>
        <div className="card-tech border-dashed opacity-70 grayscale hover:grayscale-0">
          <i className="devicon-fastapi-plain colored mb-4 block text-3xl"></i>
          <h4 className="text-xs font-bold tracking-widest uppercase">FastAPI</h4>
          <p className="mt-1 text-[10px] text-zinc-600 italic">Optimizing...</p>
        </div>
        <div className="card-tech flex flex-col items-center justify-center border-dashed text-center opacity-70">
          <span className="mb-2 text-2xl font-bold italic">AI</span>
          <h4 className="text-xs font-bold tracking-widest uppercase">
            Genetic Algo
          </h4>
          <p className="mt-1 text-[10px] text-zinc-600 italic">Simulating...</p>
        </div>
        <div className="card-tech flex flex-col items-center justify-center border-dashed text-center opacity-70">
          <span className="mb-2 text-2xl font-bold italic">~</span>
          <h4 className="text-xs font-bold tracking-widest uppercase">
            Fuzzy Logic
          </h4>
          <p className="mt-1 text-[10px] text-zinc-600 italic">Computing...</p>
        </div>
      </div>
    </section>
  );
}
