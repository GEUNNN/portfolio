"use client";

import { useLanguage } from "../context/LanguageContext";

const socials = ["GitHub", "LinkedIn", "Twitter"];

const Footer = () => {
  const { dict } = useLanguage();

  return (
    <footer className="py-8 px-8 md:px-20 border-t border-white/5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
      <div className="flex flex-col items-center sm:items-start gap-1">
        <p className="font-serif text-sm text-zinc-600">
          {dict.footer.copyright}
        </p>
        <p className="font-serif text-xs text-zinc-500">
          {dict.footer.designPrefix}{" "}
          <a
            href="https://www.abhayrana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-red-400 transition-colors"
          >
            Abhay Rana
          </a>
        </p>
      </div>
      <div className="flex gap-6 text-sm text-zinc-600">
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
    </footer>
  );
};

export default Footer;
