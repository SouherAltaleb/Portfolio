import { useEffect, useRef } from "react";

export default function CanvasCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    const pos = { x: width / 2, y: height / 2 };
    const trail = Array.from({ length: 12 }, () => ({
      x: width / 2,
      y: height / 2
    }));

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      trail[0].x = pos.x;
      trail[0].y = pos.y;
      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.25;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.25;
      }
      for (let i = trail.length - 1; i > 0; i--) {
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, 10 - i * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.15 - i * 0.01})`;
        ctx.fill();
      }
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
