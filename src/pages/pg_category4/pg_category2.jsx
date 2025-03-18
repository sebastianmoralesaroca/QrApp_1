import { useState } from 'react';
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import { Prod201, Prod202 } from '../../assets/ass_category2';
import { Cat2 } from '../../assets/ass_categories';
import Pg_Description from '../pg_description/pg_description'; // Asegúrate de importar Pg_Description

function Pg_Category2() {
  
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
          <div className='catMain_cont2'>
            <h2 className='catMain_title'>{Cat2.name}</h2>
          </div>
          <div className='catMain_cont2'>
            <Comp_ProdCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} link={Prod201.link} click={() => handleProductClick(Prod201)} />
            <Comp_ProdCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} link={Prod202.link} click={() => handleProductClick(Prod202)} />
            <Comp_ProdCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} link={Prod201.link} click={() => handleProductClick(Prod201)} />
            <Comp_ProdCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} link={Prod202.link} click={() => handleProductClick(Prod202)} />
            <Comp_ProdCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} link={Prod201.link} click={() => handleProductClick(Prod201)} />
            <Comp_ProdCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} link={Prod202.link} click={() => handleProductClick(Prod202)} />
            <Comp_ProdCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} link={Prod201.link} click={() => handleProductClick(Prod201)} />
            <Comp_ProdCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} link={Prod202.link} click={() => handleProductClick(Prod202)} />
            <Comp_ProdCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} link={Prod201.link} click={() => handleProductClick(Prod201)} />
            <Comp_ProdCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} link={Prod202.link} click={() => handleProductClick(Prod202)} />
            <Comp_ProdCard img={Prod201.img} name={Prod201.name} subname={Prod201.subname} price={Prod201.price} link={Prod201.link} click={() => handleProductClick(Prod201)} />
            <Comp_ProdCard img={Prod202.img} name={Prod202.name} subname={Prod202.subname} price={Prod202.price} link={Prod202.link} click={() => handleProductClick(Prod202)} />
          </div>
        </main>
      )}
    </>
  );
}

export default Pg_Category2;
