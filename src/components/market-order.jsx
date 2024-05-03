import PropTypes from 'prop-types';
import ConnectWallet from './connect/ConnectWallet';
import { LearnMoreButton } from './learn-more-btn';
MarketOrder.propTypes = {
  heading: PropTypes.string,
  title: PropTypes.string,
  firstRating: PropTypes.number,
  firstLabel: PropTypes.string,
  secondRating: PropTypes.string,
  secondLabel: PropTypes.string,
  btnGroup: PropTypes.bool,
  img: PropTypes.string,
  alt: PropTypes.string,

};

export function MarketOrder({
  heading,
  title,
  firstRating,
  firstLabel,
  alt,
  secondRating,
  secondLabel,
  btnGroup,
  img,
}) {
  return (
    <section className=' max-w-[1200px] mx-auto mt-20'>
      <div className='flex flex-col items-center md:flex-row gap-8'>
        <div className='flex flex-col gap-4 flex-1 flex-shrink-0 basis-3/5'>
          <h3 className='text-[#409CD4] font-bold text-2xl md:text-[2rem] leading-[1.1] lg:text-[3rem]'>
            {heading}{' '}
          </h3>
          <p className='text-md md:text-lg lg:text-2xl'>{title}</p>
          <div className='flex gap-4 items-center'>
            <p className='flex flex-col gap-1'>
              {' '}
              <span className=' text-2xl md:text-5xl text-emerald-600 font-semibold'>
                {firstRating}
              </span>
              <span className='text-sm'>{firstLabel}</span>
            </p>
            <p className='flex flex-col gap-1'>
              {' '}
              <span className=' text-2xl md:text-5xl text-emerald-600 font-semibold'>
                {secondRating}
              </span>
              <span>{secondLabel}</span>
            </p>
          </div>
          {btnGroup && (
            <div className='flex items-center gap-1'>
              <LearnMoreButton /> <ConnectWallet btnText="Connect Wallet"/>
            </div>
          )}
        </div>
        <div className=' basis-2/5 shrink-0'>
          <img src={img} alt={alt} className='w-full' />
        </div>
      </div>
    </section>
  );
}
