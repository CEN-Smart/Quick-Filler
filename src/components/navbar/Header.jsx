import { useState } from 'react';
import { Logo } from './logo';
import './Header.css';
import ConnectWallet from '../connect/ConnectWallet';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useLocation } from 'react-router-dom';

const links = [
	{ label: 'About us', path: '/about' },
	{ label: 'Services', path: '/services' },
	{ label: 'Product', path: '/product' },
	{ label: 'More', path: '/more' },
];
function Header({ className }) {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const location = useLocation();
	const [open, setOpen] = useState(false);

	function handleMenuToggle() {
		setOpen(open => !open);
	}

	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener('scroll', changeColor);

	return (
		<header
			className={cn(
				` fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out h-24 flex items-center justify-center bg-[#0f0f0f] text-white shadow-md`,
				className,
				{
					'bg-[#409cd4]': location.pathname === '/',
					' bg-transparent shadow-none': location.pathname !== '/',
				}
			)}>
			<div className='flex items-center justify-between container-width'>
				<Logo />
				<nav
					className={cn(
						`md:flex absolute z-50 md:relative left-0 top-24 md:top-0 bg-[#409cd4] md:gap-10 flex-col md:flex-row md:bg-inherit p-4 space-y-20 md:space-y-0 w-96 md:w-auto -translate-x-full transition-transform duration-300 ease-in-out md:-translate-x-0`,
						{
							'translate-x-0': open,
						}
					)}>
					<ul
						className={cn(
							`md:flex md:flex-row flex-col md:items-center text-white md:gap-10 space-y-4 md:space-y-0`
						)}>
						{links.map(link => (
							<li key={link.label}>
								<NavLink
									onClick={() => setOpen(false)}
									className={cn(``, {
										'font-semibold text-emerald-300':
											location.pathname === link.path,
									})}
									to={link.path}>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>
					<ConnectWallet
						className=''
						btnText='Connect Wallet'
					/>
				</nav>
				<div
					className='block cursor-pointer md:hidden'
					onClick={handleMenuToggle}>
					{open ? (
						<FaTimes
							size={20}
							style={{ color: '#fff' }}
						/>
					) : (
						<FaBars
							size={20}
							style={{ color: '#fff' }}
						/>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
