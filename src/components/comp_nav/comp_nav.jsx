import { useState, useEffect } from 'react';
import { icon_notification, icon_menu, icon_shop } from '../../assets/icon_interface';
import Comp_Noti from '../comp_noti/comp_noti';
import Comp_Menu from '../comp_menu/comp_menu';

function Comp_Nav() {
  const [showNoti, setShowNoti] = useState(false); // Estado para controlar la visibilidad de las notificaciones
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar la visibilidad del menú
  const [isDarkMode, setIsDarkMode] = useState(false); // 🔹 Nuevo estado para manejar el tema oscuro

  // 🔹 Se añadió useEffect para cargar el tema guardado en localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    }
  }, []);

  // 🔹 Función para alternar entre el modo claro y oscuro
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // 🔹 Guardamos el estado en localStorage
      } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  // Funciones para alternar la visibilidad de los componentes
  const toggleNotification = () => setShowNoti(prev => !prev);
  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <>
      <nav className='cont_nav'>
        <button className='btnNot' onClick={toggleNotification}>
          <img className='imgNot' src={icon_notification} alt="notification" />
        </button>
        <button className='btnMenu' onClick={toggleMenu}>
          <img className='imgMenu' src={icon_menu} alt="menu" />
        </button>
        <button className='btnShop'>
          <img className='imgShop' src={icon_shop} alt="shop" />
        </button>
      </nav>

      {/* 🔹 Pasamos toggleTheme como prop a Comp_Menu */}
      {showNoti && <Comp_Noti closeNoti={toggleNotification} />}
      {showMenu && <Comp_Menu toggleMenu={toggleMenu} toggleTheme={toggleTheme} />}
    </>
  );
}

export default Comp_Nav;
