import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Product from "./components/product/Product";
import More from "./components/more/More";
import LandingPage from "./pages/LandingPage";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import "./App.css";
import GasCylinderDetails from "./components/GasCylinderDetails";
import GasFillingDetails from "./components/GasFillingDetails";
import GasBurnerDetails from "./components/GasBurnerDetails";
import FuelFillingDetails from "./components/FuelFillingDetails";
import GasFilling from "./components/GasFilling";
import PaymentSolution from "./components/PaymentSolution";
import GasStation from "./components/GasStation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/more" element={<More />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gas-cylinder" element={<GasCylinderDetails />} />
        <Route path="/gas-filling" element={<GasFillingDetails />} />
        <Route path="/gas-burner" element={<GasBurnerDetails />} />
        <Route path="/petroleum-filling" element={<FuelFillingDetails />} />
        <Route path="/gas-station-locator" element={<GasStation />} />
        <Route path="/gas-filling-&-delivery" element={<GasFilling />} />
        <Route path="/payment-solutions" element={<PaymentSolution />} />
      </Routes>
    </div>
  );
}

export default App;
