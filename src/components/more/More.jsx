import React from 'react'
import Footer from '../Footer';
import Header from '../navbar/Header';
import { FaArrowRight } from 'react-icons/fa';

function More() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="header header-transparent" />
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-[#409CD4] bg-center bg-cover"
        >
        </div>
        <div className="container relative mx-auto " style={{ zIndex: 10 }}>
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white font-semibold text-5xl">More</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex-grow">
        <div className="flex flex-col justify-center gap-4 bg-white p-6">
          <div className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
            <span className="text-lg text-gray-800">About us</span> <FaArrowRight className="text-lg" />
          </div>
          <div className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
            <span className="text-lg text-gray-800">Services</span> <FaArrowRight className="text-lg" />
          </div>
          <div className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
            <span className="text-lg text-gray-800">Product</span> <FaArrowRight className="text-lg" />
          </div>
          <div className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
            <span className="text-lg text-gray-800">FAQ</span> <FaArrowRight className="text-lg" />
          </div>
          <div className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
            <span className="text-lg text-gray-800">Blogs/News</span> <FaArrowRight className="text-lg" />
          </div>

          <div className='flex justify-between items-center p-5 bg-[#085A8B12] cursor-pointer hover:bg-blue-100 transition-colors'>
            <span className="text-lg text-gray-800">Privacy Policy and Terms of Service</span> <FaArrowRight className="text-lg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default More;
