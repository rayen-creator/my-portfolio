import Reveal from "../../components/reveal";
import Title from "../../components/title";
import { slides } from "@/constants";

const categories = [
  { key: "ai", label: "ai" },
  { key: "backend", label: "backend" },
  { key: "frontend", label: "frontend" },
  { key: "infra", label: "infra" },
  { key: "tools", label: "tools" },
] as const;

const Technologies = () => {
  const grouped = categories.map((category) => ({
    ...category,
    items: slides.filter((slide) => slide.category === category.key),
  }));

  return (
    <section id="Technologies" className="my-1">
      <Reveal>
        <Title title={"Technologies"} index={"04"} />
      </Reveal>
      <Reveal>
        <div className="rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 p-6 font-mono text-sm">
          <div className="text-gray-400">{"{"}</div>
          {grouped.map(
            (category) =>
              category.items.length > 0 && (
                <div key={category.key} className="pl-4 py-2">
                  <span className="text-primary">&quot;{category.label}&quot;</span>
                  <span className="text-gray-400">: [</span>
                  <div className="flex flex-wrap gap-2 pl-4 py-3">
                    {category.items.map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 rounded border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-ink-800 px-2 py-1 text-xs text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary">{item.icon}</span>
                        {item.text}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-400">],</span>
                </div>
              )
          )}
          <div className="text-gray-400">{"}"}</div>
        </div>
      </Reveal>
    </section>
  );
};

export default Technologies;
