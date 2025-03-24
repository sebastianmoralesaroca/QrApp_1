import { Outlet, useNavigate, useLocation, useMatch } from 'react-router-dom';
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import { Prod201, Prod202 } from '../../assets/ass_category2';
import { Cat2 } from '../../assets/ass_categories';

function Pg_Category2() {
  const navigate = useNavigate();
  const location = useLocation();
  const matchDescription = useMatch("/category2/descripcion");

  const handleProductClick = (product) => {
    navigate("descripcion", { state: { product } });
  };

  return (
    <>
      {/* Si NO estamos en /category2/descripcion, mostramos el listado de productos */}
      {!matchDescription && (
        <main className="catMain">
          <div className="catMain_cont1">
            <h2 className="catMain_title">{Cat2.name}</h2>
          </div>
          <div className="catMain_cont2">
            <Comp_ProdCard 
              img={Prod201.img} 
              name={Prod201.name} 
              subname={Prod201.subname} 
              price={Prod201.price} 
              link={Prod201.link} 
              click={() => handleProductClick(Prod201)}
            />
            <Comp_ProdCard 
              img={Prod202.img} 
              name={Prod202.name} 
              subname={Prod202.subname} 
              price={Prod202.price} 
              link={Prod202.link} 
              click={() => handleProductClick(Prod202)}
            />
          </div>
        </main>
      )}
      <Outlet />
    </>
  );
}

export default Pg_Category2;
