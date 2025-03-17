import { useState } from 'react'

function Comp_CateCard ({link,name,subname,img}) {
    return (
    <>
        <a href={ link } >
            <div className='card_item'>
                <div className='item_cont1'>
                    <h3 className='card_item_title'>{ name }</h3>
                    <p className='card_item_text'>{ subname }</p>
                </div>
                <div className='item_cont2'>
                    <img className='cont2_img' src={img} />
                </div>
            </div>
        </a>
    </>
    )
}

export default Comp_CateCard