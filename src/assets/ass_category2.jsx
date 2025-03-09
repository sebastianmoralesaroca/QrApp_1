import { useState } from 'react'
/* Productos de Item 2 */


const Products = [
    {
        id: 201,
        name: "Mediterranea",
        subname: "Pizza Mediana",
        price: 8.000,
        img: '../../public/img_app/pizza.png',
        description: "Deliciosa combinación de aceitunas negras, tomate seco, queso feta y albahaca fresca sobre una base de salsa de tomate artesanal."
    },
    {
        id: 202,
        name: "Pizza Rustica",
        subname: "Pizza Mediana",
        price: 9.000,
        img: '../../public/img_app/pizza2.png',
        description: "mozzarella, chorizo ahumado, champiñones salteados y un toque de romero para un sabor intenso y reconfortante."
    },
]

const ProductsID = (id) => Products.find(Product => Product.id === id);
const Prod201 = ProductsID(201) ;
const Prod202 = ProductsID(202) ;


export {
    Prod201,
    Prod202
}
