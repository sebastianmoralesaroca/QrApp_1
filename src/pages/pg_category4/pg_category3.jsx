import { useState } from 'react'
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import {Prod301,Prod302} from '../../assets/ass_category3';
import {Cat3} from '../../assets/ass_categories';


function Pg_Category3 () {
  return (
    <>
        <main className='catMain'>
          <div className='catMain_cont1'>
            <h2 className='catMain_title'>{Cat3.name}</h2>
          </div>
          <div className='catMain_cont2'>
            <Comp_ProdCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} />
            <Comp_ProdCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} />
            <Comp_ProdCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} />
            <Comp_ProdCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} />
            <Comp_ProdCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} />
            <Comp_ProdCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} />
          </div>
        </main>
    </>
  )
}

export default Pg_Category3
