import {Link} from "react-router-dom";
import { useState,useEffect } from "react";




const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  
  return (


<header className="self-stretch  bg-white box-border overflow-hidden flex  items-center justify-center pt-[1rem] px-[4rem] pb-[0.875rem] top-[0] z-[99] min-h-[85.73px] sticky max-w-full text-left text-[1rem] text-black font-text-small-link border-b-[1px] border-solid border-black mq800:pl-[2rem] mq800:pr-[2rem] flex-row mq800:box-border">
<div className="self-stretch flex flex-row items-center justify-between gap-[2rem] max-w-full mq800:gap-[1rem]">
  <div className="w-[26.813rem] absolute top-0 left-0 flex flex-row items-start justify-start max-w-full">
    <img
      className="h-[2.75rem] mt-[25px] relative overflow-hidden shrink-0 "
      loading="lazy"
      alt=""
      src="../Logo.png"
    />
  </div>
  {/* Mobile Menu Icon */}
  <div className="cursor-pointer mq1400:hidden mq1325:visible absolute top-0 right-0 m-[2rem]" onClick={toggleMobileMenu}>
  <svg
     xmlns="http://www.w3.org/2000/svg"
     className="h-6 w-6"     fill="none"
     viewBox="0 0 24 24"
     stroke="currentColor"
   >
     <path
      strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M4 6h16M4 12h16m-7 6h7"
     />
   </svg>
 </div>
</div>
{/* Mobile Menu Content */}
{isMobileMenuOpen && (
<div className="w-full h-[100vh] flex flex-col items-center justify-center gap-[1rem] mq730:hidden">
 <Link to="/home" className="relative leading-[150%] inline-block min-w-[2.75rem] text-black text-2xl no-underline">Home</Link>
 <Link to="/about" className="relative leading-[150%] inline-block min-w-[2.688rem] text-black text-2xl no-underline">About</Link>
 <Link to="/services" className="relative leading-[150%] inline-block min-w-[2.688rem] text-black text-2xl no-underline">Services</Link>
 <Link to="/contact" className="relative leading-[150%] inline-block min-w-[3.813rem] text-black text-2xl no-underline">Contact us</Link>
</div>
)}

{/* Desktop Menu Content */}
{/* <div className="self-stretch flex flex-row items-center justify-center gap-[4.25rem] mq1325:hidden">
  <div className="relative leading-[150%] inline-block min-w-[2.75rem]">Home</div>
  <div className="relative leading-[150%] inline-block min-w-[2.688rem]">About</div>
  <Link to="/services" className="self-stretch w-[3.813rem] relative leading-[150%]">Services</Link>
  <div className="flex flex-row items-center justify-center gap-[0.25rem]">
    <div className="relative leading-[150%] inline-block min-w-[3.813rem]">Contact us</div>
     Additional dropdown icon if needed 
    <img
      className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
      alt=""
      src="/dropdown.svg"
    />
  </div>
</div> */}
  <div className="w-[28rem] ml-[33%] overflow-hidden shrink-0 flex flex-row items-start justify-center gap-[4.25rem] mq1325:hidden">
          <Link to = '/home'>
           <div className=" text-black relative leading-[150%] inline-block min-w-[2.75rem]">
            Home
          </div>
          </Link>
          <Link to = '/about'>
          <div className="text-black relative leading-[150%] inline-block min-w-[2.688rem]">
             About
           </div>
           </Link>
           {/* <div className="self-stretch w-[3.813rem] relative leading-[150%] hidden">
             <Link to="/services"></Link>
           </div> */}
           {/* <Link to = 'services'> */}
           <div className=" text-black flex flex-row items-center justify-center gap-[0.25rem]">
                       <Link to = '/service'> <div className="relative text-black leading-[150%] inline-block min-w-[3.813rem]">
               Services
             </div>
             </Link>
         
            </div>
           
        </div>
        <div className="flex-1 mq1325:hidden flex flex-col items-end justify-center max-w-full">
        <Link to="/contact">
          <button className="cursor-pointer py-[0.375rem] px-[1.187rem] bg-black flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-[1rem] leading-[150%] font-text-small-link text-white text-left inline-block min-w-[4.813rem]">
              Contact us
            </div>
          </button>
          </Link>
        </div>
      
</header>
);
};

export default Navbar;