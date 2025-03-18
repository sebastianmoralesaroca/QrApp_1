import { useState } from 'react'
import {icon_add} from '../../assets/icon_interface'


function Pg_Description ({title,img,price,desc}) {
    return (
    <>
        <main className='desc'>
            <div className='descCont1'>
                <h1 className='descCont1_title'>{title}</h1>
                <img className='descCont1_img' src={img} />
            </div>
            <div className='descCont2'>
                <div className='descCont3'>
                    <h2 className='descCont3_price'>{price}</h2>
                    <p className='descCont4_text'>{desc}</p>
                </div>
                <div className='descCont4'>
                    <button className='descCont3_btn'>Agregar Producto</button>
                </div>
            </div>
        </main>
    </>
    )
}

export default Pg_Description ;