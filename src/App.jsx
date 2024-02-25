import { Route, Routes } from 'react-router-dom';
import Header from './components/navbar/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Product from './components/product/Product';
import More from './components/more/More';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/product' element={<Product />} />
        <Route path='/more' element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
