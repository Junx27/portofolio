import hero from "../assets/img/hero.png";
import { Container, Row, Col } from "react-bootstrap";
import { produkTerbaru } from "../data/index.js";
function HomePage() {
  return (
    <div className="homepage">
      <header className="w-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" className="">
              <h1>
                Temukan inspirasi <br />
                <span>Di setiap harimu</span>
                <br />
                Bersama kami
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing. <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet, inventore.
              </p>

              <div className="mt-4">
                <button className="btn btn-warning rounded me-2">
                  Lihat Toko
                </button>
                <button className="btn btn-outline-warning rounded">
                  Lihat Promo
                </button>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={hero} alt="" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="fw-bold">Produk Terlaris</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                dolore.
              </p>
            </Col>
          </Row>
          <Row>
            {produkTerbaru.map((produk) => {
              return (
                <Col key={produk.id} className="image-container">
                  <img src={produk.image} alt="pexel.com" className="mb-3" />
                  <div className="star mb-2 px-3">
                    <i className={produk.star1}></i>
                    <i className={produk.star2}></i>
                    <i className={produk.star3}></i>
                    <i className={produk.star4}></i>
                    <i className={produk.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3 mt-3">{produk.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="fw-bold text-primary">{produk.price}</p>
                    <button>
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
      <h1>Test Deploy to vercel</h1>
    </div>
  );
}

export default HomePage;
