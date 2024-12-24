import React from 'react'

const CustomInput = (props) => {
    return (
        <form className={`py-[18.5px] flex justify-between border-[2px] border-white rounded-full max-w-[448px] mx-auto lg:ps-[34px] lg:pe-[37px] max-lg:px-6 ${props.className}`}>
            <input type="text" required placeholder={props.placeholderTittle} className={`placeholder:text-white placeholder:opacity-[60%] outline-none text-white opacity-[60%] bg-transparent ${props.customClass}`} />
            <button className={`text-white font-semibold text-[15px] ${props.customClassTwo}`}>{props.btnTittle}</button>
        </form>
    )
}

export default CustomInput