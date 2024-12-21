import React, { useState } from 'react'
import { HEADER_DATA_LIST } from '../utils/helper'
import { ArrowIcon, SearchIcon } from '../utils/icons';
import startBtn from './../assets/image/png/sm-btn-img.png'
import logo from './../assets/image/png/venveo-logo.png'


const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setActiveIndex(null);
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-between max-lg:pt-5 max-md:pt-4 max-lg:items-center text-white relative">
        {/* Logo */}
        <a href="/">
          <img className='xl:max-w-[59px] lg:max-w-12 md:max-w-10 max-w-7 lg:pt-[29px] xl:ml-[57px] lg:ml-12 md:ml-8 ml-4' src={logo} alt="venveo-logo" />
        </a>

        {/* Mobile Menu Button */}
        <button onClick={handleOpen}
          className={`hidden size-6 justify-center max-lg:absolute max-lg:right-4 relative z-[60] max-lg:flex flex-col overflow-hidden`}>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90 !bg-black after:!bg-black' : ''}`}
          ></span>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10 !bg-black' : ''}`}
          ></span>
        </button>

        {/* Navigation Menu */}
        <div className='flex max-h-20'>
          <div className={`flex gap-[42px] bg-white !text-black max-lg:text-white ps-[41px] pe-[29px] py-[30px] lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-white max-lg:duration-300 max-lg:justify-center max-lg:items-center z-40 ${open ? 'max-lg:left-0' : 'max-lg:left-full'}`}>
            {HEADER_DATA_LIST.map((obj, index) => (
              <div className='relative max-h-max' key={index}>
                <p onClick={() => handleClick(index)} className='cursor-pointer font-medium text-[15px]'>
                  {obj.name} <span className='text-[6px]'>{obj.icon}</span>
                </p>
                {obj.submenu && activeIndex === index && (
                  <div className='absolute right-0 bg-black text-white px-7 py-3 rounded mt-2'>
                    {obj.submenu.map((item, index) => (
                      <p onClick={() => setActiveIndex(null)} key={index} className='text-white'>{item}</p>
                    ))}
                  </div>)}
              </div>
            ))}

            <button className='lg:hidden max-lg:block'><img src={startBtn} alt="satrt-btn" /></button>
            <div className='cursor-pointer' onClick={toggleModal}>
              <SearchIcon />
              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  {/* Modal Content */}
                  <div className="relative bg-white w-4/5 max-w-md p-6 rounded-lg shadow-lg">
                    {/* Search Input */}
                    <div className="flex flex-col gap-4">
                      <div className='flex justify-between items-center'>
                        <h2 className="text-lg font-medium text-gray-800">Search</h2>
                        {/* Close Icon */}
                        <button className={`size-6 justify-center relative z-[60] bg-white flex flex-col`}>
                          <span className={`w-6 transition-all duration-300 h-0.5 bg-black rounded-md rotate-45 translate-x-[.50px] translate-y-0`} >  </span>
                          <span className={`w-6 transition-all duration-300 h-0.5 bg-black rounded-md -rotate-45  -translate-y-[2px]`} ></span>
                        </button>
                      </div>
                      <input type="text" placeholder="Type to search..."
                        className="w-full border placeholder:text-blue-500 text-blue-500 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        autoFocus />
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" onClick={toggleModal} >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className='bg-yellowGreen max-lg:hidden px-[31px] flex items-center justify-center gap-1 text-black text-[15px] text-center font-semibold'>Let’s Talk <ArrowIcon /> </button>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside
      {activeIndex !== null && (
        <div onClick={() => setActiveIndex(null)}
          className="  top-0 left-0 w-full min-h-screen relative  opacity-50 z-[50]"
        ></div>
      )} */}
    </div>
  );
};

export default Header;