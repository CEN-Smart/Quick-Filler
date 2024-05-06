import React from 'react';

import Tractor from '../assets/tractor.png';

function Blog() {
	return (
		<div className='flex flex-col min-h-screen'>
			<div
				className='relative pt-16 pb-32 flex content-center items-center justify-center'
				style={{ minHeight: '75vh' }}>
				<div className='absolute top-0 w-full h-full bg-[#409CD4] bg-center bg-cover'></div>
				<div
					className='container relative mx-auto'
					style={{ zIndex: 10 }}>
					<div className='items-center flex flex-wrap'>
						<div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
							<h1 className='text-white font-semibold text-5xl '>Blogs/News</h1>
						</div>
					</div>
				</div>
			</div>
			<div className='container mx-auto px-4 flex-grow'>
				<div className='flex flex-col justify-center gap-4 bg-white p-6'>
					<div className='flex justify-center shrink-0'>
						<img
							src={Tractor}
							alt=''
						/>
					</div>
					<div>
						<p>
							Uche Cecil Izuora
							<br />A new report has predicted that global oil demand may grow
							approximately 108 million barrels a day by 2030.The Enverus
							Intelligence Research (EIR), a subsidiary of Enverus, has released
							a new report highlighting the organization’s view that it does not
							expect global oil demand to peak or plateau by the end of the
							decade.Instead, EIR expects global oil demand to grow to
							approximately 108 MMbpd by 2030 and chief among their evidence is
							that fuel economy standards have underwhelmed their stated
							targets, while electric vehicle momentum appears to be slowing in
							the U.S.
							<br />
							Rising supply costs and the lack of new supply projects announced
							to date are likely to push oil prices higher, particularly in the
							post-2030 period. This, combined with off-oil measures, could
							result in peak demand next decade.
							<br />
							Overall, EIR does not see the needed material shifts in
							consumption per-capita trends by region and product, nor does it
							see the disconnect between economic growth and oil consumption
							needed for oil consumption to peak prior to 2030.
							<br />
							“Both OPEC and IEA global oil demand estimates require a
							significant change in consumption behavior or a reversal of
							off-oil measures over a short period. History is not in their
							favor. Instead, we believe the rate of demand growth will
							gradually slow but not peak. However, the regional dispersion of
							the growth changes dramatically,” said Al Salazar, report author
							and director at EIR.
							<br />
							“Our demand forecasts result in a world where OPEC’s influence on
							oil price strengthens, supporting the group’s preference for Brent
							prices of $85-$105/bbl,” said Salazar.
							<br />
							The report indicates that global oil demand will not peak before
							2030, rather growth will slow modestly, while the regional
							distribution of this growth will change dramatically.
							<br />
							For more bullish the Organization of Petroleum Exporting
							Countries, OPEC or bearish International Energy Agency, IEA,
							estimates for global oil demand growth to come to fruition by
							2030, significant changes to consumption per capita trends and a
							disassociation between global economic growth and oil consumption
							must occur now. History is not in their favor.
							<br />
							The report view results in a world where OPEC’s influence on oil
							price strengthens, supporting the cartel’s preference for prices
							of $85-$105/bbl.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
