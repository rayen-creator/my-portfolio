const Title = ({title}) => {
    return ( <div className="relative flex py-5 items-center font-Poppins_SemiBold ">
    <div className="flex-shrink mx-4  text-5xl font-medium">
      <h3 className=" dark:text-white">{title}<span className="text-primary font-bold text-7xl">.</span></h3>
    </div>
    <div className="flex-grow border-t border-gray-400"></div>
  </div> );
}
 
export default Title;