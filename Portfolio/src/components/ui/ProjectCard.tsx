// #1 Design
// import { motion } from "framer-motion";

// type Section = {
//   title: string;
//   text: string;
//   image: string;
// };

// type Project = {
//   slug: string;
//   title: string;
//   image: string;
//   desc: string;
//   sections?: {
//     en: Section[];
//     de: Section[];
//   };
// };

// type Props = {
//   project: Project;
//   onClick: () => void;
// };

// export default function ProjectCard({ project, onClick }: Props) {
//   return (
//     <div onClick={onClick} data-cursor="view" className="cursor-pointer group relative">
//       <div className="overflow-hidden rounded-2xl ">
//         <motion.img
//           layoutId={`image-${project.slug}`}
//           src={project.image}
//           alt={project.title}
//           className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute h-80 rounded-2xl inset-0 bg-(--bg)/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//         <p className="text-white text-lg tracking-widest">VIEW PROJECT</p>
//       </div>

//       <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>
//     </div>
//   );
// }

// #2 Design
import { motion } from "framer-motion";
import { Link, ExternalLink } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  image: string;
  desc: string;
  github?: string;
  live?: string;
  tech?: string[];
};

export default function ProjectCard({ project, onClick }: any) {
  return (
    <div onClick={onClick} className="group relative cursor-pointer overflow-hidden rounded-2xl">
      {/* IMAGE */}
      <motion.img
        src={project.image}
        className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        {/* TITLE */}
        <h3 className="text-2xl font-semibold translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {project.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-300 mt-2 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
          {project.desc}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-3 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {project.tech?.map((t: string) => (
            <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* ICONS */}
        <div className="flex gap-4 mt-4 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              onClick={e => e.stopPropagation()}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Link size={18} />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              onClick={e => e.stopPropagation()}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
