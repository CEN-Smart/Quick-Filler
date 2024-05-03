import React, { useState } from "react";
import Cylinder from "../assets/cooking-gas.jpeg";
import Blue from "../assets/Rectangle 42.png";
import Footer from "./Footer";
import Header from "./navbar/Header";
import Carousel, { carouselImages } from "./Carousel";
import { useNavigate } from "react-router-dom";
import ConnectWallet from "./connect/ConnectWallet";

function GasCylinderDetails() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const rating = 4.5;
  const totalReviews = 27;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const features = [
    { id: 1, text: "Size of the cylinder" },
    { id: 2, text: "Select the quick filler station of your choice" },
    { id: 3, text: "Select Cylinder Kg" },
  ];
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars.push(<span key={"star_full_" + i} className="text-yellow-400 text-xl">&#9733;</span>);
        } else if (i < rating) {
            stars.push(<span key={"star_half_" + i} className="text-yellow-400 text-xl">&#9733;</span>);
            stars.push(<span key={"star_empty_" + i} className="text-gray-300 text-xl">&#9733;</span>);
        } else {
            stars.push(<span key={"star_empty_" + i} className="text-gray-300 text-xl">&#9733;</span>);
        }
    }
    return stars;
};
  const handleClick = () => {
    navigate("/gas-filling");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="header header-transparent" />
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="absolute top-0 w-full bg-center bg-cover">
          <Carousel images={carouselImages} />
        </div>
        <div className="container relative mx-auto " style={{ zIndex: 10 }}>
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl ">Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-grow mx-auto p justify-center mt-32 ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto mt-10">
          <div className="flex flex-row justify-between">
            <img
              src={Cylinder}
              alt="Gas Cylinder"
              className="basis-2/5 h-80  shrink-0 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-4xl font-bold text-green-600  mt-4">
                Gas Cylinder
              </h2>
              <div className="flex  mt-2">
                {renderStars()}
                <span className="ml-2 text-sm text-gray-600">
                  {totalReviews}
                </span>
              </div>
              <div>
                <div className="list-disc flex flex-col gap-2 mt-4">
                  {features.map((feature) => (
                    <p key={feature.id}>{feature.text}</p>
                  ))}
                </div>
                <div className="flex flex-col gap-2 border-t border-gray-600">
                  <h3 className="mt-4">Select Kg</h3>
                  <p>Select prefer color</p>
                  <p>Input delivery address</p>
                </div>
                <div className="flex flex-row items-center justify-center mt-4">
                  <button
                    onClick={decrementQuantity}
                    className="text-xl font-semibold px-5 py-2 border rounded block hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-5 py-2 border  text-lg font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="text-xl font-semibold px-5 py-2 border rounded block hover:bg-gray-200"
                  >
                    +
                  </button>
                  <ConnectWallet btnText="Connect Wallet & pay" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <button className="bg-green-600 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded block  mt-4">
                Review
              </button>
            </div>

            <div className="mt-4 p-2 ">
              <h3 className="text-sm font-semibold ml-auto">Related Product</h3>
              <img
                src={Blue}
                alt="Related Product"
                className="w-80 h-60 object-cover rounded-lg mt-2"
              />
              <div className="flex justify-center">
                <button
                  onClick={handleClick}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded block   mt-4"
                >
                  Gas refill
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GasCylinderDetails;
