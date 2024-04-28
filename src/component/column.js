
const Column = () => {
  return (
    <div className="flex-1 box-border overflow-hidden flex flex-col items-start justify-start py-[1.875rem] pr-[1.25rem] pl-[2rem] gap-[2rem] min-w-[19.5rem] max-w-full text-left text-[1.125rem] text-black font-text-regular-normal border-[1px] border-solid border-black mq450:gap-[1rem]">
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.25rem]">
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          loading="lazy"
          alt=""
          src="/star.svg"
        />
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          loading="lazy"
          alt=""
          src="/star.svg"
        />
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          loading="lazy"
          alt=""
          src="/star.svg"
        />
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          loading="lazy"
          alt=""
          src="/star.svg"
        />
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          loading="lazy"
          alt=""
          src="/star.svg"
        />
      </div>
      <div className="w-[22rem] relative leading-[150%] inline-block max-w-full">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare."
      </div>
      <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
        <img
          className="h-[3.5rem] w-[3.5rem] relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src="/testimonial-user.png"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[7rem]">
            Name Surname
          </div>
          <div className="relative leading-[150%]">Position, Company name</div>
        </div>
      </div>
    </div>
  );
};

export default Column;
