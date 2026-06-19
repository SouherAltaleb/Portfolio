import { useEffect, useState } from "react";

import { useLanguage } from "../i18n/useLanguage";
import Projects from "./Projects.tsx";
import SkillsSection from "./Skills.tsx";
import ContactSection from "./Contact.tsx";

const Home = () => {
  const { t } = useLanguage();

  const [pos, setPos] = useState({ x: 0, y: 0 });

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
    <section className="relative min-h-screen ">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full blur-[140px] opacity-20"
          style={{
            background: "var(--primary)"
          }}
        />

        {/* secondary glow */}
        <div
          className="absolute bottom-0 right-0 w-125 h-125 rounded-full blur-[120px] opacity-20"
          style={{
            background: "var(--accent)"
          }}
        />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--text) 1px, transparent 1px), linear-gradient(to bottom, var(--text) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="max-w-7xl mx-auto min-h-screen flex items-center px-6 pt-32">
        <div className="grid md:grid-cols-2 items-center gap-10 w-full">
          {/* LEFT */}
          <div>
            {/* subtitle */}
            <p
              className="uppercase tracking-[0.3em] text-xs mb-6 opacity-70"
              style={{ color: "var(--primary)" }}
            >
              {t.subtitle}
            </p>

            {/* BIG TITLE */}
            <h1 className="text-6xl md:text-8xl font-semibold leading-[0.95] tracking-[-0.05em] mb-8">
              {t.big_title}
            </h1>

            {/* text */}
            <p className="max-w-lg opacity-70 text-lg leading-relaxed mb-10">{t.text}</p>

            {/* buttons */}
            <div className="flex gap-4">
              <a
                href="/zertifikat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" group relative overflow-hidden px-7 py-3 rounded-full  inline-flex items-center  justify-center  transition-all  duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: "var(--primary)",
                  color: "#fff",
                  boxShadow: "0 10px 30px rgba(183,93,105,0.15)"
                }}
              >
                {/* glow */}
                <span
                  className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
      "
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(255,255,255,0.25), transparent 70%)"
                  }}
                />

                {/* text */}
                <span className="relative z-10 flex items-center gap-2">
                  {t.button}

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </span>
              </a>

              {/* portfolio btn */}
              <button
                className="
      group
      px-7
      py-3
      rounded-full
      border
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-(--primary)/10
      border-(--text)/30
    "
              >
                <a
                  href="/portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {t.portfolio_button}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center overflow-visible">
            {/* glow behind image */}
            <div
              className="absolute w-105 h-105 rounded-full blur-[120px] opacity-30"
              style={{
                background: "var(--primary)"
              }}
            />

            {/* image */}
            <img
              src="/hero.png"
              alt=""
              className="relative w-[320px] md:w-105 object-contain drop-shadow-2xl mb-12"
              style={{
                transform: `
      translate(${pos.x * 0.5}px, ${pos.y * 0.5}px)
    `,
                transition: "transform 0.15s linear",
                maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent 100%)"
              }}
            />
            <div
              className="absolute -bottom-10 right-0 w-90 h-40 blur-[100px] opacity-50"
              style={{
                background: "var(--primary)"
              }}
            />
          </div>
        </div>
      </div>
      <div className="my-8">
        <Projects />
      </div>
      <SkillsSection />
      <ContactSection />
    </section>
  );
};

export default Home;
