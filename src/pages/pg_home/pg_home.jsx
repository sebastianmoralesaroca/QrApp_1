import React from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { Img_Logo } from "../../assets/img_app";
import { icon_document } from "../../assets/icon_interface";

function Home() {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <main className="main_home">
      <div className="home_cont1">
        <img className="cont1_img" src={Img_Logo} alt="Logo" />
      </div>
      <div className="home_cont2">
        <button className="cont2_btn" onClick={() => navigate("/category")}> {/* Navega a /category */}
          <img className="cont2_img" src={icon_document} alt="Documento" />
        </button>
        <h1>Bienvenido a Super Burger</h1>
      </div>
    </main>
  );
}

export default Home;
