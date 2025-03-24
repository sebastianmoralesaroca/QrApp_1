import { Outlet, useNavigate, useLocation, useMatch } from 'react-router-dom';
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import { Prod401, Prod402 } from '../../assets/ass_category4'; // Asegúrate de tener estos assets definidos
import { Cat4 } from '../../assets/ass_categories';

function Pg_Category4() {
  const navigate = useNavigate();
  const location = useLocation();
  const matchDescription = useMatch("/category4/descripcion");

  const handleProductClick = (product) => {
    navigate("descripcion", { state: { product } });
  };

  return (
    <>
      { !matchDescription && (
        <main className="catMain">
          <div className="catMain_cont1">
            <h2 className="catMain_title">{Cat4.name}</h2>
          </div>
          <div className="catMain_cont2">
            <Comp_ProdCard 
              img={Prod401.img} 
              name={Prod401.name} 
              subname={Prod401.subname} 
              price={Prod401.price} 
              link={Prod401.link} 
              click={() => handleProductClick(Prod401)}
            />
            <Comp_ProdCard 
              img={Prod402.img} 
              name={Prod402.name} 
              subname={Prod402.subname} 
              price={Prod402.price} 
              link={Prod402.link} 
              click={() => handleProductClick(Prod402)}
            />
          </div>
        </main>
      )}
      <Outlet />
    </>
  );
}

export default Pg_Category4;
