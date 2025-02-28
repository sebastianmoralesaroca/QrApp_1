import React from "react";

function Card_product ({ link, img, title, text, price }) {
    return (
    <>
        <a href={ link } >
            <div className='card_product'>
                <div className='proudct_cont1'>
                    <img className='card_product_img' src={ img } />
                </div>
                <div className='product_cont2'>
                    <h4 className='card_product_title'>{ title }</h4>
                    <p className='card_product_text'>{ text }</p>
                    <p className='card_product_price'>{ price }</p>
                </div>
            </div>
        </a>
    </>
    )
}

export default Card_product
