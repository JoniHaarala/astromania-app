import Image from 'next/image'
import React from 'react'

export const Header = () => {
    return (
        <header>
            <Image src={"/astromaniaLogo.png"} width={"275px"} height={"121px"} alt='astromania'/>
        </header>
    )
}
