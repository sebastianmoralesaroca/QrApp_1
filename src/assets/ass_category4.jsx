import { useState } from 'react'
/* Productos de Item 3 */


const Products = [
    {
        id: 401,
        name: "Cerveza Lager",
        subname: "Cerveza Shop",
        price: 9.000,
        img: '../../public/img_app/cerveza.png',
        description: "Suave equilibrada, con notas de malta dorada y un sutil amargor, perfecta para disfrutar bien fría."
    },
    {
        id: 402,
        name: "Cerveza Arandano",
        subname: "Cerveza Shop",
        price: 8.000,
        img: '../../public/img_app/cerrveza.png',
        description: "Intensa y cremosa, con sabores a café y chocolate tostado, ideal para quienes buscan una experiencia robusta y profunda."
    },
]

const ProductsID = (id) => Products.find(Product => Product.id === id);
const Prod401 = ProductsID(401) ;
const Prod402 = ProductsID(402) ;


export {
    Prod401,
    Prod402
}
