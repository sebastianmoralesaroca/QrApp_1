import { useState } from 'react'
import {icon_darkmode,} from '../../assets/icon_interface'


function MenuCard(img,name) {
     return (
        <>
          <div className='menuCard'>
            <img className='menuCard_img' src={img} />
            <p className='menuCard_text'>{name}</p>
          </div>
        </>
     )
}

function Comp_Menu() {
  return (
    <>
      <div className='menuContPrin'>
        <div className='menuCont1'>
          <button className='menuCont1_btn'><img className='menuCont1_img' src=''/></button>
          <h3 className='menuCont1_title'>¿Que quieres hacer?</h3>
        </div>
        <div className='menuCont2'>
          <menuCard img={icon_darkmode} name="darkmode" />
        </div>
      </div>
    </>
  )
}

export default Comp_Menu
