"use client";
import React, { useState } from 'react';

const Feature4 = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="self-stretch mt-[3rem] bg-white overflow-hidden flex flex-row justify-center align-middle flex-wrap  px-[1rem] box-border gap-[5rem] max-w-full z-[1] mt-[-3rem] text-center text-[1.25rem] text-black font-text-regular-normal  mq450:pb-[2.938rem] mq450:box-border mq1100:pb-[4.563rem] mq1100:box-border mq1250:gap-[2.5rem] mq1250:pl-[2rem] mq1250:pr-[2rem] mq1250:box-border">
        <div className='text-[3rem]'>WHO WE ARE </div>
    <div className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-start  px-[1rem] box-border gap-[5rem] max-w-full z-[1] mt-[-3rem] text-center text-[1.25rem] text-black font-text-regular-normal mq750:gap-[1.25rem] mq450:pb-[2.938rem] mq450:box-border mq1100:pb-[4.563rem] mq1100:box-border mq1250:gap-[2.5rem] mq1250:pl-[2rem] mq1250:pr-[2rem] mq1250:box-border">
      
      <div className="flex-1 flex  flex-col items-start justify-start gap-[1.5rem] min-w-[25rem] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
         
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[3rem]">
           
            <div className="self-stretch relative text-[1.125rem] leading-[150%]">
            At Kapinova, we pride ourselves on offering an expansive range of IT & Security services and Marketing Solutions meticulously crafted to propel your business into the future. With a keen focus on comprehensive solutions, our dedicated team excels in expert web and app development, creating seamless, user-friendly platforms that stand out in the digital realm. On the marketing front, Kapinova's innovative strategies redefine engagement, blending cutting-edge technologies with strategic planning to deliver campaigns that resonate with your target audience. </div>
            {expanded && (
              <div className="self-stretch relative text-[1.125rem] leading-[150%]">
               Our commitment to tailored technology solutions ensures that your unique business needs are not just met but exceeded – whether optimizing IT infrastructure, implementing advanced software, or fortifying cybersecurity measures. </div>
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
        className=" flex-1 relative min-w-[25rem] max-w-full overflow-hidden mq750:min-w-full"
        loading="lazy"
        alt=""
        src="/bg-img.png"
      />
    </div>
    </section>
  );
};

export default Feature4;