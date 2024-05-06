import { useState } from 'react';
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';

const serviceCarousel = [
	'./../assets/serv1.png',
	'./../assets/serv2.png',
	'./../assets/serv3.png',
];
function PaymentSolution() {
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
			<div className='container justify-center flex-grow mt-32 '>
				<div className=' flex justify-center bg-[#F9FCFA]'>
					<div className='flex flex-col w-full gap-4 px-4 mt-4 md:w-10/12 lg:w-8/12 xl:w-6/12'>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							Payment Solutions: Choose from various payment options, including
							credit/debit cards, mobile wallets, and XRP cryptocurrency.{' '}
						</p>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							Rewards Program: Earn points for every gas transaction and redeem
							them for discounts or other benefits.{' '}
						</p>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							Customer Support: Our dedicated team is here to assist you with
							any inquiries or concerns you may have.{' '}
						</p>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							We&apos;re committed to making your experience with Quick Filler
							as convenient and enjoyable as possible!{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PaymentSolution;
