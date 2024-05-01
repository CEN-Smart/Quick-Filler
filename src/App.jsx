import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Services from './components/services/Services';
import Product from './components/product/Product';
import More from './components/more/More';
import LandingPage from './pages/LandingPage';
import Faq from "./components/Faq"
import Blog from "./components/Blog"
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/product' element={<Product />} />
        <Route path='/more' element={<More />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/blog' element={<Blog />} />

      </Routes>
    </div>
  );
}

export default App;
