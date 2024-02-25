import Experience from '../components/experience/Experience';
import Benefits from '../components/benefits/Benefits';
import './LandingPage.css';
import Payment from '../components/payment/Payment';
import { MarketOrder } from '../components/market-order';
import fuelStationPump from './../assets/fuelstation.webp';
import pumpAttendant from './../assets/maleAttendant.jpeg';
import fluentBox from './../assets/fluent_box-20-filled.png';
import cookingGas from './../assets/cookinggas2.jpeg';
import { RealTimeBenefits } from '../components/real-time-benefits';

function LandingPage() {
  return (
    <div className='landingPageContainer'>
      <Experience />
      <Benefits />
      <MarketOrder
        heading='Save time and Order petrol
      online with quick filler'
        title='Experience the convenience of ordering petrol online with Quick Filler.
        With our user-friendly platform, you can easily place your order and have your petrol delivered right to your doorstep.'
        firstRating='50% Faster'
        firstLabel='Order online and save time with quick fille'
        secondRating='50% Faster'
        secondLabel='Quick and hassle-free petrol ordering with Quick Filler.'
        img={fuelStationPump}
        alt='Fuel Station Pump'
      />
      <MarketOrder
        heading='Market Impact and Customer
      Satisfaction Rates'
        title="Discover the impressive statistics that showcase Quick Filler's market impact, high customer satisfaction rates, and secure transactions."
        firstRating='50%'
        firstLabel='Increase in Customer Base Year over Year'
        secondRating='50%'
        secondLabel='Reduction in Transaction Time with XRP Integration'
        img={pumpAttendant}
        btnGroup
      />
      <section className='max-w-[1200px] mx-auto mt-20 flex flex-col sm:flex-row gap-6'>
        <RealTimeBenefits
          img={fluentBox}
          alt='Fluent Box'
          label='Wide variety of gas options to
        choose from'
          link='/learn-more'
          linkLabel='Learn More'
          icon='>'
        />
        <RealTimeBenefits
          img={fluentBox}
          alt='Fluent Box'
          label='Wide variety of gas options to
        choose from'
          link='/learn-more'
          linkLabel='Learn More'
          icon='>'
        />
        <RealTimeBenefits
          img={fluentBox}
          alt='Fluent Box'
          label='Wide variety of gas options to
        choose from'
          link='/learn-more'
          linkLabel='Learn More'
          icon='>'
        />
      </section>
      <Payment />
      <MarketOrder
        heading='Get Started with Quick
        Filler'
        title='Connect your to access our convenient gas filling services.'
        img={cookingGas}
        btnGroup
      />
    </div>
  );
}

export default LandingPage;
