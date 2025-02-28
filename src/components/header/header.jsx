import { useState } from 'react'
import { Icon_Back, } from '../../assets/Icon_Interface'
import { Img_Logo, } from '../../assets/Img_App'

function Header() {
    return (
    <>
        <header className='cont_header'>
                <img className='imgBack' src={ Icon_Back } alt="retroceder"/>
                <img className='img_logo' src={ Img_Logo } alt="imagenlogo"/>
        </header>
    </>
    )
}

export default Header
