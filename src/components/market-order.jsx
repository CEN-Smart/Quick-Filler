import PropTypes from 'prop-types';
import ConnectWallet from './connect/ConnectWallet';
import { LearnMoreButton } from './learn-more-btn';
MarketOrder.propTypes = {
	heading: PropTypes.string,
	title: PropTypes.string,
	firstRating: PropTypes.string,
	firstLabel: PropTypes.string,
	secondRating: PropTypes.string,
	secondLabel: PropTypes.string,
	btnGroup: PropTypes.bool,
	img: PropTypes.string,
	alt: PropTypes.string,
	label: PropTypes.string,
	href: PropTypes.string,
};

export function MarketOrder({
	heading,
	title,
	firstRating,
	firstLabel,
	alt,
	secondRating,
	secondLabel,
	btnGroup,
	img,
	label,
	href,
}) {
	return (
		<section className=' max-w-[1200px] mx-auto mt-20'>
			<div className='flex flex-col items-center gap-8 md:flex-row'>
				<div className='flex flex-col flex-1 flex-shrink-0 gap-4 basis-3/5'>
					<h3 className='text-[#409CD4] font-bold text-2xl md:text-[2rem] leading-[1.1] lg:text-[3rem]'>
						{heading}{' '}
					</h3>
					<p className='text-md md:text-lg lg:text-2xl'>{title}</p>
					<div className='flex items-center gap-4'>
						<p className='flex flex-col gap-1'>
							{' '}
							<span className='text-2xl font-semibold  md:text-5xl text-emerald-600'>
								{firstRating}
							</span>
							<span className='text-sm'>{firstLabel}</span>
						</p>
						<p className='flex flex-col gap-1'>
							{' '}
							<span className='text-2xl font-semibold  md:text-5xl text-emerald-600'>
								{secondRating}
							</span>
							<span>{secondLabel}</span>
						</p>
					</div>
					{btnGroup && (
						<div className='flex items-center gap-1'>
							<LearnMoreButton
								label={label}
								href={href}
							/>{' '}
							<ConnectWallet btnText='Connect Wallet' />
						</div>
					)}
				</div>
				<div className=' basis-2/5 shrink-0'>
					<img
						src={img}
						alt={alt}
						className='w-full'
					/>
				</div>
			</div>
		</section>
	);
}
