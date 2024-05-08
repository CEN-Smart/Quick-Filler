import { useState } from 'react';
import Carousel from '../Carousel';
import ProductCard from '../ProductCard';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../carousel/carousel';

const carouselImages = [
	{
		id: 1,
		title: 'Products',
		imageUrl: '/prd1.png',
	},
	{
		id: 2,
		title: 'Products',
		imageUrl: '/prd2.png',
	},
	{
		id: 3,
		title: 'Products',
		imageUrl: '/prd3.png',
	},
];

function Product() {
	const navigate = useNavigate();
	const [activeProduct, setActiveProduct] = useState(null);

	const handleCardClick = btnTitle => {
		const route = btnTitle.toLowerCase().replace(' ', '-');
		navigate(`/${route}`);
	};
	return (
		<div className='flex flex-col'>
			<ImageCarousel carouselItems={carouselImages} />
			<div className='flex justify-center flex-grow mx-auto md:pt-[20rem] -mt-28 md:mt-0'>
				<div className='flex flex-col justify-center gap-4 p-6 bg-white'>
					<div className='grid grid-cols-1 gap-12 p-4 md:grid-cols-2'>
						<ProductCard
							image='/cooking-gas.jpeg'
							btnTitle='Gas Cylinder'
							rating={4}
							onClick={() => handleCardClick('Gas Cylinder')}
						/>
						<ProductCard
							image='/Rectangle42.png'
							btnTitle='Gas Filling'
							rating={3}
							onClick={() => handleCardClick('Gas Filling')}
						/>
						<ProductCard
							image='/burner.png'
							btnTitle='Gas Burner'
							rating={5}
							onClick={() => handleCardClick('Gas Burner')}
						/>
						<ProductCard
							image='/maleAttendant.jpeg'
							btnTitle='Petroleum Filling'
							rating={2}
							onClick={() => handleCardClick('Petroleum Filling')}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
