import { useState } from 'react';
import Locator from '/locator.png';

import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';

const serviceCarousel = [
	'./../assets/serv1.png',
	'./../assets/serv2.png',
	'./../assets/serv3.png',
];
function GasStation() {
	const [activeButton, setActiveButton] = useState('');

	const navigate = useNavigate();
	const handleCardClick = text => {
		const route = text.toLowerCase().replace(/ /g, '-');
		setActiveButton(text); // Set the active button
		navigate(`/${route}`);
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<div
				className='relative flex items-center content-center justify-center pt-16 pb-32'
				style={{ minHeight: '100vh' }}>
				<div className='absolute top-0 w-full bg-center bg-cover'>
					<Carousel images={serviceCarousel} />
				</div>
				<div
					className='container relative mx-auto '
					style={{ zIndex: 10 }}>
					<div className='flex flex-wrap items-center'>
						<div className='w-full px-4 ml-auto mr-auto text-center lg:w-6/12'>
							<div className='pr-12'>
								<h1 className='text-5xl font-semibold text-white '>Services</h1>
							</div>
							<div className='absolute right-0 z-10 flex flex-col w-48 gap-3 p-3 bg-white top-40 h-30'>
								<p
									className={`hover:bg-green-600 cursor-pointer ${
										activeButton === 'Gas Station Locator'
											? 'bg-green-600 text-white'
											: ''
									}`}
									onClick={() => handleCardClick('Gas Station Locator')}>
									Gas Station Locator
								</p>
								<p
									className={`hover:bg-green-600 cursor-pointer ${
										activeButton === 'Gas filling & delivery'
											? 'bg-green-600 text-white'
											: ''
									}`}
									onClick={() => handleCardClick('Gas filling & delivery')}>
									Gas filling & delivery
								</p>
								<p
									className={`hover:bg-green-600 cursor-pointer ${
										activeButton === 'Payment Solutions'
											? 'bg-green-600 text-white'
											: ''
									}`}
									onClick={() => handleCardClick('Payment Solutions')}>
									Payment Solutions
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container justify-center flex-grow mx-auto mt-28 '>
				<div className='max-w-2xl p-8 mx-auto mt-10 bg-white rounded-lg shadow-lg'>
					<div className='flex flex-col justify-center'>
						<p className='text-2xl '>
							Quick Filler also offers a range of services to enhance your
							overall experience and provide added value. Here are some of the
							services we provide:
						</p>
						<p className='text-2xl '>
							Gas Station Locator: Easily find nearby Quick Filler gas stations,
							including operating hours, fuel types, and amenities.
						</p>{' '}
						<div>
							<div>
								<img
									src={Locator}
									alt='Related Product'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GasStation;
