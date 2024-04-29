const Header = () => {
    return (
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-[7rem] px-[1.25rem] box-border max-w-full text-center text-[3rem] text-black font-text-small-link mq1125:gap-[2.5rem] mq450:gap-[1.25rem] mq450:pt-[4.563rem] mq450:pb-[4.563rem] mq450:box-border">
        <div className="w-[48rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[3.625rem] font-bold font-inherit mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              We're hiring!
            </h1>
            <div className="self-stretch relative text-[1.5rem] leading-[150%]">{`Join our team and shape the future explore`} <br/> {`exciting career opportunities with us!`}</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
            <button className="cursor-pointer py-[0.625rem] px-[1.437rem] bg-black flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <Link to ='/team'><div className="relative text-[1rem] leading-[150%] font-text-small-link text-white text-left inline-block min-w-[6.188rem]">
                Join our team
              </div>
              </Link>
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Header;
  
