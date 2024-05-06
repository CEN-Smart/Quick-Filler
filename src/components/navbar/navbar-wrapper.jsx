import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../Footer';

export const NavbarWrapper = () => {
	return (
		<div>
			<Header />
			<main className=''>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
