import React from "react";

export default function NavLogo() {
  return (
    <div class="flex items-center space-x-2">
      <div class="mr-2 hidden space-x-1.5 sm:flex">
        <span class="h-2.5 w-2.5 rounded-full border border-red-900 bg-red-500/20"></span>
        <span class="h-2.5 w-2.5 rounded-full border border-yellow-900 bg-yellow-500/20"></span>
        <span class="h-2.5 w-2.5 rounded-full border border-green-900 bg-green-500/20"></span>
      </div>
      <span class="font-bold">
        evan@portfolio:~<span class="cmd-text">$</span>
      </span>
    </div>
  );
}
