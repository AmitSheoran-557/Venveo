import React from 'react'
import Header from '../common/Header'
import overlayImg from './../assets/image/png/Hero-overlap-img.png'
import smOverlayImg from './../assets/image/png/sm-overlay-img.png'
import leftSideImg from './../assets/image/png/hero-side-img.png'
import rightSideImg from './../assets/image/png/right-vector-img.png'

const Hero = () => {
    return (
        <div>
            <div className='bg-darkCyan relative xl:pb-[322px] lg:pb-60 sm:pb-56 pb-[175px]'>
                <img className='xl:max-w-[364px] lg:max-w-[240px] max-w-[180px] w-full absolute left-0 pointer-events-none' src={leftSideImg} alt="side-vector-img" />
                <img className='bottom-0 absolute right-0 max-lg:hidden lg:block max-xl:max-w-[240px]' src={rightSideImg} alt="right-img" />
                <Header />
                <div className='max-w-[1140px] mx-auto w-full px-4 pt-[39px] relative'>
                    <h1 className='xl:text-[120px] lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-SohneSchmal uppercase text-center text-white !leading-[104%] max-w-[619px] w-full mb-3 mx-auto'>Make marketing a growth machine</h1>
                    <p className='text-white !leading-[125%] mx-auto text-center max-w-[656px] lg:text-2xl md:text-xl text-base  font-light mb-7'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
                    <form className='lg:py-[22px] py-[18.5px] flex justify-between border-[2px] border-white rounded-full max-w-[448px] mx-auto lg:ps-[34px] lg:pe-[37px] max-lg:px-6'>
                        <input type="text" required placeholder='Enter Your Website' className='placeholder:text-white placeholder:opacity-[60%] outline-none text-white opacity-[60%] bg-transparent' />
                        <button className='text-white font-semibold text-[15px] '>Analyze</button>
                    </form>
                </div>
            </div>
            <img className='xl:max-w-[924px] max-w-[800px] sm:block max-sm:hidden w-full mx-auto xl:-translate-y-64 lg:-translate-y-48 -translate-y-44' src={overlayImg} alt="overlay-img" />
            <img className='xl:max-w-[924px] max-w-[800px] sm:hidden max-sm:block max-h-[335px] max-sm:max-w-[328px] w-full mx-auto -translate-y-[127px]' src={smOverlayImg} alt="overlay-img" />
        </div>
    )
}

export default Hero