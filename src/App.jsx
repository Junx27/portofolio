import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavbarComponent";
import Portofolio from "./pages/Portofolio";
import SosioalMedia from "./pages/SosioalMedia";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/portofolio" Component={Portofolio} />
        <Route path="/sosialmedia" Component={SosioalMedia} />
      </Routes>
    </div>
  );
}

export default App;
