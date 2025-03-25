import { useState } from 'react';
import { icon_notification, icon_darkmode, icon_shop } from '../../assets/icon_interface';
import Comp_Noti from '../comp_noti/comp_noti';
import { toggleTheme, useTheme } from '../../utils/uti_theme'; // Importamos las funciones

function Comp_Nav() {
  const [showNoti, setShowNoti] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useTheme(setIsDarkMode); // Ahora el tema se inicializa desde `useTheme`

  const toggleNotification = () => setShowNoti(prev => !prev);
  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <>
      <nav className='cont_nav'>
        <button className='btnDark' onClick={() => toggleTheme(setIsDarkMode)}>
          <img className='imgDark' src={icon_darkmode} alt="darkmode" />
        </button>
        <button className='btnNot' onClick={toggleNotification}>
          <img className='imgNot' src={icon_notification} alt="notification" />
        </button>
        <button className='btnShop'>
          <img className='imgShop' src={icon_shop} alt="shop" />
        </button>
      </nav>

      {showNoti && <Comp_Noti closeNoti={toggleNotification} />}
      {showMenu && <Comp_Menu toggleMenu={toggleMenu} toggleTheme={() => toggleTheme(setIsDarkMode)} />}
    </>
  );
}

export default Comp_Nav;
