import { useState } from 'react'
/* Productos de Item 3 */


const Cervezas = [
    {
        id: 401,
        name: "Cerveza Lager",
        subname: "Cerveza Shop",
        price: 9.000,
        img: '../../public/img_app/img_cerverza.png',
        description: "Suave y equilibrada, con notas de malta dorada y un sutil amargor, perfecta para disfrutar bien fría."
    },
    {
        id: 402,
        name: "Cerveza Arandano",
        subname: "Cerveza Shop",
        price: 8.000,
        img: '../../public/img_app/img_cerverza.png',
        description: "Intensa y cremosa, con sabores a café y chocolate tostado, ideal para quienes buscan una experiencia robusta y profunda."
    },
]

const CategorieID = (id) => Cervezas.find(Cerveza => Cerveza.id === id);
const Cerveza1 = CategorieID(401) ;
const Cerveza2 = CategorieID(402) ;


export {
    Cerveza1,
    Cerveza2
}
