import { useState } from 'react';
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import { Prod101, Prod102 } from '../../assets/ass_category1';
import { Cat1 } from '../../assets/ass_categories';
import Pg_Description from '../pg_description/pg_description'; // Asegúrate de importar Pg_Description

function Pg_Category1() {
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Establece el producto seleccionado
  };

  return (
    <>
      {selectedProduct ? (
        <Pg_Description 
          title={selectedProduct.name} 
          img={selectedProduct.img} 
          price={selectedProduct.price} 
          desc={selectedProduct.subname} 
        />
      ) : (
        <main className='catMain'>
          <div className='catMain_cont1'>
            <h2 className='catMain_title'>{Cat1.name}</h2>
          </div>
          <div className='catMain_cont2'>
            <Comp_ProdCard 
              img={Prod101.img} 
              name={Prod101.name} 
              subname={Prod101.subname} 
              price={Prod101.price} 
              link={Prod101.link} 
              click={() => handleProductClick(Prod101)} 
            />
            <Comp_ProdCard 
              img={Prod102.img} 
              name={Prod102.name} 
              subname={Prod102.subname} 
              price={Prod102.price} 
              link={Prod102.link} 
              click={() => handleProductClick(Prod102)} 
            />
            {/* Repite los productos aquí según lo necesites */}
            <Comp_ProdCard 
              img={Prod101.img} 
              name={Prod101.name} 
              subname={Prod101.subname} 
              price={Prod101.price} 
              link={Prod101.link} 
              click={() => handleProductClick(Prod101)} 
            />
            <Comp_ProdCard 
              img={Prod102.img} 
              name={Prod102.name} 
              subname={Prod102.subname} 
              price={Prod102.price} 
              link={Prod102.link} 
              click={() => handleProductClick(Prod102)} 
            />
          </div>
        </main>
      )}
    </>
  );
}

export default Pg_Category1;
