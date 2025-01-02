import React from 'react'
import Description from '../common/Description'
import CustomHeading from '../common/CustomHeading'
import { CLIENTS_DATA_LIST } from '../utils/helper'
import { LearnMoreIcon } from '../utils/icons'
import redUnderline from './../assets/image/png/red-underline-img.png'


const SatisfiedClient = () => {
    return (
        <div className='flex justify-center flex-col items-center xl:mt-[94px] lg:mt-20 mt-12 max-xl:px-4'>
            <Description className="!font-light xl:!text-3xl !text-2xl max-md:px-16 text-center lg:mb-[7px] mb-1" tittle="Driving digital revenue for over" />
            <div className='relative lg:mb-[88px] md:mb-10 mb-12'>
                <h2 className='uppercase lg:!text-[80px] !text-[60px] !leading-[87%] font-bold text-black font-sohneSchmal text-center'><span className='relative'>1,400+  <img className='absolute lg:-bottom-0 bottom-1.5 xl:max-w-[120px] left-0 w-full max-w-24' src={redUnderline} alt="underline" /></span> satisfied clients.</h2>
            </div>
            <div className='flex flex-wrap justify-center items-center lg:gap-[60px] sm:gap-10 gap-7'>
                {CLIENTS_DATA_LIST.map((obj, index) => (
                    <div className={`max-w-[440px] lg:px-[29px] md:px-6 sm:px-5 px-4 lg:min-h-[500px] sm:min-h-[350px] min-h-[340px] lg:pt-[35px] md:pt-7 sm:pt-6 pt-5 bg-cover ${index === 1 ? "bg-cardImgTwo" : index === 2 ? "bg-cardImgThree" : "bg-cardImgOne"}`} key={index} >
                        <div className='rounded-[25px] max-w-[382px] lg:px-7 sm:px-5 px-4 lg:pt-[38px] lg:pb-[31px] max-lg:py-7 max-sm:py-5 bg-white lg:min-h-[360px] min-h-[250px] lg:mb-[13px] mb-2 relative'>
                            <div className="max-w-[165px] absolute -top-[14px] lg:min-w-[165px] lg:ps-3 ps-2 w-full lg:py-[7px] py-1 rounded-full duration-300 ease-linear " style={{ backgroundColor: obj.bgBlack, color: obj.color }}>
                                <p className='text-black font-semibold text-xs font-maisonNeue' style={{ color: obj.color }}>{obj.tittle}</p>
                            </div>
                            <div className='xl:mb-6 lg:mb-5 mb-4'>
                                <img src={obj.logo} style={{ maxWidth: obj.maxWidth }} alt="logo-img" />
                            </div>
                            <h3 className='text-black font-light lg:text-3xl text-2xl xl:mb-6 maisonNeueBook !leading-[100%] lg:mb-5 mb-4'>{obj.heading}</h3>
                            <p className='text-black lg:text-[15px] text-xs max-w-[315px] xl:mb-6 lg:mb-5 mb-4 font-spaceMono !leading-[133%] font-normal'>{obj.Description}</p>
                            <div className='absolute lg:bottom-[31px] group cursor-pointer bottom-4 flex justify-center items-center gap-2 lg:left-[29px] '>
                                {obj.btnPara} <span className='mt-1 group group-hover:translate-x-3 transition-all ease-linear'><LearnMoreIcon /></span>
                            </div>
                        </div>
                        <div className='flex px-[21px] justify-between'>
                            <div>
                                <h3 className='font-sohneSchmal font-bold lg:text-[50px] sm:text-4xl text-3xl !leading-[100%]'>{obj.leadsValue}</h3>
                                <p className='font-maisonNeue font-medium lg:text-[15px] text-xs'>{obj.leads}</p>
                            </div>
                            <div>
                                <h3 className='font-sohneSchmal font-bold lg:text-[50px] sm:text-4xl text-3xl !leading-[100%]'>{obj.adLeadsValue}</h3>
                                <p className='font-maisonNeue font-medium lg:text-[15px] text-xs'>{obj.adLeads}</p>
                            </div>
                            <div>
                                <h3 className='font-sohneSchmal font-bold lg:text-[50px] sm:text-4xl text-3xl !leading-[100%]'>{obj.trafficValue}</h3>
                                <p className='font-maisonNeue font-medium lg:text-[15px] text-xs'>{obj.traffic}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SatisfiedClient