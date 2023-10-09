import { useState } from "react";
import { semuaProduk } from "../../data/index.js";

function Produk7() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    let value = 0;
    if (quantity <= value) {
      value = 1;
    } else {
      value = quantity;
    }
    setQuantity(value - 1);
  };

  return (
    <div className="container shadow view-produk">
      <div className="row">
        <div className="col">
          <h5 className="fw-bold mb-5">{semuaProduk[6].label}</h5>
          <img src={semuaProduk[6].image} alt="" />
        </div>
        <div className="col mt-5">
          <h2 className="fs-4 fw-bold mb-2">{semuaProduk[6].title}</h2>
          <div className="d-inline">
            <i className={semuaProduk[6].star1}></i>
            <i className={semuaProduk[6].star1}></i>
            <i className={semuaProduk[6].star1}></i>
            <i className={semuaProduk[6].star1}></i>
            <i className={semuaProduk[6].star5}></i>
            <span className="ms-2">{semuaProduk[6].rate}</span>
          </div>
          <div className="containerHarga">
            {semuaProduk[6].price}
            <div className="fs-5 d-flex desc mt-2">
              <i className={semuaProduk[6].diskon.icon}></i>
              <p className="ms-3">{semuaProduk[6].diskon.desc}</p>
            </div>
            <div className="fs-5 d-flex desc">
              <i className={semuaProduk[6].diskon.icon2}></i>
              <p className="ms-3">{semuaProduk[6].diskon.desc2}</p>
            </div>
            <div className="fs-5 d-flex desc">
              <i className={semuaProduk[6].diskon.icon3}></i>
              <p className="ms-3">{semuaProduk[6].diskon.desc3}</p>
            </div>
          </div>
          <p className="text-secondary fw-bold">Deskripsi Produk:</p>
          <p>{semuaProduk[6].desc}</p>
          <div className="d-flex align-items-center">
            <p className="fw-bold me-5 mt-3">Quantity :</p>
            <i
              className="fa fa-minus iconQuantityOption border border-secondary text-dark"
              onClick={decrement}
            ></i>
            <i className="px-3 border-top border-bottom border-secondary text-dark">
              {quantity}
            </i>

            <i
              className="fa fa-plus iconQuantityOption border border-secondary text-dark"
              onClick={increment}
            ></i>
          </div>
          <div className="fw-bold d-flex mt-2 ukuran">
            Ukuran:
            <p className="px-4 border ms-2">S</p>
            <p className="px-4 border">M</p>
            <p className="px-4 border">L</p>
            <p className="px-4 border">XL</p>
          </div>

          <div className="mt-2 text-center">
            <button className="keranjang">
              <i
                className="fa fa-cart-arrow-down text-dark"
                aria-hidden="true"
              ></i>
              <span>Masukan Keranjang</span>
            </button>
            <button className="belanja">Belanja Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produk7;
