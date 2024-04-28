"use client";
import { useMemo,useState } from "react";

const Feature3 = ({ subheading, heading, text, propDisplay, propMinWidth }) => {
  const subheadingStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-start px-[1rem] box-border gap-[5rem] max-w-full shrink-0 text-center text-[1rem] text-black font-text-regular-normal mq750:gap-[1.25rem] mq450:pt-[2.938rem] mq450:pb-[2.938rem] mq450:box-border mq1100:pt-[4.563rem] mq1100:pb-[4.563rem] mq1100:box-border mq1250:gap-[2.5rem] mq1250:pl-[2rem] mq1250:pr-[2rem] mq1250:box-border">
       <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[25rem] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <b className="relative leading-[140%] mq450:text-[1rem] mq450:leading-[1.375rem]">
          AI-powered Solutions
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[3rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq750:text-[2.375rem] mq750:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Unlocking the Power of AI for Your Business
            </h1>
            <div className="self-stretch relative text-[1.125rem] leading-[150%]">
            Our AI solutions are not one-size-fits-all but rather tailored to address the specific needs and challenges of your business. Whether it's optimizing workflows, automating customer support, or analyzing big data, we develop AI-powered tools that adapt and evolve alongside your organization. By harnessing the power of personalization, we empower you to stay agile and competitive in an ever-changing landscape.
            </div>
            {expanded && (
              <div className="self-stretch relative text-[1.125rem] leading-[150%]">
                Our focus on UX design ensures that every website and app we
              develop not only looks stunning but also provides an intuitive and
              user-friendly experience. By prioritizing ease of navigation and
              functionality, we enhance user engagement and satisfaction,
              ultimately driving conversions and loyalty for your brand.
            </div>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem]">
          <button onClick={toggleExpanded} className="cursor-pointer py-[0.625rem] px-[1.437rem] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-[1rem] leading-[150%] font-text-regular-normal text-black text-left inline-block min-w-[5.063rem] whitespace-nowrap">
              {expanded ? 'Show less' : 'Read more'}
            </div>
          </button>
        </div>
      </div>
      <img
        className="flex-1 relative max-w-full overflow-hidden min-w-[25rem] mq750:min-w-full"
        loading="lazy"
        alt=""
        src="ai.jpg"
      />
     
    </section>
  );
};

export default Feature3;
