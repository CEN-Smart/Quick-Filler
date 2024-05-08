import React from 'react';
import Footer from '../Footer';
import Header from '../navbar/Header';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function More() {
	return (
		<div className='flex flex-col min-h-screen'>
			<div
				className='relative flex items-center content-center justify-center pt-16 pb-32'
				style={{ minHeight: '75vh' }}>
				<div className='absolute top-0 w-full h-full bg-[#409CD4] bg-center bg-cover'></div>
				<div
					className='container relative mx-auto '
					style={{ zIndex: 10 }}>
					<div className='flex flex-wrap items-center'>
						<div className='w-full px-4 ml-auto mr-auto text-center lg:w-6/12'>
							<h1 className='text-5xl font-semibold text-white'>More</h1>
						</div>
					</div>
				</div>
			</div>
			<div className='container flex-grow px-4 mx-auto'>
				<div className='flex flex-col justify-center gap-4 p-6 bg-white'>
					<Link to="/about" className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
						<span className='text-lg text-gray-800'>About us</span>{' '}
						<FaArrowRight className='text-lg' />
					</Link>
					<Link to="/services"className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
						<span className='text-lg text-gray-800'>Services</span>{' '}
						<FaArrowRight className='text-lg' />
					</Link>
					<Link to="/product" className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
						<span className='text-lg text-gray-800'>Product</span>{' '}
						<FaArrowRight className='text-lg' />
					</Link>
					<Link to="/faq" className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
						<span className='text-lg text-gray-800'>FAQ</span>{' '}
						<FaArrowRight className='text-lg' />
					</Link>
					<Link to="/blog" className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
						<span className='text-lg text-gray-800'>Blogs/News</span>{' '}
						<FaArrowRight className='text-lg' />
					</Link>

					<div className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
						<span className='text-lg text-gray-800'>
							Privacy Policy and Terms of Service
						</span>{' '}
						<FaArrowRight className='text-lg' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default More;
