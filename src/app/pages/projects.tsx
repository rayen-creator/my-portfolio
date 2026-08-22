import Card from "../../components/cards";
import Title from "../../components/title";
import Reveal from "@/components/reveal";
import { projects } from "@/constants";

const groups = [
  { key: "professional", label: "professional" },
  { key: "academic", label: "academic" },
  { key: "side", label: "side" },
] as const;

export default function Projects() {
  return (
    <section id="Projects" className="my-1">
      <div>
        <Reveal>
          <Title title={"Projects"} index={"03"} />
        </Reveal>
      </div>
      {groups.map((group) => {
        const items = projects.filter((p) => p.category === group.key);
        if (items.length === 0) return null;
        return (
          <div key={group.key} className="mb-14">
            <Reveal>
              <div className="flex items-center gap-3 mb-6 mt-4 font-mono text-xs">
                <span className="text-primary">~/projects/{group.label}</span>
                <span className="text-gray-500 dark:text-gray-400">
                  ({items.length})
                </span>
                <div className="flex-grow border-t border-dashed border-gray-300 dark:border-white/10" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
              {items.map((p, index) => (
                <Reveal key={index}>
                  <Card
                    title={p.title}
                    description={p.description}
                    githublink={p.githublink}
                    image={p.image}
                    stack={p.stack}
                    demolink={p.demolink}
                    client={p.client}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
