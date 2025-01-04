import React from 'react';
import CustomHeading from '../common/CustomHeading';
import Description from '../common/Description';
import { MARKETING_CARDS_LIST } from '../utils/helper';
import { BtnArrow } from '../utils/icons';
import bgYellow from './../assets/images/png/yellow-line.png'

const Marketing = () => {
    return (
        <div className="pt-[122px] pb-[129px] max-xl:py-28 max-lg:py-20 max-md:py-16 max-sm:py-12 relative overflow-hidden">
            <Description className="!font-light xl:!text-3xl mx-auto text-center !text-2xl max-lg:px-3 lg:mb-[7px] mb-1" title="Problems we solve." />
            <CustomHeading className="lg:mb-[22px] mb-4 uppercase !leading-[90%] max-w-[502px] lg:!text-[80px] max-lg:px-3 !text-[60px] mx-auto" title="Digital Marketing for today’s Business" />
            <Description className="!font-light lg:!text-[15px] max-lg:px-14 !text-sm font-maisonNeueLight mx-auto text-center lg:max-w-[620px] max-w-lg xl:!mb-[40px] lg:!mb-14 md:!mb-10 mb-[92px] !ZZZZZZmb-7 font-spaceMono" title="We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners." />
            <img src={bgYellow} alt="yellow-line" className="w-full absolute z-10 sm:translate-y-[6rem] max-sm:top-[14%] max-sm:min-w-[1200px]" />
            <div className='max-w-[1280px] mx-auto'>
                <div className="flex flex-wrap gap-x-[66px] gap-y-[57px] space max-md:gap-6 justify-center lg:pt-10 max-sm:mx-4 max-w-[1920px] mx-auto">
                    {MARKETING_CARDS_LIST.map((obj, i) => (
                        <div key={i} className="border-2 relative z-40 max-w-[502px] bg-white border-solid border-[#00AFB5] rounded-[25px] pl-[48px] ps-[38px] max-md:p-10 max-sm:p-7 pt-[65px] lg:max-h-[506px] pb-[44px] w-[calc(50%-12px)] max-lg:w-full">
                            <div className="flex items-start flex-col justify-between">
                                <div className='flex items-start max-sm:flex-col gap-6'>
                                    <p>{obj.logo}</p>
                                    <div>
                                        <h3 className="text-black font-light text-[30px] leading-[30px] max-w-[325px]">{obj.title}</h3>
                                        <p className="text-black font-normal max-w-[315px] tracking-[2px] pt-5 leading-[20px] text-[15px]">{obj.description}</p>
                                        <ul className="list-disc pl-5 mt-5 max-w-[285px]">
                                            <li className='font-semibold text-black leading-[20px] text-[15px]'>{obj.listOne}</li>
                                            <li className='font-semibold text-black leading-[20px] text-[15px]'>{obj.listTwo}</li>
                                            <li className='font-semibold text-black leading-[20px] text-[15px]'>{obj.listThree}</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="sm:ps-[77px] flex items-center group gap-2 text-[15px] font-semibold leading-[20px]">
                                    Explore SEO Services <span className='mt-1 group group-hover:translate-x-3 transition-all ease-linear'><BtnArrow /></span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marketing;