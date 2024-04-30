const Layout2 = () => {
  return (
    <section className="h-full self-stretch bg-white  flex flex-row items-center justify-start py-[7rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[3rem] text-black font-text-small-link mq800:gap-[1.25rem] mq800:pt-[4.563rem] mq800:pb-[4.563rem] mq800:box-border mq450:pt-[2.938rem] mq450:pb-[2.938rem] mq450:box-border mq1325:flex-wrap mq1325:gap-[2.5rem] mq1325:pl-[2rem] mq1325:pr-[2rem] mq1325:box-border">
      <img
        className="w-[36.438rem] relative max-h-full object-cover max-w-full mq1325:flex-1"
        loading="lazy"
        alt=""
        src="/service2.jpg"
      />
      <div className="h-full flex-1 flex flex-col items-start justify-start min-w-[26.375rem] max-w-full mq800:min-w-full">
        <div className="h-full self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[3.625rem] font-bold font-inherit mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            App Development
          </h1>
          <div className="h-full self-stretch h-[30.375rem] relative text-[1.125rem] tracking-[-0.05px] leading-[150%] inline-block">
            <p className="m-0">
              App development involves the creation and deployment of mobile
              applications for various platforms such as iOS, Android, and
              cross-platform environments. It encompasses a wide range of
              activities, from conceptualization and design to coding, testing,
              and deployment. App developers leverage programming languages and
              development frameworks to build functional and user-friendly
              applications that meet the specific needs and requirements of
              users and businesses. This includes designing intuitive user
              interfaces, implementing essential features and functionalities,
              and optimizing performance for seamless user experience.
              Throughout the development process, app developers work closely
              with designers, project managers, and stakeholders to ensure that
              the app aligns with the desired objectives and meets quality
              standards. Additionally, app development involves rigorous testing
              to identify and fix bugs, compatibility issues, and performance
              bottlenecks before releasing the app to the market. With the
              proliferation of mobile devices and the increasing demand for
              mobile solutions, app development has become essential for
              businesses looking to reach and engage with their target audience
              effectively in today's digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout2;
