import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";

export default function Card({ githublink, image, title, description, stack }) {
  return (
    <>
      <div className=" rounded-md text-center my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-slate-800 duration-300 dark:bg-white">
        <div className="shadow-inner p-1 bg-gray-100 rounded-xl ">
          <span>
            <a
              className="text-gray-600 py-1 cursor-pointer float-left hover:text-black"
              href={githublink}
              target="_blank"
            >
              <div className="r border-2 rounded-md shadow-md p-1">
                <AiFillGithub className="text-3xl hover:text-black" />
              </div>{" "}
            </a>
          </span>
          <div className="flex justify-center p-1">
            <Image src={image} width={150} height={150} alt="image" />
          </div>
        </div>{" "}
        <div className="shadow-lg pt-1 px-7 pb-7 rounded-md h-[350px] flex flex-col">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4  text-lg font-medium">
              <h3>{title}</h3>
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <p className="py-2 text-justify">{description}</p>
          <h4 className="py-4 text-teal-600 mt-auto">Stack</h4>
          <div className="flex justify-center items-end gap-4 text-4xl">
            {stack && stack.length > 0 && (
              <>
                <p className="text-gray-600 py-1">{stack[0]}</p>
                <p className="text-gray-600 py-1">{stack[1]}</p>
                <p className="text-gray-600 py-1">{stack[2]}</p>
                <p className="text-gray-600 py-1">{stack[3]}</p>
                <p className="text-gray-600 py-1">{stack[4]}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
