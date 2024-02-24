import './Experience.css';
import Gas from '../../assets/cooking-gas.jpeg';
import ConnectWallet from '../connect/ConnectWallet';

function Experience() {
  return (
    <div className='experience__container'>
      <div className='experience__content'>
        <div className='experience__content--left'>
          <h1 className='experience__content--title'>
            Experience the Future of gas filling
          </h1>
          <p className='experience__content--text'>
            Quick filler revolutionize gas filling with secure online
            transactions and XRP cryptocurrency integration.
          </p>
          <div className='experience__content--connect'>
            <a href='learn-more' target='_blank' rel='noreferrer'>
              Learn More
            </a>
            <ConnectWallet />
          </div>
        </div>
        <div className='experience__content--right'>
          <img src={Gas} alt='Cooking Gas' />
        </div>
      </div>
    </div>
  );
}

export default Experience;
