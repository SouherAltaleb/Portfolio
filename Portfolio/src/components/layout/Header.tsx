// import { useEffect, useState } from "react";
// import { useLanguage } from "../../i18n/useLanguage";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const { setLang, t } = useLanguage();
//   // dark mode toggle
//   const [theme, setTheme] = useState(document.documentElement.dataset.theme || "light");

//   function toggleTheme() {
//     const root = document.documentElement;
//     const isDark = root.classList.contains("dark");

//     if (isDark) {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setTheme("light");
//     } else {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setTheme("dark");
//     }
//   }

//   useEffect(() => {
//     const saved = localStorage.getItem("theme");

//     if (saved === "dark") {
//       document.documentElement.classList.add("dark");
//       setTheme("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       setTheme("light");
//     }
//   }, []);

//   return (
//     <nav className="fixed top-0 w-full z-50 backdrop-blur-lg ">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-semibold tracking-tight">
//           <img src="/logo.svg" alt="logo" className="w-16" />
//         </Link>

//         {/* Links */}
//         <ul className="hidden md:flex gap-8 text-sm">
//           <li className="hover:text-(--primary) cursor-pointer">{t.home}</li>
//           <li className="hover:text-(--primary) cursor-pointer">{t.projects}</li>
//           <li className="hover:text-(--primary) cursor-pointer">{t.skills}</li>
//           <li className="hover:text-(--primary) cursor-pointer">{t.contact}</li>
//         </ul>

//         {/* Actions */}
//         <div className="flex items-center gap-4">
//           {/* Language */}
//           <button onClick={() => setLang("de")}>DE</button>
//           <button onClick={() => setLang("en")}>EN</button>
//           {/* <button
//             onClick={() => setLang(lang === "en" ? "de" : "en")}
//             className="text-xs border px-2 py-1 rounded-md"
//           >
//             {lang.toUpperCase()}
//           </button> */}

//           {/* Theme */}
//           {/* <button onClick={toggleTheme}>
//             <img
//               src={dark ? "/icons/sun.svg" : "/icons/moon.svg"}
//               className="w-7 h-7 bg-(--accent)"
//             />
//           </button> */}

//           <button
//             onClick={toggleTheme}
//             aria-label="Theme wechseln"
//             className={[
//               "grid h-7 w-7 place-items-center  shadow-sm hover:scale-105 active:scale-95 transition",
//               theme === "dark" ? "color-(--accent)" : "color-(--primary)/40"
//             ].join(" ")}
//           >
//             <img
//               src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon-full.svg"}
//               alt=""
//               className="h-7 w-7 transition-all duration-300"
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import { useEffect, useState } from "react";
// import { useLanguage } from "../../i18n/useLanguage";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const { setLang, t } = useLanguage();
//   const [theme, setTheme] = useState(() => localStorage.getItem("theme") === "dark" ? "dark" : "light");

