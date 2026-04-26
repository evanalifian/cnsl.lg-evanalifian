import React from "react";

export default function NavMenuMobile() {
  return (
    <div
      id="mobile-menu"
      class="flex flex-col space-y-4 border-t border-zinc-800/50 pt-0 text-xs text-zinc-500 md:hidden"
    >
      <a
        href="./about.html"
        class="pt-2 transition-colors hover:text-green-400"
      >
        ./about
      </a>
      <a href="./projects.html" class="transition-colors hover:text-green-400">
        ./projects
      </a>
      <a
        href="./contact.html"
        class="pb-2 transition-colors hover:text-green-400"
      >
        ./contact
      </a>
    </div>
  );
}
