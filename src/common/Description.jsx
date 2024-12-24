import React from 'react'

const Description = (props) => {
    return (
        <p className={`text-[15px] text-black !font-maisonNeue ${props.className}`}>{props.tittle}</p>
    )
}

export default Description