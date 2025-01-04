import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomHeading from '../common/CustomHeading';
import Description from '../common/Description';
import greenLine from './../assets/images/png/green-lines-bg.png';
import tabUnderlineOne from './../assets/images/png/red-line-img.png';
import tabUnderlineTwo from './../assets/images/png/tabs-underline-2.png';
import tabUnderlineThree from './../assets/images/png/tabs-underline-3.png';
import TabThreeCard from './../assets/images/png/tab-three-card-img.png';
import Partner from './../assets/images/png/partners-logo-img.png';
import TabOneCard from './../assets/images/png/tab-one-card.png';
import CircleImg from './../assets/images/png/tab-two-sm-circles.png';
import { ButtonArrow, LogoIpsumIcon, NetworkLogo } from '../utils/icons';

const GrowthPartner = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(1);

    const tabNames = ['industry expertise', 'roi focused', 'proprietary technology'];

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        const tabIndex = tabNames.findIndex((name) => name === tabParam);
        if (tabIndex >= 0) {
            setActiveTab(tabIndex + 1);
        }
    }, [searchParams]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        setSearchParams({ tab: tabNames[tabIndex - 1] });
    };

    const TabContent = () => {
        if (activeTab === 1) {
            return (
                <div className='bg-cover bg-no-repeat lg:bg-center lg:bg-tabBgOne max-lg:bg-tabOneSmBg w-full max-w-[1280px] lg:h-[720px] mx-auto'>
                    <div className='ps-[79px] pt-[75px] max-lg:p-12 max-md:p-8 max-sm:px-0 max-sm:pb-5'>
                        <div className=' max-sm:px-[19px]'>
                            <h3 className='text-white font-bold uppercase lg:text-[80px] text-[60px] font-sohneSchmal leading-[70px] max-w-[385px]'>The smartest minds in the industry</h3>
                            <p className='max-w-[360px] font-light text-3xl max-md:text-2xl text-white leading-[30px]'>Answer our questions and listen to our answers.</p>
                            <p className='max-w-[360px] mt-[31px] font-normal text-[15px] font-maisonMedium leading-[20px] font-spaceMono text-white'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                            <button className='max-lg:mb-6 max-sm:px-5 max-sm:py-4 max-sm:max-w-[245px] text-white font-medium hover:scale-[1.07] transition-all duration-300 ease-linear font-maisonMedium text-[15px] flex items-center py-[34.84px] px-[30px] border border-solid max-w-[250px] w-full bg-[#FF4242] border-[#FF4242] gap-[10px] mt-[58px]'> <NetworkLogo /> Subscribe to Podcast <span className='text-[6px]'>▼</span></button>
                        </div>
                        <div className='overflow-auto scrollbar'>
                            <img src={Partner} alt="logo" className='max-md:px-4  lg:hidden mx-auto min-w-[701px] max-sm:overflow-x-auto whitespace-nowrap' />
                        </div>
                        <img src={TabOneCard} alt="card" className='lg:hidden max-w-[320px] mt-5 mx-auto' />
                    </div>
                </div>
            );
        }

        if (activeTab === 2) {
            return (
                <div className='bg-cover bg-no-repeat bg-center lg:bg-tabBgTwo max-lg:bg-tabTwoSmBg w-full max-w-[1280px] lg:h-[720px] mx-auto'>
                    <div className='pt-[75px] ps-[89px] max-lg:p-12 max-md:p-8 max-sm:p-0 max-sm:pt-[37px]'>
                        <h3 className='text-white font-bold uppercase lg:text-[80px] max-sm:pl-[19px] text-[60px] font-sohneSchmal leading-[70px]'>Proven Results</h3>
                        <p className='max-w-[360px] font-light text-3xl max-md:text-2xl max-lg:pb-7 max-sm:pl-[19px] text-white leading-[30px]'>Not hopes and prayers.</p>
                        <img src={CircleImg} alt="data" className='lg:hidden max-lg:block mx-auto' />
                    </div>
                </div>
            );
        }

        if (activeTab === 3) {
            return (
                <div className='lg:bg-tabBgThree max-lg:bg-tabThreeSmBg bg-cover bg-center bg-no-repeat w-full max-w-[1280px] lg:h-[720px] mx-auto'>
                    <div className='pt-[75px] ps-[79px] max-lg:p-12 max-md:p-8 max-sm:p-[19px] '>
                        <h3 className='text-white font-bold mb-3 lg:text-[80px] text-[60px] font-sohneSchmal leading-[70px]'>Project radar</h3>
                        <p><LogoIpsumIcon /></p>
                        <p className='pt-[162px] max-xl:pt-24 max-lg:pt-16 max-md:pt-11 max-sm:pt-8 max-w-[360px] font-light text-3xl max-md:text-2xl text-white leading-[30px]'>Lorem ipsum what this
                            product actually does.</p>
                        <p className='font-normal text-[15px] leading-[20px] text-white font-spaceMono max-w-[360px] mt-[14px]'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                        <button className='max-lg:mb-6 mt-[57px] hover:scale-[1.07] transition-all duration-300 ease-linear flex items-center text-black text-customsm font-semibold leading-[15px] py-[31px] gap-[10px] px-[22px] border border-solid bg-[#D2F038] border-[#D2F038] sm:max-w-[279px] w-full justify-center max-w-sm'>Call to Action Somewhere <ButtonArrow /> </button>
                        <img src={TabThreeCard} alt="card-data" className='lg:hidden w-full max-w-sm mx-auto max-lg:block' />
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='xl:pt-[113px] lg:pt-24 md:pt-20 pt-16 lg:pb-[90px] pb-20 relative overflow-hidden'>
            <img className='absolute lg:bottom-[59px] bottom-5 min-h-10 overflow-auto -z-10 w-full' src={greenLine} alt="green line" />
            <CustomHeading className="uppercase lg:!text-[80px] !text-[60px] max-sm:px-3 leading-[100%]" title="The growth partner " />
            <Description className="text-center lg:!text-3xl !text-2xl !font-light font-maisonNeueLight" title="you’ve been looking for." />
            <Description className="lg:!mt-[36px] md:mt-6 mt-5 font-normal max-sm:px-12 !text-[15px] !text-black !leading-[20px] font-spaceMono !text-center" title="Businesses trust Venveo to power grow." />

            <div className='tabs-parent lg:mt-[95px] mt-20 max-xl:mt-16 max-lg:mt-10 max-md:mt-8 relative z-20'>
                <div className='relative flex items-center max-lg:overflow-x-auto scrollbar overflow-y-visible sm:py-3 max-sm:pt-3 max-sm:pb-4 w-full scroll-m-0 max-lg:px-4 sm:justify-center xl:gap-[78px] lg:gap-16 gap-12'>
                    <p className={`text-lg font-semibold text-black opacity-[35%] max-sm:whitespace-nowrap leading-[18px] font-maisonNeue cursor-pointer ${activeTab === 1 ? 'text-black !opacity-[100%] transition-all ease-linear duration-200' : ''}`}
                        onClick={() => handleTabClick(1)} > Industry Expertise
                        {activeTab === 1 && (
                            <img src={tabUnderlineOne} alt="redline"
                                className="mx-auto absolute" />
                        )}
                    </p>
                    <p className={`text-lg font-semibold text-black opacity-[35%] max-sm:whitespace-nowrap leading-[18px] font-maisonNeue cursor-pointer ${activeTab === 2 ? 'text-black !opacity-[100%] transition-all ease-linear duration-200' : ''}`}
                        onClick={() => handleTabClick(2)}>
                        ROI Focused
                        {activeTab === 2 && (
                            <img src={tabUnderlineTwo} alt="redline"
                                className="mx-auto absolute" />
                        )}
                    </p>
                    <p className={`text-lg font-semibold text-black opacity-[35%] max-sm:whitespace-nowrap leading-[18px] font-maisonNeue cursor-pointer ${activeTab === 3 ? 'text-black !opacity-[100%] transition-all ease-linear duration-200' : ''}`}
                        onClick={() => handleTabClick(3)}>
                        Proprietary Technology
                        {activeTab === 3 && (
                            <img src={tabUnderlineThree} alt="redline"
                                className="mx-auto absolute" />
                        )}
                    </p>
                </div>
                <div className='mt-[46px]'>{TabContent()}</div>
            </div>
        </div>
    );
};

export default GrowthPartner;
