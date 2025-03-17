import { useState } from 'react'
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import {Prod101,Prod102} from '../../assets/ass_category1';
import {Cat1} from '../../assets/ass_categories';


function Pg_Category1 () {
  return (
    <>
        <main className='catMain'>
          <div className='catMain_cont1'>
            <h2 className='catMain_title'>{Cat1.name}</h2>
          </div>
          <div className='catMain_cont2'>
            <Comp_ProdCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price} />
            <Comp_ProdCard img={Prod102.img} name={Prod102.name} subname={Prod102.subname} price={Prod102.price} />
            <Comp_ProdCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price} />
            <Comp_ProdCard img={Prod102.img} name={Prod102.name} subname={Prod102.subname} price={Prod102.price} />
            <Comp_ProdCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price} />
            <Comp_ProdCard img={Prod102.img} name={Prod102.name} subname={Prod102.subname} price={Prod102.price} />
            <Comp_ProdCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price} />
            <Comp_ProdCard img={Prod102.img} name={Prod102.name} subname={Prod102.subname} price={Prod102.price} />
            <Comp_ProdCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price} />
            <Comp_ProdCard img={Prod102.img} name={Prod102.name} subname={Prod102.subname} price={Prod102.price} />
            <Comp_ProdCard img={Prod101.img} name={Prod101.name} subname={Prod101.subname} price={Prod101.price} />
            <Comp_ProdCard img={Prod102.img} name={Prod102.name} subname={Prod102.subname} price={Prod102.price} />
          </div>
        </main>
    </>
  )
}

export default Pg_Category1
