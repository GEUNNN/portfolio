"use client";

import { useLanguage } from "../context/LanguageContext";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

const Header = () => {
  const { dict, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 flex items-center justify-between px-8 py-4 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <h1 className="font-serif text-lg font-semibold tracking-wide">
        Geunhwa Lee
      </h1>
      <nav>
        <ul className="flex flex-row gap-8 text-sm text-zinc-400">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-red-400 transition-colors duration-200"
              >
                {dict.header[item]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        onClick={toggleLanguage}
        className="text-sm text-zinc-400 hover:text-red-400 cursor-pointer transition-colors duration-200 select-none"
      >
        {dict.header.langToggle}
      </div>
    </header>
  );
};

export default Header;
