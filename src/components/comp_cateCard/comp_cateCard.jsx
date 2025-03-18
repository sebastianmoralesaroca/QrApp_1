import { useState } from 'react'

function Comp_CateCard({ click, name, subname, img }) {
    return (
      <button className="card_item" onClick={click}>
        <div className="item_cont1">
          <h3 className="card_item_title">{name}</h3>
          <p className="card_item_text">{subname}</p>
        </div>
        <div className="item_cont2">
          <img className="cont2_img" src={img} alt={name} />
        </div>
      </button>
    );
  }
  
  export default Comp_CateCard;
  