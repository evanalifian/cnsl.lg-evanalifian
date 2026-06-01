import React from 'react'

export default function PersonalProfile() {
  return (
    <section id="profile" className="scroll-mt-32 space-y-6">
      <div className="flex items-center space-x-2 font-mono text-[11px] font-bold tracking-[0.25em] text-white/30 uppercase">
        <span>[01]</span> <span>PERSONAL_PROFILE</span>
      </div>
      <div className="bg-glass space-y-6 rounded-2xl border border-glass-border p-6 text-base leading-relaxed font-light text-darkgray-400 backdrop-blur-xl sm:p-8">
        <p>
          Hi, I am <span className="font-normal text-white">Evan Alifian</span>. I
          am a Full-Stack Engineer based in Bangkalan. I focus deeply on writing
          clean, efficient, and well-structured code using modern software
          methodologies.
        </p>
        <p>
          I dedicate my time to understanding the intricacies of software
          architecture, optimizing server-side data exchange performance, and
          designing modular user interfaces to ensure long-term maintainability.
        </p>
      </div>
    </section>
  );
}
