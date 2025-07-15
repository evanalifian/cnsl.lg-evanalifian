import data from "../../../data.json";
import CardProject from "../ui/CardProject";

export default function Projects() {
  return (
    <section className="space-y-8 py-28 md:text-center lg:text-start">
      <h2
        id="projects"
        className="scroll-mt-24 text-3xl font-medium text-gray-900 md:text-center md:text-4xl"
      >
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {data.projects.map((p) => (
          <CardProject key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
