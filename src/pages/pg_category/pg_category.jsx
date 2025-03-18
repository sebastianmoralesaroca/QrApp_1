import { useState } from 'react';
import Comp_CateCard from '../../components/comp_cateCard/comp_cateCard';
import { Cat1, Cat2, Cat3, Cat4 } from '../../assets/ass_categories';
import Pg_category1 from '../pg_category4/pg_category1';
import Pg_category2 from '../pg_category4/pg_category2';
import Pg_category3 from '../pg_category4/pg_category3';
import Pg_category4 from '../pg_category4/pg_category4';

function Pg_Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderSelectedCategory = () => {
    switch (selectedCategory) {
      case 'category1':
        return <Pg_category1 />;
      case 'category2':
        return <Pg_category2 />;
      case 'category3':
        return <Pg_category3 />;
      case 'category4':
        return <Pg_category4 />;
      default:
        return null;
    }
  };

  return (
    <>
      {selectedCategory ? (
        renderSelectedCategory()
      ) : (
        <main className="categoryMain">
          <Comp_CateCard name={Cat1.name} subname={Cat1.subname} img={Cat1.img} click={() => setSelectedCategory('category1')} />
          <Comp_CateCard name={Cat2.name} subname={Cat2.subname} img={Cat2.img} click={() => setSelectedCategory('category2')} />
          <Comp_CateCard name={Cat3.name} subname={Cat3.subname} img={Cat3.img} click={() => setSelectedCategory('category3')} />
          <Comp_CateCard name={Cat4.name} subname={Cat4.subname} img={Cat4.img} click={() => setSelectedCategory('category4')} />
        </main>
      )}
    </>
  );
}

export default Pg_Category;
