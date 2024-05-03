import React, { useState } from "react";
import Locator from "../assets/locator.png";
import Footer from "./Footer";
import Header from "./navbar/Header";
import Carousel, { serviceCarousel } from "./Carousel";
import { useNavigate } from "react-router-dom";

function GasStation() {
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
      <div className="container mt-28 flex-grow mx-auto  justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
          <div className="flex flex-col justify-center">
            <p className=" text-2xl">
              Quick Filler also offers a range of services to enhance your
              overall experience and provide added value. Here are some of the
              services we provide:
            </p>
            <p className=" text-2xl">
              Gas Station Locator: Easily find nearby Quick Filler gas stations,
              including operating hours, fuel types, and amenities.
            </p>{" "}
            <div>
              <div>
                <img src={Locator} alt="Related Product" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GasStation;
