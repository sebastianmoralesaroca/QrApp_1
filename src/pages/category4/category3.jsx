import { useState } from 'react'
import ProductCard from '../../components/productCard/productCard';
import {Prod301,Prod302} from '../../assets/ass_category3';
import {Cat3} from '../../assets/ass_categories';


function Category3 () {
  return (
    <>
        <main className='catMain'>
          <div className='catMain_cont1'>
            <h2 className='catMain_title'>{Cat3.name}</h2>
          </div>
          <div className='catMain_cont2'>
            <ProductCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} />
            <ProductCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} />
            <ProductCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} />
            <ProductCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} />
            <ProductCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} />
            <ProductCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} />
          </div>
        </main>
    </>
  )
}

export default Category3
