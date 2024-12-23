import React from 'react'

const Description = (props) => {
    return (
        <p className={`lg:text-[15px] text-xs font-normal text-black !font-maisonNeue ${props.className}`}>{props.tittle}</p>
    )
}

export default Description