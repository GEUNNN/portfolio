const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 md:px-20"
    >
      <p className="font-mono text-sm tracking-widest text-red-400 uppercase mb-4">
        Hello, I&apos;m
      </p>
      <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-4">
        Geunhwa Lee
      </h1>
      <h2 className="text-2xl md:text-3xl text-zinc-400 mb-8">
        Frontend Developer
      </h2>
      <p className="text-zinc-500 max-w-xl mb-10 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors duration-200"
        >
          Let&apos;s Connect
        </a>
        <a
          href="#projects"
          className="px-6 py-3 border border-white/20 hover:border-white/50 text-zinc-300 font-medium rounded transition-colors duration-200"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
