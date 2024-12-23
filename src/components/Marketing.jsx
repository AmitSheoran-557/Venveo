import React from 'react';
import CustomHeading from '../common/CustomHeading';
import Description from '../common/Description';
import { MARKETING_CARD_LIST } from '../utils/helper';
import { BtnArrow } from '../utils/icons';
import bgYellow from './../assets/image/png/yellow-line.png'

const Marketing = () => {
    return (
        <div className="pt-[132px] pb-[129px] max-xl:py-28 max-lg:py-20 max-md:py-16 max-sm:py-12 relative">
            <Description className="!font-light xl:!text-3xl mx-auto text-center lg:!text-2xl md:!text-xl !text-base lg:mb-[7px] mb-1" tittle="Problems we solve." />
            <CustomHeading className="lg:mb-[25px] mb-4 uppercase !leading-[90%] max-w-[502px] mx-auto" tittle="Digital Marketing for today’s Business" />
            <Description className="!font-light lg:!text-[15px] max-lg:px-4 !text-sm font-maisonNeueLight mx-auto text-center lg:max-w-[440px] max-w-lg xl:mb-[85px] lg:!mb-14 md:!mb-10 mb-7" tittle="We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners." />
            <img src={bgYellow} alt="yellow-line" className="w-full absolute z-10 translate-y-[6rem]"/>
            <div className="flex flex-wrap gap-[66px] max-md:gap-6 justify-center lg:pt-10 max-sm:mx-4 max-w-[1920px] mx-auto">
                {MARKETING_CARD_LIST.map((obj, i) => (
                    <div key={i}
                        className="border-2 relative z-40 max-w-[502px] bg-white border-solid border-[#00AFB5] rounded-[25px] pl-[48px] ps-[38px] max-md:p-10 max-sm:p-7 pt-[65px] pb-[54px] w-[calc(50%-12px)] max-lg:w-full">
                        <div className="flex items-start gap-6 max-sm:flex-col">
                            <p>{obj.logo}</p>
                            <div>
                                <h3 className="text-black font-light text-[30px] leading-[30px] max-w-[325px]">{obj.title}</h3>
                                <p className="text-black font-normal max-w-[315px] tracking-[2px] pt-5 leading-[20px] text-customsm">{obj.description}</p>
                                <ul className="list-disc pl-5 mt-7 max-w-[285px]">
                                    <li className='font-semibold text-black leading-[20px] text-customsm'>{obj.listOne}</li>
                                    <li className='font-semibold text-black leading-[20px] text-customsm'>{obj.listTwo}</li>
                                    <li className='font-semibold text-black leading-[20px] text-customsm'>{obj.listThree}</li>
                                </ul>
                                <button className="mt-[52px] flex items-center gap-2 max-md:mt-8 max-sm:mt-6 text-customsm font-semibold leading-[20px]">
                                    {obj.btn} <BtnArrow />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketing;