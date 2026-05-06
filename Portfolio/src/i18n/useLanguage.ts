import { useState, useEffect } from "react";
import { translations } from "./translations";

let globalLang: "en" | "de" = (localStorage.getItem("lang") as "en" | "de") || "en";

const listeners: ((lang: "en" | "de") => void)[] = [];

export const useLanguage = () => {
  const [lang, setLangState] = useState<"en" | "de">(globalLang);

  useEffect(() => {
    const update = (value: "en" | "de") => setLangState(value);
    listeners.push(update);

    return () => {
      const index = listeners.indexOf(update);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  const setLang = (value: "en" | "de") => {
    globalLang = value;
    localStorage.setItem("lang", value);

    listeners.forEach(l => l(value));
  };

  const t = translations[lang];

  return { lang, setLang, t };
};
