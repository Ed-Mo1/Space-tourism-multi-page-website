
const PageTitle = ({num1,num2,text}) => {
  return (
    <h3 className="sub_heading_1 lg:ms-40 ms-4 max-md:text-center font-barlow_condensed md:ms-8 max-lg:pt-8 text-white uppercase">
      <span className="font-bold text-[#D9D9D9] me-5">
        <span className="me-2">{num1}</span>
        <span>{num2}</span>
      </span>
      {text}
    </h3>
  );
};

export default PageTitle;
