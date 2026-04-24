// import { useScroll } from "framer-motion";
// import { useRef } from "react";
// import ProjectCard from "../components/ui/ProjectCard.tsx";

// const projects = [
//   {
//     title: "Project One",
//     description: "Modern web app",
//     image: "/projects/sakura.png"
//   },
//   {
//     title: "Project Two",
//     description: "Creative design",
//     image: "/projects/chiart.png"
//   },
//   {
//     title: "Project Three",
//     description: "Fullstack app",
//     image: "/images/project3.jpg"
//   }
// ];

// export default function Projects() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"]
//   });

//   return (
//     <section ref={ref} className="h-[300vh] relative bg-black">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         {projects.map((project, i) => {
//           const start = i / projects.length;
//           const end = (i + 1) / projects.length;

//           return (
//             <ProjectCard
//               key={i}
//               project={project}
//               progress={scrollYProgress}
//               start={start}
//               end={end}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects.ts";
// import ScrollSection from "../components/ui/StickySection.tsx";
import { useScroll, useTransform } from "framer-motion";
import StickySection from "../components/ui/StickySection";

export default function Projects() {
  const [active, setActive] = useState<any | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const imgScale = useTransform(scrollY, [0, 400], [1, 1.1]);
  const imgY = useTransform(scrollY, [0, 400], [0, -80]);

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className=" text-white min-h-screen px-10 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-(--text) pb-4"> Projekte </h1>
      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} onClick={() => setActive(p)} />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 backdrop-blur-xl"
            style={{ backgroundColor: active.color }}
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseMove={e => {
              const x = (e.clientX / window.innerWidth - 0.5) * 40;
              const y = (e.clientY / window.innerHeight - 0.5) * 40;
              setMouse({ x, y });
            }}
          >
            {/* CONTENT */}
            <motion.div
              onClick={e => e.stopPropagation()}
              className="w-full h-full overflow-y-auto p-10"
            >
              {/* CLOSE */}
              <button
                onClick={() => setActive(null)}
                className="fixed top-6 right-6 text-(--text) text-3xl z-50"
              >
                ✕
              </button>
              {/* IMAGE */}
              <motion.img
                layoutId={`image-${active.id}`}
                src={active.image}
                style={{
                  scale: imgScale,
                  y: imgY
                }}
                className="w-full max-h-125 object-cover rounded-2xl"
              />
              {/* TEXT */}
              <div className="max-w-4xl mx-auto mt-16 space-y-6">
                <h1 className="text-6xl font-bold leading-tight tracking-tight">{active.title}</h1>

                <p className="text-(--text) text-xl leading-relaxed">{active.description}</p>
              </div>
              {/* SCROLL STORY */}
              <div className="mt-32">
                <StickySection
                  title="Concept"
                  text="This project was designed to create an immersive and modern digital experience. The focus was on clean UI, smooth interactions and high performance."
                />

                <StickySection
                  title="Technical Setup"
                  text="The application is built with a modern tech stack focusing on performance and scalability."
                  tech={
                    <div className="flex gap-3 flex-wrap text-sm text-gray-400">
                      <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10">
                        Tailwind
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10">
                        Framer Motion
                      </span>
                    </div>
                  }
                />

                <StickySection
                  title="Development Process"
                  text="The workflow included UX research, wireframing, prototyping and iterative development. Special attention was given to animation performance and responsiveness."
                />

                <StickySection
                  title="Result"
                  text="The final product delivers a fast, interactive and visually engaging experience. It reflects both strong technical implementation and modern design principles."
                />
              </div>

              {/* <div className="mt-32">
                <ScrollSection
                  title="Concept"
                  text="The idea was to create a modern and immersive experience."
                />

                <ScrollSection
                  title="Process"
                  text="We designed and developed with performance and UX in mind."
                />

                <ScrollSection
                  title="Result"
                  text="A fast, beautiful and interactive application."
                />
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
