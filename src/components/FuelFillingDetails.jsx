import { useState } from 'react';
import Male from '/maleAttendant.jpeg';
import Cylinder from '/cooking-gas.jpeg';
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';
import ConnectWallet from './connect/ConnectWallet';
import { GasCylinderForm } from './form/gas-cylinder-form';

const carouselImages = ['/prd1.png', '/prd2.png', '/prd3.png'];
function FuelFillingDetails() {
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();
	const rating = 4.5;
	const totalReviews = 27;

	const incrementQuantity = () => setQuantity(prev => prev + 1);
	const decrementQuantity = () =>
		setQuantity(prev => (prev > 1 ? prev - 1 : 1));
	const features = [
		{
			id: 1,
			text: 'Turn on your location to locate the quick filler stations around you.',
		},
		{ id: 2, text: 'Select the quick filler station' },
		{ id: 3, text: 'Skip the queue option' },
	];
	const renderStars = () => {
		let stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < Math.floor(rating)) {
				stars.push(
					<span
						key={'star_full_' + i}
						className='text-xl text-yellow-400'>
						&#9733;
					</span>
				);
			} else if (i < rating) {
				stars.push(
					<span
						key={'star_half_' + i}
						className='text-xl text-yellow-400'>
						&#9733;
					</span>
				);
				stars.push(
					<span
						key={'star_empty_' + i}
						className='text-xl text-gray-300'>
						&#9733;
					</span>
				);
			} else {
				stars.push(
					<span
						key={'star_empty_' + i}
						className='text-xl text-gray-300'>
						&#9733;
					</span>
				);
			}
		}
		return stars;
	};
	const handleClick = () => {
		navigate('/gas-cylinder');
	};
	return (
		<div className='flex flex-col min-h-screen'>
			<div
				className='relative flex items-center content-center justify-center pt-16 pb-32'
				style={{ minHeight: '100vh' }}>
				<div className='absolute top-0 w-full bg-center bg-cover'>
					<Carousel images={carouselImages} />
				</div>
				<div
					className='container relative mx-auto '
					style={{ zIndex: 10 }}>
					<div className='flex flex-wrap items-center'>
						<div className='w-full px-4 ml-auto mr-auto text-center lg:w-6/12'>
							<div className='pr-12'>
								<h1 className='text-5xl font-semibold text-white '>Product</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container flex justify-center flex-grow mx-auto mt-32'>
				<div className='xl:pt-[25rem] pt-0 pb-20 space-y-10 container-width'>
					<div className='flex flex-col gap-6 md:flex-row'>
						<img
							src={Male}
							alt='Gas Cylinder'
							className='flex-1 aspect-[16/9] rounded-lg object-fit shrink-0 '
						/>
						<GasCylinderForm className='flex-1 shrink-0' />
					</div>
					<div className='flex flex-row justify-between'>
						<div>
							<button className='block px-4 py-2 mt-4 font-bold text-white bg-green-600 rounded hover:bg-gray-300'>
								Review
							</button>
						</div>

						<div className='p-2 mt-8 '>
							<h3 className='ml-auto text-sm font-semibold'>Related Product</h3>
							<img
								src={Cylinder}
								alt='Related Product'
								className='object-cover mt-2 rounded-lg w-80 h-60'
							/>
							<div className='flex justify-center'>
								<button
									onClick={handleClick}
									className='block px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600'>
									Gas cylinder
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FuelFillingDetails;
