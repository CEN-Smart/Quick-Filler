import React,{useState} from "react";
import Carousel, { serviceCarousel } from "../Carousel";
import Header from "../navbar/Header";
import { useNavigate } from "react-router-dom";

function Services() {
  const [activeButton, setActiveButton] = useState('');

  const navigate = useNavigate();
  const handleCardClick = (text) => {
    const route = text.toLowerCase().replace(/ /g, "-");
    setActiveButton(text); 
    navigate(`/${route}`);
  };
  
  return (
    <div>
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
    </div>
  );
}

export default Services;
