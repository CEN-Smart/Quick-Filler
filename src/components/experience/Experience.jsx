import Gas from '../../assets/cooking-gas.jpeg';
import ConnectWallet from '../connect/ConnectWallet';

function Experience() {
  return (
    <div className='mt-28 mx-auto max-w-[1200px]'>
      <div className='flex flex-col items-center justify-start md:justify-between md:flex-row'>
        <div className='flex flex-col gap-4 flex-1 flex-shrink-0 basis-3/5'>
          <h1 className='text-[#409CD4] font-bold text-2xl md:text-[2rem] leading-[1.1] lg:text-[3.5rem]'>
            Experience the Future of gas filling
          </h1>
          <p className='text-md md:text-lg lg:text-2xl'>
            Quick filler revolutionize gas filling with secure online
            transactions and XRP cryptocurrency integration.
          </p>
          <div className='flex items-center gap-1 mt-6'>
            <a
              className='bg-[#409CD4] px-4 py-[.65rem] rounded-md inline-block text-white text-sm md:text-md hover:bg-[#2F7DA6] transition duration-300 ease-in-out'
              href='learn-more'
              target='_blank'
              rel='noreferrer'
            >
              Learn More
            </a>
            <ConnectWallet />
          </div>
        </div>
        <div className=' basis-2/5 mt-8 md:mt-0 shrink-0'>
          <img src={Gas} alt='Cooking Gas' className='w-full' />
        </div>
      </div>
    </div>
  );
}

export default Experience;
