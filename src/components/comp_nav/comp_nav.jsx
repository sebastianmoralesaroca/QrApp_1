import { useState } from 'react'
import {icon_notification,icon_menu,icon_shop} from '../../assets/icon_interface'

function Comp_Nav () {
    return (
    <>
        <nav className='cont_nav'>
                <img className='imgNot' src={icon_notification} alt="notification"/>
                <img className='imgMenu' src={icon_menu} alt="menu"/>
                <img className='imgShop' src={icon_shop} alt="shop"/>
        </nav>
    </>
    )
}

export default Comp_Nav