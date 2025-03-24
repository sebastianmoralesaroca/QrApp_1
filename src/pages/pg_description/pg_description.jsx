import { useLocation } from 'react-router-dom';

function Pg_Description() {
  const location = useLocation();
  const { product } = location.state || {};

  // Si no se encontró el producto en el state, muestra un mensaje de error
  if (!product) {
    return <div>No hay información del producto.</div>;
  }

  return (
    <main className="desc">
      <div className="descCont1">
        <h1 className="descCont1_title">{product.name}</h1>
        <img className="descCont1_img" src={product.img} alt={product.name} />
      </div>
      <div className="descCont2">
        <div className="descCont3">
          <h2 className="descCont3_price">{product.price}</h2>
          <p className="descCont4_text">{product.subname}</p>
        </div>
        <div className="descCont4">
          <button className="descCont3_btn">Agregar Producto</button>
        </div>
      </div>
    </main>
  );
}

export default Pg_Description;
