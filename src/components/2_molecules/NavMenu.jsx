import React from "react";
import { Link } from "react-router";

export default function NavMenu() {
  return (
    <>
      <div className="hidden space-x-6 text-zinc-500 md:flex">
        <Link to="/about" className="transition-colors hover:text-green-400">
          ./about
        </Link>
        <Link
          to="/projects"
          className="transition-colors hover:text-green-400"
        >
          ./projects
        </Link>
        <Link to="/contact" className="transition-colors hover:text-green-400">
          ./contact
        </Link>
      </div>

      <button
        id="menu-toggle"
        className="text-zinc-400 hover:text-green-400 focus:outline-none md:hidden"
      >
        <i data-lucide="menu" id="menu-icon"></i>
      </button>
    </>
  );
}
