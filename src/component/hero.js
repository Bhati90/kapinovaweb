"use client";
const Hero = () => {
  return (
    <section className="self-stretch mt-16 fixed z-[-3] w-full bg-white overflow-hidden flex flex-col items-center justify-start pt-[7rem] px-[4rem] pb-[0.187rem] box-border max-w-full shrink-0 text-left text-[3.5rem] text-black font-text-regular-normal mq750:gap-[2.5rem] mq750:pt-[4.563rem] mq750:px-[2rem] mq750:pb-[1.25rem] mq750:box-border mq450:gap-[1.25rem]">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[5rem] max-w-full mq750:gap-[2.5rem] mq450:gap-[1.25rem]">
        <div className="flex-1 flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1.5rem] min-w-[25rem] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq750:text-[2.813rem] mq750:leading-[3.375rem] mq450:text-[2.125rem] mq450:leading-[2.5rem]">
              <p className="m-0">EMPOWERING</p>
              <p className="m-0">
                <span>{`YOUR `}</span>
                <span className="text-red">BRAND</span>
   <span className="text-red">With us </span>
              </p>
            </h1>
            <div className="self-stretch h-[1.688rem] relative text-[1.125rem] leading-[150%] hidden" />
          </div>
          <div className="flex flex-row items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] gap-[1rem] text-[1rem]">
          
            <div className="h-[3.125rem] w-[6.125rem] box-border hidden flex-row items-center justify-center py-[0.75rem] px-[1.5rem] border-[1px] border-solid border-black">
              <div className="w-[3rem] relative leading-[150%] hidden">
                Button
              </div>
            </div>
          </div>
        </div>
        <img
          className=" flex-1 relative max-w-full overflow-hidden object-cover min-w-[25rem] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/Hero-section-image.png"
        />
      </div>
    </section>
  );
};

export default Hero;
