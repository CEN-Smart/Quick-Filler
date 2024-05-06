import React, { useState } from "react";
import Dl from "../assets/dl.png";
import Footer from "./Footer";
import Header from "./navbar/Header";
import Carousel, { serviceCarousel } from "./Carousel";
import { useNavigate } from "react-router-dom";

function PaymentSolution() {
    const [activeButton, setActiveButton] = useState('');

  const navigate = useNavigate();
  const handleCardClick = (text) => {
    const route = text.toLowerCase().replace(/ /g, "-");
    setActiveButton(text); // Set the active button
    navigate(`/${route}`);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="header header-transparent" />
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="absolute top-0 w-full bg-center bg-cover">
          <Carousel images={serviceCarousel} />
        </div>
        <div className="container relative mx-auto " style={{ zIndex: 10 }}>
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl ">Services</h1>
              </div>
              <div className="absolute top-40 right-0 bg-white flex flex-col gap-3 w-48 h-30 p-3 z-10">
                <p
                  className={`hover:bg-green-600 cursor-pointer ${
                    activeButton === "Gas Station Locator"
                      ? "bg-green-600 text-white"
                      : ""
                  }`}
                  onClick={() => handleCardClick("Gas Station Locator")}
                >
                  Gas Station Locator
                </p>
                <p
                  className={`hover:bg-green-600 cursor-pointer ${
                    activeButton === "Gas filling & delivery"
                      ? "bg-green-600 text-white"
                      : ""
                  }`}
                  onClick={() => handleCardClick("Gas filling & delivery")}
                >
                  Gas filling & delivery
                </p>
                <p
                  className={`hover:bg-green-600 cursor-pointer ${
                    activeButton === "Payment Solutions"
                      ? "bg-green-600 text-white"
                      : ""
                  }`}
                  onClick={() => handleCardClick("Payment Solutions")}
                >
                  Payment Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-32 flex-grow   justify-center ">
        <div className=" flex justify-center bg-[#F9FCFA]">
          <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col mt-4 gap-4 px-4">
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              Payment Solutions: Choose from various payment options, including
              credit/debit cards, mobile wallets, and XRP cryptocurrency.{" "}
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              Rewards Program: Earn points for every gas transaction and redeem
              them for discounts or other benefits.{" "}
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              Customer Support: Our dedicated team is here to assist you with
              any inquiries or concerns you may have.{" "}
            </p>
            <p className="mt-4 text-xl leading-relaxed text-[#000000]">
              We're committed to making your experience with Quick Filler as
              convenient and enjoyable as possible!{" "}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PaymentSolution;
