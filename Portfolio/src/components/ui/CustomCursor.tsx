import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-9999"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    >
      <div className="w-8 h-8 rounded-full border border-white mix-blend-difference transition-all duration-75" />
    </div>
  );
}
////////////////////////////////////
// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [variant, setVariant] = useState("default");

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   useEffect(() => {
//     const handleHover = (e: any) => {
//       if (e.target.closest("[data-cursor='view']")) {
//         setVariant("view");
//       } else {
//         setVariant("default");
//       }
//     };

//     window.addEventListener("mouseover", handleHover);
//     return () => window.removeEventListener("mouseover", handleHover);
//   }, []);

//   const variants: any = {
//     default: {
//       x: pos.x - 8,
//       y: pos.y - 8,
//       height: 16,
//       width: 16,
//       backgroundColor: "white"
//     },
//     view: {
//       x: pos.x - 40,
//       y: pos.y - 40,
//       height: 80,
//       width: 80,
//       backgroundColor: "white",
//       mixBlendMode: "difference"
//     }
//   };

//   return (
//     <motion.div
//       animate={variant}
//       variants={variants}
//       className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-black font-bold text-sm"
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     >
//       {variant === "view" && "VIEW"}
//     </motion.div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [variant, setVariant] = useState("default");

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   useEffect(() => {
//     const handleHover = (e: any) => {
//       if (e.target.closest("[data-cursor='view']")) {
//         setVariant("view");
//       } else {
//         setVariant("default");
//       }
//     };

//     window.addEventListener("mouseover", handleHover);
//     return () => window.removeEventListener("mouseover", handleHover);
//   }, []);

//   const variants: any = {
//     default: {
//       x: pos.x - 6,
//       y: pos.y - 6,
//       height: 12,
//       width: 12
//     },
//     view: {
//       x: pos.x - 20,
//       y: pos.y - 20,
//       height: 40,
//       width: 40
//     }
//   };

//   return (
//     <>
//       {/* 🌫 subtle glow */}
//       <motion.div
//         animate={{
//           x: pos.x - 30,
//           y: pos.y - 30
//         }}
//         transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
//         className="fixed top-0 left-0 w-[60px] h-[60px] rounded-full pointer-events-none z-[9998]"
//         style={{
//           background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)"
//         }}
//       />

//       {/* ⚪ main cursor */}
//       <motion.div
//         animate={variant}
//         variants={variants}
//         className="fixed top-0 left-0 rounded-full border border-white bg-transparent pointer-events-none z-[9999] mix-blend-difference"
//       />
//     </>
//   );
// }
