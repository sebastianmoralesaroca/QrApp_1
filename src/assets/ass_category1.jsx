import { useState } from 'react'
/* Productos de la catogoria 1 */

const Products = [
    {
        id: 101,
        name: "Bacon Chesse Burger",
        subname: "Burger + Papas",
        price: 12.000,
        img: '../../public/img_app/burger.png',
        description: "Una hamburguesa jugosa y perfectamente asada, con queso derretido, lechuga crujiente, tomate fresco, cebolla caramelizada y una salsa especial, todo en un pan suave y ligeramente tostado. ¡Deliciosa!"
    },
    {
        id: 102,
        name: "Burger Chicken",
        subname: "Burger + Papas",
        price: 9.000,
        img: '../../public/img_app/burger2_img.png',
        description: "Una hamburguesa de pollo, con su pechuga dorada y crujiente, cubierta con queso cheddar derretido, acompañada de lechuga fresca, rodajas de tomate jugoso y una cremosa mayonesa. Todo esto servido en un pan suave y ligeramente tostado, haciendo de cada bocado una experiencia deliciosa y reconfortante."
    },
]

const ProductID = (id) => Products.find(Product => Product.id === id);
const Prod101 = ProductID(101) ;
const Prod102 = ProductID(102) ;


export {
    Prod101,
    Prod102
}