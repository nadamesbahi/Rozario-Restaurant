import Footer from "./MesComposants/Footer";
import NavbarAbout from "./MesComposants/NavbarAbout";
import Panier from "./MesComposants/Panier";
import { Route, Routes } from "react-router-dom";
import FinalisationCmd from "./MesComposants/FinalisationCmd";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<NavbarAbout/>}/>
      <Route path="/panier" element={<Panier/>}/>
      <Route path="/finaliserC" element={<FinalisationCmd/>}/>
    </Routes>
      <Footer/> 
      

    </div>
  );
}

export default App;
