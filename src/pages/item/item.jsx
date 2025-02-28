import { useState } from 'react'
import CardItem from '../../components/card_item/card_item'
import { ite1_tit,ite1_tex,ite1_img } from '../../assets/ass_item1'


function Item () {
    return (
    <>
        <main className='main_item'>
            <CardItem title={ ite1_tit } text={ ite1_tex } img={ ite1_img } />
        </main>
    </>
    )
}

export default Item
