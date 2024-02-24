import Fuel from '../../assets/fuelstaion.webp';
import './Order.css';

function Order() {
  return (
    <div className='orderContainer'>
      <div className='orderTextContainer'>
        <span className='save'>
          Save time and Order petrol <br /> online with quick filler{' '}
        </span>
        <p className='user'>
          Experience the convenience of ordering petrol online with Quick
          Filler. <br />
          With our user-friendly platform, you can easily place your order and
          have your petrol delivered right to your doorstep.
        </p>
        <div className='time'>
          <div>
            <span className='fast'>50% Faster</span>
            <p className='user'>
              Order online and save time with quick filler.
            </p>
          </div>
          <div>
            <span className='fast'>50% Faster</span>
            <p className='user'>
              Quick and hassle-free petrol ordering with Quick Filler.
            </p>
          </div>
        </div>
      </div>
      <div className='orderImageContainer'>
        <img src={Fuel} alt='fuel' />
      </div>
    </div>
  );
}

export default Order;
