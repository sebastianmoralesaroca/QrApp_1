import { icon_cancel } from '../../assets/Icon_Interface';  // Asegúrate de que la ruta sea correcta


function Comp_ShoppCart({closeShopCart}) {

  return (
    <div className="shoppCart">
      <div className="shoppCart_cont1">
        <button className="shoppCart_cont1Button" onClick={closeShopCart}>
          <img className="shoppCart_cont1ButtonImg" src={icon_cancel} alt="close" />
        </button>
        <h3 className="shoppCart_cont1Title">Su Pedido</h3>
      </div>
      <div className="shoppCart_cont2">
        
      </div>
      <div className="shoppCart_cont3">
        <p className="shoppCart_cont1Text">SubTotal $</p>
        <p className="shoppCart_cont1Text">Propina $</p>
        <p className="shoppCart_cont1Text">Total $</p>
      </div>
    </div>
  );
}

export default Comp_ShoppCart;
