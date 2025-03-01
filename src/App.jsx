import { useState } from 'react'
/* Componets */
import Header from './components/header/header';
import Nav from './components/nav/nav';

/* Pages */
import Home from './pages/home/home';
import Item from './pages/item/item';
import Product from './pages/product/product';


function App() {
  return (
    <>
      <Header />
      <Item />
      <Nav />
    </>
  )
}

export default App
