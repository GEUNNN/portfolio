"use client";

import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { dict } = useLanguage();

  const experiences = [
    {
      company: "Acme Corporation",
      role: dict.experience.list[0].role,
      period: dict.experience.list[0].period,
      bullets: dict.experience.list[0].bullets,
      tags: ["React", "TypeScript", "Tailwind CSS", "React Query"],
    },
    {
      company: "Startup XYZ",
      role: dict.experience.list[1].role,
      period: dict.experience.list[1].period,
      bullets: dict.experience.list[1].bullets,
      tags: ["React", "JavaScript", "Styled Components"],
    },
    {
      company: "Freelance",
      role: dict.experience.list[2].role,
      period: dict.experience.list[2].period,
      bullets: dict.experience.list[2].bullets,
      tags: ["React", "Next.js", "CSS", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-20 flex flex-col items-center text-center"
    >
      <p className="font-mono text-sm tracking-widest text-red-400 uppercase mb-2">
        {dict.experience.subtitle}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
        {dict.experience.title}
      </h2>

      <div className="space-y-0 w-full max-w-3xl text-left">
        {experiences.map(({ company, role, period, bullets, tags }, index) => (
          <div key={company} className="flex gap-6">
            {/* Timeline column */}
            <div className="flex flex-col items-center w-4 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400 shrink-0 mt-1.5" />
              {index < experiences.length - 1 && (
                <div className="w-px flex-1 bg-white/10 mt-2" />
              )}
            </div>

            {/* Content */}
            <div
              className={`flex-1 ${index < experiences.length - 1 ? "pb-12" : ""}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                <h3 className="font-serif text-xl font-semibold">{company}</h3>
                <span className="text-zinc-600 hidden sm:block">·</span>
                <span className="text-red-400 font-medium text-sm">{role}</span>
              </div>
              <p className="font-mono text-xs text-zinc-600 tracking-wide mb-4">
                {period}
              </p>
              <ul className="space-y-2 mb-4">
                {bullets.map((b: string, i: number) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-400">
                    <span className="text-red-400 mt-0.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono bg-white/5 text-zinc-500 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
