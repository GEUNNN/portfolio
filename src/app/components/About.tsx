"use client";

import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { dict, lang } = useLanguage();

  const stats = [
    { value: lang === "ko" ? "26.2만" : "260K+", label: dict.about.stats.mau },
    { value: "5M+", label: dict.about.stats.users },
    { value: "90%", label: dict.about.stats.impact },
  ];

  return (
    <section
      id="about"
      className="py-24 px-8 md:px-20 flex flex-col items-center text-center"
    >
      <p className="font-mono text-sm tracking-widest text-red-400 uppercase mb-2">
        {dict.about.subtitle}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
        {dict.about.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start w-full max-w-5xl text-left">
        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>{dict.about.p1}</p>
          <p>{dict.about.p2}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-white/5 bg-white/5 text-center"
            >
              <span className="font-serif text-3xl font-bold text-red-400 mb-1">
                {value}
              </span>
              <span className="text-xs text-zinc-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
