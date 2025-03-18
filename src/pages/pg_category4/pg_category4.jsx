import { useState } from 'react';
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import { Prod401, Prod402 } from '../../assets/ass_category4';
import { Cat4 } from '../../assets/ass_categories';
import Pg_Description from '../pg_description/pg_description'; // Asegúrate de importar Pg_Description

function Pg_Category4() {
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
            <h2 className='catMain_title'>{Cat4.name}</h2>
          </div>
          <div className='catMain_cont2'>
            <Comp_ProdCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} link={Prod401.link} click={() => handleProductClick(Prod401)} />
            <Comp_ProdCard img={Prod402.img} name={Prod402.name} subname={Prod402.subname} price={Prod402.price} link={Prod402.link} click={() => handleProductClick(Prod402)} />
            <Comp_ProdCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} link={Prod401.link} click={() => handleProductClick(Prod401)} />
            <Comp_ProdCard img={Prod402.img} name={Prod402.name} subname={Prod402.subname} price={Prod402.price} link={Prod402.link} click={() => handleProductClick(Prod402)} />
            <Comp_ProdCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} link={Prod401.link} click={() => handleProductClick(Prod401)} />
            <Comp_ProdCard img={Prod402.img} name={Prod402.name} subname={Prod402.subname} price={Prod402.price} link={Prod402.link} click={() => handleProductClick(Prod402)} />
            <Comp_ProdCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} link={Prod401.link} click={() => handleProductClick(Prod401)} />
            <Comp_ProdCard img={Prod402.img} name={Prod402.name} subname={Prod402.subname} price={Prod402.price} link={Prod402.link} click={() => handleProductClick(Prod402)} />
            <Comp_ProdCard img={Prod401.img} name={Prod401.name} subname={Prod401.subname} price={Prod401.price} link={Prod401.link} click={() => handleProductClick(Prod401)} />
          </div>
        </main>
      )}
    </>
  );
}

export default Pg_Category4;
