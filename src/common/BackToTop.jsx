import React, { useEffect, useState } from 'react'
import backToTop from './../assets/images/svg/chevron-circle-up-solid.svg'

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)
    return (
        <div>
            {scrollTop && (
                <button onClick={scrollHandler} className='fixed right-[10px] bottom-[10px] z-50'><img className='size-9 animate-bounce 2xl:size-14 lg:size-12 bg-white rounded-full' src={backToTop} alt="" /></button>)
            }
        </div>
    )
}

export default BackToTop