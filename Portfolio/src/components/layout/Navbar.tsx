// import { useState } from "react";
// import { useLanguage } from "../../lib/useLanguage";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const { lang, setLang, t } = useLanguage();
//   const [dark, setDark] = useState(false);

//   const toggleTheme = () => {
//     document.documentElement.classList.toggle("dark");
//     setDark(!dark);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-white/10">
//       <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-semibold tracking-tight">
//           <img src="logo.svg" alt="logo" className="w-20" />
//         </Link>

//         {/* Navigation */}
//         <ul className="hidden md:flex gap-8 text-sm">
//           <li className="hover:text-var(--primary)] cursor-pointer">
//             {t.home}
//           </li>
//           <li className="hover:text-var(--primary) cursor-pointer">
//             {t.projects}
//           </li>
//           <li className="hover:text-var(--primary) cursor-pointer">
//             {t.skills}
//           </li>
//           <li className="hover:text-var(--primary) cursor-pointer">
//             {t.contact}
//           </li>
//         </ul>

//         {/* Actions */}
//         <div className="flex items-center gap-4">
//           {/* Language Switch */}
//           <button
//             onClick={() => setLang(lang === "en" ? "de" : "en")}
//             className="text-sm border px-2 py-1 rounded-md"
//           >
//             {lang.toUpperCase()}
//           </button>

//           {/* Theme Toggle */}
//           <button onClick={toggleTheme}>
//             <img
//               src={dark ? "/icons/sun.svg" : "/icons/moon.svg"}
//               className="w-5 h-5"
//             />
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { useLanguage } from "../../lib/useLanguage";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const { lang, setLang, t } = useLanguage();
//   const [dark, setDark] = useState(false);

//   const toggleTheme = () => {
//     document.documentElement.classList.toggle("dark");
//     setDark(!dark);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 dark:bg-black/30 border-b border-white/10 flex">
//       <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src="/logo.svg" alt="logo" className="w-10" />
//           <span className="font-semibold text-lg">Souher</span>
//         </Link>

//         {/* Navigation */}
//         <ul className="hidden md:flex gap-8 text-sm">
//           {["home", "projects", "skills", "contact"].map((item) => (
//             <li key={item}>
//               <Link
//                 to={`/${item === "home" ? "" : item}`}
//                 className="relative group"
//               >
//                 {t[item]}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-blue-500 transition-all group-hover:w-full"></span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Actions */}
//         <div className="flex items-center gap-3">
//           {/* Language */}
//           <button
//             onClick={() => setLang(lang === "en" ? "de" : "en")}
//             className="text-sm px-3 py-1 rounded-lg border border-white/20 backdrop-blur-md hover:bg-white/10 transition"
//           >
//             {lang.toUpperCase()}
//           </button>

//           {/* Theme */}
//           <button onClick={toggleTheme} className="p-2 rounded-lg  transition">
//             btn
//             <img
//               src={dark ? "/icons/sun.svg" : "/icons/moon.svg"}
//               className="w-12 h-12"
//             />
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
