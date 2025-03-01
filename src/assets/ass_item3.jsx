import { useState } from 'react'
/* Productos de Item 3 */


const Refrescos = [
    {
        id: 301,
        name: "Coca Cola",
        subname: "Bebida Lata",
        price: 4.000,
        img: '../../public/img_app/drink_img.png',
        description: "Refrescante y burbujeante, con su inconfundible sabor dulce y toque de caramelo, ideal para cualquier ocasión."
    },
    {
        id: 302,
        name: "Pepsi",
        subname: "Bebida Lata",
        price: 2.000,
        img: '../../public/img_app/drink_img.png',
        description: "Refrescante y burbujeante, con su inconfundible sabor dulce y toque de caramelo, ideal para cualquier ocasión."
    },
]

const CategorieID = (id) => Refrescos.find(Refresco => Refresco.id === id);
const Refresco1 = CategorieID(301) ;
const Refresco2 = CategorieID(302) ;


export {
    Refresco1,
    Refresco2
}