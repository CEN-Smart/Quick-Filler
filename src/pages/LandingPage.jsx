import React from 'react';
import Experience from '../components/experience/Experience';
import Benefits from '../components/benefits/Benefits';
import './LandingPage.css'; 
import Order from '../components/order/Order';
import Market from "../components/market/Market"
import RealTime from '../components/realTime/RealTime';
import Payment from '../components/payment/Payment';
import GetStarted from '../components/getStarted/GetStarted';

function LandingPage() {
  return (
    <div className="landingPageContainer">
      <Experience />
      <Benefits />
      <Order />
      <Market />
      <RealTime />
      <Payment />
      <GetStarted />

    </div>
  );
}

export default LandingPage;
