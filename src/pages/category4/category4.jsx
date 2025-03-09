import { useState } from 'react'
import ProductCard from '../../components/productCard/productCard';
import {Prod401,Prod402} from '../../assets/ass_category4';
import {Cat4} from '../../assets/ass_categories';


function Category4 () {
  return (
    <>
        <main className='catMain'>
          <div className='catMain_cont1'>
            <h2 className='catMain_title'>{Cat4.name}</h2>
          </div>
          <div className='catMain_cont2'>
            <ProductCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} />
            <ProductCard img={Prod402.img} name={Prod402.name} subname={Prod402.subname} price={Prod402.price} />
            <ProductCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} />
            <ProductCard img={Prod402.img} name={Prod402.name} subname={Prod402.subname} price={Prod402.price} />
            <ProductCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} />
            <ProductCard img={Prod402.img} name={Prod402.name} subname={Prod402.subname} price={Prod402.price} />
            <ProductCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} />
            <ProductCard img={Prod402.img} name={Prod402.name} subname={Prod402.subname} price={Prod402.price} />
            <ProductCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} />
          </div>
        </main>
    </>
  )
}

export default Category4
