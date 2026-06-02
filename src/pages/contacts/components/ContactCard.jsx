import React from "react";

export default function ContactCard({ platform_name, url }) {
  return (
    <a href={url} className="bg-glass group flex items-center justify-between rounded-2xl border border-glass-border px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:border-glass-borderHover hover:bg-glass-bgHover">
      <div className="flex items-center space-x-4">
        <span className="font-mono text-[10px] tracking-widest text-white/30">
          // contact
        </span>
        <h3 className="text-base font-normal tracking-tight text-white transition-colors group-hover:text-darkgray-400">
          {platform_name}
        </h3>
      </div>
      <span className="flex items-center font-mono text-xs tracking-wider text-white/40 transition-colors group-hover:text-white">
        get in touch
        <span className="ml-1.5 text-[9px] transition-transform group-hover:translate-x-0.5">
          ↗
        </span>
      </span>
    </a>
  );
}
