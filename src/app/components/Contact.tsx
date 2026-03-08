const socials = ["GitHub", "LinkedIn", "Twitter"];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-20 flex flex-col items-center text-center"
    >
      <p className="font-mono text-sm tracking-widest text-red-400 uppercase mb-2">
        Get In Touch
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
        Contact
      </h2>
      <p className="text-zinc-400 max-w-lg mx-auto mb-10 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feel free to
        reach out if you&apos;d like to work together or just say hello.
      </p>
      <a
        href="mailto:your@email.com"
        className="inline-block px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors duration-200 mb-12"
      >
        Say Hello →
      </a>
      <div className="flex justify-center gap-8 text-zinc-500 text-sm">
        {socials.map((social) => (
          <a
            key={social}
            href="#"
            className="hover:text-red-400 transition-colors duration-200"
          >
            {social}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
