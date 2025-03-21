import { useState } from 'react'
import Comp_ProdCard from '../comp_prodCard/comp_prodCard'
import {Icon_Cancel} from '../../assets/icon_interface'
import {Prod101} from '../../assets/ass_category1' /* Enlace de prueba */


function Comp_ShoppCart(subtotal, propina, total) {
    return (
      <>
        <div className='shoppCart'>
            <div className='shoppCart_cont1'>
                <button className='shoppCart_cont1Button'><img className='shoppCart_cont1ButtonImg' src={Icon_Cancel} /></button>
                <h3 className='shoppCart_cont1Title'>Su Pedido</h3>
            </div>
            <div className='shoppCart_cont2'>
                <ProductCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price}/>
                <ProductCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price}/>
                <ProductCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price}/>
            </div>
            <div className='shoppCart_cont3'>
                <p className='shoppCart_cont1Text'>SubTotal $</p>
                <p className='shoppCart_cont1Text'>Propina $</p>
                <p className='shoppCart_cont1Text'>Total $</p>
            </div>
        </div>
      </>
    )
  }

export default Comp_ShoppCart