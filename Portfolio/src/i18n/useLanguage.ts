import { useState } from "react";
import { translations } from "./translations";

export const useLanguage = () => {
  const [lang, setLang] = useState<"en" | "de">("en");

  const t = translations[lang];

  return { lang, setLang, t };
};
