import React from 'react'

const CustomHeading = (props) => {
  return (
    <div className={`font-bold xl:text-[80px] lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-black font-sohneSchmal text-center ${props.className}`}>{props.tittle}</div>
  )
}

export default CustomHeading