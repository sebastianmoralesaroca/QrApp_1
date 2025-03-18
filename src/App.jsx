import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comp_Header from "./components/comp_header/comp_header";
import Comp_Nav from "./components/comp_nav/comp_nav";
import Pg_Home from "./pages/pg_home/pg_home";
import Pg_Category from "./pages/pg_category/pg_category";
import Pg_Category1 from "./pages/pg_category4/pg_category1";
import Pg_Category2 from "./pages/pg_category4/pg_category2";
import Pg_Category3 from "./pages/pg_category4/pg_category3";
import Pg_Category4 from "./pages/pg_category4/pg_category4";
import Pg_Description from "./pages/pg_description/pg_description"; 

function App() {
  return (
    <Router>
      <Comp_Header /> {/* Encabezado que siempre se muestra */}
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Pg_Home />} />
        <Route path="/category" element={<Pg_Category />} />
        <Route path="/category1" element={<Pg_Category1 />} />
        <Route path="/category2" element={<Pg_Category2 />} />
        <Route path="/category3" element={<Pg_Category3 />} />
        <Route path="/category4" element={<Pg_Category4 />} />
      </Routes>
      <Comp_Nav /> {/* Barra de navegación siempre visible */}
    </Router>
  );
}

export default App;
