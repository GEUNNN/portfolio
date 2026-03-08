const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between px-8 py-4 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <h1 className="font-serif text-lg font-semibold tracking-wide">Geunhwa Lee</h1>
      <nav>
        <ul className="flex flex-row gap-8 text-sm text-zinc-400">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-red-400 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-sm text-zinc-400 hover:text-red-400 cursor-pointer transition-colors duration-200">
        KO / EN
      </div>
    </header>
  );
};

export default Header;
