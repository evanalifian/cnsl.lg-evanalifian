import CardProject from "../2_molecules/CardProject";

export default function ProjectsGrid({ projects }) {
  return (
    <section className="space-y-4 py-28 md:text-center lg:text-start">
      <h2
        id="projects"
        className="scroll-mt-24 text-3xl font-medium text-gray-900 md:text-center md:text-4xl dark:text-gray-50"
      >
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <CardProject key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
