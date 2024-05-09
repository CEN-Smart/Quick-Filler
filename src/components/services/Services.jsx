import { useCarousel } from '../../hooks/use-carousel';
import ImageCarousel from '../carousel/carousel';
import { ServiceDisplay } from './service-display';
import locatorImage from '/locator.png';
import personPayImage from '/dl.png';

const serviceCarousel = [
	{
		id: 1,
		title: 'Services',
		imageUrl: '/serv1.png',
		links: [
			{
				title: 'Gas station locator',
			},
			{
				title: 'Gas Filling & Delivery',
			},
			{
				title: 'Payment solution',
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
			},
			{
				title: 'Gas Filling & Delivery',
			},
			{
				title: 'Payment solution',
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
			},
			{
				title: 'Gas Filling & Delivery',
			},
			{
				title: 'Payment solution',
			},
		],
	},
];

function Services() {
	const { index } = useCarousel();
	return (
		<div>
			<ImageCarousel carouselItems={serviceCarousel} />

			{index === 0 && (
				<ServiceDisplay>
					<div className=' space-y-12'>
						<div className='max-w-[1000px] mx-auto space-y-4'>
							<p>
								Quick Filler also offers a range of services to enhance your
								overall experience and provide added value. Here are some of the
								services we provide:
							</p>
							<p>
								Gas Station Locator: Easily find nearby Quick Filler gas
								stations, including operating hours, fuel types, and amenities
							</p>
						</div>
						<img
							className='max-w-[797px] h-auto object-cover object-top mx-auto'
							src={locatorImage}
							alt='locator'
						/>
					</div>
				</ServiceDisplay>
			)}
			{index === 1 && (
				<ServiceDisplay>
					<div className=' space-y-12'>
						<div className='max-w-[1000px] mx-auto space-y-4'>
							<p className='lg:text-5xl md:text-3xl text-2xl text-[#189a59] font-semibold'>
								Gas Delivery Services
							</p>
							<p>
								Get your cooking gas cylinders delivered right to your desired
								location, at your preferred time.
							</p>
						</div>
						<img
							className='max-w-[797px] h-auto object-cover object-top mx-auto'
							src={personPayImage}
							alt='locator'
						/>
					</div>
				</ServiceDisplay>
			)}
			{index === 2 && (
				<ServiceDisplay>
					<div className='max-w-[1000px] mx-auto space-y-4'>
						<p>
							Payment Solutions: Choose from various payment options, including
							credit/debit cards, mobile wallets, and XRP cryptocurrency.
						</p>
						<p>
							Rewards Program: Earn points for every gas transaction and redeem
							them for discounts or other benefits.
						</p>
						<p>
							Customer Support: Our dedicated team is here to assist you with
							any inquiries or concerns you may have.
						</p>
						<p>
							We're committed to making your experience with Quick Filler as
							convenient and enjoyable as possible!
						</p>
					</div>
				</ServiceDisplay>
			)}
		</div>
	);
}

export default Services;
