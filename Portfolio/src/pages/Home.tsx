import { useLanguage } from "../lib/useLanguage";

const Home = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-125 h-125 bg-(--primary) blur-[120px] opacity-40 top-20 left-1/3"></div>
        <div className="absolute w-100 h-100 bg-(--accent) blur-[120px] opacity-40 bottom-10 right-1/4"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 pt-32 items-center">
        {/* LEFT */}
        <div className="flex flex-col">
          <p className="text-sm opacity-70 mb-2">Media Designer & Developer</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.greeting}</h1>

          <p className="mb-6 opacity-80 max-w-md">
            Ich entwickle moderne Webseiten mit kreativem Design, Animation und sauberem Code.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-(--primary)">{t.projects}</button>

            <button className="px-6 py-3 rounded-xl border">{t.contact}</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img src="/hero.png" className="w-100" />
        </div>
      </div>
    </section>
  );
};

export default Home;
