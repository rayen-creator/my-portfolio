"use client";
import Reveal from "../Reveal/page";
import Title from "../Title/page";
import Carousel from "../carousel/page";

const Technologies = () => {
  return (
    <>
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
    
    </>
  );
};

export default Technologies;
