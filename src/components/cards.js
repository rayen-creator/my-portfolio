import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import { CiShare1 } from "react-icons/ci";

export default function Card({
  githublink,
  image,
  title,
  description,
  stack,
  demolink,
}) {
  return (
    <div className="shadow-lg rounded-md xl:h-[475px] lg:h-[450px]  flex flex-col text-center my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-slate-800 duration-300 dark:bg-white">
      <div className="shadow-inner p-1 bg-gray-100 rounded-xl ">
        <div className="flex justify-center p-1">
          <Image
            src={image}
            width={150}
            height={150}
            alt="image"
            placeholder="blur"
          />
        </div>
      </div>{" "}
      <div className=" pt-1 px-7 pb-7 rounded-md">
        <div className="relative flex py-5 items-center">
          <span className="flex-shrink mx-1  text-lg font-Poppins_SemiBold">
            <h3 className=" lg:break-all">{title}</h3>
          </span>
          <div className="flex-grow border-t border-gray-400 mx-1"></div>
          <a
            className="text-gray-600 py-1 cursor-pointer float-left hover:text-black"
            href={githublink}
            target="_blank"
          >
            <AiFillGithub className=" text-3xl" />
          </a>
          {demolink == "" ? (
            <span></span>
          ) : (
            <a
              className="text-gray-600 py-1 cursor-pointer float-left hover:text-black"
              href={demolink}
              target="_blank"
            >
              <CiShare1 className=" text-3xl" />
            </a>
          )}
        </div>
        <p className="py-2 font-Poppins_Regular text-justify">{description}</p>
        <div className="">
          <h4 className="py-4 text-primary font-Poppins_SemiBold">Stack</h4>
          <div className="flex justify-center items-end gap-3 text-2xl lg:text-3xl">
            {stack &&
              stack.length > 0 &&
              stack.map((s, index) => (
                <div key={index}>
                  <p className="text-gray-600 py-1">{s}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
