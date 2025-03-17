import React from "react";


function ProductCard ({link,img,name,subname,price}) {
    return (
    <>
        <a href="https://www.bing.com/?setlang=es" >
            <div className='prodCard'>
                <div className='prodCard_cont1'>
                    <img className='prodCard_cont1Img' src={img} />
                </div>
                <div className='prodCard_cont2'>
                    <h4 className='prodCard_cont2Tit'>{name}</h4>
                    <p className='prodCard_cont2Tex'>{subname}</p>
                    <p className='prodCard_cont2Pri'>{price}</p>
                </div>
            </div>
        </a>
    </>
    )
}

export default ProductCard
