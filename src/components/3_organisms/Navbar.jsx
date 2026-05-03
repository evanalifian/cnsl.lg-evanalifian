import React from "react";
import NavMenu from "../2_molecules/NavMenu";
import NavMenuMobile from "../2_molecules/NavMenuMobile";
import NavLogo from "../2_molecules/NavLogo";

export default function Navbar() {
  return (
    <nav className="fixed top-6 right-6 left-6 z-50 rounded-lg border border-zinc-800 bg-[#0a0a0a]/80 p-3 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-xs">
        <NavLogo />
        <NavMenu />
      </div>
      <NavMenuMobile />
    </nav>
  );
}
