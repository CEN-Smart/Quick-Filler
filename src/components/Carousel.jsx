import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const carouselImages = [
    'src/assets/prd1.png',
    '/src/assets/prd2.png',
    '/src/assets/prd3.png'
  ];
  
  export const serviceCarousel = [
    'src/assets/serv1.png',
    'src/assets/serv2.png',
    'src/assets/serv3.png'
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
