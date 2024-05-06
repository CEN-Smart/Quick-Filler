import logo from '../../assets/QUICK_FILLER_logo_1_1-removebg-preview 1.png';
import { Link } from 'react-router-dom';
const Logo = () => {
	return (
		<Link to='/'>
			<img
				src={logo}
				alt='logo'
				className='object-cover w-[11rem] h-16 shrink-0 cursor-pointer inline-block'
			/>
		</Link>
	);
};

export { Logo };
