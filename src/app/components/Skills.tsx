"use client";

import { useLanguage } from "../context/LanguageContext";
import { skillsList } from "@/constants/skills";

const Skills = () => {
  const { dict } = useLanguage();

  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-20 flex flex-col items-center text-center"
    >
      <p className="font-mono text-sm tracking-widest text-red-400 uppercase mb-2">
        {dict.skills.subtitle}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
        {dict.skills.title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-5xl">
        {skillsList.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-lg border border-white/5 bg-white/5 hover:border-red-400/30 hover:bg-red-400/5 transition-all duration-200 group"
          >
            {icon ? (
              <img src={icon} alt={name} className="w-10 h-10 object-contain" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-400 font-mono">
                {name[0]}
              </div>
            )}
            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
