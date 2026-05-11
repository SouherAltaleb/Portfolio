import { motion } from "framer-motion";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onChange: (theme: "light" | "dark") => void;
};

export function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const options = [
    {
      value: "light",
      icon: "/icons/moon2.svg"
    },
    {
      value: "dark",
      icon: "/icons/sun2.svg"
    }
  ];

  return (
    <div
      className="relative flex items-center p-1 rounded-full border backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(234,205,194,0.12)"
      }}
    >
      {/* sliding pill */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="absolute top-1 bottom-1 w-1/2 rounded-full"
        style={{
          background: "var(--primary)",
          left: theme === "light" ? "4px" : "calc(50% - 4px)"
        }}
      />

      {options.map(opt => {
        const isActive = theme === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value as "light" | "dark")}
            className="relative z-10 w-10 h-8 grid place-items-center rounded-full transition"
          >
            <img
              src={opt.icon}
              alt={opt.value}
              className={`w-5 h-5 transition ${isActive ? "opacity-100" : "opacity-60"}`}
            />
          </button>
        );
      })}
    </div>
  );
}
