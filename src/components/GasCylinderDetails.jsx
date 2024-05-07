import { useState } from 'react';
import Cylinder from '/cooking-gas.jpeg';
import Blue from '/Rectangle42.png';

import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';
import ConnectWallet from './connect/ConnectWallet';

const carouselImages = ['/prd1.png', '/prd2.png', '/prd3.png'];

function GasCylinderDetails() {
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();
	const rating = 4.5;
	const totalReviews = 27;

	const incrementQuantity = () => setQuantity(prev => prev + 1);
	const decrementQuantity = () =>
		setQuantity(prev => (prev > 1 ? prev - 1 : 1));
	const features = [
		{ id: 1, text: 'Size of the cylinder' },
		{ id: 2, text: 'Select the quick filler station of your choice' },
		
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
		navigate('/gas-filling');
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
			<div className='container flex justify-center flex-grow mx-auto mt-32 p '>
				<div className='w-full p-8 mx-auto mt-10 bg-white rounded-lg shadow-lg'>
					<div className='flex flex-row justify-between'>
						<img
							src={Cylinder}
							alt='Gas Cylinder'
							className='object-cover rounded-lg basis-2/5 h-80 shrink-0'
						/>
						<div>
							<h2 className='mt-4 text-4xl font-bold text-green-600'>
								Gas Cylinder
							</h2>
							<div className='flex mt-2'>
								{renderStars()}
								<span className='ml-2 text-sm text-gray-600'>
									{totalReviews}
								</span>
							</div>
							<div>
								<div className='flex flex-col gap-2 mt-4 list-disc'>
									{features.map(feature => (
										<p key={feature.id}>{feature.text}</p>
									))}
								</div>
								<div className='flex flex-col gap-2 border-t border-gray-600'>
									<h3 className='mt-4'>Select Gas Kg</h3>
									<p>Select prefer color</p>
									<p>Input delivery address</p>
								</div>
								<div className='flex flex-row items-center justify-center mt-4'>
									<button
										onClick={decrementQuantity}
										className='block px-5 py-2 text-xl font-semibold border rounded hover:bg-gray-200'>
										-
									</button>
									<span className='px-5 py-2 text-lg font-medium border'>
										{quantity}
									</span>
									<button
										onClick={incrementQuantity}
										className='block px-5 py-2 text-xl font-semibold border rounded hover:bg-gray-200'>
										+
									</button>
									<ConnectWallet btnText='Connect Wallet & pay' />
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-row justify-between'>
						<div>
							<button className='block px-4 py-2 mt-4 font-bold text-white bg-green-600 rounded hover:bg-gray-300'>
								Review
							</button>
						</div>

						<div className='p-2 mt-4 '>
							<h3 className='ml-auto text-sm font-semibold'>Related Product</h3>
							<img
								src={Blue}
								alt='Related Product'
								className='object-cover mt-2 rounded-lg w-80 h-60'
							/>
							<div className='flex justify-center'>
								<button
									onClick={handleClick}
									className='block px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600'>
									Gas refill
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GasCylinderDetails;
