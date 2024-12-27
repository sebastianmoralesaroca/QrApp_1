import { useState } from 'react'
import {Icon_Add, Icon_Back} from '../assets/Icon_Interface'

function Header() {
    return (
    <>
        <header>
            <div>
                <button type=""><img src={Icon_Add} alt="" /></button>
            </div>
            <div>
                <img src={Icon_Back} alt="" />
            </div>
        </header>
    </>
    )
}

export default Header