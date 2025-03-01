import { useState } from 'react'

const Categories = [
    {
        id: 1,
        name: "Hamburguesa",
        subname: "12 Preparaciones",
        img: '../../public/img_app/burger2_img.png'
    },
    {
        id: 2,
        name: "Pizza",
        subname: "14 Preparaciones",
        img: '../../public/img_app/pizza_img.png'
    },
    {
        id: 3,
        name: "Refresco",
        subname: "6 Ociones",
        img: '../../public/img_app/drink_img.png'
    },
    {
        id: 4,
        name: "Cerveza",
        subname: "7 Opciones",
        img: '../../public/img_app/img_cerverza.png'
    }
]

const CategorieID = (id) => Categories.find(Categorie => Categorie.id === id);
const Cat1 = CategorieID(1) ;
const Cat2 = CategorieID(2) ;
const Cat3 = CategorieID(3) ;
const Cat4 = CategorieID(4) ;

export {
    Cat1,
    Cat2,
    Cat3,
    Cat4,
}