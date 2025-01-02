import React from 'react'
import { ArrowIcon } from '../utils/icons'

const Goals = () => {
    return (
        <div className='flex justify-center bg-goalsBg bg-cover bg-no-repeat bg-center items-center lg:py-[66.5px] py-14'>
            <div className='flex flex-col items-center max-w-[1322px] w-full mx-auto max-lg:px-[13px]'>
                <div className="flex flex-wrap w-full justify-center items-center">
                    <div className="lg:w-7/12 px-3 w-full">
                        <h3 className='font-maisonNeueLight lg:text-[40px] lg:mb-0 mb-[29px] text-3xl lg:text-end text-center pe-5 text-white font-light'>Ready to hit your goals?</h3>
                    </div>
                    <div className="lg:w-5/12 lg:px-3 w-full">
                        <button className='px-7 sm:max-w-[239px] max-w-[335px] group mx-auto font-semibold flex justify-center items-center gap-2 whitespace-nowrap text-[15px] w-full bg-yellowGreen text-black py-[27.5px]'>
                            Book a Strategy Call <span className='group-hover:translate-x-3 transition-all ease-linear'><ArrowIcon /></span> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals