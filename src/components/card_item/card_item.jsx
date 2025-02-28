import { useState } from 'react'

function Card_item ({ link, title, text, img }) {
    return (
    <>
        <a href={ link } >
            <div className='card_item'>
                <div className='item_cont1'>
                    <h3 className='card_item_title'>{ title }</h3>
                    <p className='card_item_text'>{ text }</p>
                </div>
                <div className='item_cont2'>
                    <img className='cont2_img' src={img} />
                </div>
            </div>
        </a>
    </>
    )
}

export default Card_item