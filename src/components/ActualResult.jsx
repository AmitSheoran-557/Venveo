import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { UsIcon } from '../utils/icons';
import { RESULT_SLIDER_LIST } from '../utils/helper';
import CustomHeading from '../common/CustomHeading';
import Description from '../common/Description';

const ActualResult = () => {


    return (
        <div className="bg-cover relative bg-no-repeat bg-center bg-sliderBg min-h-screen flex flex-col justify-center items-center">
            <div className="text-center pt-[119px]">
                <Description className="!font-light !font-maisonNeueLight lg:!text-3xl !text-2xl text-white" tittle=" Actual businesses." />
                <CustomHeading className="!text-white !font-light font-sohneSchmal lg:!text-[80px] !text-[60px] uppercase lg:mb-[46px] md:mb-8 sm:mb-6 mb-[22px] leading-[30px]" tittle=" Actual results." />
                <p className="text-white font-maisonNeue font-normal text-[15px] leading-[20px]">
                    Businesses trust Venveo to power growth.
                </p>
            </div>

            <div className=" max-w-[768px] w-full pt-[81px] overflow-hidden">
                <Swiper className="mySwiper"
                    loop={true}
                    Pagination={true}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}>

                    {RESULT_SLIDER_LIST.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center">
                                <img src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full max-w-[640px] mx-auto"
                                />
                                <p className="text-white pt-[74px] font-maisonLight font-light max-w-[603px] mx-auto text-3xl">
                                    {`"${slide.description}"`}
                                </p>
                                <p className="text-white font-normal pt-6 font-maisonRegular text-customsm">
                                    {slide.name},
                                </p>
                                <p className="text-white font-normal font-maisonRegular text-customsm">
                                    {slide.title}
                                </p>
                                <p className="text-center pt-3 pb-[56px] mx-auto flex items-center justify-center">
                                    <UsIcon />
                                </p>
                                <div className='pb-17px'></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button-prev absolute left-[10px] top-[50%] transform translate-y-[-50%]">
                    <button className="bg-white py-[54px] px-[30px] roun ded-tr-[20px] rounded-br-[20px] w-10 h-10 flex items-center justify-center">
                        <span className='-rotate-[30deg] text-black'>▼</span>
                    </button>
                </div>
                <div className="swiper-button-next absolute top-[50%] transform translate-y-[-30%]">
                    <button className="bg-white py-[54px] px-[30px] rounded-bl-[20px] rounded-tl-[20px] w-10 h-10 flex items-center justify-center">
                        <span className='-rotate-[-30deg] text-black'>▼</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActualResult;