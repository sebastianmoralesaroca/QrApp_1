import { icon_darkmode, icon_cancel, icon_translate, icon_info, icon_coment, icon_calification } from '../../assets/icon_interface';

function Comp_Menu({ toggleMenu, toggleTheme }) { // 🔹 Se agregó toggleTheme como prop

  // 🔹 Se añadió el parámetro onClick para que cada botón pueda ejecutar una función específica
  function Comp_MenuCard({ img, name, onClick }) {
    return (
      <button className='menuCard' onClick={onClick}>
        <img className='menuCard_img' src={img} alt={name} />
        <p className='menuCard_text'>{name}</p>
      </button>
    );
  }

  return (
    <div className='menuContPrin'>
      <div className='menuCont1'>
        <button className='menuCont1_btn' onClick={toggleMenu}> {/* 🔹 Botón que cierra el menú */}
          <img className='menuCont1_img' src={icon_cancel} alt='Cerrar menú' />
        </button>
        <h3 className='menuCont1_title'>¿Qué quieres hacer?</h3>
      </div>
      <div className='menuCont2'>
        {/* 🔹 Se pasó toggleTheme al botón de "Oscurecer" */}
        <Comp_MenuCard img={icon_darkmode} name="Oscurecer" onClick={toggleTheme} />
        <Comp_MenuCard img={icon_translate} name="Idioma" />
        <Comp_MenuCard img={icon_info} name="Información" />
        <Comp_MenuCard img={icon_coment} name="Reseña" />
        <Comp_MenuCard img={icon_calification} name="Calificar" />
      </div>
    </div>
  );
}

export default Comp_Menu;
