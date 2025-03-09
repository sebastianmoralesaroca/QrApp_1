import React from "react";

function ProductCard ({ link, img, name, subname, price }) {
    return (
    <>
        <a href={ link } >
            <div className='productCard'>
                <div className='proudctCont1'>
                    <img className='proudctCont1_img' src={img} />
                </div>
                <div className='productCont2'>
                    <h4 className='productCont2_title'>{name}</h4>
                    <p className='productCont2_text'>{subname}</p>
                    <p className='productCont2_price'>{price}</p>
                </div>
            </div>
        </a>
    </>
    )
}

export default ProductCard
