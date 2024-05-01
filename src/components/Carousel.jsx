import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const carouselImages = [
    'src/assets/prd 1.png',
    '/src/assets/prd 2.png',
    '/src/assets/prd 3.png'
  ];
  
  export const serviceCarousel = [
    'src/assets/serv 1.png',
    'src/assets/serv 2.png',
    'src/assets/serv 3.png'
  ];
  

function Carousel({ images }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Carousel ${index}`}  />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
