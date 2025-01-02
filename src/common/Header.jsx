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
    <div className="mx-auto max-w-[1440px]">
      <div className="flex justify-between max-lg:pt-5 max-md:pt-4 max-lg:items-center text-white relative">
        <a href="/">
          <img className='xl:max-w-[59px] lg:max-w-12 md:max-w-10 max-w-7 lg:pt-[29px] xl:ml-[57px] lg:ml-12 md:ml-8 ml-4' src={logo} alt="venveo-logo" />
        </a>

        <button onClick={handleOpen}
          className={`hidden size-6 justify-center max-lg:absolute max-lg:right-4 relative z-[60] max-lg:flex flex-col overflow-hidden`}>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90 !bg-black after:!bg-black' : ''}`}
          ></span>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10 !bg-black' : ''}`}
          ></span>
        </button>

        <div className='flex max-h-20'>
          <div className={`flex gap-[42px] bg-white !text-black max-lg:text-white ps-[41px] pe-[29px] py-[30px] lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-white max-lg:duration-300 max-lg:justify-center max-lg:items-center z-40 ${open ? 'max-lg:left-0' : 'max-lg:left-full'}`}>
            {HEADER_DATA_LIST.map((obj, index) => (
              <div className='relative max-h-max' key={index}>
                <p onClick={() => handleClick(index)} className='cursor-pointer font-medium text-[15px]'>
                  {obj.name} <span className='text-[6px]'>{obj.icon}</span>
                </p>
                {obj.submenu && activeIndex === index && (
                  <div className='absolute right-0 lg:bg-white lg:!text-black bg-black flex flex-col gap-3 text-white px-7 py-3 rounded mt-2'>
                    {obj.submenu.map((item, index) => (
                      <p onClick={handleOpen} key={index} className='cursor-pointer'>{item}</p>
                    ))}
                  </div>)}
              </div>
            ))}

            <button onClick={handleOpen} className='lg:hidden max-lg:block hover:scale-[1.05] duration-300 transition-all ease-linear'><img src={startBtn} alt="satrt-btn" /></button>
            <div className='cursor-pointer' onClick={toggleModal}>
              <SearchIcon />
              {isModalOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                  onClick={toggleModal}  
                >
                  <div
                    className="relative bg-white w-4/5 max-w-md p-6 rounded-lg shadow-lg"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg font-medium text-gray-800">Search</h2>
                        <button
                          className={`size-6 justify-center relative z-[60] bg-white flex flex-col`}
                          onClick={toggleModal} 
                        >
                          <span
                            className={`w-6 transition-all duration-300 h-0.5 bg-black rounded-md rotate-45 translate-x-[.50px] translate-y-0`}
                          ></span>
                          <span
                            className={`w-6 transition-all duration-300 h-0.5 bg-black rounded-md -rotate-45  -translate-y-[2px]`}
                          ></span>
                        </button>
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Type to search..."
                        className="w-full border placeholder:text-blue-500 text-blue-500 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        autoFocus
                      />
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        onClick={toggleModal}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className='bg-yellowGreen max-lg:hidden px-[31px] hover:bg-[#0D99A0] duration-300 ease-in-out flex items-center justify-center gap-1 text-black text-[15px] group text-center font-semibold'>Let’s Talk <span className='group-hover:translate-x-3 transition-all ease-linear'><ArrowIcon /></span>  </button>
        </div>
      </div>
    </div>
  );
};

export default Header;