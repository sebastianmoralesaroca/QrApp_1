import { useNavigate, useLocation } from 'react-router-dom'; // Importamos useNavigate y useLocation
import { useState } from 'react'; // Usamos useState para gestionar el estado de la navegación
import { icon_back } from '../../assets/icon_interface'; // Importamos el icono para el botón de retroceso
import { Img_Logo } from '../../assets/img_app';

function Comp_Header() {
  const navigate = useNavigate(); // Instancia de navegación
  const location = useLocation(); // Hook para obtener la ubicación actual
  const [prevLocation, setPrevLocation] = useState(''); // Estado para almacenar la ubicación anterior

  // Función para manejar el retroceso de las páginas
  const handleBack = () => {
    // Si estamos en la página de inicio (home) no hacemos nada.
    if (location.pathname === '/') {
      return; // No se realiza ninguna acción
    }

    // Lógica para retroceder según la ruta actual
    if (prevLocation === '') {
      // Si no tenemos una ubicación previa, entonces guardamos la actual (para el primer click)
      setPrevLocation(location.pathname);
      navigate('/category'); // Regresamos a la página de categorías
    } else if (prevLocation === '/category') {
      // Si la ubicación anterior era 'category', regresamos a la página principal
      setPrevLocation(''); // Restablecemos el estado de prevLocation
      navigate('/'); // Regresamos a la página de inicio
    } else {
      // En cualquier otro caso, retrocedemos un paso en el historial
      navigate(-1);
    }
  };

  return (
    <header className="cont_header">
      <button className="btn_back" onClick={handleBack}>
        <img className="imgBack" src={icon_back} alt="retroceder" />
      </button>
      <img className="img_logo" src={Img_Logo} alt="imagenlogo" />
    </header>
  );
}

export default Comp_Header;
