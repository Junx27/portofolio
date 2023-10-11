import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import Portofolio from "./pages/Portofolio";
import SosioalMedia from "./pages/SosioalMedia";
import ButtonScrollComponent from "./components/ButtonScrollComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ButtonScrollComponent />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/portofolio" Component={Portofolio} />
        <Route path="/sosialmedia" Component={SosioalMedia} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
