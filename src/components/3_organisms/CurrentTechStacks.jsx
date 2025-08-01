import TechList from "../2_molecules/TechList";

export default function CurrentTechStacks({ techs }) {
  return (
    <section className="space-y-4 py-28">
      <h2
        id="techs"
        className="scroll-mt-24 font-mono text-xl font-bold text-gray-900 md:text-center dark:text-gray-50"
      >
        Currently tech that i use
      </h2>
      <TechList techs={techs} />
    </section>
  );
}
