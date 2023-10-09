import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimoniPage from "./pages/TestimoniPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import NavBarComponents from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./components/ScrollToTop";
import Produk1 from "./pages/produk/Produk1";
import Produk2 from "./pages/produk/Produk2";
import Produk3 from "./pages/produk/Produk3";
import Produk4 from "./pages/produk/Produk4";
import Produk5 from "./pages/produk/Produk5";
import Produk6 from "./pages/produk/Produk6";
import Produk7 from "./pages/produk/Produk7";
import Produk8 from "./pages/produk/Produk8";
import Produk9 from "./pages/produk/Produk9";

function App() {
  return (
    <div>
      <NavBarComponents />
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/market" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimoniPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
        <Route path="/produk1" Component={Produk1} />
        <Route path="/produk2" Component={Produk2} />
        <Route path="/produk3" Component={Produk3} />
        <Route path="/produk4" Component={Produk4} />
        <Route path="/produk5" Component={Produk5} />
        <Route path="/produk6" Component={Produk6} />
        <Route path="/produk7" Component={Produk7} />
        <Route path="/produk8" Component={Produk8} />
        <Route path="/produk9" Component={Produk9} />
      </Routes>
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
