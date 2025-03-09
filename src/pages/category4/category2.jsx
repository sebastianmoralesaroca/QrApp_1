import { useState } from 'react'
import ProductCard from '../../components/productCard/productCard';
import {Prod201,Prod202} from '../../assets/ass_category2';
import {Cat2} from '../../assets/ass_categories';


function Category2 () {
  return (
    <>
        <main className='catMain'>
            <div className='catMain_cont2'>
                <h2 className='catMain_title'>{Cat2.name}</h2>
            </div>
            <div className='catMain_cont2'>
                <ProductCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} />
                <ProductCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} />
                <ProductCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} />
                <ProductCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} />
                <ProductCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} />
                <ProductCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} />
                <ProductCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} />
                <ProductCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} />
                <ProductCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} />
                <ProductCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} />
                <ProductCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} />
                <ProductCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} />
                <ProductCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} />
                <ProductCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} />
            </div>
        </main>
    </>
  )
}

export default Category2
