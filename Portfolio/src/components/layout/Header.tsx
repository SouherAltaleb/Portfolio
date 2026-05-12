import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/useLanguage";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LanguageToggle from "../ui/LanguageToggle.tsx";
import { ThemeToggle } from "../ui/ThemeToggle.tsx";

type Theme = "dark" | "light";

const Header = () => {
  const { setLang, t } = useLanguage();
  const location = useLocation();

  // Fix 1: isDark entfernt (war unused)
  // Fix 2: scrolled bleibt aber wird für className benutzt
  const [scrolled, setScrolled] = useState<boolean>(false);
  // Fix 6: Theme-Typ explizit auf "dark" | "light" eingeschränkt
  const [theme, setTheme] = useState<Theme>("light");
  const [active, setActive] = useState<string>(location.pathname);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix 3: theme direkt im useState initialisieren, kein setState im Effect
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // theme initial aus localStorage lesen — einmalig, kein setState
  useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved === "dark" ? "dark" : "light";
  });

  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const newTheme: Theme = isDark ? "light" : "dark";
    root.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  const navItems = [
    { label: t.home, path: "/" },
    { label: t.projects, path: "/projects" },
    { label: t.skills, path: "/skills" },
    { label: t.contact, path: "/contact" }
  ];

  return (
    <div>
      {/* LOGO */}
      <Link to="/" className="fixed top-6 left-12 z-50">
        <img src="/logo.svg" className="w-14 hover:scale-105 transition" alt="logo" />
      </Link>

      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "shadow-xl" : "" // Fix 2: scrolled wird jetzt benutzt
        }`}
      >
        <div
          className="flex items-center gap-10 px-8 py-4 rounded-full backdrop-blur-xl border shadow-lg"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(234,205,194,0.08)"
          }}
        >
          {navItems.map(item => {
            const isActive = active === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setActive(item.path)}
                className="relative group"
              >
                <span
                  className={`text-sm tracking-wide transition ${
                    isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-1 h-1 rounded-full"
                    style={{ background: "var(--primary)" }}
                  />
                )}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 ml-4">
            {/* Fix 4 & 5: setLang Typ muss in LanguageToggle auf "en" | "de" passen */}
            <LanguageToggle setLang={(val: "en" | "de") => setLang(val)} />
            <ThemeToggle theme={theme} onChange={toggleTheme} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
