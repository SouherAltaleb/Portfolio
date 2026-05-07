export default function Footer() {
  return (
    <footer
      className="relative w-full px-6 py-10 overflow-hidden"
      style={{
        background: "var(--bg)",
        color: "var(--text)"
      }}
    >
      {/* animated top border */}
      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <div
          className="w-full h-full animate-pulse"
          style={{
            background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
            opacity: 0.7
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs md:text-xs opacity-70 tracking-wide">
          © {new Date().getFullYear()} Souher Al-Taleb. Where art, design and code come together.✨
        </p>
      </div>
    </footer>
  );
}
