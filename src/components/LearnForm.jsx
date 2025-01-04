import React from 'react'
import CustomHeading from '../common/CustomHeading'
import Description from '../common/Description'
import { AngleIcon } from '../utils/icons'
import { LEARN_FORM_LIST, LEARN_FORM_SECOND_LIST } from '../utils/helper'
import lineImg from './../assets/images/png/line-img.png'

const LearnForm = () => {
    return (
        <div className='flex flex-col justify-center items-center relative xl:pt-[109px] xl:pb-[61px] lg:pb-10 md:pb-7 pb-4 lg:pt-20 md:pt-16 pt-12'>
              <img className='absolute w-full top-3' src={lineImg} alt="line-img" />
            <div className='flex flex-col items-center max-w-[1322px] w-full mx-auto'>
                <CustomHeading className="uppercase lg:!text-[80px] !leading-[90%] lg:!mb-2 !mb-1 !text-[60px] max-lg:mb-3" tittle="Learn from us." />
                <Description className="!text-[15px] font-spaceMono font-maisonNeue text-center max-lg:px-10 lg:mb-9 mb-[33px]" tittle="Digital marketing resources from Venveo to help you grow." />
                <a className='text-[15px] font-semibold flex justify-center items-center gap-2 xl:mb-[74px] lg:mb-16 md:mb-12 mb-10 group' href="/">See All <span className='group-hover:translate-x-3 transition-all ease-linear'><AngleIcon /></span>  </a>

                <div className='bg-LearnFormBg bg-cover overflow-hidden bg-center h-full lg:ps-[29px] max-lg:px-[11px] lg:pt-[395px] pt-[291px] pb-[31px] bg-no-repeat w-full'>
                    <div className="max-w-[382px] bg-white relative rounded-[25px] max-sm:min-h-[259px] xl:h-[324px] lg:pt-[35px] pt-[30px] lg:pb-[31px] pb-[26px] lg:px-7 px-6">
                        {LEARN_FORM_LIST.map((obj, i) => (
                            <div key={i} className="flex flex-col items-start lg:mb-7 mb-5">
                                <p className='uppercase text-[teal] font-semibold text-[15px] lg:mb-[15px] mb-3'>{obj.category}</p>
                                <h3 className='lg:text-3xl text-2xl !leading-[100%] text-black font-light font-maisonNeueLight max-w-[275px]'>{obj.tittle}</h3>
                                <h3 className='lg:text-3xl text-2xl !leading-[100%] text-black font-light font-maisonNeueLight max-w-[275px] lg:mb-[15px] md:mb-3 mb-1.5'>{obj.tittleTwo}</h3>
                                <p className='max-w-[300px] text-[15px] !leading-[150%] font-spaceMono'>{obj.description}</p>
                                <button className='flex justify-center absolute bottom-[31px] items-center gap-2 font-semibold text-[15px] font-maisonNeue group'>{obj.btn} <span className='group-hover:translate-x-3 transition-all ease-linear'> {obj.arrow}</span></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex w-full flex-wrap justify-center items-center gap-[60px] mt-[59px]'>
                {LEARN_FORM_SECOND_LIST.map((obj, i) => (
                    <div className='max-w-[440px] w-full max-h-[551px] xl:min-h-[551px] lg:min-h-[500px] md:min-h-[370px] lg:px-[29px] ps-7 lg:pb-[29px] pb-5 overflow-hidden xl:pt-[202px] lg:pt-40 md:pt-20 sm:pt-10 pt-4 h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${obj.bgImg})` }}>
                        <div className="max-w-[382px] lg:min-h-[320px] sm:min-h-[232px] relative rounded-[25px] xl:h-[320px] bg-white lg:pt-[35px] pt-[30px] lg:pb-[29px] pb-[26px] max-lg:py-7 lg:px-7 px-6 max-sm:translate-x-[92px]">
                            <div key={i} className="flex flex-col items-start lg:mb-7 mb-5">
                                <p className='uppercase text-[teal] font-semibold text-[15px] lg:mb-[15px] md:mb-3 mb-1.5'>{obj.category}</p>
                                <h3 className='lg:text-3xl text-2xl lg:mb-[15px] mb-1.5 lg:!leading-[100%] !leading-[113%] text-black font-light font-maisonNeueLight max-sm:mb-[19px] w-full max-w-[275px] max-sm:max-w-[201px]'>{obj.tittle}</h3>
                                <p className='max-w-[300px] text-[15px] !leading-[150%] font-spaceMono max-sm:hidden sm:block'>{obj.description}</p>
                                <button className='flex justify-center absolute bottom-[29px] items-center gap-2 font-semibold text-[15px] font-maisonNeue group'>{obj.btn} <span className='group-hover:translate-x-3 transition-all ease-linear'> {obj.arrow}</span></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LearnForm