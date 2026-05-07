import { useEffect, useState } from "react";

import { useLanguage } from "../i18n/useLanguage";
import Projects from "./Projects.tsx";
import SkillsSection from "./Skills.tsx";

const Home = () => {
  const { t } = useLanguage();

  const [pos, setPos] = useState({ x: 0, y: 0 });

  // 🌟 particles ثابتة
  const [particles] = useState(() =>
    Array.from({ length: 20 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100
    }))
  );

  useEffect(() => {
    let frame: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setPos({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* ✨ Cursor Glow */}
      <div
        className="pointer-events-none fixed w-75 h-75ded-full blur-[120px] opacity-30 z-50"
        style={{
          background: "var(--primary)",
          transform: `translate(${pos.x * 5 + window.innerWidth / 2}px, ${
            pos.y * 5 + window.innerHeight / 2
          }px)`
        }}
      />

      {/* 🌌 LAYER 1 */}
      <div
        className="absolute w-175 h-175[var(--primary)] opacity-20 blur-[180px] -z-10"
        style={{
          transform: `translate(${pos.x * 0.2}px, ${pos.y * 0.2}px)`
        }}
      />

      {/* 🌌 LAYER 2 */}
      <div
        className="absolute w-100 h-100 bg-(--accent) opacity-30 blur-[120px] -z-10"
        style={{
          transform: `translate(${pos.x * -0.4}px, ${pos.y * -0.4}px)`
        }}
      />

      {/* 🧍‍♀️ CHARACTER */}
      <div
        className="relative mb-10 transition-transform duration-200"
        style={{
          transform: `
            translate(${pos.x * 0.6}px, ${pos.y * 0.6}px)
            rotateX(${pos.y * -0.3}deg)
            rotateY(${pos.x * 0.3}deg)
          `
        }}
      >
        <img src="/hero.png" className="w-56 md:w-72 drop-shadow-2xl" />
      </div>

      {/* 🧠 TEXT */}
      <div
        className="animate-fadeUp"
        style={{
          transform: `translate(${pos.x * 0.1}px, ${pos.y * 0.1}px)`
        }}
      >
        <p className="text-sm opacity-70 mb-2">{t.subtitle}</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4"> {t.greeting} </h1>

        <p className="max-w-xl opacity-80 mb-8">{t.text}</p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-(--primary) hover:scale-105 transition">
            {t.button}
          </button>

          <button className="px-6 py-3 rounded-xl border hover:scale-105 transition">
            {t.button_contact}
          </button>
        </div>
      </div>

      {/* 🌟 PARTICLES */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white opacity-40 rounded-full animate-pulse"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`
          }}
        />
      ))}
      <div className="my-8">
        <Projects />
      </div>
      <SkillsSection />
    </section>
  );
};

export default Home;
