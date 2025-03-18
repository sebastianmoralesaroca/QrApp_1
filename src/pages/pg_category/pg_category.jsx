import Comp_CateCard from '../../components/comp_cateCard/comp_cateCard';
import { Cat1, Cat2, Cat3, Cat4 } from '../../assets/ass_categories';

function Pg_Category() {
  return (
    <main className="categoryMain">
      <Comp_CateCard name={Cat1.name} subname={Cat1.subname} img={Cat1.img} link="/category1" />
      <Comp_CateCard name={Cat2.name} subname={Cat2.subname} img={Cat2.img} link="/category2" />
      <Comp_CateCard name={Cat3.name} subname={Cat3.subname} img={Cat3.img} link="/category3" />
      <Comp_CateCard name={Cat4.name} subname={Cat4.subname} img={Cat4.img} link="/category4" />
    </main>
  );
}

export default Pg_Category;
