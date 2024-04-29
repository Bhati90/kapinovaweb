// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Flowchart from "../components/Flowchart";
// import Feature2 from "../components/Feature2";
// import Feature1 from "../components/Feature1";
// import Feature from "../components/Feature";
// import Testimonial from "../components/Testimonial";

import AboutReadMoreAnimation from "./aboutRead";
import Feature from "./feature";
import Feature1 from "./feature1";
import Feature2 from "./feature2";
import Flowchart from "./flowchart";
import Feature3 from "./feature3";
import Hero from "./hero";
import Navbar from "./Navbar";
import Testimonial from "./testimonial";
import CTA from "./CTA";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Links from "./Links";
import Feature4 from "./feature4";
import Desktop from "./Desktop";
import { useState } from "react";
import {Link} from 'react-router-dom';

const PageStructure = () => {
 
    const [showPopup, setShowPopup] = useState(true);
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
  return (
    <div className="">
    {/* <div className="fixed  w-full z-[100]">
    <Desktop onClose={handleClosePopup} />
  
  </div> */}
    <div className="w-full h-full relative flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border leading-[normal] tracking-[normal] mq1250:h-auto">
       <Navbar />
      <Hero />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
       <AboutReadMoreAnimation/>
       <Flowchart />
       {/* <Feature4/> */}
        <Feature2 />
        
      </section>
      {/* <AboutReadMoreAnimation/> */}
      <Feature1
        subheading="Digital Marketing"
        heading="Igniting Your Online Presence for Success"
        text="We leverage the power of data analytics to inform and optimize our digital marketing strategies. By analyzing user behavior, demographics, and market trends, we tailor our approach to maximize ROI and deliver targeted campaigns that resonate with your audience. With us, your marketing efforts are not just effective but also highly efficient."
      />
      
      <Feature />
      <Feature3
        subheading="AI-powered Solutions"
        heading="Unlocking the Power of AI for Your Business"
        text="Our AI solutions are not one-size-fits-all but rather tailored to address the specific needs and challenges of your business. Whether it's optimizing workflows, automating customer support, or analyzing big data, we develop AI-powered tools that adapt and evolve alongside your organization. By harnessing the power of personalization, we empower you to stay agile and competitive in an ever-changing landscape."
        propDisplay="unset"
        propMinWidth="unset"
      />
         {/* <Testimonial />*/}
      {/* <AboutReadMoreAnimation/> */}
      <CTA />
      <Header />
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[5rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[0.875rem] text-black font-text-small-link mq800:gap-[2.5rem] mq800:py-[3.25rem] mq800:px-[2rem] mq800:box-border mq450:gap-[1.25rem]">
        <div className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[1.437rem] box-border max-w-full gap-[1.25rem] mq1325:flex-wrap mq1325:justify-center">
          <Newsletter />
          <Links />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem]">
          <div className="self-stretch h-[0.063rem] relative bg-black" />
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
            <div className="relative leading-[150%]">
              © 2024 Kapinova. All rights reserved.
            </div>
            <div className="w-[21.563rem] flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq450:flex-wrap">
             <Link to = "/privacy> <div className="relative [text-decoration:underline] leading-[150%] inline-block min-w-[5.438rem]">
                Privacy Policy
              </div> </Link>
              <Link to = "/term> <div className="flex-1 relative [text-decoration:underline] leading-[150%] inline-block min-w-[4.25rem]">
                Terms of Service
              </div>
         </Link>
             
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default PageStructure
