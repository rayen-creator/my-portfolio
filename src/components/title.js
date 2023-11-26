const Title = ({ title }) => {
  return (
    <div className="relative flex py-5 items-center font-Poppins_SemiBold ">
      <div className="flex-shrink mx-4 text-3xl sm:text-3x md:text-4xl lg:text-5xl font-medium">
        <h3 className=" dark:text-white">
          {title}
          <span className="text-primary text-4xl font-bold md:text-7xl">.</span>
        </h3>
      </div>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default Title;
