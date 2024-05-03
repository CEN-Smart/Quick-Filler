import React,{useState} from "react";
import Carousel, { carouselImages} from "../Carousel";
import Header from "../navbar/Header";
import ProductCard from "../ProductCard";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function Product() {
const navigate = useNavigate()
  const [activeProduct, setActiveProduct] = useState(null);

  const handleCardClick = (btnTitle) => {
    const route = btnTitle.toLowerCase().replace(" ", "-");
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
          <Carousel images={carouselImages} />
        </div>
        <div
          className="container relative mx-auto "
          style={{ zIndex: 10 }}
        >
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
        <div className="flex flex-col justify-center gap-4 bg-white p-6">
          <div className="grid grid-cols-2 gap-12 p-4">
            <ProductCard
              image="src/assets/cooking-gas.jpeg"
              btnTitle="Gas Cylinder"
              rating={4}
              onClick={() =>handleCardClick("Gas Cylinder")}
            />
            <ProductCard
              image="src/assets/Rectangle 42.png"
              btnTitle="Gas Filling"
              rating={3}
              onClick={() =>handleCardClick("Gas Filling")}
            />
            <ProductCard
              image="src/assets/burner.png"
              btnTitle="Gas Burner"
              rating={5}
              onClick={() =>handleCardClick("Gas Burner")}
            />
            <ProductCard
              image="src/assets/maleAttendant.jpeg"
              btnTitle="Petroleum Filling"
              rating={2}
              onClick={() =>handleCardClick("Petroleum Filling")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;

