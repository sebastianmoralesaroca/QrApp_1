import React from "react";
import { Link } from "react-router-dom";

function Comp_ProdCard({ link, img, name, subname, price, click }) {
  return (
    <>
      <div className='prodCard' onClick={click}> {/* Ahora, el click se maneja aquí */}
        <div className='prodCard_cont1'>
          <img className='prodCard_cont1Img' src={img} />
        </div>
        <div className='prodCard_cont2'>
          <h4 className='prodCard_cont2Tit'>{name}</h4>
          <p className='prodCard_cont2Tex'>{subname}</p>
          <p className='prodCard_cont2Pri'>{price}</p>
        </div>
      </div>
    </>
  );
}

export default Comp_ProdCard;
