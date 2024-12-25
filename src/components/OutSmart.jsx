import React from 'react'
import CustomHeading from '../common/CustomHeading'
import Description from '../common/Description'
import CustomInput from '../common/CustomInput'
import CurveLine from '../../src/assets/image/png/curve-line-img.png'

const OutSmart = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat bg-yellowGreen h-[209px] '>
            <div className='flex items-center pt-[60px] w-full max-w-[1280px] max-lg:px-5 max-xl:py-10 max-md:py-5 max-xl:flex-wrap justify-center  mx-auto gap-[10rem]  max-xl:gap-7 relative'>
                <div className='lg:w-6/12 w-full flex justify-end flex-col xl:items-end items-center'>
                    <div>
                        <Description className="!text-[15px] lg:mb-[7px] mb-1 sm:block max-sm:hidden" tittle="Get a free competitive analysis on your market" />
                        <CustomHeading className="lg:!text-[40px] !text-3xl !text-start !font-light sm:block max-sm:hidden" tittle="Outsmart your competition" />
                        <Description className="!text-[15px] lg:mb-[7px] mb-1 sm:hidden max-sm:block" tittle="Get Your Custom Marketing Plan" />
                        <CustomHeading className="lg:!text-[40px] !text-3xl !font-light sm:hidden max-sm:block font-maisonNeue" tittle="Start earning more money now" />
                    </div>
                </div>
                <img src={CurveLine} alt="line" className='absolute translate-x-[33px] translate-y-9 max-xl:hidden' />
                <div className='lg:w-6/12 w-full'>
                    <CustomInput className="!bg-white max-w-[446px] w-full" customClass="placeholder:!text-black placeholder:opacity-[100%] opacity-[100%] !text-black" customClassTwo="!text-black !opacity-[100%]" placeholderTittle="Enter Your Website" btnTittle="Analyze" />
                </div>
            </div>
        </div>
    )
}

export default OutSmart