import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import Portofolio from "./pages/Portofolio";
import TentangSaya from "./pages/TentangSaya";
import ButtonScrollComponent from "./components/ButtonScrollComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ButtonScrollComponent />
      <ScrollTop />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/portofolio" Component={Portofolio} />
        <Route path="/tentangsaya" Component={TentangSaya} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
