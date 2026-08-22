const Title = ({ title, index }: { title: string; index: string }) => {
  return (
    <div className="relative flex items-baseline gap-4 py-5 font-Poppins_SemiBold">
      <span className="font-mono text-sm md:text-base text-primary/80 select-none">
        {index}
      </span>
      <h3 className="flex-shrink text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white">
        {title}
        <span className="text-primary text-4xl font-bold md:text-7xl">.</span>
      </h3>
      <div className="flex-grow border-t border-dashed border-gray-300 dark:border-white/10"></div>
    </div>
  );
};

export default Title;
