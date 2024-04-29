import {Link} from 'react-router-dom'
import CardMarketing from "./cardMarketing";

const AboutReadMoreAnimation = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[10.75rem]  pl-[1.25rem] mt-0 box-border gap-[3.812rem] leading-[normal] tracking-[normal] mq450:gap-[0.938rem] mq750:gap-[1.875rem] mt-[67vh]">
      <section className="w-full !m-[0] absolute top-[0rem]   flex flex-row items-start  max-w-full text-center text-[2.375rem] text-white font-poppins  justify-center align-middle">
        <img
          className="h-[291.625rem] flex-1 relative max-w-full overflow-hidden object-contain"
          alt=""
          src="/bg-image.png"
        />
        <div className="w-[95%] !m-[0] absolute top-[4.5rem] rounded-17xl [background:linear-gradient(90deg,_#72dcf0,_#f50ad4)] flex flex-row items-start justify-center py-[2.687rem] px-[1.25rem] box-border min-h-[25rem] max-w-full z-[1] mq725:h-[730px] mq750:h-[1068px]">
          <div className="h-[25rem] w-[83.688rem] relative rounded-17xl [background:linear-gradient(90deg,_#72dcf0,_#f50ad4)] hidden max-w-full" />
          <h3 className="m-0 relative text-inherit italic font-bold font-inherit [text-shadow:4px_4px_8px_#000] z-[2] mq450:text-[1.438rem] mq1025:text-[1.875rem]">
            One-stop destination for fulfilling all your business needs.
          </h3>
        </div>
      </section>
      <section className="w-[77.188rem] flex flex-row items-end  max-w-full gap-[1.25rem] z-[2] text-center text-[1.75rem] text-black font-poppins flex-wrap justify-center align-middle mq1125:flex-wrap">
        <div className="h-[24rem] w-[21.563rem] relative max-w-full">
          <img
            className="absolute top-[0rem] left-[0.375rem] w-[18.75rem] h-[18.75rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/card-image-1.png"
          />
          <div className="absolute rounded-3xl top-[1.875rem] left-[0rem] rounded-3xl bg-white box-border h-[22.125rem] flex flex-row items-end justify-start py-[2.187rem] pr-[4.687rem] pl-[4.75rem] max-w-full border-[1px] border-solid border-black" style={{borderRadius:'24px'}}>
            <div className="h-[22.125rem] w-[21.563rem] relative rounded-3xl bg-white box-border hidden mix-blend-normal max-w-full border-[1px] border-solid border-black" />
            <div className="h-[5.25rem] relative inline-block z-[2] mq450:text-[1.375rem]">
              <p className="m-0">Web and App</p>
              <p className="m-0">Development</p>
            </div>
          </div>
        </div>
        <div className="h-[24rem] w-[21.563rem] relative max-w-full">
          <img
            className="absolute rounded-3xl top-[0rem] left-[0.375rem] w-[18.75rem] h-[18.75rem] object-cover z-[1]"
            loading="lazy"
            alt=""
          src="/card-image-2.png"
          />
          <div className="absolute top-[1.875rem] left-[0rem] rounded-3xl bg-white box-border h-[22.125rem] flex flex-row items-end justify-start py-[2.187rem] pr-[4.687rem] pl-[4.75rem] max-w-full border-[1px] border-solid border-black" style={{borderRadius:'24px'}}>
            <div className="h-[22.125rem] w-[21.563rem] relative rounded-3xl bg-white box-border hidden mix-blend-normal max-w-full border-[1px] border-solid border-black" />
            <div className="h-[5.25rem] relative inline-block z-[2] mq450:text-[1.375rem]">
              <p className="m-0">Digital Marketing </p>
              {/* <p className="m-0">Development</p> */}
            </div>
          </div>
        </div>
        {/* <CardMarketing
          socialIdeasAmico1="/social-ideasamico-1@2x.png"
          digitalMarketing="Digital Marketing "
          sEO={`& SEO`}
          images = 'card-image-1.png'
        /> */}
        <CardMarketing
          socialIdeasAmico1="/securityamico-1@2x.png"
          digitalMarketing="Cyber Security"
          sEO="Solutions"
          propLeft="2.938rem"
          propPadding="2.187rem 4.312rem 2.187rem 4.375rem"
          propWidth="unset"
          propDisplay="unset"
          images = 'card-image-2.png'
        />
      </section>
      <div className="w-[77.188rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.625rem] box-border max-w-full">
      <Link to = '/about' className = "no-underline">  <button className="cursor-pointer [border:none] pt-[0.312rem] pb-[0.562rem] pr-[0.781rem] pl-[0.875rem] bg-black rounded-4xs flex flex-row items-start justify-start gap-[0.25rem] z-[1]">
          <div className="h-[2.625rem] w-[9.938rem] relative rounded-4xs bg-black hidden" />
          <div className="relative text-[1.25rem] font-hannari text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[6.188rem] z-[1] mq450:text-[1rem]">
            SEE MORE
          </div>
          <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
            {/* <img
              className="w-[1.844rem] h-[0.688rem] relative z-[1]"
              alt=""
              src="/arrow-1-1.svg"
            /> */}
          </div>
        </button>
            </Link>
      </div>
    </div>)}
    export default AboutReadMoreAnimation;
