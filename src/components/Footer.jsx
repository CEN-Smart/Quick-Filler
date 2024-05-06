import { Logo } from './navbar/logo';
import { Link } from 'react-router-dom';
import Facebook from '../assets/logos_facebook.png';
import Instagram from '../assets/skill-icons_instagram.png';
import Twitter from '../assets/mage_x.png';
import FooterLinks from './footer-links';
import { cn } from '../lib/utils';

const links = [
	{ link: 'About us', path: '/about' },
	{ link: 'Services', path: '/services' },
	{ link: 'Product', path: '/product' },
	{ link: 'More', path: '/more' },
	{ link: 'FAQs', path: '/faq' },
	{ link: 'Blogs/News', path: '/blog' },
];

const linksWithImg = [
	{
		link: 'Facebook',
		path: 'https://www.facebook.com',
		img: Facebook,
		alt: 'Facebook',
	},
	{
		link: 'Instagram',
		path: 'https://www.instagram.com',
		img: Instagram,
		alt: 'Instagram',
	},
	{
		link: 'Twitter',
		path: 'https://www.twitter.com',
		img: Twitter,
		alt: 'Twitter',
	},
];
const Footer = () => {
	return (
		<footer className={cn(`bg-[#409CD4] py-16`)}>
			<div className='flex flex-col items-start space-y-8 sm:justify-between sm:space-y-0 sm:flex-row container-width'>
				<Logo />
				<FooterLinks
					className='pl-8 sm:pl-0'
					linkList={links}
					heading='Quick Links'
				/>
				<FooterLinks
					className='pl-8 sm:pl-0'
					linkList={linksWithImg}
					img
					heading='Social Media'
					alt='Social Media'
				/>
			</div>
		</footer>
	);
};

export default Footer;
