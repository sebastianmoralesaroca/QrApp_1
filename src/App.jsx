import { useState } from 'react'
/* Componets */
import Comp_Header from './components/comp_header/comp_header';
import Comp_Nav from './components/comp_nav/comp_nav';
import Comp_Menu from './components/comp_menu/comp_menu';
import Comp_Noti from './components/comp_noti/comp_noti';

/* Pages */
import Pg_Home from './pages/pg_home/pg_home';
import Pg_Category from './pages/pg_category/pg_category';
import Pg_Category1 from './pages/pg_category4/pg_category1';
import Pg_Category2 from './pages/pg_category4/pg_category2';
import Pg_Category3 from './pages/pg_category4/pg_category3';
import Pg_Category4 from './pages/pg_category4/pg_category4';
import Pg_Description from './pages/pg_description/pg_description';
import { Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Comp_Header />
      <Pg_Home />
      <Comp_Nav />
    </>
  )
}

export default App;
