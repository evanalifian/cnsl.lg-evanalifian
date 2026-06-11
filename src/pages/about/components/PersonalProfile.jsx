import React from "react";
import SectionContent from "../../../components/SectionContent";

export default function PersonalProfile() {
  return (
    <SectionContent
      pageName="about"
      sectionName="personal-profile"
      title="Personal_Profile"
    >
      <div className="bg-glass space-y-6 rounded-2xl border border-glass-border p-6 text-base leading-relaxed font-light text-darkgray-400 backdrop-blur-xl sm:p-8">
        <p>
          Hi, I am <span className="font-normal text-white">Evan Alifian</span>.
          I am a Full-Stack Engineer based in Bangkalan. I focus deeply on
          writing clean, efficient, and well-structured code using modern
          software methodologies.
        </p>
        <p>
          I dedicate my time to understanding the intricacies of software
          architecture, optimizing server-side data exchange performance, and
          designing modular user interfaces to ensure long-term maintainability.
        </p>
      </div>
    </SectionContent>
  );
}
