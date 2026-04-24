// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// type Props = {
//   title: string;
//   text: string;
// };

// export default function ScrollSection({ title, text }: Props) {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
//   const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

//   return (
//     <section ref={ref} className="h-[90vh] flex items-center justify-center">
//       <motion.div style={{ opacity, y }} className="text-center max-w-2xl">
//         <h2 className="text-5xl font-bold mb-6">{title}</h2>
//         <p className="text-xl text-gray-300">{text}</p>
//       </motion.div>
//     </section>
//   );
// }
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  title: string;
  text: string;
  tech?: React.ReactNode;
};
export default function StickySection({ title, text, tech }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="h-[200vh] relative">
      {/* Sticky Content */}
      <motion.div style={{ opacity, scale }} className="sticky top-0 h-screen flex items-center">
        <div className="max-w-4xl px-10 space-y-6">
          <h2 className="text-6xl font-bold leading-tight tracking-tight">{title}</h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">{text}</p>

          {tech && <div className="pt-4">{tech}</div>}
        </div>
      </motion.div>
    </section>
  );
}
