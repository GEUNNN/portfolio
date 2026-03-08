const experiences = [
  {
    company: "Acme Corporation",
    role: "Frontend Developer",
    period: "Jan 2023 – Present",
    bullets: [
      "Led development of the main product dashboard used by 10,000+ users",
      "Improved page load performance by 40% through code splitting and lazy loading",
      "Mentored junior developers and conducted weekly code reviews",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "React Query"],
  },
  {
    company: "Startup XYZ",
    role: "Junior Frontend Developer",
    period: "Jun 2021 – Dec 2022",
    bullets: [
      "Built a reusable component library adopted across multiple products",
      "Collaborated with designers to implement pixel-perfect UI from Figma",
      "Integrated third-party APIs and payment gateways",
    ],
    tags: ["React", "JavaScript", "Styled Components"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Jan 2020 – May 2021",
    bullets: [
      "Developed and delivered 10+ client websites across various industries",
      "Managed full project lifecycle from requirements to deployment",
    ],
    tags: ["React", "Next.js", "CSS", "Git"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-20 flex flex-col items-center text-center"
    >
      <p className="font-mono text-sm tracking-widest text-red-400 uppercase mb-2">
        Work History
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
        Experience
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
                {bullets.map((b, i) => (
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
