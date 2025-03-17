import { useState } from 'react'
import { icon_back, } from '../../assets/Icon_Interface'
import { Img_Logo, } from '../../assets/Img_App'

function Header() {
    return (
    <>
        <header className='cont_header'>
                <img className='imgBack' src={icon_back} alt="retroceder"/>
                <img className='img_logo' src={ Img_Logo } alt="imagenlogo"/>
        </header>
    </>
    )
}

export default Header
