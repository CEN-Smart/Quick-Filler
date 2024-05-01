// pages/About.jsx
import React from "react";
import Header from "../navbar/Header";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <Header className="header header-transparent" />
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/src/assets/about-pic.png')" }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto" style={{ zIndex: 10 }}>
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">About us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className=" flex justify-center bg-[#F9FCFA]">
          <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 px-4">
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              Quick filler is an Gas dispensing Company that encourages trade
              through the use of Cryptocurrency(XRP)
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              At Quick Fillers, we're all about embracing cutting-edge
              technologies and new solutions to enhance the gas filling
              experience for our users.
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              By Connecting One's wallet, we offer faster and cheaper
              transactions that offers seamless Service to our Customers,
              Through the use of a decentralized Blockchain.
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              We aim at becoming the leading provider of seamless, eco-friendly
              gas filling solutions globally, driving positive change in the
              industry while prioritizing innovation, sustainability, and
              customer satisfaction.
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              Our goal is to revolutionize the gas filling industry by providing
              innovative, convenient, and eco-friendly solutions that empower
              our users to fuel their lives efficiently and sustainably.
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              We're committed to making a difference in the industry and putting
              our customers first.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
