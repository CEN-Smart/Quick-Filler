import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const FooterLinks = ({ linkList, img, heading, className }) => {
	return (
		<div
			className={cn(
				`flex flex-col items-start lg:gap-y-4 gap-y-2 text-[#FFFFFF]`,
				className
			)}>
			<p className='text-3xl font-semibold '>{heading}</p>
			<div className='flex flex-col items-start justify-between gap-4'>
				{linkList?.map(link => (
					<span
						key={link.link}
						className='flex flex-row gap-2'>
						{img && (
							<img
								src={link.img}
								alt={link.alt}
							/>
						)}
						<NavLink to={link.path}>{link.link}</NavLink>
					</span>
				))}
			</div>
		</div>
	);
};

export default FooterLinks;
