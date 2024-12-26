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
        <div className="bg-cover relative bg-no-repeat overflow-hidden bg-center bg-sliderBg min-h-screen flex flex-col justify-center items-center">
            <div className="text-center xl:pt-[119px] lg:pt-20 md:pt-16 pt-[60px]">
                <Description className="!font-light !font-maisonNeueLight lg:!text-3xl max-sm:mb-1 !text-2xl text-white" tittle=" Actual businesses." />
                <CustomHeading className="!text-white !font-light font-sohneSchmal lg:!text-[80px] !text-[60px] uppercase lg:mb-[46px] md:mb-8 sm:mb-6 mb-[22px] leading-[30px]" tittle=" Actual results." />
                <p className="text-white font-maisonNeue font-normal text-[15px] leading-[20px]">
                    Businesses trust Venveo to power growth.
                </p>
            </div>

            <div className="max-w-[1440px] w-full pt-[81px]">
                <Swiper className="mySwiper"
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={257}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 130,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 170,
                        },
                    }}>
                        

                    {RESULT_SLIDER_LIST.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center">
                                <img src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full xl:min-w-[640px] max-w-[640px] mx-auto"
                                />
                                <p className="text-white xl:pt-[74px] lg:pt-16 md:pt-12 pt-[30px] font-maisonLight font-light max-w-[603px] max-sm:px-4 mx-auto text-3xl">
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

                <div className="swiper-button-prev absolute lg:-translate-x-3 -translate-x-1 md:top-[50%] max-md:!hidden transform translate-y-[-50%]">
                    <button className="bg-white xl:py-[54px] lg:py-12 md:py-10 py-[39px] lg:px-[30px] md:px-6 px-[22px] rounded-tr-[20px] rounded-br-[20px] w-10 h-10 flex items-center justify-center">
                        <span className='-rotate-[30deg] text-black'>▼</span>
                    </button>
                </div>
                <div className="swiper-button-next absolute top-[50%] transform translate-y-[-50%] max-md:!hidden">
                    <button className="bg-white  xl:py-[54px] lg:py-12 md:py-10 py-[39px] lg:px-[30px] md:px-6 px-[22px] rounded-bl-[20px] rounded-tl-[20px] w-10 h-10 flex items-center justify-center">
                        <span className='-rotate-[-30deg] text-black'>▼</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActualResult;