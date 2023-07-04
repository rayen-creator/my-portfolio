import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle,
  AiOutlineBehance,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineReddit,
  AiOutlineTwitter,
} from "react-icons/ai";

const SocialMediaIconBorder = () => {
  return (
    <>
      <a
        href="https://github.com/rayen-creator"
        target="_blank"
        className="border rounded-full p-2 hover:bg-black hover:text-white "
      >
        <AiOutlineGithub className="cursor-pointer   " />
      </a>
      <a
        href="https://www.linkedin.com/in/rayen-oueslati-72a55b1b0/"
        target="_blank"
        className="border rounded-full p-2 hover:bg-blue-600 hover:text-white"
      >
        <AiOutlineLinkedin className="cursor-pointer " />
      </a>
      <a
        href="https://twitter.com/rayenoueslati8"
        target="_blank"
        className="border rounded-full p-2 hover:bg-cyan-500 hover:text-white"
      >
        <AiOutlineTwitter className="cursor-pointer " />
      </a>
      <a
        href="https://www.behance.net/rayenoueslati"
        target="_blank"
        className="border rounded-full p-2 hover:bg-blue-600 hover:text-white"
      >
        <AiOutlineBehance className="cursor-pointer" />
      </a>
      <a
        href="https://www.reddit.com/user/rayen26"
        target="_blank"
        className="border rounded-full p-2 hover:bg-orange-500 hover:text-white"
      >
        <AiOutlineReddit className="cursor-pointer " />
      </a>
    </>
  );
};

const SocialMediaIconNoBorder = () => {
  return (
    <>
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
    </>
  );
};

export { SocialMediaIconNoBorder, SocialMediaIconBorder };