"use client";

const Slide = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {icon}
      <div className="my-5 font-Poppins_SemiBold text-black text-xs  md:text-xl dark:text-white">
        {text}
      </div>
    </div>
  );
};

export default Slide;
