import { useState } from 'react';
import {icon_darkmode,icon_notification,icon_shop} from '../../assets/Icon_Interface';
import Comp_Noti from '../comp_noti/comp_noti';
import Comp_ShoppCart from '../comp_shoppCart/comp_shoppCart';  // Asegúrate de importar Comp_ShoppCart
import { toggleTheme, useTheme } from '../../utils/uti_theme';

function Comp_Nav() {
  const [showNoti, setShowNoti] = useState(false);
  const [showShopCart, setShowShopCart] = useState(false);  // Estado para el carrito
  const [isDarkMode, setIsDarkMode] = useState(false);

  useTheme(setIsDarkMode);  // Inicializar el tema

  // Función para alternar la visibilidad de las notificaciones
  const toggleNotification = () => setShowNoti(prev => !prev);

  // Función para alternar la visibilidad del carrito de compras
  const toggleShopCart = () => setShowShopCart(prev => !prev);

  return (
    <>
      <nav className='cont_nav'>
        <button className='btnDark' onClick={() => toggleTheme(setIsDarkMode)}>
          <img className='imgDark' src={icon_darkmode} alt="darkmode" />
        </button>
        <button className='btnNot' onClick={toggleNotification}>
          <img className='imgNot' src={icon_notification} alt="notification" />
        </button>
        <button className='btnShop' onClick={toggleShopCart}>  {/* Botón para mostrar el carrito */}
          <img className='imgShop' src={icon_shop} alt="shop" />
        </button>
      </nav>

      {/* Mostrar el componente de notificación */}
      {showNoti && <Comp_Noti closeNoti={toggleNotification} />}

      {/* Mostrar el componente del carrito de compras */}
      {showShopCart && <Comp_ShoppCart closeShopCart={toggleShopCart} />}  {/* Pasamos la función para cerrar el carrito */}
    </>
  );
}

export default Comp_Nav;
