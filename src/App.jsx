import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Comp_Header from "./components/comp_header/comp_header";
import Comp_Nav from "./components/comp_nav/comp_nav";
import Pg_Home from "./pages/pg_home/pg_home";
import Pg_Category from "./pages/pg_category/pg_category";
import Pg_Category1 from "./pages/pg_category4/pg_category1";
import Pg_Category2 from "./pages/pg_category4/pg_category2";
import Pg_Category3 from "./pages/pg_category4/pg_category3";
import Pg_Category4 from "./pages/pg_category4/pg_category4";
import Pg_Description from "./pages/pg_description/pg_Description";
import Comp_Noti from "./components/comp_noti/comp_noti";

function App() {

  return (
    <Router>
      <Comp_Header />
      <Routes>
        <Route path="/" element={<Pg_Home />} />
        <Route path="/category" element={<Pg_Category />} />
        <Route path="/category1" element={<Pg_Category1 />}>
          <Route path="descripcion" element={<Pg_Description  />} /> 
        </Route>
        <Route path="/category2" element={<Pg_Category2 />}>
          <Route path="descripcion" element={<Pg_Description  />} /> 
        </Route>
        <Route path="/category3" element={<Pg_Category3 />}>
          <Route path="descripcion" element={<Pg_Description  />} /> 
        </Route>
        <Route path="/category4" element={<Pg_Category4 />}>
          <Route path="descripcion" element={<Pg_Description  />} /> 
        </Route>
      </Routes>
      <Comp_Nav />
    </Router>

  );
}

export default App;
