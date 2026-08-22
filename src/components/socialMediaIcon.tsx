import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineBehance,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const SocialMediaIconBorder = () => {
  return (
    <>
      <a
        href="https://github.com/rayen-creator"
        target="_blank"
        className="border border-gray-300 dark:border-white/10 rounded-full p-2 hover:border-primary hover:text-primary transition-colors"
      >
        <AiOutlineGithub className="cursor-pointer   " />
      </a>
      <a
        href="https://www.linkedin.com/in/rayen-oueslati-72a55b1b0/"
        target="_blank"
        className="border border-gray-300 dark:border-white/10 rounded-full p-2 hover:border-primary hover:text-primary transition-colors"
      >
        <AiOutlineLinkedin className="cursor-pointer " />
      </a>
      <a
        href="https://www.behance.net/rayenoueslati"
        target="_blank"
        className="border border-gray-300 dark:border-white/10 rounded-full p-2 hover:border-primary hover:text-primary transition-colors"
      >
        <AiOutlineBehance className="cursor-pointer" />
      </a>
    </>
  );
};

const SocialMediaIconNoBorder = () => {
  return (
    <>
      <a href="https://github.com/rayen-creator" target="_blank">
        <AiFillGithub className="cursor-pointer hover:text-primary transition-colors" />
      </a>
      <a
        href="https://www.linkedin.com/in/rayen-oueslati-72a55b1b0/"
        target="_blank"
      >
        <AiFillLinkedin className="cursor-pointer hover:text-primary transition-colors" />
      </a>
      <a href="https://www.behance.net/rayenoueslati" target="_blank">
        <AiFillBehanceCircle className="cursor-pointer hover:text-primary transition-colors" />
      </a>
    </>
  );
};

export { SocialMediaIconNoBorder, SocialMediaIconBorder };
