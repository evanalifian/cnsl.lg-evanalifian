import React from "react";

export default function SectionContent({
  pageName,
  sectionName,
  title,
  children,
}) {
  return (
    <section id={sectionName} className="scroll-mt-32 space-y-6">
      <h2>
        <a
          href={`/${pageName}#${sectionName}`}
          className="flex items-center space-x-2 font-mono text-[11px] font-bold tracking-[0.25em] text-white uppercase"
        >
          <span>{title}</span>
        </a>
      </h2>
      {children}
    </section>
  );
}
