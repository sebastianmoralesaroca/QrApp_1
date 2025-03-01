import { useState } from 'react'
import CardItem from '../../components/card_item/card_item'
import {Cat1,Cat2,Cat3,Cat4}  from '../../assets/ass_categories'
import {Burger1}  from '../../assets/ass_item1'


function Item () {
    return (
    <>
        <main className='main_item'>
            <CardItem name={Burger1.name} subname={Cat1.subname} img={Cat1.img}  />
            <CardItem name={Cat2.name} subname={Cat2.subname} img={Cat2.img}  />
            <CardItem name={Cat3.name} subname={Cat3.subname} img={Cat3.img}  />
            <CardItem name={Cat4.name} subname={Cat4.subname} img={Cat4.img}  />
        </main>
    </>
    )
}

export default Item