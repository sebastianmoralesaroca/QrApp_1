import { useState } from 'react'
/* Componets */
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Menu from './components/menu/menu';

/* Pages */
import Home from './pages/home/home';
import Category from './pages/category/category';
import Category1 from './pages/category4/category1';
import Category2 from './pages/category4/category2';
import Category3 from './pages/category4/category3';
import Category4 from './pages/category4/category4';
import Description from './pages/description/description';


function App() {
  return (
    <>
      <Header />
      
      <Nav />
    </>
  )
}

export default App
