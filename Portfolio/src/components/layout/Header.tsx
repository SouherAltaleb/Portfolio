import { useEffect, useState } from "react";
import { useLanguage } from "../../lib/useLanguage";
import { Link } from "react-router-dom";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  // dark mode toggle
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || "light");

  function toggleTheme() {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.dataset.theme = saved;
      setTheme(saved);
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          <img src="/logo.svg" alt="logo" className="w-16" />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li className="hover:text-(--primary) cursor-pointer">{t.home}</li>
          <li className="hover:text-(--primary) cursor-pointer">{t.projects}</li>
          <li className="hover:text-(--primary) cursor-pointer">{t.skills}</li>
          <li className="hover:text-(--primary) cursor-pointer">{t.contact}</li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Language */}
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="text-xs border px-2 py-1 rounded-md"
          >
            {lang.toUpperCase()}
          </button>

          {/* Theme */}
          {/* <button onClick={toggleTheme}>
            <img
              src={dark ? "/icons/sun.svg" : "/icons/moon.svg"}
              className="w-7 h-7 bg-(--accent)"
            />
          </button> */}

          <button
            onClick={toggleTheme}
            aria-label="Theme wechseln"
            className={[
              "grid h-7 w-7 place-items-center  shadow-sm hover:scale-105 active:scale-95 transition",
              theme === "dark" ? "color-(--accent)" : "color-(--primary)/40"
            ].join(" ")}
          >
            <img
              src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
              alt=""
              className="h-7 w-7 transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
