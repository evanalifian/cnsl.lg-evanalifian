import { FileUser } from "lucide-react";
import { ButtonsLinks } from "../1_atoms/Buttons";

export default function Jumbotron({ alias, tagline }) {
  return (
    <section className="space-y-8 pt-32 pb-16 md:text-center">
      <span className="font-mono text-sm text-gray-700 md:text-center">
        {alias}
      </span>
      <h1 className="mt-2 text-4xl font-medium text-gray-900 md:text-5xl lg:text-6xl">
        {tagline}
      </h1>
      <ButtonsLinks href="/cv.pdf" sty>
        <FileUser />
        Download CV
      </ButtonsLinks>
    </section>
  );
}
