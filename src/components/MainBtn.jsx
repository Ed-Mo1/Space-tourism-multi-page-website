const MainBtn = ({text}) => {
  return (
    <div className="relative z-10 before:absolute before:top-1/2 before:z-[-1] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:h-0 before:w-0 before:rounded-full before:bg-light_shade_blue before:aspect-square before:bg-opacity-[20%] hover:before:h-[150%] hover:before:w-[150%] grid place-content-center">
      <button className="heading-4 max-md:w-[150px] w-[274px] aspect-square rounded-full bg-white ">
        {text}
      </button>
    </div>
  );
};

export default MainBtn;
