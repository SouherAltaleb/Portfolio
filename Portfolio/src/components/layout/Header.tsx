import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/useLanguage";
import { Link } from "react-router-dom";

const Header = () => {
  const { setLang, t } = useLanguage();
  // dark mode toggle
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || "light");

  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");

    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg ">
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
          <button onClick={() => setLang("de")}>DE</button>
          <button onClick={() => setLang("en")}>EN</button>
          {/* <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="text-xs border px-2 py-1 rounded-md"
          >
            {lang.toUpperCase()}
          </button> */}

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
              src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon-full.svg"}
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
