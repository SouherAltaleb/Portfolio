// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { useState, useRef } from "react";

// type Section = {
//   title: string;
//   text: string;
//   image: string;
// };

// export default function ScrollImageSections({ sections, containerRef }: { sections: Section[] }) {
//   const [active, setActive] = useState(0);

//   // 🎯 نراقب السكرول
//   const { scrollYProgress } = useScroll({
//     container: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // 🎯 نحول السكرول لـ index
//   useMotionValueEvent(scrollYProgress, "change", v => {
//     const index = Math.min(sections.length - 1, Math.floor(v * sections.length));
//     setActive(index);
//   });

//   return (
//     <div ref={containerRef} className="flex h-[300vh]">
//       {/* 🧠 TEXT SIDE */}
//       <div className="w-1/2">
//         {sections.map((sec, i) => (
//           <div key={i} className="h-screen flex items-center px-10">
//             <div className="space-y-6">
//               <h2 className="text-5xl font-bold">{sec.title}</h2>
//               <p className="text-gray-300 text-lg">{sec.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 🎬 IMAGE SIDE */}
//       <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
//         <div className="relative w-[80%] h-[60%]">
//           {sections.map((sec, i) => (
//             <motion.img
//               key={i}
//               src={sec.image}
//               className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{
//                 opacity: active === i ? 1 : 0,
//                 scale: active === i ? 1 : 0.95
//               }}
//               transition={{ duration: 0.6 }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";

type Section = {
  title: string;
  text: string;
  image: string;
};

export default function ScrollImageSections({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex">
      {/* TEXT SIDE */}
      <div className="w-1/2">
        {sections.map((sec, i) => (
          <div
            key={i}
            className="h-screen flex items-center px-10"
            onMouseEnter={() => setActive(i)}
          >
            <div className="space-y-6">
              <h2 className="text-5xl font-bold">{sec.title}</h2>
              <p className="text-gray-300 text-lg">{sec.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE SIDE */}
      <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-[80%] h-[60%]">
          {sections.map((sec, i) => (
            <motion.img
              key={i}
              src={sec.image}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              animate={{
                opacity: active === i ? 1 : 0,
                scale: active === i ? 1 : 0.95
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
