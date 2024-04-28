const Layout3 = () => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start py-[3.5rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[3rem] text-black font-text-small-link mq800:gap-[1.25rem] mq800:pt-[4.563rem] mq800:pb-[4.563rem] mq800:box-border mq1325:flex-wrap mq1325:gap-[2.5rem] mq1325:pl-[2rem] mq1325:pr-[2rem] mq1325:box-border">
      <img
        className="w-[36.813rem] relative max-h-full object-cover max-w-full mq1325:flex-1"
        loading="lazy"
        alt=""
        src="/service1.jpg"
      />
      <div className="flex-1 flex flex-col items-start justify-start min-w-[26.125rem] max-w-full mq800:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[3.625rem] font-bold font-inherit mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Web Development
          </h1>
          <div className="self-stretch h-[27rem] relative text-[1.125rem] leading-[150%] inline-block">
            <p className="m-0">
              Web development is the process of creating and maintaining
              websites, encompassing everything from the initial design and
              layout to the backend coding and functionality. It involves a
              combination of technical expertise and creative skills to bring a
              website to life on the internet. Web developers work with various
              programming languages and frameworks to build interactive and
              dynamic websites that cater to the needs of businesses and users
              alike. This includes ensuring responsive design for optimal
              viewing across devices, implementing intuitive navigation for
              seamless user experience, and integrating features such as forms,
              databases, and e-commerce functionality as required. Furthermore,
              web development encompasses aspects like performance optimization,
              security measures, and ongoing maintenance to ensure that the
              website remains functional, secure, and up-to-date over time. In
              today's digital age, a well-designed and functional website is
              essential for establishing an online presence, engaging with
              audiences, and achieving business objectives, making web
              development a critical aspect of any organization's digital
              strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout3;
