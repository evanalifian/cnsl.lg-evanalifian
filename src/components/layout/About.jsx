import data from "../../../data.json";

export default function About() {
  return (
    <section className="space-y-8 py-28 md:text-center">
      <h2
        id="about"
        className="scroll-mt-16 text-3xl font-medium text-gray-900 md:scroll-mt-24 md:text-4xl"
      >
        About Me
      </h2>
      <p className="font-mono text-gray-600 md:text-xl lg:mx-auto lg:w-11/12">
        {data.about}
      </p>
    </section>
  );
}
