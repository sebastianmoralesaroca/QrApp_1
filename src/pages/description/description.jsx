import { useState } from 'react'
import {icon_add} from '../../assets/Icon_Interface'


function Description ({title,img,price,desc}) {
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
                    <button className='descCont3_btn'><img className='descCont3_btnImg' src={icon_add} /></button>
                </div>
                <div className='descCont4'>
                    <p className='descCont4_text'>{desc}</p>
                </div>
            </div>
        </main>
    </>
    )
}

export default Description ;