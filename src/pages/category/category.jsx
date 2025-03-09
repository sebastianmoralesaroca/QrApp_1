import { useState } from 'react'
import CategoryCard from '../../components/categoryCard/categoryCard'
import {Cat1,Cat2,Cat3,Cat4}  from '../../assets/ass_categories'


function Category () {
    return (
    <>
        <main className='categoryMain'>
            <CategoryCard name={Cat1.name} subname={Cat1.subname} img={Cat1.img} />
            <CategoryCard name={Cat2.name} subname={Cat2.subname} img={Cat2.img} />
            <CategoryCard name={Cat3.name} subname={Cat3.subname} img={Cat3.img} />
            <CategoryCard name={Cat4.name} subname={Cat4.subname} img={Cat4.img} />
        </main>
    </>
    )
}

export default Category