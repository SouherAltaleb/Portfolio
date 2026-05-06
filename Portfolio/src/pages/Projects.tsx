import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects.ts";
import ScrollImageSections from "../components/ui/ScrollImageSections.tsx";
import { useLanguage } from "../i18n/useLanguage";

export default function Projects() {
  const [active, setActive] = useState<any | null>(null);

  const { lang } = useLanguage();

  const sections = active?.sections?.[lang ?? "en"];
  console.log(lang);
  // const sections = active?.sections?.[lang] || active?.sections?.en || active?.sections?.de;
  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="text-white min-h-screen px-10 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Projekte</h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} onClick={() => setActive(p)} />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 backdrop-blur-xl overflow-y-auto"
            style={{ backgroundColor: "#111" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div className="p-10" onClick={e => e.stopPropagation()}>
              {/* CLOSE */}
              <button
                onClick={() => setActive(null)}
                className="fixed top-6 right-6 text-white text-3xl"
              >
                ✕
              </button>

              {/* IMAGE */}
              <img src={active.image} className="w-full h-100 object-cover rounded-2xl" />

              {/* TEXT */}
              <div className="max-w-4xl mx-auto mt-10 space-y-4">
                <h1 className="text-5xl font-bold">{active.title}</h1>
                <p className="text-gray-300 text-xl">{active.desc}</p>
              </div>

              {/* STORY */}
              <div className="mt-20">{sections && <ScrollImageSections sections={sections} />}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
