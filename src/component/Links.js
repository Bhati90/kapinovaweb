import {Link} from "react-router-dom";
const Links = () => {
    return (
      <div className="w-[42.75rem] flex flex-row items-start justify-start gap-[2.5rem] min-w-[42.75rem] max-w-full text-left text-[1rem] text-black font-text-small-link mq800:flex-wrap mq800:gap-[1.25rem] mq1125:min-w-full mq1325:flex-1">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem] min-w-[9.438rem]">
       
          <div className="self-stretch relative leading-[150%] font-semibold">
            Contact Us
          </div>
        
          <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
              <div className="flex-1 relative leading-[150%]">Phone no. - +91 987654311</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
              <div className="flex-1 relative leading-[150%]">Email ID - vipulagarwalkapinova@gmail.com</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
              <div className="flex-1 relative leading-[150%]">Address - 3, Aakar Complex, University Road,<br/> Udaipur - 313001</div>
            </div>
            {/* <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
              <div className="flex-1 relative leading-[150%]">Link Four</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
              <div className="flex-1 relative leading-[150%]">Link Five</div>
            </div> */}
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem] min-w-[9.438rem]">
          <div className="self-stretch relative leading-[150%] font-semibold">
            Useful Links
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
              <Link to ="/about">
              <div className="flex-1 relative leading-[150%]">About Us</div>
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
             <Link to ="/service">  <div className="flex-1 relative leading-[150%]">Our Services</div></Link>
            </div>
            // <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
            //   <div className="flex-1 relative leading-[150%]">Projects</div>
            // </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
              <div className="flex-1 relative leading-[150%]">Careers</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] px-[0rem]">
             <Link to ="/contact">  <div className="flex-1 relative leading-[150%]">Contact Us</div> </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[9.438rem]">
          <div className="self-stretch relative leading-[150%] font-semibold">
            Follow Us
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem]">
            <a className = "no-underline" href="https://www.facebook.com/profile.php?id=61556822562430">
            <div className="self-stretch  text-black flex flex-row items-start justify-start py-[0.5rem] pr-[6.562rem] pl-[0rem] gap-[0.75rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/Vector.svg"
              />
              <div className="relative leading-[150%] inline-block min-w-[3.813rem]">
                Facebook
              </div>
            </div>
            </a>
            <a className = "no-underline" href="https://www.instagram.com/kapinova_company/">
            <div className="self-stretch  text-black flex flex-row items-start justify-start py-[0.5rem] pr-[6.375rem] pl-[0rem] gap-[0.75rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/Vector-1.svg"
              />
              <div className="relative leading-[150%] inline-block min-w-[4rem]">
                Instagram
              </div>
             
            </div>
            </a>
            {/* <div className="self-stretch flex flex-row items-start justify-start py-[0.5rem] pr-[7.625rem] pl-[0rem] gap-[0.75rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/icon--twitter.svg"
              />
              <div className="relative leading-[150%] inline-block min-w-[2.75rem]">
                Twitter
              </div>
            </div> */}
            <a className = "no-underline"href="https://www.linkedin.com/company/kapinova/">
            <div className="self-stretch text-black no-underline flex flex-row items-start justify-start py-[0.5rem] pr-[7.062rem] pl-[0rem] gap-[0.75rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/Vector-2.svg"
              />
              <div className="relative leading-[150%] no-underline inline-block min-w-[3.313rem]">
                LinkedIn
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Links;
  
