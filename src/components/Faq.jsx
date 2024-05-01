import React from 'react'
import Footer from './Footer';
import Header from './navbar/Header';
import FAQSection from './FaqSection';

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
        <div className="container relative mx-auto" style={{ zIndex: 10 }}>
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white font-semibold text-5xl ">FAQ</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex-grow">
        <div className="flex flex-col justify-center gap-4 bg-white p-6">
            <FAQSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default More;
