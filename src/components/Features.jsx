import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Description from '../common/Description'
import logoOne from './../assets/images/png/featured-img-1.png'
import logoTwo from './../assets/images/png/featured-img-2.png'
import logoThree from './../assets/images/png/featured-img-3.png'
import logoFour from './../assets/images/png/featured-img-4.png'
import logoFive from './../assets/images/png/featured-img-5.png'
import blueLine from './../assets/images/png/skyblue-line.png'

const Features = () => {
    var settings = {
        slidesToShow: 5,
        variableWidth: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 500,
                }
            }
        ]
    };
    return (
        <div className='flex justify-center flex-col items-center xl:-mt-[197px] lg:-mt-40 -mt-28'>
            <Description className="lg:mb-[49px] mb-7 font-spaceMono" title="Featured in" />
            <div className='max-w-[1025px] w-full mx-auto'>
                <Slider {...settings} className='px-4 xl:px-0.5 gap-20 flex'>
                    <img className='xl:mr-[122px] lg:mr-24 md:mr-20 mr-12 lg:max-w-[49px] max-w-10' src={logoOne} alt="logo-img-1" />
                    <img className='xl:mr-[122px] lg:mr-24 md:mr-20 mr-12 lg:max-w-[183px] max-w-32' src={logoTwo} alt="logo-img-2" />
                    <img className='xl:mr-[122px] lg:mr-24 md:mr-20 mr-12 lg:max-w-[116px] max-w-16' src={logoThree} alt="logo-img-3" />
                    <img className='xl:mr-[122px] lg:mr-24 md:mr-20 mr-12 lg:max-w-[103px] max-w-16' src={logoFour} alt="logo-img-4" />
                    <img className='xl:mr-20  mr-12 lg:max-w-[81] max-w-14' src={logoFive} alt="logo-img-5" />
                </Slider>
            </div>
            <img className='lg:mt-[59px] w-full mt-10' src={blueLine} alt="bg-line" />
        </div>
    )
};

export default Features