import { useState } from 'react'
/* Productos de Item 3 */


const Products = [
    {
        id: 301,
        name: "Coca Cola",
        subname: "Bebida Lata",
        price: 4.000,
        img: '../../public/img_app/coca.png',
        description: "Refrescante y burbujeante, con su inconfundible sabor dulce y toque de caramelo, ideal para cualquier ocasión."
    },
    {
        id: 302,
        name: "Fanta",
        subname: "Bebida Lata",
        price: 2.000,
        img: '../../public/img_app/fanta.png',
        description: "Refrescante y burbujeante, con su inconfundible sabor dulce y toque de caramelo, ideal para cualquier ocasión."
    },
]

const ProductsID = (id) => Products.find(Product => Product.id === id);
const Prod301 = ProductsID(301) ;
const Prod302 = ProductsID(302) ;


export {
    Prod301,
    Prod302
}