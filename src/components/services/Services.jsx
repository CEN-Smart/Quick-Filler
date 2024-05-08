import { useState } from 'react';
import Carousel from '../Carousel';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../carousel/carousel';

const serviceCarousel = [
	{
		id: 1,
		title: 'Services',
		imageUrl: '/serv1.png',
		links: [
			{
				title: 'Gas station locator',
				url: '/gas-station-locator',
			},
			{
				title: 'Gas Filling & Delivery',
				url: '/gas-filling-delivery',
			},
			{
				title: 'Payment solution',
				url: '/payment-solution',
			},
		],
	},
	{
		id: 2,
		title: 'Services',
		imageUrl: '/serv2.png',
		links: [
			{
				title: 'Gas station locator',
				url: '/gas-station-locator',
			},
			{
				title: 'Gas Filling & Delivery',
				url: '/gas-filling-delivery',
			},
			{
				title: 'Payment solution',
				url: '/payment-solution',
			},
		],
	},
	{
		id: 3,
		title: 'Services',
		imageUrl: '/serv3.png',
		links: [
			{
				title: 'Gas station locator',
				url: '/gas-station-locator',
			},
			{
				title: 'Gas Filling & Delivery',
				url: '/gas-filling-delivery',
			},
			{
				title: 'Payment solution',
				url: '/payment-solution',
			},
		],
	},
];

function Services() {
	return <ImageCarousel carouselItems={serviceCarousel} />;
}
// 	const [activeButton, setActiveButton] = useState('');

// 	const navigate = useNavigate();
// 	const handleCardClick = text => {
// 		const route = text.toLowerCase().replace(/ /g, '-');
// 		setActiveButton(text);
// 		navigate(`/${route}`);
// 	};

// 	return (
// 		<div>
// 			<div className='relative flex items-center content-center justify-center '>
// 				<div className='absolute top-0 z-10 w-full min-h-screen bg-top bg-cover'>
// 					<Carousel images={serviceCarousel} />
// 				</div>
// 				<div
// 					className='relative mx-auto '
// 					style={{ zIndex: 10 }}>
// 					<div className='flex flex-wrap items-center'>
// 						<div className='grid w-full min-h-screen px-4 text-center place-items-center'>
// 							<div className=''>
// 								<h1 className='text-5xl font-semibold text-white '>Services</h1>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='xl:pt-[54rem] md:pt-[35rem] sm:pt-[25rem] pt-[20rem] pb-20 container-width space-y-10'>
// 				<div className=' md:w-[800px] mx-auto w-[600px] space-y-3'>
// 					<p>
// 						Quick Filler also offers a range of services to enhance your overall
// 						experience and provide added value. Here are some of the services we
// 						provide:
// 					</p>
// 					<p>
// 						Gas Station Locator: Easily find nearby Quick Filler gas stations,
// 						including operating hours, fuel types, and amenities
// 					</p>
// 				</div>
// 				<img
// 					className={`
// 					max-w-[500px]
// 					w-full
// 					mx-auto

// 					`}
// 					src='/locator.png'
// 					alt='Location Finder'
// 				/>
// 			</div>
// 		</div>
// 	);
// }

export default Services;
