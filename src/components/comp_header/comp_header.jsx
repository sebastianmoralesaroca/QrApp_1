import { useState } from 'react'
import {icon_back} from '../../assets/icon_interface'
import { Img_Logo, } from '../../assets/img_app'

function Comp_Header() {
    return (
    <>
        <header className='cont_header'>
                <img className='imgBack' src={icon_back} alt="retroceder"/>
                <img className='img_logo' src={ Img_Logo } alt="imagenlogo"/>
        </header>
    </>
    )
}

export default Comp_Header
