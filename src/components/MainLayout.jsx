import React from "react";
import Navbar from "./Navbar";
import MainSidebar from "./MainSidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-pureblack pt-6 font-sans text-gray-200 antialiased selection:bg-white selection:text-black">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-6 pt-16 lg:flex-row lg:gap-20 lg:px-12">
        <MainSidebar />
        <main className="space-y-16 py-6 lg:w-[60%] lg:py-16">{children}</main>
        <footer className="block space-y-2 border-t border-glass-border pt-8 font-mono text-xs text-darkgray-600 lg:hidden">
          <div className="flex items-center space-x-1.5">
            <span>LOCATED_IN:</span>
            <span className="font-sans text-white/60">Bangkalan, Indonesia</span>
          </div>
          <div>© 2026 Evan Alifian. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
