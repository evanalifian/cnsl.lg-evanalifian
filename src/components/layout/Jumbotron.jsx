import { FileUser } from "lucide-react";

export default function Jumbotron({ alias, tagline }) {
  return (
    <section className="space-y-8 pt-32 pb-16 md:text-center">
      <span className="font-mono text-sm md:text-center">{alias}</span>
      <h1 className="mt-2 text-4xl font-medium text-gray-900 md:text-5xl lg:text-6xl">
        {tagline}
      </h1>
      <a
        href="/cv.pdf"
        target="_blank"
        className="inline-flex items-center gap-x-2 rounded-lg bg-zinc-900 p-3 text-sm font-medium text-gray-50 transition-colors hover:bg-zinc-800"
      >
        <FileUser />
        Download CV
      </a>
    </section>
  );
}
