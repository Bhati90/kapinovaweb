// import DetailCards from "./";
"use client";
import DetailCards from "./detail-card";

const Flowchart = () => {
  return (
    <div className="self-stretch mt-full bg-white overflow-hidden flex flex-row flex-wrap items-start justify-start py-[7rem] px-[1rem] box-border gap-[5rem] max-w-full text-left text-[1rem] text-black font-text-regular-normal mq750:gap-[1.25rem] mq450:pt-[2.938rem] mq450:pb-[2.938rem] mq450:box-border mq1100:pt-[4.563rem] mq1100:pb-[4.563rem] mq1100:box-border mq1250:gap-[2.5rem] mq1250:pl-[2rem] mq1250:pr-[2rem] mq1250:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] min-w-[25rem] max-w-full mq750:gap-[1rem] mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <div className="relative leading-[150%] font-semibold">
            Why do you work with us
          </div>
          <h1 className="m-0 self-stretch relative text-[3rem] leading-[120%] font-bold font-inherit mq750:text-[2.375rem] mq750:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Our Commitment to Client Success Sets Us Apart!
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem]">
          <button className="cursor-pointer py-[0.625rem] px-[1.437rem] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-[1rem] leading-[150%] font-text-regular-normal text-black text-left inline-block min-w-[5.063rem] whitespace-nowrap">
              Learn more
            </div>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[25rem] max-w-full text-[1.25rem] mq750:min-w-full">
        <DetailCards
          heading="Web and App Development"
          text="From sleek websites to intuitive mobile apps, we blend creativity with cutting-edge technology to bring your ideas to life. Let's build your digital footprint together!"
        />
        <DetailCards
          heading="Digital Marketing"
          text="Elevate your brand's visibility and engagement with our tailored digital marketing strategies. From SEO to social media management, we'll amplify your online impact and drive meaningful results."
        />
        <DetailCards
          heading="Branding and Advertising"
          text=" Your brand is more than just a logo—it's a story waiting to be told. With our strategic branding and advertising expertise, we'll help you create a compelling narrative that resonates with your audience and leaves a lasting impression."
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[2.5rem] max-w-full mq750:flex-wrap mq750:gap-[1.25rem]">
          <img
            className="h-[3rem] w-[3rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/flowchart-icon.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem] min-w-[21.438rem] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[140%] mq450:text-[1rem] mq450:leading-[1.375rem]">
              AI-powered Solutions
            </b>
            <div className="self-stretch relative text-[1rem] leading-[150%]">
              Harness the potential of artificial intelligence to revolutionize
              your operations. From chatbots to data analysis, our AI solutions
              empower businesses to streamline processes, enhance customer
              experiences, and stay ahead in today's dynamic market landscape.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
