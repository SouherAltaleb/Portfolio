// import { motion, useTransform } from "framer-motion";

// export default function ProjectCard({ project, progress, start, end }) {
//   const opacity = useTransform(progress, [start, end], [0, 1]);
//   const y = useTransform(progress, [start, end], [100, 0]);
//   const scale = useTransform(progress, [start, end], [0.8, 1]);

//   return (
//     <motion.div style={{ opacity, y, scale }} className=" inset-0 flex items-center justify-center">
//       <div className="max-w-6xl grid grid-cols-2 gap-10 items-center">
//         <motion.img src={project.image} alt="" className="w-full rounded-2xl shadow-2xl" />

//         <div className="text-white space-y-4">
//           <h2 className="text-5xl font-bold">{project.title}</h2>
//           <p className="text-lg text-gray-300">{project.description}</p>
//           <button className="px-6 py-3 bg-white text-black rounded-full">View Project</button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div onClick={onClick} data-cursor="view" className="cursor-pointer group relative">
      <div className="overflow-hidden rounded-2xl">
        <motion.img
          layoutId={`image-${project.id}`} // ✅ صح
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute h-80 rounded-2xl inset-0 bg-(--bg)/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <p className="text-white text-lg tracking-widest">VIEW PROJECT</p>
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>
    </div>
  );
}
