import React from "react";
import logo from "../assets/QUICK_FILLER_logo_1_1-removebg-preview 1.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/logos_facebook.png"
import Instagram from "../assets/skill-icons_instagram.png"
import Twitter from "../assets/mage_x.png"



const Footer = () => {
  return (
<div className="bg-[#409CD4] lg:px-10  w-full md:py-2 py-4 px-6 flex lg:justify-between flex-wrap gap-y-2 lg:gap-y-0 justify-between">
        <div className="mt-10 pl-14" >
        <img src={logo} className="md:w-[300px] w-[100px]" alt="logo" />
      </div>
      <div className="flex flex-col lg:gap-y-4 md:gap-y-1 gap-y-2 text-[#FFFFFF]  mt-8 font-medium">
        <p className=" font-semibold  text-3xl">Quick Links</p>
        <div className="flex flex-col md:gap-2 gap-1 md:text-base text-sm">
          <Link to="/about" target="_blank">
            About us
          </Link>
          <Link to="/services" target="_blank">
            Services
          </Link>
          <Link to="/product" target="_blank">
            Product
          </Link>
          <Link to="/more" target="_blank">
            More
          </Link>
          <Link to="/faq" target="_blank">
            FAQ's
          </Link>
          <Link to="/blog" target="_blank">
            Blogs/News
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:gap-y-4 gap-y-2 text-[#FFFFFF]">
        <p className="font-semibold text-3xl mt-8 pr-8">Connect with us</p>
        <div className="flex flex-col justify-between items-center gap-4">
          <span className="flex flex-row gap-2">
            <img src={Facebook} alt="" />
            Facebook
          </span>
          <span className="flex flex-row gap-2">
            <img src={Instagram} alt="" />
            Instagram
          </span>

          <span className="flex flex-row gap-2">
            <img src={Twitter} alt="" />
            Twitter x
          </span>
        </div>

      </div>
    </div>
  );
};

export default Footer;
