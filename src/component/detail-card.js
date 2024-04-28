
const DetailCards = ({ heading, text }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[2.5rem] max-w-full text-left text-[1.25rem] text-black font-text-regular-normal mq750:flex-wrap mq750:gap-[1.25rem]">
      <div className="h-[10.25rem] flex flex-col items-end justify-start gap-[1rem]">
        <img
          className="w-[3rem] h-[3rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/flowchart-icon.svg"
        />
        <div className="flex-1 flex flex-row items-start justify-end py-[0rem] pr-[1.375rem] pl-[1.5rem]">
          <div className="h-[6.375rem] w-[0.125rem] relative box-border border-r-[2px] border-solid border-black" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem] min-w-[21.438rem] max-w-full mq750:min-w-full">
        <b className="self-stretch relative leading-[140%] mq450:text-[1rem] mq450:leading-[1.375rem]">
          {heading}
        </b>
        <div className="self-stretch relative text-[1rem] leading-[150%]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default DetailCards;
