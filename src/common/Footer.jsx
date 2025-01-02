import React from 'react'
import { FOOTER_LIST, MEDIA_ICON_LIST } from '../utils/helper'
import CustomInput from './CustomInput'
import venveoLogo from './../assets/image/png/Footer-venveo-logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='xl:pt-[90px] bg-darkCyan lg:pt-20 md:pt-16 pt-[56px] lg:pb-[100px] pb-[86px]'>
            <div className="max-w-[1320px] w-full mx-auto">
                <div className="flex flex-wrap w-full justify-between items-start lg:pb-[87px]">
                    <div className="xl:w-8/12 w-full flex justify-center flex-wrap">
                        {FOOTER_LIST.map((item, index) => (
                            <div key={index} className="lg:w-3/12 md:w-4/12 w-6/12 mt-5 lg:mt-0 flex flex-col max-xl:items-center max-sm:items-start max-sm:ps-5 text-start text-white">
                                <div>
                                    <h4 className='lg:mb-[25px] mb-4 uppercase font-medium text-xs'>{item.tittle}</h4>
                                    <ul>
                                        {item.links.map((link, i) => (
                                            <li key={i} className='!leading-[170%]'>
                                                <a className='text-[15px] font-light font-maisonNeueLight' href={link.url}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="xl:w-4/12 w-full flex flex-col mx-auto max-md:px-4 flex-wrap justify-start xl:items-start items-center xl:mt-0 lg:mt-10 mt-7">
                        <h3 className='font-light font-maisonNeueLight text-white lg:text-3xl text-2xl lg:mb-[35px] mb-[22px] text-center lg:whitespace-nowrap'>Get weekly data — and insights.</h3>
                        <CustomInput placeholderTittle="Enter Your Email" className="!mx-0 !max-w-[449px] w-full xl:min-w-[449px] !mb-0" btnTittle="Get Started" customClass="!text-white placeholder:!text-white placeholder:!opacity-[100%] !opacity-[100%]" customClassTwo="!text-yellowGreen" />
                    </div>
                </div>
                <div className='w-full flex justify-between items-end px-4 xl:px-0 max-lg:hidden'>
                    <div>
                        <a href="#" className='pb-0.5'><img className='max-w-11 xl:-translate-y-1.5' src={venveoLogo} alt="logo" /></a>
                        <p className='max-w-[415px] text-white text-[13px] font-normal font-maisonLight leadin-[153%] pt-5'>Venveo is an award-winning digital marketing <span className='block'>solutions provider. Since 2003.</span>
                            ©{currentYear} Venveo</p>
                    </div>
                    <div className='flex gap-14'>
                        <ul>
                            <p className='uppercase text-xs leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>Visit</p>
                            <li className='pt-7'><a href="/" className='text-white font-light font-maisonLight text-[13px] leading-[153%px]'>100 N Main Street <span className='block'>#201 </span>
                                Blacksburg, VA 24060</a></li>
                        </ul>
                        <ul>
                            <p className='uppercase text-xs leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>contact</p>
                            <li className='pt-7'><a href="mailto:info@venveo.com" className='text-white font-light font-maison text-[13px] leading-[153%px] hover:text-yellowGreen duration-300 ease-linear border-b border-yellowGreen'>info@venveo.com</a></li>
                            <li className='pt-5'><a href="tel:+4733378901" className='text-white font-light font-maison text-[13px] leading-[153%px] hover:text-yellowGreen duration-300 ease-linear border-b border-yellowGreen'>1 · 800 · 123 · 4567</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-8 items-center'>
                        <div className='flex gap-8'>
                            <a href="/" className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:text-yellowGreen duration-300 ease-linear'>All Rights Reserved</a>
                            <a href="/" className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:text-yellowGreen duration-300 ease-linear'>Privacy Policy</a>
                        </div>
                        <div className='flex gap-[34px]'>
                            {MEDIA_ICON_LIST.map((obj, i) => (
                                <a key={i} href={obj.link} target='_blank' className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:scale-125 duration-300 ease-linear media-link'>{obj.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='lg:hidden pt-16 justify-center items-center flex flex-col'>
                    <div className='flex gap-[71px] flex-col text-center'>
                        <ul>
                            <p className='uppercase text-sm leading-[108%] text-white font-maison font-medium'>Visit</p>
                            <li className='pt-5'><a href="/" className='text-white font-light font-maison text-custom-sm '>100 N Main Street <span className='block'>#201 </span>
                                Blacksburg, VA 24060</a></li>
                        </ul>
                        <ul>
                            <p className='uppercase text-sm leading-[108%] text-white font-maison font-medium pb-0.5'>contact</p>
                            <li className='pt-7'><a href="mailto:info@venveo.com" className='text-white font-light font-maison text-[13px] leading-[153%px] hover:text-yellowGreen duration-300 ease-linear border-b border-yellowGreen'>info@venveo.com</a></li>
                            <li className='pt-5'><a href="tel:+4733378901" className='text-white font-light font-maison text-[13px] leading-[153%px] hover:text-yellowGreen duration-300 ease-linear border-b border-yellowGreen'>1 · 800 · 123 · 4567</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-[34px] pt-16'>
                        {MEDIA_ICON_LIST.map((obj, i) => (
                            <a key={i} href={obj.link} target='_blank' className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:scale-125 duration-300 ease-linear media-link'>{obj.icon}</a>
                        ))}
                    </div>
                    <div className='flex items-center justify-center flex-col text-center pt-14'>
                        <a href="#" className='pb-0.5'><img className='max-w-11' src={venveoLogo} alt="page-logo" /></a>
                        <p className='max-w-[415px] text-white text-[13px] font-normal font-maisonLight leadin-[153%] pt-3'>Venveo is an award-winning digital marketing <span className='block'>solutions provider. Since 2003.</span>
                            ©{currentYear} Venveo</p>
                    </div>
                    <div className='flex gap-8 pt-9'>
                        <a href="/" className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:text-yellowGreen duration-300 ease-linear'>All Rights Reserved</a>
                        <a href="/" className='text-white text-[13px] font-maisonMedium font-medium leading-[153%] hover:text-yellowGreen duration-300 ease-linear'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer