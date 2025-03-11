import { useState } from 'react'


function Description ({title,img,price,text}) {
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
                    <button className='descCont3_btn'></button>
                </div>
                <div className='descCont3'>
                    <p className='descCont3_text'>{text}</p>
                </div>
            </div>
        </main>
    </>
    )
}

export default Description ;