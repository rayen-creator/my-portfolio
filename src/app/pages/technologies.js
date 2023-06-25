"use client";
import Reveal from "../../components/reveal";
import Title from "../../components/title";
import Carousel from "../../components/carousel";

const Technologies = () => {
  return (
    <section id="Technologies" className="my-1">
      <div>
        <Reveal>
          <h3 className="text-3xl font-bold py-1 dark:text-white">
            <Title title={"Technologies"} />
          </h3>
        </Reveal>
      </div>
      <Reveal>
        <div className="py-10 md:pl-20 ">
          <Carousel />
        </div>
      </Reveal>
    </section>
  );
};

export default Technologies;
