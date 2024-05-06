import About from './components/about/About';
import Services from './components/services/Services';
import Product from './components/product/Product';
import More from './components/more/More';
import LandingPage from './pages/LandingPage';
import Faq from './components/Faq';
import Blog from './components/Blog';
import './App.css';
import GasCylinderDetails from './components/GasCylinderDetails';
import GasFillingDetails from './components/GasFillingDetails';
import GasBurnerDetails from './components/GasBurnerDetails';
import FuelFillingDetails from './components/FuelFillingDetails';
import GasFilling from './components/GasFilling';
import PaymentSolution from './components/PaymentSolution';
import GasStation from './components/GasStation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavbarWrapper } from './components/navbar/navbar-wrapper';

const router = createBrowserRouter([
	{
		path: '/',
		element: <NavbarWrapper />,
		errorElement: <div>404 Not Found</div>,
		children: [
			{ path: '/', element: <LandingPage /> },
			{ path: '/about', element: <About /> },
			{ path: '/services', element: <Services /> },
			{ path: '/product', element: <Product /> },
			{ path: '/more', element: <More /> },
			{ path: '/faq', element: <Faq /> },
			{ path: '/blog', element: <Blog /> },
			{ path: '/gas-cylinder', element: <GasCylinderDetails /> },
			{ path: '/gas-filling', element: <GasFillingDetails /> },
			{ path: '/gas-burner', element: <GasBurnerDetails /> },
			{ path: '/petroleum-filling', element: <FuelFillingDetails /> },
			{ path: '/gas-station-locator', element: <GasStation /> },
			{ path: '/gas-filling-&-delivery', element: <GasFilling /> },
			{ path: '/payment-solutions', element: <PaymentSolution /> },
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
