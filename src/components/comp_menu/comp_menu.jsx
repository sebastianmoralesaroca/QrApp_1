import { useState } from 'react'
import {icon_darkmode,icon_cancel,icon_translate, icon_info, icon_coment, icon_calification} from '../../assets/icon_interface'


function Comp_MenuCard({ img, name }) {
  return (
    <>
        <button className='menuCard'>
          <img className='menuCard_img' src={img} alt={name} />
          <p className='menuCard_text'>{name}</p>
        </button>
    </>
  );
}


function Comp_Menu() {
  return (
    <>
      <div className='menuContPrin'>
        <div className='menuCont1'>
          <button className='menuCont1_btn'>
            <img className='menuCont1_img' src={icon_cancel} alt='botón' />
          </button>
          <h3 className='menuCont1_title'>¿Que quieres hacer?</h3>
        </div>
        <div className='menuCont2'>
          <Comp_MenuCard img={icon_darkmode} name="Oscurecer" />
          <Comp_MenuCard img={icon_translate} name="Idioma" />
          <Comp_MenuCard img={icon_info} name="Informacion" />
          <Comp_MenuCard img={icon_coment} name="Reseña" />
          <Comp_MenuCard img={icon_calification} name="Calificar" />
        </div>
      </div>
    </>
  );
}

export default Comp_Menu;
