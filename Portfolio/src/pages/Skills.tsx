import { motion } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../i18n/useLanguage";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <img src="/icons/html.svg" /> },
      { name: "CSS", icon: <img src="/icons/css.svg" /> },
      { name: "Tailwind CSS", icon: <img src="/icons/tailwind.svg" /> },
      { name: "JavaScript", icon: <img src="/icons/javascript.svg" /> },
      { name: "React", icon: <img src="/icons/react.svg" /> },
      { name: "TypeScript", icon: <img src="/icons/typescript.svg" /> },
      { name: "Next.js", icon: <img src="/icons/nextjs.svg" /> },
      { name: "Bootstrap", icon: <img src="/icons/bootstrap.svg" /> },
      { name: "WordPress", icon: <img src="/icons/wordpress.svg" /> }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <img src="/icons/node.svg" /> },
      { name: "Express.js", icon: <img src="/icons/express.svg" /> },
      //   { name: ".NET", icon: <img src="/icons/dotnet.svg" /> },
      //   { name: "ASP.NET", icon: <img src="/icons/aspnet.svg" /> },
      { name: "REST APIs", icon: <img src="/icons/api.svg" /> }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <img src="/icons/mongodb.svg" /> },
      { name: "SQL", icon: <img src="/icons/sql.svg" /> }
    ]
  },
  {
    title: "APIs",
    items: [
      { name: "OpenAI API", icon: <img src="/icons/openai.svg" /> },
      { name: "Gemini API", icon: <img src="/icons/gemini.svg" /> },
      { name: "REST APIs", icon: <img src="/icons/api.svg" /> }
    ]
  },
  {
    title: "Design",
    items: [
      { name: "Figma", icon: <img src="/icons/figma.svg" /> },
      { name: "Adobe XD", icon: <img src="/icons/xd.svg" /> },
      { name: "Photoshop", icon: <img src="/icons/photoshop.svg" /> },
      { name: "Illustrator", icon: <img src="/icons/illustrator.svg" /> },
      { name: "InDesign", icon: <img src="/icons/indesign.svg" /> },
      { name: "Lightroom", icon: <img src="/icons/lightroom.svg" /> },
      { name: "Animate", icon: <img src="/icons/animate.svg" /> }
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <img src="/icons/git.svg" /> },
      { name: "GitHub", icon: <img src="/icons/github.svg" /> },
      { name: "VS Code", icon: <img src="/icons/vscode.svg" /> },
      { name: "Vite", icon: <img src="/icons/vitejs.svg" /> },
      { name: "Postman", icon: <img src="/icons/postman.svg" /> }
    ]
  }
];

export default function SkillsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);

  return (
    <section ref={ref} className="w-full" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-20 tracking-tight"
        >
          {t.headline}
        </motion.h2>

        <div className="space-y-24">
          {skills.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-8"
            >
              {/* LEFT TITLE */}
              <h3 className="text-3xl md:text-4xl font-semibold md:w-1/3">{section.title}</h3>

              {/* RIGHT ITEMS */}
              <div className="flex flex-wrap gap-3 md:w-2/3">
                {section.items.map(item => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -6, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm border-(--text)/50 "
                  >
                    {/* YOUR CUSTOM ICON SLOT */}
                    {item.icon && (
                      <span className="w-4 h-4 flex items-center justify-center">{item.icon}</span>
                    )}

                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
