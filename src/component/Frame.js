import Navbar from "./Navbar";
import Hero from "./hero";
import Flowchart from "./flowchart";
import Feature from "./feature";
import Testimonial from "./testimonial";
import CTA from "./CTA";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Links from "./Links";

const Frame = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar />
      <Hero />
      <Flowchart />
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7rem] px-[4rem] box-border gap-[5rem] max-w-full text-center text-[1.25rem] text-black font-text-small-link mq800:gap-[1.25rem] mq1125:pt-[4.563rem] mq1125:pb-[4.563rem] mq1125:box-border mq450:pt-[2.938rem] mq450:pb-[2.938rem] mq450:box-border mq1325:gap-[2.5rem] mq1325:pl-[2rem] mq1325:pr-[2rem] mq1325:box-border">
        <img
          className="h-[40rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[25rem] mq800:min-w-full"
          loading="lazy"
          alt=""
          src="service6.jpg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[25rem] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <b className="relative leading-[140%] mq450:text-[1rem] mq450:leading-[1.375rem]">
              Web and App Development
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[3rem]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                Crafting Digital Experiences That Wow!
              </h1>
              <div className="self-stretch relative text-[1.125rem] leading-[150%]">
                Our focus on UX design ensures that every website and app we
                develop not only looks stunning but also provides an intuitive
                and user-friendly experience. By prioritizing ease of navigation
                and functionality, we enhance user engagement and satisfaction,
                ultimately driving conversions and loyalty for your brand.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem]">
            <button className="cursor-pointer py-[0.625rem] px-[1.437rem] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-[1rem] leading-[150%] font-text-small-link text-black text-left inline-block min-w-[5.063rem] whitespace-nowrap">
                Learn more
              </div>
            </button>
          </div>
        </div>
      </section>
      <Feature
        subheading="Digital Marketing"
        heading="Igniting Your Online Presence for Success"
        text="We leverage the power of data analytics to inform and optimize our digital marketing strategies. By analyzing user behavior, demographics, and market trends, we tailor our approach to maximize ROI and deliver targeted campaigns that resonate with your audience. With us, your marketing efforts are not just effective but also highly efficient."
      />
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7rem] px-[4rem] box-border gap-[5rem] max-w-full text-center text-[1rem] text-black font-text-small-link mq800:gap-[1.25rem] mq1125:pt-[4.563rem] mq1125:pb-[4.563rem] mq1125:box-border mq450:pt-[2.938rem] mq450:pb-[2.938rem] mq450:box-border mq1325:gap-[2.5rem] mq1325:pl-[2rem] mq1325:pr-[2rem] mq1325:box-border">
        <img
          className="h-[40rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[25rem] mq800:min-w-full"
          loading="lazy"
          alt=""
          src="service5.jpg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[25rem] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <div className="relative leading-[150%] font-semibold">
              Branding and Advertising
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[3rem]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                Shaping Brands That Speak Volumes
              </h1>
              <div className="self-stretch relative text-[1.125rem] leading-[150%]">
                Our expertise lies in crafting compelling brand stories that
                captivate and resonate with your target audience. We go beyond
                visual aesthetics to uncover the essence of your brand and
                communicate its unique value proposition effectively. Through
                authentic storytelling, we establish emotional connections that
                foster brand loyalty and differentiation in the market.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start pt-[1rem] px-[0rem] pb-[0rem]">
            <button className="cursor-pointer py-[0.625rem] px-[1.437rem] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-[1rem] leading-[150%] font-text-small-link text-black text-left inline-block min-w-[5.063rem] whitespace-nowrap">
                Learn more
              </div>
            </button>
          </div>
        </div>
      </section>
      <Feature
        subheading="AI-powered Solutions"
        heading="Unlocking the Power of AI for Your Business"
        text="Our AI solutions are not one-size-fits-all but rather tailored to address the specific needs and challenges of your business. Whether it's optimizing workflows, automating customer support, or analyzing big data, we develop AI-powered tools that adapt and evolve alongside your organization. By harnessing the power of personalization, we empower you to stay agile and competitive in an ever-changing landscape."
        propDisplay="unset"
        propMinWidth="unset"
      />
      <Testimonial />
      <CTA />
      <Header />
      <footer className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[5rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[0.875rem] text-black font-text-small-link mq800:gap-[2.5rem] mq800:py-[3.25rem] mq800:px-[2rem] mq800:box-border mq450:gap-[1.25rem]">
        <div className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[1.437rem] box-border max-w-full gap-[1.25rem] mq1325:flex-wrap mq1325:justify-center">
          <Newsletter />
          <Links />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem]">
          <div className="self-stretch h-[0.063rem] relative bg-black" />
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
            <div className="relative leading-[150%]">
              © 2023 Relume. All rights reserved.
            </div>
            <div className="w-[21.563rem] flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq450:flex-wrap">
              <div className="relative [text-decoration:underline] leading-[150%] inline-block min-w-[5.438rem]">
                Privacy Policy
              </div>
              <div className="flex-1 relative [text-decoration:underline] leading-[150%] inline-block min-w-[4.25rem]">
                Terms of Service
              </div>
              <div className="flex-1 relative [text-decoration:underline] leading-[150%] inline-block min-w-[4.25rem]">
                Cookies Settings
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Frame;
