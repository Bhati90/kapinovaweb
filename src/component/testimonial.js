"use client";
import Column from "./column";

const Testimonial = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-[7rem] px-[4rem] box-border gap-[5rem] max-w-full shrink-0 text-center text-[3rem] text-black font-text-regular-normal mq750:gap-[2.5rem] mq750:py-[4.563rem] mq750:px-[2rem] mq750:box-border mq450:gap-[1.25rem]">
      <div className="w-[35rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[3.625rem] font-bold font-inherit mq750:text-[2.375rem] mq750:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
          Customer testimonials
        </h1>
        <div className="self-stretch relative text-[1.125rem] leading-[150%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem] max-w-full text-left text-[1.125rem] mq750:gap-[1rem]">
        <Column />
        <Column />
        <Column />
      </div>
    </section>
  );
};

export default Testimonial;
