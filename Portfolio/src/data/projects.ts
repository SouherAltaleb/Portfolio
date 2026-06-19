export type Section = {
  title: string;
  text: string;
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  image: string;
  desc: string;
  github?: string;
  live?: string;
  tech?: string[];
  features?: string[];
  collab?: boolean;
  sections?: {
    en: Section[];
    de: Section[];
  };
};

export const projects: Project[] = [
  {
    slug: "diary",
    title: "My Diary App",
    image: "/projects/diary.jpg",
    desc: "Tagebuch-App für Gedanken, Notizen und Momente",
    github: "https://github.com/SouherAltaleb/My-Diary",
    live: "https://my-diary-5cxj.onrender.com/",
    tech: ["React", "TypeScript", "Tailwind"],
    features: ["Einträge erstellen & speichern", "Responsive design","Animierte Übergänge" ] ,
  },
  {
    slug: "sakura",
    title: "SakuraBloom",
    image: "/projects/sakura.jpg",
    desc: "Digitale Lernwelt für Kinder rund um Sicherheit im Internet",
    github: "https://github.com/AlissaKuhpfahl/SakuraBloom",
    live: "https://sakurabloom.onrender.com/",
    tech: ["React", "TypeScript", "Tailwind", "MongoDB", "Node.js", "Express"],
    features: ["Interaktive Lernmodule", "Minispiele", "Szenario-basierte Quizze"],
    collab: true,
  },
  {
    slug: "chiart",
    title: "ChiArt",
    image: "/projects/chiart.jpg",
    desc: "Interaktive Kunst-App zum Entdecken",
    github: "https://github.com/SouherAltaleb/ChiArt",
    live: "https://chiart-u6r7.onrender.com/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    features: ["Interaktive Kunstwerke", "Benutzerdefinierte Sammlungen", "Teilen von Kunstwerken"],
  },
  {
    slug: "luna",
    title: "Luna Mode",
    image: "/projects/luna.jpg",
    desc: "Digitale Modeplattform",
    github: "https://github.com/DariaKozlova-web/First-project",
    live: "https://dariakozlova-web.github.io/First-project/#home",
    tech: ["HTML", "CSS"],
    features: ["Interaktive Mode-Elemente", "Benutzerdefinierte Outfits", "Teilen von Looks"],
    collab: true,
  },
  {
    slug: "popcorn-diary",
    title: "Popcorn Diary",
    image: "/projects/popcorn.jpg",
    desc: "Film-Tagebuch zum Bewerten und Entdecken",
    github: "https://github.com/abdulaah-alchag/MovieDiary-2",
    live: "https://moviediary-2.onrender.com/index.html",
    tech: ["React", "Vanilla JavaScript", "Tailwind", "LocalStorage"],
    features: ["Filme bewerten", "Filme entdecken", "Persönliche Notizen"],
    collab: true,
  },
  {
    slug: "kloster-schwarzenfels",
    title: "Kloster Schwarzenfels",
    image: "/projects/kloster.jpg",
    desc: "Website für ein Seminarhaus – Redesign meiner Abschlussarbeit",
    github: "https://github.com/SouherAltaleb/kloster-schwarzenfels",
    live: "https://kloster-schwarzenfels.onrender.com/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
    features: [
      "8 Seiten mit Client-seitigem Routing",
      "Animiertes Burger-Menü mit Overlay",
      "Sticky Header mit Scroll-Effekt",
      "Anmeldeformular mit Validierung",
      "Barrierefreiheit: Schriftgröße & Grauton-Modus",
      "Responsives Layout für alle Geräte",
    ],
  },
];