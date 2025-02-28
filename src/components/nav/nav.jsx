import { useState } from 'react'
import { Icon_Notification, Icon_Menu, Icon_Shop } from '../../assets/Icon_Interface'

function Nav () {
    return (
    <>
        <nav className='cont_nav'>
                <img className='imgNot' src={ Icon_Notification } alt="notification"/>
                <img className='imgMenu' src={ Icon_Menu } alt="menu"/>
                <img className='imgShop' src={ Icon_Shop } alt="shop"/>
        </nav>
    </>
    )
}

export default Nav