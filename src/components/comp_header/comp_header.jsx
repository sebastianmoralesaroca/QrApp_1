import { useNavigate, useLocation } from 'react-router-dom';
import { icon_back } from '../../assets/icon_interface';
import { Img_Logo } from '../../assets/img_app';

function Comp_Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Desactivar boton al estar en Category
  const disableBackButton = location.pathname === '/category';

  const handleBack = () => {
    if (location.pathname === '/' || disableBackButton) {
      return;
    }
    if (location.pathname === '/category1/descripcion') {
      navigate('/category1');
      return;
    }
    if (location.pathname === '/category2/descripcion') {
      navigate('/category2');
      return;
    }
    if (location.pathname === '/category3/descripcion') {
      navigate('/category3');
      return;
    }
    if (location.pathname === '/category4/descripcion') {
      navigate('/category4');
      return;
    }
    if (
      location.pathname === '/category1' ||
      location.pathname === '/category2' ||
      location.pathname === '/category3' ||
      location.pathname === '/category4'
    ) {
      navigate('/category');
      return;
    }
    if (location.state && location.state.from) {
      navigate(location.state.from);
      return;
    }
    // Finalmente, si ninguna condición se cumple, retrocede un paso en el historial.
    navigate(-1);
  };

  return (
    <header className="cont_header">
      <button
        className="btn_back"
        onClick={handleBack}
        disabled={disableBackButton}
        style={disableBackButton ? { opacity: 0.5, cursor: 'default' } : {}}
      >
        <img className="imgBack" src={icon_back} alt="retroceder" />
      </button>
      <img className="img_logo" src={Img_Logo} alt="imagenlogo" />
    </header>
  );
}

export default Comp_Header;
