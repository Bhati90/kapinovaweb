const FrameComponent = () => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start gap-[4.412rem]  text-center text-[3rem] text-black font-text-regular-normal mq750:gap-[2.188rem] mq450:gap-[1.125rem] mq1275:max-w-full">
        <div className="self-stretch mq-450:h-[84px] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.543rem] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit ">
            Contact us
          </h1>
        </div>
        <div className="self-stretch h-[-0.062rem] relative text-[1.125rem] leading-[150%] inline-block mt-[-4rem]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[150%] inline-block ">
              Name
            </div>
            <input
              className="[outline:none] bg-white self-stretch h-[3rem] box-border flex flex-row items-center justify-start p-[0.75rem]  border-[1px] border-solid border-black"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] shrink-0">
            <div className="self-stretch relative leading-[150%]">
              Mobile Number
            </div>
            <input
              className="[outline:none] bg-white self-stretch h-[3rem] box-border flex flex-row items-center justify-start p-[0.75rem] border-[1px] border-solid border-black"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] shrink-0">
            <div className="relative leading-[150%] inline-block shrink-0">
              Message
            </div>
            <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-[0.75rem] px-[0.75rem] pb-[9rem] relative shrink-0 text-neutral-dark-gray border-[1px] border-solid border-black">
              <div className="self-stretch relative leading-[150%]">
                Type your message...
              </div>
              <img
                className="w-[0.125rem] h-[0.125rem] absolute !m-[0] right-[0.125rem] bottom-[0.113rem] object-contain"
                loading="lazy"
                alt=""
              />
              <img
                className="w-[0.375rem] h-[0.375rem] absolute !m-[0] right-[0.125rem] bottom-[0.125rem] object-contain z-[1]"
                alt=""
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-[0.875rem]">
            <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] gap-[0.75rem]">
              <input className="m-0 h-[1.219rem] w-[1.125rem]" type="checkbox" />
              <div className="relative leading-[150%] inline-block min-w-[7.25rem]">
                {`I accept the `}
                <span className="[text-decoration:underline]">Terms</span>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[3rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border">
            <button className="cursor-pointer py-[0.75rem] px-[1.5rem] bg-black h-[3.125rem] box-border flex flex-row items-start justify-start border-[1px] border-solid border-black hover:bg-darkslategray hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
              <div className="relative text-[1rem] leading-[150%] font-text-regular-normal text-white text-left inline-block min-w-[3.188rem]">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent;