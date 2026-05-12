import { useState } from "react";
import { motion } from "framer-motion";

type LanguageToggleProps = {
  setLang: (lang: "en" | "de") => void;
};

export default function LanguageToggle({ setLang }: LanguageToggleProps) {
  const [active, setActive] = useState<"en" | "de">("en");

  const changeLang = (lang: "en" | "de") => {
    setActive(lang);
    setLang(lang);
  };

  return (
    <div
      className="relative flex items-center p-1 rounded-full border backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(234,205,194,0.12)"
      }}
    >
      {/* sliding background */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="absolute top-1 bottom-1 w-1/2 rounded-full"
        style={{
          background: "var(--primary)",
          left: active === "en" ? "4px" : "calc(50% - 4px)"
        }}
      />

      {/* EN */}
      <button
        onClick={() => changeLang("en")}
        className={`relative z-10 px-3 py-2 text-xs rounded-full transition ${
          active === "en" ? "text-white" : "opacity-60 hover:opacity-100"
        }`}
      >
        EN
      </button>

      {/* DE */}
      <button
        onClick={() => changeLang("de")}
        className={`relative z-10 px-3 py-2 text-xs rounded-full transition ${
          active === "de" ? "text-white" : "opacity-60 hover:opacity-100"
        }`}
      >
        DE
      </button>
    </div>
  );
}
