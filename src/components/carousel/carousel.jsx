import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cn } from '../../lib/utils';
import { useCarousel } from '../../hooks/use-carousel';
export default function ImageCarousel({ carouselItems }) {
	const { index, setIndex } = useCarousel();
	return (
		<Carousel
			className='relative'
			activeIndex={index}
			onSelect={selectedIndex => {
				setIndex(selectedIndex);
			}}>
			{carouselItems.map(item => (
				<Carousel.Item
					key={item.id}
					className={`h-[40rem]`}
					interval={4000}>
					<img
						className='w-full h-[40rem] object-cover object-top'
						src={item.imageUrl}
						alt='slides'
					/>
					<Carousel.Caption className='absolute -translate-y-1/2 top-[64%] left-[15%]'>
						<h3 className='text-2xl font-semibold lg:text-5xl md:text-3xl'>
							{item.title}
						</h3>
						{/* item.links is an array */}
						{item.links && (
							<div className='absolute right-0 top-36'>
								{item.links.map((link, i) => (
									<div
										key={link.title}
										className='shadow-md bg-slate-50 max-w-[342px] p-2'>
										<span
											onClick={() => {
												setIndex(i);
											}}
											className={cn(
												`flex flex-col 
                                                cursor-pointer
                                                items-center px-3 py-2 text-black text-sm font-semibold transition-colors duration-300 ease-in-out hover:bg-emerald-500 hover:text-white`,
												{
													'bg-[#189a59] text-white': index === i,
												}
											)}>
											{link.title}
										</span>
									</div>
								))}
							</div>
						)}
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
