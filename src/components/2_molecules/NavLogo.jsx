import React from "react";

export default function NavLogo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="mr-2 hidden space-x-1.5 sm:flex">
        <span className="h-2.5 w-2.5 rounded-full border border-red-900 bg-red-500/20"></span>
        <span className="h-2.5 w-2.5 rounded-full border border-yellow-900 bg-yellow-500/20"></span>
        <span className="h-2.5 w-2.5 rounded-full border border-green-900 bg-green-500/20"></span>
      </div>
      <span className="font-bold">
        evan@portfolio:~<span className="cmd-text">$</span>
      </span>
    </div>
  );
}
