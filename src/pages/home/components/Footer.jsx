import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-glass-border pt-8 font-mono text-xs text-darkgray-600 sm:flex-row sm:items-center">
      <div className="flex items-center space-x-2">
        <span>LOCATED_IN:</span>
        <span className="font-sans text-white/60">Bangkalan, Indonesia</span>
      </div>
      <div>© 2026 Evan Alifian. All rights reserved.</div>
    </footer>
  );
}
