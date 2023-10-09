import { Container, Row, Col } from "react-bootstrap";
import { semuaProduk } from "../data/index.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function KelasPage() {
  let navigate = useNavigate();
  async function handleProduk() {
    navigate("/testimonial");
  }
  //memanggil data
  useEffect(() => {
    setData(semuaProduk);
  }, []);
  //start filtering
  const [data, setData] = useState(semuaProduk);
  const filterResult = (catItem) => {
    const result = semuaProduk.filter((curData) => {
      return curData.kategori === catItem;
    });
    setData(result);
  };
  //end filtering
  return (
    <div>
      <div className="semuakelas">
        <div className="navigasimarket text-center">
          {/* button filter dengan kategori */}
          <div className="mt-3">
            <button
              onClick={() => setData(semuaProduk)}
              className="me-3 nav-link d-inline text-start"
            >
              All
            </button>
            <button
              onClick={() => filterResult("pria")}
              className="me-3 nav-link d-inline text-start"
            >
              Pria
            </button>
            <button
              onClick={() => filterResult("wanita")}
              className="me-3 nav-link d-inline text-start"
            >
              Wanita
            </button>
          </div>
          {/* button filter dengan kategori */}
        </div>
        <Container>
          <Row>
            {data.map((produk) => {
              return (
                <Col key={produk.id} className="image-container mt-lg-2 mt-0">
                  <img
                    src={produk.image}
                    alt="pexel.com"
                    className="mb-3"
                    onClick={() => navigate(`/${produk.link}`)}
                  />
                  <div className="star mb-2 px-3">
                    <i className={produk.star1}></i>
                    <i className={produk.star2}></i>
                    <i className={produk.star3}></i>
                    <i className={produk.star4}></i>
                    <i className={produk.star5}></i>
                    <i className="ms-2">{produk.rate}</i>
                  </div>
                  <p className="mb-5 px-3 mt-3 fs-5">{produk.title}</p>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="fw-bold text-primary">{produk.price}</p>
                    <button onClick={() => navigate("/")}>
                      <i
                        className="fa fa-cart-arrow-down text-dark me-2"
                        aria-hidden="true"
                      ></i>
                      {produk.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default KelasPage;
