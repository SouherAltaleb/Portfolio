// import { motion } from "framer-motion";

// export default function ContactSection() {
//   return (
//     <section
//       className="w-full px-6 py-32"
//       style={{
//         background: "var(--bg)",
//         color: "var(--text)"
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row md:justify-between gap-16">
//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="md:w-1/2"
//           >
//             <h2
//               className="text-6xl md:text-7xl font-bold leading-none tracking-tight"
//               style={{ letterSpacing: "-0.05em" }}
//             >
//               Let’s
//               <br />
//               Connect
//             </h2>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="md:w-1/2 flex flex-col justify-between"
//           >
//             <p className="text-lg opacity-80 max-w-md leading-relaxed mb-12">
//               I’m currently open for freelance projects, creative collaborations, and exciting
//               opportunities.
//             </p>

//             {/* LINKS */}
//             <div className="flex flex-col gap-5 mb-14">
//               <a
//                 href="mailto:hello@example.com"
//                 className="group text-2xl md:text-3xl font-medium transition"
//               >
//                 hello@example.com
//                 <span
//                   className="block h-[2px] w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: "var(--primary)" }}
//                 />
//               </a>

//               <a
//                 href="#"
//                 target="_blank"
//                 className="group text-xl opacity-80 hover:opacity-100 transition"
//               >
//                 LinkedIn
//                 <span
//                   className="block h-[1px] w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: "var(--primary)" }}
//                 />
//               </a>

//               <a
//                 href="#"
//                 target="_blank"
//                 className="group text-xl opacity-80 hover:opacity-100 transition"
//               >
//                 GitHub
//                 <span
//                   className="block h-[1px] w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: "var(--primary)" }}
//                 />
//               </a>
//             </div>

//             {/* CTA */}
//             <a
//               href="mailto:hello@example.com"
//               className="w-fit px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition hover:scale-105"
//               style={{
//                 background: "var(--primary)",
//                 color: "white"
//               }}
//             >
//               Say Hello
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

export default function ContactSection() {
  const { t } = useLanguage();
  const contacts = [
    {
      title: "Email",
      value: "altalebsouher8@gmail.com",
      href: "mailto:altalebsouher8@gmail.com",
      icon: <img src="/icons/gmail.svg" className="object-contain" />
    },
    {
      title: "GitHub",
      value: "SouherAltaleb",
      href: "https://github.com/SouherAltaleb",
      icon: <img src="/icons/github.svg" className="w-8 h-8 object-contain" />
    },
    {
      title: "LinkedIn",
      value: "Souher Al-Taleb",
      href: "https://www.linkedin.com/in/souher-altaleb/",
      icon: <img src="/icons/in.svg" className="w-6  h-6 object-contain" />
    }
  ];

  return (
    <section
      className="w-full px-6 py-32"
      style={{
        background: "var(--bg)",
        color: "var(--text)"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm mb-5 text-(--primary)">
            {" "}
            {t.headline_contact}
          </p>

          <h2 className="leading-none max-w-3xl text-left">
            <span className="block text-6xl md:text-8xl font-bold tracking-[0.025em] ">
              {t.titleTop}
            </span>

            <span className="block text-4xl md:text-6xl font-medium opacity-80 mt-2">
              {t.titleBottom}
            </span>
          </h2>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-5">
          {contacts.map((item, i) => {
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-3xl border overflow-hidden bg-(--accent) border-(--text)/30"
              >
                {/* glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(183,93,105,0.15), transparent 60%)"
                  }}
                />

                <div className="relative flex items-start justify-between mb-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-(--hell)">
                    {item.icon}
                  </div>

                  <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>

                <div className="relative">
                  <p className="text-sm opacity-60 mb-2">{item.title}</p>
                  <h3 className="text-lg font-medium break-all">{item.value}</h3>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
