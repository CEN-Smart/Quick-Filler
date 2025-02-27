import { useState } from 'react';
import Burner from '/burner.png';
import Male from '/maleAttendant.jpeg';

import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';
import ConnectWallet from './connect/ConnectWallet';
import { GasCylinderForm } from './form/gas-cylinder-form';

const carouselImages = ['/prd1.png', '/prd2.png', '/prd3.png'];
function GasBurnerDetails() {
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
		navigate('/petroleum-filling');
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
							src={Burner}
							alt='Gas Cylinder'
							className='flex-1 aspect-[16/9] rounded-lg object-fit shrink-0 '
						/>

						<GasCylinderForm className='flex-1 shrink-0' />
						<div>
							<h2 className='mt-4 text-4xl font-bold text-green-600'>
								Gas Burner
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
									<h3 className='mt-4'>Select Type</h3>
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
								src={Male}
								alt='Related Product'
								className='object-cover mt-2 rounded-lg w-80 h-60'
							/>
							<div className='flex justify-center'>
								<button
									onClick={handleClick}
									className='block px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600'>
									Petrol Filling
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GasBurnerDetails;
