import { useState } from 'react';
import Carousel from '../Carousel';
import { useNavigate } from 'react-router-dom';

const serviceCarousel = ['/serv1.png', '/serv2.png', '/serv3.png'];

function Services() {
	const [activeButton, setActiveButton] = useState('');

	const navigate = useNavigate();
	const handleCardClick = text => {
		const route = text.toLowerCase().replace(/ /g, '-');
		setActiveButton(text);
		navigate(`/${route}`);
	};

	return (
		<div>
			<div className='relative flex items-center content-center justify-center pt-16 pb-32'>
				<div className='absolute top-0 z-10 w-full min-h-screen bg-top bg-cover'>
					<Carousel images={serviceCarousel} />
				</div>
			</div>
			<div className='xl:pt-[54rem] md:pt-[35rem] sm:pt-[25rem] pt-[20rem] pb-20 container-width space-y-10'>
				<div className=' md:w-[800px] mx-auto w-[600px] space-y-3'>
					<p>
						Quick Filler also offers a range of services to enhance your overall
						experience and provide added value. Here are some of the services we
						provide:
					</p>
					<p>
						Gas Station Locator: Easily find nearby Quick Filler gas stations,
						including operating hours, fuel types, and amenities
					</p>
				</div>
				<img
					className={`
					max-w-[500px]
					w-full
					mx-auto
					
					`}
					src='/locator.png'
					alt='Location Finder'
				/>
			</div>
		</div>
	);
}

export default Services;
