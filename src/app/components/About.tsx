const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects" },
  { value: "10+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-8 md:px-20 flex flex-col items-center text-center"
    >
      <p className="font-mono text-sm tracking-widest text-red-400 uppercase mb-2">
        Get To Know
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start w-full max-w-5xl text-left">
        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
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
