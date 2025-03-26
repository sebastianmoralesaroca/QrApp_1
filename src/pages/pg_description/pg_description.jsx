import { useLocation } from 'react-router-dom';

function Pg_Description() {
  const location = useLocation();
  const { product } = location.state || {};

  const handleAddProductClick = () => {
    if (product?.id) {
      console.log(`El ID del producto es: ${product.id}`);
    } else {
      console.log("No se encontró ID para este producto.");
    }
  };

  return (
    <main className="desc">
      <div className="descCont1">
        <h1 className="descCont1_title">{product?.name || "Producto no definido"}</h1>
        <img className="descCont1_img" src={product?.img} alt={product?.name || "Imagen no disponible"} />
      </div>
      <div className="descCont2">
        <div className="descCont3">
          <h2 className="descCont3_price">{product?.price || "Precio no disponible"}</h2>
          <p className="descCont4_text">{product?.subname || "Descripción no disponible"}</p>
          <p className="descCont4_description">{product?.description || "Descripción no disponible"}</p>
        </div>
        <div className="descCont4">
          <button className="descCont3_btn" onClick={handleAddProductClick}>
            Agregar Producto
          </button>
        </div>
      </div>
    </main>
  );
}

export default Pg_Description;

