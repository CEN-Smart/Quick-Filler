import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
					<img
						src={img}
						alt={`Carousel ${index}`}
					/>
				</div>
			))}
		</Slider>
	);
}

export default Carousel;
