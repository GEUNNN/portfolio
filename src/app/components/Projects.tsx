"use client";

import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { dict } = useLanguage();

  const projects = [
    {
      ...dict.projects.list[0],
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      live: "#",
      github: "#",
    },
    {
      ...dict.projects.list[1],
      tech: ["React", "React Query", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
    },
    {
      ...dict.projects.list[2],
      tech: ["React Native", "TypeScript"],
      live: "#",
      github: "#",
    },
    {
      ...dict.projects.list[3],
      tech: ["Next.js", "Tailwind CSS", "Prisma", "Vercel"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-8 md:px-20 flex flex-col items-center text-center"
    >
      <p className="font-mono text-sm tracking-widest text-red-400 uppercase mb-2">
        {dict.projects.subtitle}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
        {dict.projects.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl text-left">
        {projects.map(({ title, description, tech, live, github }) => (
          <div
            key={title}
            className="flex flex-col gap-4 p-6 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-all duration-200"
          >
            <h3 className="font-serif text-xl font-semibold">{title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed flex-1">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t: string) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs font-mono bg-white/5 text-zinc-400 rounded border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm pt-1">
              <a
                href={live}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                {dict.projects.demo}
              </a>
              <a
                href={github}
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {dict.projects.github}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