//   function toggleTheme() {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   }

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const navItems = [
//     { label: t.home, path: "/" },
//     { label: t.projects, path: "/projects" },
//     { label: t.skills, path: "/skills" },
//     { label: t.contact, path: "/contact" }
//   ];

//   return (
//     <nav
//       className="fixed top-0 w-full z-50 backdrop-blur-xl border-b"
//       style={{
//         background: "rgba(26,20,35,0.6)",
//         borderColor: "rgba(234,205,194,0.08)"
//       }}
//     >
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center">
//           <img src="/logo.svg" alt="logo" className="w-14 hover:scale-105 transition" />
//         </Link>

//         {/* NAV LINKS */}
//         <ul className="hidden md:flex gap-10 text-sm">
//           {navItems.map(item => (
//             <li key={item.label} className="relative group cursor-pointer">
//               <Link to={item.path} className="opacity-80 group-hover:opacity-100 transition">
//                 {item.label}
//               </Link>

//               {/* underline animation */}
//               <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[var(--primary)] group-hover:w-full transition-all duration-300" />
//             </li>
//           ))}
//         </ul>

//         {/* ACTIONS */}
//         <div className="flex items-center gap-4">
//           {/* LANG */}
//           <div className="flex gap-2 text-xs">
//             <button
//               onClick={() => setLang("de")}
//               className="hover:text-[var(--primary)] transition"
//             >
//               DE
//             </button>
//             <span className="opacity-40">/</span>
//             <button
//               onClick={() => setLang("en")}
//               className="hover:text-[var(--primary)] transition"
//             >
//               EN
//             </button>
//           </div>

//           {/* THEME */}
//           <button
//             onClick={toggleTheme}
//             className="w-9 h-9 grid place-items-center rounded-full border transition hover:scale-105 active:scale-95"
//             style={{
//               borderColor: "rgba(234,205,194,0.15)",
//               background: "rgba(255,255,255,0.03)"
//             }}
//           >
//             <img
//               src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon-full.svg"}
//               className="w-5 h-5"
//               alt=""
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import { useEffect, useState } from "react";
// import { useLanguage } from "../../i18n/useLanguage";
// import { Link, useLocation } from "react-router-dom";

// const Header = () => {
//   const isDark = document.documentElement.classList.contains("dark");
//   const { setLang, t } = useLanguage();
//   const location = useLocation();

//   const [theme, setTheme] = useState(() =>
//     localStorage.getItem("theme") === "dark" ? "dark" : "light"
//   );
//   const [scrolled, setScrolled] = useState(false);

//   function toggleTheme() {
//     const root = document.documentElement;
//     const isDark = root.classList.contains("dark");

//     if (isDark) {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setTheme("light");
//     } else {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setTheme("dark");
//     }
//   }

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [theme]);

//   const navItems = [
//     { label: t.home, path: "/" },
//     { label: t.projects, path: "/projects" },
//     { label: t.skills, path: "/skills" },
//     { label: t.contact, path: "/contact" }
//   ];

//   return (
//     <nav
//       className="fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300"
//       style={{
//         backdropFilter: "blur(16px)",
//         background: scrolled ? "transparent" : "transparent",
//         borderBottom: "1px solid rgba(234,205,194,0.08)"
//       }}
//     >
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* LOGO */}
//         <Link to="/">
//           <img src="/logo.svg" className="w-14 hover:scale-105 transition" alt="logo" />
//         </Link>

//         {/* NAV */}
//         <ul className="hidden md:flex items-center gap-2 text-sm">
//           {[
//             { label: t.home, path: "/" },
//             { label: t.projects, path: "/projects" },
//             { label: t.skills, path: "/skills" },
//             { label: t.contact, path: "/contact" }
//           ].map(item => {
//             const isActive = location.pathname === item.path;

//             return (
//               <li key={item.label}>
//                 <Link
//                   to={item.path}
//                   className={`relative px-4 py-2 rounded-full transition-all duration-300
//           ${
//             isActive
//               ? "bg-[var(--accent)] text-[var(--text)]"
//               : "hover:bg-[var(--accent)]/40 opacity-70 hover:opacity-100"
//           }`}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>

//         {/* ACTIONS */}
//         <div className="flex items-center gap-4">
//           {/* LANG */}
//           <div className="flex gap-2 text-xs">
//             <button onClick={() => setLang("de")} className="hover:text-(--primary)">
//               DE
//             </button>
//             <span className="opacity-40">/</span>
//             <button onClick={() => setLang("en")} className="hover:text-(--primary)">
//               EN
//             </button>
//           </div>

//           {/* THEME */}
//           <button
//             onClick={toggleTheme}
//             className="w-9 h-9 grid place-items-center rounded-full border transition hover:scale-105 active:scale-95"
//             style={{
//               borderColor: "rgba(234,205,194,0.15)",
//               background: "rgba(255,255,255,0.03)"
//             }}
//           >
//             <img
//               src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon-full.svg"}
//               className="w-5 h-5"
//               alt=""
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/useLanguage";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LanguageToggle from "../ui/LanguageToggle.tsx";
import { ThemeToggle } from "../ui/ThemeToggle.tsx";

const Header = () => {
  const isDark = document.documentElement.classList.contains("dark");
  const { setLang, t } = useLanguage();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState(location.pathname);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // theme init
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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
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

                {/* active dot */}
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

          {/* actions */}
          <div className="flex items-center gap-3 ml-4">
            <LanguageToggle setLang={setLang} />
            <ThemeToggle theme={theme} onChange={toggleTheme} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
