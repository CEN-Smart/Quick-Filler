const About = () => {
	return (
		<div>
			<div
				className='relative flex items-center content-center justify-center '
				style={{ minHeight: '75vh' }}>
				<div
					className='absolute top-0 z-10 w-full min-h-screen bg-top bg-cover'
					style={{ backgroundImage: "url('/about-pic.png')" }}>
					<span
						id='blackOverlay'
						className='absolute w-full h-full bg-black opacity-50'></span>
				</div>
				<div
					className='relative grid min-h-screen mx-auto place-items-center '
					style={{ zIndex: 10 }}>
					<div className='flex flex-wrap items-center'>
						<div className='w-full px-4 ml-auto mr-auto text-center'>
							<div className=''>
								<h1 className='text-5xl font-semibold text-white'>About us</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='px-4 py-10 mx-auto max-w-[900px] w-full'>
				<div className='flex justify-center '>
					<div className=''>
						<p className=' text-xl leading-relaxed text-[#000000]'>
							Quick filler is an Gas dispensing Company that encourages trade
							through the use of Cryptocurrency(XRP)
						</p>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							At Quick Fillers, we're all about embracing cutting-edge
							technologies and new solutions to enhance the gas filling
							experience for our users.
						</p>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							By Connecting One's wallet, we offer faster and cheaper
							transactions that offers seamless Service to our Customers,
							Through the use of a decentralized Blockchain.
						</p>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							We aim at becoming the leading provider of seamless, eco-friendly
							gas filling solutions globally, driving positive change in the
							industry while prioritizing innovation, sustainability, and
							customer satisfaction.
						</p>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							Our goal is to revolutionize the gas filling industry by providing
							innovative, convenient, and eco-friendly solutions that empower
							our users to fuel their lives efficiently and sustainably.
						</p>
						<p className='mt-4 text-xl leading-relaxed text-[#000000]'>
							We&apos;re committed to making a difference in the industry and
							putting our customers first.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
