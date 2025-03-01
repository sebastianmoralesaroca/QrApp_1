import { useState } from 'react'
/* Productos de Item 2 */


const Pizzas = [
    {
        id: 201,
        name: "Mediterranea",
        subname: "Pizza Mediana",
        price: 8.000,
        img: '../../public/img_app/pizza_img.png',
        description: "Deliciosa combinación de aceitunas negras, tomate seco, queso feta y albahaca fresca sobre una base de salsa de tomate artesanal."
    },
    {
        id: 202,
        name: "Pizza Rustica",
        subname: "Pizza Mediana",
        price: 9.000,
        img: '../../public/img_app/pizza_img.png',
        description: "mozzarella, chorizo ahumado, champiñones salteados y un toque de romero para un sabor intenso y reconfortante."
    },
]

const CategorieID = (id) => Pizzas.find(Pizza => Pizza.id === id);
const Pizza1 = CategorieID(101) ;
const Pizza2 = CategorieID(102) ;


export {
    Pizza1,
    Pizza2
}
