import DropdownMenu from "../ui/DropdownMenu";
import NavMenu from "../ui/NavMenu";

const paths = [
  {
    name: "Techs",
    path: "#techs",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Projects",
    path: "#projects",
  },
];

export default function HeaderNav() {
  return (
    <header className="fixed top-0 z-10 w-full border-b border-dashed border-zinc-300 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between p-4">
        <a
          href="/"
          className="text-xl font-medium text-gray-700 transition-colors hover:text-black"
        >
          evanalifian
        </a>
        <>
          <DropdownMenu paths={paths} />
          <NavMenu paths={paths} />
        </>
      </nav>
    </header>
  );
}
