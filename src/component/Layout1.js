import { useMemo } from "react";

const Layout1 = ({
  heading,
  paragraph,
  placeholderImage,
  propMinWidth,
  propWidth,
}) => {
  const contentStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const placeholderImageStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start py-[7rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[3rem] text-black font-text-small-link mq800:gap-[2.5rem] mq800:py-[4.563rem] mq800:px-[2rem] mq800:box-border mq450:gap-[1.25rem] mq1325:flex-wrap">
      <div
        className="flex-1 flex flex-col items-start justify-start min-w-[29.5rem] max-w-full mq800:min-w-full"
        style={contentStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[3.625rem] font-bold font-inherit mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            {heading}
          </h1>
          <div className="self-stretch relative text-[1.125rem] leading-[150%]">
            {paragraph}
          </div>
        </div>
      </div>
      <img
        className="w-[31.625rem] relative max-h-full object-cover max-w-full mq1325:flex-1"
        loading="lazy"
        alt=""
        src={placeholderImage}
        style={placeholderImageStyle}
      />
    </section>
  );
};

export default Layout1;
