import React, { useState } from "react";
import { Img_Logo } from '../../assets/img_app';
import { icon_document } from '../../assets/icon_interface';
import Pg_Category from '../pg_category/pg_category';

function Home() {
  const [showCategory, setShowCategory] = useState(false); // Estado para cambiar entre Home y Pg_Category

  const handleSwitch = () => {
    setShowCategory(true); // Cambia el estado para mostrar Pg_Category
  };

  return (
    <>
      {!showCategory ? (
        <main className='main_home'>
          <div className='home_cont1'>
            <img className='cont1_img' src={Img_Logo} alt="Logo" />
          </div>
          <div className='home_cont2'>
            <button className='cont2_btn' onClick={handleSwitch}>
              <img className='cont2_img' src={icon_document} alt="Documento" />
            </button>
            <h1>Bienvenido a Super Burger</h1>
          </div>
        </main>
      ) : (
        <Pg_Category /> // Renderiza Pg_Category cuando showCategory es true
      )}
    </>
  );
}

export default Home;
