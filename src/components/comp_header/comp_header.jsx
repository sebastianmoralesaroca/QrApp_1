import { useNavigate } from 'react-router-dom'; // Importar el hook useNavigate
import { icon_back } from '../../assets/icon_interface';
import { Img_Logo } from '../../assets/img_app';

function Comp_Header() {


  return (
    <>
      <header className="cont_header">
        <button className="btn_back">
          <img className="imgBack" src={icon_back} alt="retroceder" />
        </button>
        <img className="img_logo" src={Img_Logo} alt="imagenlogo" />
      </header>
    </>
  );
}

export default Comp_Header;
