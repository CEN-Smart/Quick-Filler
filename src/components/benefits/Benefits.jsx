import cylinder from '../../assets/pngtree-storage-gas-cylinder-icon-png-image_4983070.png';


function Benefits() {
  return (
    <section className='mt-28 mx-auto max-w-[1200px]'>
      <div className='flex flex-col items-center justify-start md:justify-between md:flex-row'>
        <div className='flex flex-col gap-4 flex-1 flex-shrink-0 basis-3/5'>
          <h2 className='text-[#409CD4] font-bold text-2xl md:text-[2rem] leading-[1.1] lg:text-[3.5rem]'>
            Benefits
          </h2>
          <p className='text-md md:text-lg lg:text-2xl'>
            Experience the convenience and peace of mind with Quick
            Filler&apos;s cooking gas delivery service. Our top priority is your
            safety and reliability, ensuring that you have a seamless and
            hassle-free experience.
          </p>
        </div>
        <div className='mt-8 md:mt-0 basis-2/5 shrink-0'>
          <img src={cylinder} alt='gas cylinder' className='w-full' />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
