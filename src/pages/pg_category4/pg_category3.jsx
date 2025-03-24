import { Outlet, useNavigate, useLocation, useMatch } from 'react-router-dom';
import Comp_ProdCard from '../../components/comp_prodCard/comp_prodCard';
import { Prod301, Prod302 } from '../../assets/ass_category3'; // Asegúrate de tener estos assets definidos
import { Cat3 } from '../../assets/ass_categories';

function Pg_Category3() {
  const navigate = useNavigate();
  const location = useLocation();
  const matchDescription = useMatch("/category3/descripcion");

  const handleProductClick = (product) => {
    navigate("descripcion", { state: { product } });
  };

  return (
    <>
      { !matchDescription && (
        <main className="catMain">
          <div className="catMain_cont1">
            <h2 className="catMain_title">{Cat3.name}</h2>
          </div>
          <div className="catMain_cont2">
            <Comp_ProdCard 
              img={Prod301.img} 
              name={Prod301.name} 
              subname={Prod301.subname} 
              price={Prod301.price} 
              link={Prod301.link} 
              click={() => handleProductClick(Prod301)}
            />
            <Comp_ProdCard 
              img={Prod302.img} 
              name={Prod302.name} 
              subname={Prod302.subname} 
              price={Prod302.price} 
              link={Prod302.link} 
              click={() => handleProductClick(Prod302)}
            />
          </div>
        </main>
      )}
      <Outlet />
    </>
  );
}

export default Pg_Category3;
