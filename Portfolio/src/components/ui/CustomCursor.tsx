//////// #1  Outline circle cursor
// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       className="fixed top-0 left-0 pointer-events-none z-9999"
//       style={{
//         transform: `translate(${pos.x}px, ${pos.y}px)`
//       }}
//     >
//       <div className="w-8 h-8 rounded-full border border-white mix-blend-difference transition-all duration-75" />
//     </div>
//   );
// }

////////////////////////////////////

//////// #2 Canvas cursor with trailing effect
import { useEffect, useRef } from "react";

export default function CanvasCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    const pos = { x: width / 2, y: height / 2 };

    // trail points
    const trail = Array.from({ length: 12 }, () => ({
      x: width / 2,
      y: height / 2
    }));

    const onMove = e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // smooth main cursor
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;

      // update trail
      trail[0].x = pos.x;
      trail[0].y = pos.y;

      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.25;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.25;
      }

      // draw trail
      for (let i = trail.length - 1; i > 0; i--) {
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, 10 - i * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.15 - i * 0.01})`;
        ctx.fill();
      }

      // main cursor
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}

//////// #3 CanvasCursor Lines
// import { useEffect, useRef } from "react";

// export default function CanvasCursorPro() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     canvas.width = width;
//     canvas.height = height;

//     // 🎯 mouse position
//     const pos = { x: width / 2, y: height / 2 };

//     // ⚙️ config (like your reference)
//     const E = {
//       friction: 0.52,
//       trails: 20,
//       size: 28,
//       dampening: 0.25,
//       tension: 0.98
//     };

//     // 🌊 noise phase (for color movement feel)
//     let phase = Math.random() * Math.PI * 2;

//     function Noise() {
//       this.phase = Math.random() * Math.PI * 2;
//       this.offset = 280;
//       this.frequency = 0.0015;
//       this.amplitude = 80;

//       this.update = function () {
//         this.phase += this.frequency;
//         return this.offset + Math.sin(this.phase) * this.amplitude;
//       };
//     }

//     const noise = new Noise();

//     // 🧠 Node (physics point)
//     function Node() {
//       this.x = pos.x;
//       this.y = pos.y;
//       this.vx = 0;
//       this.vy = 0;
//     }

//     // 🔗 Line (rope chain)
//     function Line(spring) {
//       this.spring = spring;
//       this.friction = E.friction + Math.random() * 0.01 - 0.005;
//       this.nodes = Array.from({ length: E.size }, () => new Node());
//     }

//     Line.prototype.update = function () {
//       let spring = this.spring;

//       let head = this.nodes[0];

//       // head follows cursor
//       head.vx += (pos.x - head.x) * spring;
//       head.vy += (pos.y - head.y) * spring;

//       for (let i = 0; i < this.nodes.length; i++) {
//         const node = this.nodes[i];

//         if (i > 0) {
//           const prev = this.nodes[i - 1];

//           node.vx += (prev.x - node.x) * spring;
//           node.vy += (prev.y - node.y) * spring;

//           node.vx += prev.vx * E.dampening;
//           node.vy += prev.vy * E.dampening;
//         }

//         node.vx *= this.friction;
//         node.vy *= this.friction;

//         node.x += node.vx;
//         node.y += node.vy;

//         spring *= E.tension;
//       }
//     };

//     Line.prototype.draw = function () {
//       ctx.beginPath();
//       ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

//       for (let i = 1; i < this.nodes.length - 2; i++) {
//         const a = this.nodes[i];
//         const b = this.nodes[i + 1];

//         const x = (a.x + b.x) / 2;
//         const y = (a.y + b.y) / 2;

//         ctx.quadraticCurveTo(a.x, a.y, x, y);
//       }

//       const last = this.nodes[this.nodes.length - 1];
//       ctx.quadraticCurveTo(last.x, last.y, last.x, last.y);

//       ctx.stroke();
//     };

//     // 🌈 lines (trails)
//     let lines = [];

//     function initLines() {
//       lines = [];
//       for (let i = 0; i < E.trails; i++) {
//         lines.push(new Line(0.35 + (i / E.trails) * 0.02));
//       }
//     }

//     // 🎯 mouse move
//     const onMove = e => {
//       pos.x = e.clientX;
//       pos.y = e.clientY;
//     };

//     // 📏 resize
//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//     };

//     document.addEventListener("mousemove", onMove);
//     window.addEventListener("resize", resize);

//     initLines();

//     // 🎬 render loop
//     const render = () => {
//       ctx.clearRect(0, 0, width, height);

//       ctx.globalCompositeOperation = "lighter";

//       // color shift (like your original)
//       ctx.strokeStyle = `hsla(${Math.round(noise.update())}, 60%, 60%, 0.25)`;
//       ctx.lineWidth = 1;

//       for (let i = 0; i < lines.length; i++) {
//         lines[i].update();
//         lines[i].draw();
//       }

//       requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       document.removeEventListener("mousemove", onMove);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
//     />
//   );
// }
