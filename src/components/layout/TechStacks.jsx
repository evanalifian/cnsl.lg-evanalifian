export default function TechStacks({ techs }) {
  return (
    <section className="space-y-4 py-28">
      <h2
        id="techs"
        className="scroll-mt-24 font-mono text-xl font-bold text-gray-900 md:text-center"
      >
        Currently tech that i use
      </h2>
      <ul className="flex flex-wrap gap-4 md:justify-center">
        {techs.map((t) => (
          <li key={t.name}>
            <img
              src={t.icon}
              alt={`${t.name} icon`}
              title={t.name}
              className="w-7 grayscale hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
