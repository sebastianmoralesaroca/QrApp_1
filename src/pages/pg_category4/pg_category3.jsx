import { useState } from 'react';
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import { Prod301, Prod302 } from '../../assets/ass_category3';
import { Cat3 } from '../../assets/ass_categories';
import Pg_Description from '../pg_description/pg_description'; // Asegúrate de importar Pg_Description

function Pg_Category3() {
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Establece el producto seleccionado
  };

  return (
    <>
      {selectedProduct ? (
        <Pg_Description title={selectedProduct.name} img={selectedProduct.img} price={selectedProduct.price} desc={selectedProduct.subname} />
      ) : (
        <main className='catMain'>
          <div className='catMain_cont1'>
            <h2 className='catMain_title'>{Cat3.name}</h2>
          </div>
          <div className='catMain_cont2'>
            <Comp_ProdCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} link={Prod301.link} click={() => handleProductClick(Prod301)} />
            <Comp_ProdCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} link={Prod302.link} click={() => handleProductClick(Prod302)} />
            <Comp_ProdCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} link={Prod301.link} click={() => handleProductClick(Prod301)} />
            <Comp_ProdCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} link={Prod302.link} click={() => handleProductClick(Prod302)} />
            <Comp_ProdCard img={Prod301.img} name={Prod301.name} subname={Prod301.subname} price={Prod301.price} link={Prod301.link} click={() => handleProductClick(Prod301)} />
            <Comp_ProdCard img={Prod302.img} name={Prod302.name} subname={Prod302.subname} price={Prod302.price} link={Prod302.link} click={() => handleProductClick(Prod302)} />
          </div>
        </main>
      )}
    </>
  );
}

export default Pg_Category3;
