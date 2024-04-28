
import { useMemo } from "react";
import "tailwindcss/tailwind.css";

const CardMarketing = ({
  socialIdeasAmico1,
  images,
  digitalMarketing,
  sEO,
  propLeft,
  propPadding,
  propWidth,
  propDisplay,
}) => {
  const socialIdeasAmico1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const digitalMarketingContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className="h-[22.438rem] w-[21.563rem] relative max-w-full text-center text-[1.75rem] text-black font-poppins" >
      <img
        className="absolute top-[0rem] rounded-3xl left-[3.25rem] w-[15.625rem] h-[15.625rem] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/Security-amico.png"
        style={socialIdeasAmico1Style}
      />
      <div
        className="absolute top-[0.313rem] left-[0rem] rounded-3xl bg-white box-border w-full h-full flex flex-row items-end justify-end py-[2.187rem] px-[2.875rem] max-w-full border-[1px] border-solid border-black mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border" style={{borderRadius: "24px"}}
        // style={frameDivStyle}
      >
        <div className="h-[22.125rem] w-[21.563rem] relative rounded-3xl bg-white box-border hidden mix-blend-normal max-w-full border-[1px] border-solid border-black" />
        <div
          className="w-[15.188rem] relative inline-block z-[2] mq450:text-[1.375rem]"
          style={digitalMarketingContainerStyle}
        >
          <p className="m-0">{digitalMarketing}</p>
          <p className="m-0">{sEO}</p>
        </div>
      </div>
    </div>)}
    export default CardMarketing