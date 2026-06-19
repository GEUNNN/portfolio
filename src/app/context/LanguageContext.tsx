"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import en from "@/dictionaries/en.json" assert { type: "json" };
import ko from "@/dictionaries/ko.json" assert { type: "json" };

type Language = "en" | "ko";
type Dictionary = typeof en;

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("ko");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ko" : "en"));
  };

  const dict = lang === "en" ? en : ko;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
