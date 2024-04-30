import Navbar from "./Navbar";
import Layout3 from "./Layout3";
import Layout2 from "./Layout2";
import Layout1 from "./Layout1";
import CTA from "./CTA";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Links from "./Links";
import {Link} from 'react-router-dom'

const MacBookPro = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-[0rem] px-[0rem] box-border leading-[normal] tracking-[normal]">
      <Navbar />
      <div className="flex justify-center align-middle w-full">
        <h1 className="text-[3.5rem]">SERVICES</h1>
      </div>
      <Layout3 />
      <Layout2 />
      <Layout1
        placeholderImage="/service3.jpg"
        heading="Digital Marketing"
        paragraph="Digital marketing encompasses a diverse range of strategies and tactics aimed at promoting products, services, or brands through online channels and platforms. It leverages digital technologies such as the internet, social media, search engines, email, and mobile devices to reach and engage target audiences effectively. Key components of digital marketing include search engine optimization (SEO), content marketing, social media marketing, email marketing, pay-per-click (PPC) advertising, and influencer marketing. Digital marketers utilize a combination of these tactics to create integrated campaigns that drive brand awareness, generate leads, increase website traffic, and ultimately, drive conversions and sales. With the ability to target specific demographics, track user behavior, and measure campaign performance in real-time, digital marketing offers businesses unparalleled opportunities for audience targeting, personalization, and optimization. In today's digitally-driven world, an effective digital marketing strategy is essential for businesses looking to stay competitive, build brand credibility, and achieve their marketing objectives in an increasingly crowded online marketplace."
      />
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start py-[7rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[3rem] text-black font-text-small-link mq800:gap-[1.25rem] mq800:pt-[4.563rem] mq800:pb-[4.563rem] mq800:box-border mq1325:flex-wrap mq1325:gap-[2.5rem] mq1325:pl-[2rem] mq1325:pr-[2rem] mq1325:box-border">
        <img
          className="w-[36.438rem] relative max-h-full object-cover max-w-full mq1325:flex-1"
          loading="lazy"
          alt=""
          src="/service4.jpg"
        />
        <div className="flex-1 flex flex-col items-start justify-start min-w-[26.375rem] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <b className="self-stretch relative leading-[3.625rem] mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              Search Engine Optimization
            </b>
            <div className="self-stretch relative text-[1.125rem] leading-[150%]">
              Search Engine Optimization (SEO) is the cornerstone of any
              effective digital marketing strategy, aimed at enhancing a
              website's visibility in search engine results pages (SERPs) and
              driving organic traffic. On-page SEO involves optimizing
              individual web pages by conducting thorough keyword research to
              identify relevant terms and integrating them strategically into
              content, meta tags, and URLs. Off-page SEO complements this by
              building high-quality backlinks from reputable sources, engaging
              in social media promotion, and managing online reputation.
              Technical SEO ensures that the website's technical infrastructure
              is optimized for search engines, including factors like site
              speed, mobile-friendliness, and schema markup. Monitoring and
              analyzing SEO performance through metrics such as organic traffic,
              keyword rankings, and conversion rates allow businesses to
              continuously refine their strategies and improve results over
              time. By implementing a comprehensive SEO strategy that
              encompasses these elements, businesses can increase their online
              visibility, attract more qualified leads, and ultimately drive
              business growth through search engines.
            </div>
          </div>
        </div>
      </section>
      <Layout1
        heading="Branding and Advertising"
        paragraph="Branding and advertising are essential components of any successful marketing strategy, working together to build brand awareness, shape perceptions, and drive consumer engagement. Branding involves creating a unique identity and personality for a brand, encompassing its values, mission, and visual elements such as logo, colors, and typography. Consistent branding across all touchpoints helps to establish brand recognition and loyalty among consumers. Advertising, on the other hand, involves promoting products or services through various channels such as print, digital, television, and social media. Effective advertising campaigns leverage the brand's identity and messaging to create compelling narratives that resonate with target audiences, driving awareness, consideration, and ultimately, purchase decisions. By integrating branding and advertising efforts cohesively, businesses can create a strong brand presence, foster meaningful connections with consumers, and achieve their marketing objectives effectively."
        placeholderImage="/service5.jpg"
        propMinWidth="26.375rem"
        propWidth="36.438rem"
      />
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start py-[7rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[3rem] text-black font-text-small-link mq800:gap-[1.25rem] mq800:pt-[4.563rem] mq800:pb-[4.563rem] mq800:box-border mq1325:flex-wrap mq1325:gap-[2.5rem] mq1325:pl-[2rem] mq1325:pr-[2rem] mq1325:box-border">
        <img
          className="w-[36.438rem] relative max-h-full object-cover max-w-full mq1325:flex-1"
          loading="lazy"
          alt=""
          src="/service6.jpg"
        />
        <div className="flex-1 flex flex-col items-start justify-start min-w-[26.375rem] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[3.625rem] font-bold font-inherit mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              Influencer marketing
            </h1>
            <div className="self-stretch relative text-[1.125rem] leading-[150%]">
              Influencer marketing has emerged as a powerful strategy for brands
              to connect with their target audiences authentically and drive
              engagement. By collaborating with influencers who have a strong
              following and influence within specific niches or industries,
              brands can leverage their credibility and trust to reach potential
              customers effectively. Influencers create authentic and relatable
              content that resonates with their audience, providing valuable
              recommendations and endorsements for products or services. This
              form of marketing allows brands to tap into the influencer's loyal
              fan base, driving brand awareness, engagement, and ultimately,
              conversions. Effective influencer campaigns involve identifying
              the right influencers whose values align with the brand,
              developing creative and compelling content that fits seamlessly
              into the influencer's platform, and measuring the impact of the
              campaign through key performance indicators such as reach,
              engagement, and conversion rates. By harnessing the power of
              influencer marketing, brands can amplify their message, increase
              brand visibility, and build meaningful connections with consumers
              in today's digital landscape.
            </div>
          </div>
        </div>
      </section>
      <Layout1
        heading="Graphic Design"
        paragraph="Graphic design plays a pivotal role in shaping the visual identity and communication of brands, businesses, and organizations across various industries. It encompasses the creation of visual elements such as logos, typography, colors, and imagery to convey messages, evoke emotions, and establish brand recognition. Graphic designers utilize their creativity, technical skills, and understanding of design principles to develop compelling and impactful visuals that resonate with target audiences. From designing eye-catching marketing materials such as brochures, posters, and banners to creating memorable brand logos and packaging designs, graphic design is instrumental in capturing attention and conveying brand personality. Moreover, in today's digital age, graphic design extends beyond traditional mediums to include digital assets such as website graphics, social media posts, and mobile app interfaces, ensuring a cohesive and immersive brand experience across all touchpoints. Effective graphic design not only enhances aesthetics but also communicates information effectively, influences perceptions, and drives engagement, ultimately contributing to the success and growth of businesses and brands in a visually-driven world."
        placeholderImage="/service7.jpg"
        propMinWidth="26.375rem"
        propWidth="36.438rem"
      />
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
              <div className="relative [text-decoration:underline] leading-[150%] inline-block min-w-[5.438rem]">
               <Link to = '/privacy'> Privacy Policy</Link>
              </div>
              <div className="flex-1 relative [text-decoration:underline] leading-[150%] inline-block min-w-[4.25rem]">
               <Link to = '/term'> Terms of Service</Link>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookPro;
