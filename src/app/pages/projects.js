import Card from "../../components/cards";
import Title from "../../components/title";
import Reveal from "@/components/reveal";
import { projects } from "@/constants";
export default function Projects() {
  return (
    <section id="Projects" className="my-1">
    <div>
        <Reveal>
          <Title title={"Projects"} />
        </Reveal>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ">
        {
          projects.map((p)=>(
            <Reveal>
              <Card 
              key={p.title}
              title={p.title}
              description={p.description}
              githublink={p.githublink}
              image={p.image}
              stack={p.stack}
              demolink={p.demolink}
              />
            </Reveal>
          ))
        }
      </div>
    </section>
  );
}
