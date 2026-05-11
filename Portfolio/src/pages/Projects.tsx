// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ProjectCard from "../components/ui/ProjectCard";
// import { projects } from "../data/projects.ts";
// import ScrollImageSections from "../components/ui/ScrollImageSections.tsx";
// import { useLanguage } from "../i18n/useLanguage";

// export default function Projects() {
//   const [active, setActive] = useState<any | null>(null);

//   const { lang } = useLanguage();

//   const sections = active?.sections?.[lang ?? "en"];
//   console.log(lang);
//   // const sections = active?.sections?.[lang] || active?.sections?.en || active?.sections?.de;
//   // ESC close
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setActive(null);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <section className="text-white min-h-screen px-10 py-20">
//       <h1 className="text-4xl md:text-5xl font-bold mb-10">Projekte</h1>

//       {/* GRID */}
//       <div className="grid md:grid-cols-2 gap-10">
//         {projects.map(p => (
//           <ProjectCard key={p.slug} project={p} onClick={() => setActive(p)} />
//         ))}
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {active && (
//           <motion.div
//             className="fixed inset-0 z-50 backdrop-blur-xl overflow-y-auto"
//             style={{ backgroundColor: "#111" }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActive(null)}
//           >
//             <motion.div className="p-10" onClick={e => e.stopPropagation()}>
//               {/* CLOSE */}
//               <button
//                 onClick={() => setActive(null)}
//                 className="fixed top-6 right-6 text-white text-3xl"
//               >
//                 ✕
//               </button>

//               {/* IMAGE */}
//               <img src={active.image} className="w-full h-100 object-cover rounded-2xl" />

//               {/* TEXT */}
//               <div className="max-w-4xl mx-auto mt-10 space-y-4">
//                 <h1 className="text-5xl font-bold">{active.title}</h1>
//                 <p className="text-gray-300 text-xl">{active.desc}</p>
//               </div>

//               {/* STORY */}
//               <div className="mt-20">{sections && <ScrollImageSections sections={sections} />}</div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

/// #2 Design
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";

export default function Projects() {
  const [active, setActive] = useState<any | null>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="max-w-7xl mx-auto  min-h-screen px-10 py-20">
      <h1 className="text-5xl font-bold mb-12">Projekte</h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} onClick={() => setActive(p)} />
        ))}
      </div>

      {/* SIMPLE MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="max-w-3xl w-full space-y-6"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              {/* IMAGE */}
              <img src={active.image} className="w-full h-96 object-cover rounded-2xl" />

              {/* TITLE */}
              <h2 className="text-4xl font-bold">{active.title}</h2>

              {/* DESC */}
              <p className="text-gray-300 text-lg">{active.desc}</p>

              {/* TECH */}
              {active.tech && (
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* FEATURES */}
              {active.features && (
                <ul className="list-disc pl-5 text-gray-300">
                  {active.features.map((f: string) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
