import { useState } from 'react'
import {icon_cancel} from '../../assets/icon_interface'
import {Noti1,Noti2} from '../../assets/ass_notification'


function Comp_NotiCard({title,text,fondo}) {
    const background = {
      backgroundImage: `url(${fondo})`,
    };
    return (
      <>
        <div className='NotiCard_cont' style={background}>
          <h3 className='NotiCard_contTitle'>{title}</h3>
          <p className='NotiCard_contText'>{text}</p>
        </div>
      </>
    );
  }


  function Comp_Noti() {
    return (
      <>
        <div className='noti_contPrin'>
          <div className='noti_cont1'>
            <button className='noti_cont1Btn'>
              <img className='noti_cont1Img' src={icon_cancel} alt='Cerrar notificación' />
            </button>
            <h3 className='noti_cont1Title'>Notificaciones</h3>
          </div>
          <div className='noti_cont2'>
            <Comp_NotiCard
                title={Noti1.title}
                text={Noti1.text}
                fondo={Noti1.img}
            />
            <Comp_NotiCard
                title={Noti2.title}
                text={Noti2.text}
                fondo={Noti2.img}
            />
          </div>
        </div>
      </>
    );
  }

export default Comp_Noti
