import React from "react"
import { Img_Logo } from '../../assets/Img_App'
import {icon_document} from '../../assets/Icon_Interface'


function Home () {
    return (
    <>
        <main className='main_home'>
            <div className='home_cont1'>
                <img className='cont1_img' src={ Img_Logo } />
            </div>
            <div className='home_cont2'>
                <button className='cont2_btn'><img className='cont2_img' src={icon_document} /></button>
                <h1>Bienvenido a Super Burger</h1>
            </div>
        </main>
    </>
    )
}

export default Home