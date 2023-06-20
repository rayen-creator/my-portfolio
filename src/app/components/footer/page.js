import { AiFillBehanceCircle, AiFillGithub, AiFillLinkedin, AiFillRedditCircle, AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="text-center p-10  dark: text-gray-100 bg-gray-600 dark:bg-gray-900">
        <div className="py-1">
          <h3 className="text-3xl font-bold text-gray-300">Rayen Oueslati</h3>
        </div>
        <div className="text-3xl flex justify-center gap-4 py-10 ">
          <a href="https://github.com/rayen-creator" target="_blank">
            <AiFillGithub className="cursor-pointer hover:text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/rayen-oueslati-72a55b1b0/"
            target="_blank"
          >
            <AiFillLinkedin className="cursor-pointer hover:text-blue-600" />
          </a>
          <a href="https://twitter.com/rayenoueslati8" target="_blank">
            <AiFillTwitterCircle className="cursor-pointer hover:text-cyan-500" />
          </a>
          <a href="https://www.behance.net/rayenoueslati" target="_blank">
            <AiFillBehanceCircle className="cursor-pointer hover:text-blue-600" />
          </a>
          <a href="https://www.reddit.com/user/rayen26" target="_blank">
            <AiFillRedditCircle className="cursor-pointer hover:text-orange-500" />
          </a>
        </div>
        <div className="max-w-7xl mx-auto">
        © Copyright 2023. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
